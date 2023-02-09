'use client'
import '@module-federation/nextjs-mf/src/include-defaults';

import AppLayout from './layout'
// import '#/styles/globals.css';
// import { AddressBar } from '#/ui/AddressBar';
// import { GlobalNav } from '#/ui/GlobalNav';
// import { VercelLogo } from '#/ui/VercelLogo';

import { demos } from '#/lib/demos';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <div className="space-y-10 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="text-sm text-gray-400 line-clamp-3 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <AppLayout>{page}</AppLayout>
  )
}
