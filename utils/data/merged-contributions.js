// Last independently verified on 2026-11-16. Used only if GitHub is unavailable.
// Source: merged pull requests authored by 0PeterAdel in external repositories.
export const verifiedMergedSnapshot = [
  { repo: 'PXDiv/Div-Acer-Manager-Max', number: 214, title: 'feat(predator): add PHN16-72 back logo/lightbar controls', mergedAt: '2026-11-16T17:07:06Z' },
  { repo: 'PXDiv/Div-Acer-Manager-Max', number: 280, title: 'fix(keyboard): preserve Static color readback and report apply failures', mergedAt: '2026-11-07T14:39:12Z' },
  { repo: 'PXDiv/Div-Linuwu-Sense', number: 20, title: 'feat(predator): add PHN16-72 back logo/lightbar support', mergedAt: '2026-11-16T08:34:34Z' },
  { repo: 'CrossGL/crosstl', number: 4424, title: 'fix(wgsl): write f32tof16 and f16tof32 with pack2x16float and unpack2x16float', mergedAt: '2026-11-13T01:15:41Z' },
  { repo: 'CrossGL/crosstl', number: 4375, title: 'fix(opencl): reject an unterminated comment after a parameter qualifier with SyntaxError', mergedAt: '2026-11-12T23:20:26Z' },
  { repo: 'CrossGL/crosstl', number: 4362, title: 'fix(wgsl): convert the signed operand of a mixed uint and int operation to u32', mergedAt: '2026-11-11T17:10:32Z' },
  { repo: 'CrossGL/crosstl', number: 4384, title: 'test(directx): compile native 16-bit HLSL with its own profile and flags in the test helper', mergedAt: '2026-11-11T13:42:59Z' },
  { repo: 'CrossGL/crosstl', number: 4266, title: 'fix: fix GLSL sample queries for multisample images', mergedAt: '2026-11-10T12:26:53Z' },
  { repo: 'alltheplaces/alltheplaces', number: 20473, title: '[Staples CA] Filter wireless service locations', mergedAt: '2026-11-12T09:13:46Z' },
  { repo: 'alltheplaces/alltheplaces', number: 20506, title: '[Krys] Fix hearing-aid centre categories', mergedAt: '2026-11-12T09:06:59Z' },
  { repo: 'alltheplaces/alltheplaces', number: 20474, title: "[McAlister's Deli] Exclude catering pages from store locations", mergedAt: '2026-11-11T14:15:06Z' },
  { repo: 'alltheplaces/alltheplaces', number: 20475, title: '[Punjab National Bank IN] Fix duplicate branches and ATMs', mergedAt: '2026-11-11T14:14:38Z' },
  { repo: 'alltheplaces/alltheplaces', number: 20456, title: '[Welcia JP] Fix spider download timeout', mergedAt: '2026-11-10T12:47:34Z' },
].map((pr) => ({
  ...pr,
  url: 'https://github.com/' + pr.repo + '/pull/' + pr.number,
}));
