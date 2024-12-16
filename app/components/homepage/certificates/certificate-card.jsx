// @flow strict
import { timeConverter } from '@/utils/time-converter'; // يمكنك تجاهل هذا إذا لم تكن بحاجة له
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) { // يمكنك تغيير اسم المعامل إلى Certificate
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt={blog.name} // استخدام اسم الشهادة كـ alt
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{blog.date}</p> {/* عرض تاريخ الشهادة */}
          {/* يمكنك تجاهل ردود الأفعال والتعليقات إذا لم تكن مطلوبة */}
        </div>
        <Link target='_blank' href={blog.link}> {/* تغيير الرابط إلى رابط الشهادة */}
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.name} {/* عرض اسم الشهادة */}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.from}`} {/* يمكنك تغيير هذا إلى مدة الشهادة إذا كانت مطلوبة */}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description} {/* عرض وصف الشهادة */}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
