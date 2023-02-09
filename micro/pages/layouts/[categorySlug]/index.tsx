import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';
import { ClickCounter } from '#/ui/ClickCounter';
import { TabGroup } from '#/ui/TabGroup';
import AppLayout from '#/pages/layout';
import Link from 'next/link';
import clsx from 'clsx';

export default function Layout({ children, params }: PageProps) {
  return (
    <div className="space-y-9">

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href='/layouts'
          key='/layouts'
          className={clsx('rounded-lg px-3 py-1 text-sm font-medium', {
            'bg-vercel-blue text-white': true,
          })}
        >
          <div className="font-medium text-gray-200 group-hover:text-gray-50">
            Home
          </div>
        </Link>
      </div>

      <div className="self-start">
        <ClickCounter />
      </div>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            Sub category
          </li>
        </ul>
      </div>
    </div>
  );
}

Layout.getLayout = function getLayout(page) {
  return (
    <AppLayout>{page}</AppLayout>
  )
}