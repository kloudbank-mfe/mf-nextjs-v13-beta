import { fetchCategories, getCategories } from '#/lib/getCategories';
import { ClickCounter } from '#/ui/ClickCounter';
import { TabGroup } from '#/ui/TabGroup';
import React from 'react';
import AppLayout from '#/pages/layout';
import Page from './page'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categories = await fetchCategories();
  const categories = getCategories();
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/layouts"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      {/* <div>{children}</div> */}
      <div><Page /></div>
    </div>
  );
}

Layout.getLayout = function getLayout(page) {
  return (
    <AppLayout>{page}</AppLayout>
  )
}
