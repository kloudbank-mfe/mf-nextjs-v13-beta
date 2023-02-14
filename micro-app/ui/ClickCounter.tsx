'use client'
// import '@module-federation/nextjs-mf/src/include-defaults';;

import React from 'react';

export function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      {count} Clicks
    </button>
  );
}
