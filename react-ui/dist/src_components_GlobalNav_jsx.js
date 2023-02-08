"use strict";
(self["webpackChunkreact_ui"] = self["webpackChunkreact_ui"] || []).push([["src_components_GlobalNav_jsx"],{

/***/ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MenuAlt2Icon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MenuAlt2Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/solid/esm/XIcon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@heroicons/react/solid/esm/XIcon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function XIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./src/components/GlobalNav.jsx":
/*!**************************************!*\
  !*** ./src/components/GlobalNav.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobalNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_demos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/demos */ "./src/lib/demos.js");
/* harmony import */ var _NextLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextLogo */ "./src/components/NextLogo.jsx");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/XIcon.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/MenuAlt2Icon.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");



// import Link from 'next/link'; // cannot useRef
// import { useSelectedLayoutSegment } from 'next/navigation';


// import { useState } from 'react';

function GlobalNav() {
  // cannot useState
  // const [isOpen, setIsOpen] = useState(false);
  // const close = () => setIsOpen(false);
  var isOpen = true;
  var setIsOpen = obj => {
    isOpen = obj;
  };
  var close = () => setIsOpen(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex h-14 items-center py-4 px-4 lg:h-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "/",
    className: "group flex w-full items-center gap-x-2.5",
    onClick: close
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NextLogo__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "font-semibold tracking-wide text-gray-400 group-hover:text-gray-50"
  }, "App Directory ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "Work in progress"
  }, "(WIP)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden",
    onClick: () => setIsOpen(!isOpen)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "font-medium text-gray-100 group-hover:text-gray-400"
  }, "Menu"), isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "block w-6 text-gray-400"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "block w-6 text-gray-400"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('overflow-y-auto lg:static lg:block', {
      'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
      hidden: !isOpen
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "space-y-6 px-2 py-5"
  }, _lib_demos__WEBPACK_IMPORTED_MODULE_1__["default"].map(section => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: section.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, section.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "space-y-1"
    }, section.items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GlobalNavItem, {
      key: item.slug,
      item: item,
      close: close
    }))));
  }))));
}
function GlobalNavItem({
  item,
  close
}) {
  // cannot useContext
  // const segment = useSelectedLayoutSegment();
  // const isActive = item.slug === segment;
  const isActive = false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    onClick: close,
    href: `/${item.slug}`,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])('block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300', {
      'text-gray-400 hover:bg-gray-800': !isActive,
      'text-white': isActive
    })
  }, item.name);
}

/***/ }),

/***/ "./src/components/NextLogo.jsx":
/*!*************************************!*\
  !*** ./src/components/NextLogo.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NextLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function NextLogo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 180 180",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
    id: "mask0_408_134",
    style: {
      maskType: 'alpha'
    },
    x: "0",
    y: "0",
    width: "180",
    height: "180"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "90",
    fill: "black"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    mask: "url(#mask0_408_134)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "90",
    fill: "black"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
    fill: "url(#paint0_linear_408_134)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: "115",
    y: "54",
    width: "12",
    height: "72",
    fill: "url(#paint1_linear_408_134)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "paint0_linear_408_134",
    x1: "109",
    y1: "116.5",
    x2: "144.5",
    y2: "160.5",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "1",
    stopColor: "white",
    stopOpacity: "0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "paint1_linear_408_134",
    x1: "121",
    y1: "54",
    x2: "120.799",
    y2: "106.875",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "white"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: "1",
    stopColor: "white",
    stopOpacity: "0"
  }))));
}

/***/ }),

/***/ "./src/lib/demos.js":
/*!**************************!*\
  !*** ./src/lib/demos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const demos = [{
  name: 'Layouts',
  items: [{
    name: 'Nested Layouts',
    slug: 'layouts',
    description: 'Create UI that is shared across routes'
  }, {
    name: 'Grouped Layouts',
    slug: 'route-groups',
    description: 'Organize routes without affecting URL paths'
  }, {
    name: 'Streaming with Suspense',
    slug: 'streaming',
    description: 'Streaming data fetching from the server with React Suspense'
  }]
}, {
  name: 'File Conventions',
  items: [{
    name: 'Loading',
    slug: 'loading',
    description: 'Create meaningful loading UI for specific parts of an app'
  }, {
    name: 'Error',
    slug: 'error-handling',
    description: 'Create error UI for specific parts of an app'
  }, {
    name: 'Head',
    slug: 'head',
    description: 'Configure the <head> tag of a route segment'
  }]
}, {
  name: 'Data Fetching',
  items: [{
    name: 'Static-Site Generation',
    slug: 'ssg',
    description: 'Generate static pages'
  }, {
    name: 'Server-Side Rendering',
    slug: 'ssr',
    description: 'Server-render pages'
  }, {
    name: 'Incremental Static Regeneration',
    slug: 'isr',
    description: 'Get the best of both worlds between static & dynamic'
  }]
}, {
  name: 'Components',
  items: [
  // TODO: Re-add this page once hooks have been updated.
  // {
  //   name: 'Hooks',
  //   slug: 'hooks',
  //   description:
  //     'Preview the hooks available for Client and Server Components',
  // },
  {
    name: 'Client Context',
    slug: 'context',
    description: 'Pass context between Client Components that cross Server/Client Component boundary'
  }]
}, {
  name: 'Styling',
  items: [{
    name: 'CSS and CSS-in-JS',
    slug: 'styling',
    description: 'Preview the supported styling solutions'
  }]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (demos);

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clsx": () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ })

}]);
//# sourceMappingURL=src_components_GlobalNav_jsx.js.map