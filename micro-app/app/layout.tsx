// @ts-nocheck
'use client';
import '@module-federation/nextjs-mf/src/include-defaults';  // 현시점엔 의미 없음
import { usePathname } from 'next/navigation';

import '#/styles/globals.css';
// import { AddressBar } from '#/ui/AddressBar';
// import { GlobalNav } from '#/ui/GlobalNav';
// import { VercelLogo } from '#/ui/VercelLogo';

import dynamic from 'next/dynamic';

const AddressBar = dynamic(() => import('ui/AddressBar'), {
  loading: () => <div>AddressBar dynamic loading...</div>,
  ssr: false,
});
const GlobalNav = dynamic(() => import('ui/GlobalNav'), {
  loading: () => <div>GlobalNav dynamic loading...</div>,
  ssr: false,
});
const VercelLogo = dynamic(() => import('ui/VercelLogo'), {
  loading: () => <div>VercelLogo dynamic loading...</div>,
  ssr: false,
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head>
        {/** 현시점엔 의미 없음, CRA 같은 프레임워크에서 import('bootstrap') 사용시
         * 메인 번들보다 먼저 임포트하게 하여 웹팩 모듈 로드 순서 변경하는 코드
         * */}
        {/* <script src="http://localhost:3030/_next/static/chunks/remoteEntry.js"></script> */}
        {/* <script src="http://localhost:3030/_next/static/chunks/node_modules_next_link_js.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/node_modules_next_dist_client_components_noop-head_js.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/node_modules_next_dist_compiled_react-dom_index_js.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/node_modules_next_dist_compiled_react_index_js.js"></script> */}
        {/* <script src="http://localhost:3030/_next/static/chunks/app-client-internals.js"></script> */}
        {/* <script src="http://localhost:3030/_next/static/chunks/ui_AddressBar_jsx.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/ui_GlobalNav_jsx.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/ui_VercelLogo_jsx.js"></script> */}
        {/* <script src="http://localhost:3030/_next/static/chunks/_app-client_ui_AddressBar_jsx.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/_app-client_ui_GlobalNav_jsx.js"></script>
        <script src="http://localhost:3030/_next/static/chunks/_app-client_ui_VercelLogo_jsx.js"></script> */}
      </head>
      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        {/* {next/dynamic import가 Suspense를 포함} */}
        {/* <Suspense fallback={<div>loading...</div>}> */}
        <GlobalNav />
        {/* </Suspense> */}

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar pathname={pathname} />
              </div>
            </div>
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <Byline />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-gray-400">By</div>
        <a href="https://vercel.com" title="Vercel">
          <div className="w-16 text-gray-100 hover:text-gray-50">
            <VercelLogo />
          </div>
        </a>
      </div>

      <div className="text-sm text-gray-400">
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://github.com/vercel/app-playground"
          target="_blank"
          rel="noreferrer"
        >
          View code
        </a>
        {' or '}
        <a
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://vercel.com/templates/next.js/app-directory"
          target="_blank"
          rel="noreferrer"
        >
          deploy your own
        </a>
      </div>
    </div>
  );
}
