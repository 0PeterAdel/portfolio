import { verifiedMergedSnapshot } from '@/utils/data/merged-contributions';

const GITHUB_USERNAME = '0PeterAdel';
const SEARCH_QUERY = 'is:pr is:merged is:public author:' + GITHUB_USERNAME + ' -user:' + GITHUB_USERNAME + ' -org:Shift-Core';
const SEARCH_URL = 'https://api.github.com/search/issues?q=' + encodeURIComponent(SEARCH_QUERY) + '&sort=updated&order=desc&per_page=100';
const ALL_MERGED_URL = 'https://github.com/pulls?q=' + encodeURIComponent('is:pr is:merged author:' + GITHUB_USERNAME);
const ALL_OPEN_URL = 'https://github.com/pulls?q=' + encodeURIComponent('is:pr is:open author:' + GITHUB_USERNAME);

const REPOSITORY_LABELS = {
  'CrossGL/crosstl': 'CrossTL',
  'alltheplaces/alltheplaces': 'AllThePlaces',
  'PXDiv/Div-Acer-Manager-Max': 'Div Acer Manager Max',
  'PXDiv/Div-Linuwu-Sense': 'Div Linuwu Sense',
};

function parseVerifiedSearchResult(item) {
  const match = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)$/.exec(item?.html_url || '');
  if (!match || !item?.pull_request) return null;

  const [, owner, name, number] = match;
  if (['0peteradel', 'shift-core'].includes(owner.toLowerCase())) return null;

  return {
    repo: owner + '/' + name,
    number: Number(number),
    title: item.title,
    url: item.html_url,
    // Search is scoped to GitHub's is:merged filter; closed_at reflects merge date.
    mergedAt: item.closed_at || item.updated_at,
  };
}

async function getMergedContributions() {
  try {
    const response = await fetch(SEARCH_URL, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error('GitHub returned ' + response.status);

    const result = await response.json();
    if (result.incomplete_results || result.total_count > 100 || !Array.isArray(result.items)) {
      throw new Error('Incomplete GitHub search results');
    }

    const seen = new Set();
    const contributions = result.items
      .map(parseVerifiedSearchResult)
      .filter((pr) => {
        if (!pr || seen.has(pr.url)) return false;
        seen.add(pr.url);
        return true;
      });
    if (!contributions.length) throw new Error('No verified merged contributions returned');

    return { contributions, live: true };
  } catch {
    // Avoid falsely showing empty contributions when GitHub is rate limited or offline.
    return { contributions: verifiedMergedSnapshot, live: false };
  }
}

function groupByRepository(contributions) {
  const groups = new Map();
  for (const pr of contributions) {
    if (!groups.has(pr.repo)) groups.set(pr.repo, []);
    groups.get(pr.repo).push(pr);
  }
  return [...groups.entries()]
    .map(([repo, prs]) => ({
      repo,
      label: REPOSITORY_LABELS[repo] || repo.split('/')[1].replaceAll('-', ' '),
      prs: prs.sort((a, b) => (b.mergedAt || '').localeCompare(a.mergedAt || '')),
    }))
    .sort((a, b) => (b.prs[0]?.mergedAt || '').localeCompare(a.prs[0]?.mergedAt || ''));
}

export default async function OpenSourceContributions() {
  const { contributions, live } = await getMergedContributions();
  const groups = groupByRepository(contributions);

  return (
    <section id="open-source" aria-labelledby="open-source-title" className="relative my-12 lg:my-24 scroll-mt-24">
      <div className="flex items-center justify-start relative mb-8">
        <h2 id="open-source-title" className="bg-[#1a1443] z-10 text-white px-5 py-3 text-xl rounded-md">
          OPEN SOURCE CONTRIBUTIONS
        </h2>
        <span className="h-[2px] flex-1 bg-[#1a1443]" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-7">
        <div>
          <p className="text-[#16f2b3] text-lg font-semibold">
            {contributions.length} merged pull requests across {groups.length} external projects
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Accepted upstream contributions, verified against GitHub. Personal and team repositories are excluded.
          </p>
        </div>
        <span className="text-xs text-gray-400">
          {live ? 'GitHub data · refreshed hourly' : 'Verified snapshot · 16 Nov 2026'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {groups.map(({ repo, label, prs }) => (
          <article key={repo} className="rounded-xl border border-[#25213b] bg-gradient-to-br from-[#101630] to-[#0a0d27] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
              <div>
                <a href={'https://github.com/' + repo} target="_blank" rel="noopener noreferrer" className="text-[#16f2b3] font-semibold hover:underline">
                  {label}
                </a>
                <p className="text-xs text-gray-400 mt-1 break-all">{repo}</p>
              </div>
              <span className="rounded-full border border-emerald-700/50 bg-emerald-950/30 px-3 py-1 text-xs text-emerald-300">
                {prs.length} merged {prs.length === 1 ? 'PR' : 'PRs'}
              </span>
            </div>
            <ul className="space-y-2">
              {prs.map((pr) => (
                <li key={pr.url}>
                  <a href={pr.url} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-lg border border-[#25213b] px-3 py-2.5 text-sm text-gray-200 hover:border-violet-500 hover:bg-[#181535] transition-colors">
                    <span className="text-pink-400 whitespace-nowrap font-medium">#{pr.number}</span>
                    <span className="break-words">{pr.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-6 text-sm">
        <a href={ALL_MERGED_URL} target="_blank" rel="noopener noreferrer" className="text-[#16f2b3] hover:underline">
          View all merged PRs on GitHub
        </a>
        <a href={ALL_OPEN_URL} target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:underline">
          View work currently in review
        </a>
      </div>
    </section>
  );
}
