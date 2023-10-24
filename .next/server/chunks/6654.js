exports.id = 6654;
exports.ids = [6654];
exports.modules = {

/***/ 79907:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 42116, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 55400, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 70369, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 98845, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 70077, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 71, 23))

/***/ }),

/***/ 17063:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23427, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24563))

/***/ }),

/***/ 76898:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95365))

/***/ }),

/***/ 24563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeIn: () => (/* binding */ FadeIn),
/* harmony export */   FadeInStagger: () => (/* binding */ FadeInStagger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84237);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45799);
/* __next_internal_client_entry_do_not_use__ FadeIn,FadeInStagger auto */ 


const FadeInStaggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const viewport = {
    once: true,
    margin: "0px 0px -200px"
};
function FadeIn(props) {
    let shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useReducedMotion */ .J)();
    let isInStaggerGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FadeInStaggerContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.5
        },
        ...isInStaggerGroup ? {} : {
            initial: "hidden",
            whileInView: "visible",
            viewport
        },
        ...props
    });
}
function FadeInStagger({ faster = false, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeInStaggerContext.Provider, {
        value: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewport,
            transition: {
                staggerChildren: faster ? 0.12 : 0.2
            },
            ...props
        })
    });
}


/***/ }),

/***/ 97203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPattern: () => (/* binding */ GridPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45799);
/* __next_internal_client_entry_do_not_use__ GridPattern auto */ 


function Block({ x, y, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.path, {
        transform: `translate(${-32 * y + 96 * x} ${160 * y})`,
        d: "M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",
        ...props
    });
}
function GridPattern({ yOffset = 0, interactive = false, ...props }) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let currentBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let counter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    let [hoveredBlocks, setHoveredBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let staticBlocks = [
        [
            1,
            1
        ],
        [
            2,
            2
        ],
        [
            4,
            3
        ],
        [
            6,
            2
        ],
        [
            7,
            4
        ],
        [
            5,
            5
        ]
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!interactive) {
            return;
        }
        function onMouseMove(event) {
            if (!ref.current) {
                return;
            }
            let rect = ref.current.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
                return;
            }
            x = x - rect.width / 2 - 32;
            y = y - yOffset;
            x += Math.tan(32 / 160) * y;
            x = Math.floor(x / 96);
            y = Math.floor(y / 160);
            if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) {
                return;
            }
            currentBlock.current = [
                x,
                y
            ];
            setHoveredBlocks((blocks)=>{
                let key = counter.current++;
                let block = [
                    x,
                    y,
                    key
                ];
                return [
                    ...blocks,
                    block
                ].filter((block)=>!(block[0] === x && block[1] === y && block[2] !== key));
            });
        }
        window.addEventListener("mousemove", onMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [
        yOffset,
        interactive
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ref: ref,
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${id})`,
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                x: "50%",
                y: yOffset,
                strokeWidth: "0",
                className: "overflow-visible",
                children: [
                    staticBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1]
                        }, `${block}`)),
                    hoveredBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1],
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1,
                                times: [
                                    0,
                                    0,
                                    1
                                ]
                            },
                            onAnimationComplete: ()=>{
                                setHoveredBlocks((blocks)=>blocks.filter((b)=>b[2] !== block[2]));
                            }
                        }, block[2]))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: id,
                    width: "96",
                    height: "480",
                    x: "50%",
                    patternUnits: "userSpaceOnUse",
                    patternTransform: `translate(0 ${yOffset})`,
                    fill: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 95365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RootLayout: () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.store/next@13.4.16/node_modules/next/link.js
var next_link = __webpack_require__(25705);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.store/next@13.4.16/node_modules/next/navigation.js
var navigation = __webpack_require__(26457);
// EXTERNAL MODULE: ./node_modules/.store/clsx@1.2.1/node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(55910);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/.store/framer-motion@10.16.4/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var use_reduced_motion = __webpack_require__(84237);
// EXTERNAL MODULE: ./node_modules/.store/framer-motion@10.16.4/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var MotionConfig = __webpack_require__(13368);
// EXTERNAL MODULE: ./node_modules/.store/framer-motion@10.16.4/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 164 modules
var motion = __webpack_require__(45799);
;// CONCATENATED MODULE: ./src/components/Button.jsx



function Button({ invert = false, className, children, ...props }) {
    className = clsx_default()(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "bg-white text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-white hover:bg-neutral-800");
    let inner = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "relative top-px",
        children: children
    });
    if (typeof props.href === "undefined") {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: className,
        ...props,
        children: inner
    });
}

;// CONCATENATED MODULE: ./src/components/Container.jsx


function Container({ as, className, children }) {
    let Component = as ?? "div";
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: clsx_default()("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-none",
            children: children
        })
    });
}

// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(24563);
;// CONCATENATED MODULE: ./src/components/Logo.jsx



function Logomark({ invert = false, filled = false, ...props }) {
    let id = (0,react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 32 32",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                clipPath: `url(#${id}-clip)`,
                className: clsx_default()("h-8 transition-all duration-300", invert ? "fill-white" : "fill-neutral-950", filled ? "w-8" : "w-0 group-hover/logo:w-8")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                href: `#${id}-path`,
                className: invert ? "stroke-white" : "stroke-neutral-950",
                fill: "none",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: `${id}-clip`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                        href: `#${id}-path`
                    })
                })
            })
        ]
    });
}
function Logo({ className, invert = false, filled = false, fillOnHover = false, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "214",
        height: "100",
        viewBox: "0 0 214 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                "clip-path": "url(#clip0_113_1452)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M20.334 61.6106C20.334 57.5163 23.6531 54.1973 27.7474 54.1973H39.1446C43.2389 54.1973 46.558 57.5163 46.558 61.6106V73.0076C46.558 77.1018 43.2389 80.4209 39.1446 80.4209H21.9456C21.0555 80.4209 20.334 79.6993 20.334 78.8093V61.6106Z",
                        fill: "#1C1D1F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M28.0664 73.4674V60.7969H30.7453V66.0247H36.1836V60.7969H38.8563V73.4674H36.1836V68.2334H30.7453V73.4674H28.0664Z",
                        fill: "#FEE9E5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M83.335 61.6106C83.335 57.5163 80.0159 54.1973 75.9216 54.1973H64.5244C60.4301 54.1973 57.111 57.5163 57.111 61.6106V73.0076C57.111 77.1018 60.4301 80.4209 64.5244 80.4209H81.7234C82.6134 80.4209 83.335 79.6993 83.335 78.8093V61.6106Z",
                        fill: "#1C1D1F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M76.1565 67.1325C76.1565 68.5143 75.8946 69.6898 75.3708 70.659C74.8511 71.6283 74.1416 72.3686 73.2425 72.8801C72.3474 73.3874 71.341 73.6411 70.2233 73.6411C69.0973 73.6411 68.0867 73.3853 67.1917 72.8739C66.2967 72.3625 65.5893 71.6221 65.0696 70.6528C64.5499 69.6836 64.29 68.5101 64.29 67.1325C64.29 65.7508 64.5499 64.5753 65.0696 63.6061C65.5893 62.6368 66.2967 61.8985 67.1917 61.3912C68.0867 60.8797 69.0973 60.624 70.2233 60.624C71.341 60.624 72.3474 60.8797 73.2425 61.3912C74.1416 61.8985 74.8511 62.6368 75.3708 63.6061C75.8946 64.5753 76.1565 65.7508 76.1565 67.1325ZM73.4404 67.1325C73.4404 66.2375 73.3064 65.4827 73.0383 64.8682C72.7743 64.2536 72.4011 63.7875 71.9185 63.47C71.4359 63.1524 70.8708 62.9936 70.2233 62.9936C69.5757 62.9936 69.0106 63.1524 68.5281 63.47C68.0455 63.7875 67.6701 64.2536 67.402 64.8682C67.1381 65.4827 67.0061 66.2375 67.0061 67.1325C67.0061 68.0276 67.1381 68.7824 67.402 69.3969C67.6701 70.0115 68.0455 70.4775 68.5281 70.7951C69.0106 71.1127 69.5757 71.2715 70.2233 71.2715C70.8708 71.2715 71.4359 71.1127 71.9185 70.7951C72.4011 70.4775 72.7743 70.0115 73.0383 69.3969C73.3064 68.7824 73.4404 68.0276 73.4404 67.1325Z",
                        fill: "#E1F0FF"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M93.8887 73.0076C93.8887 77.1018 97.2078 80.4209 101.302 80.4209H112.699C116.794 80.4209 120.113 77.1019 120.113 73.0076V61.6106C120.113 57.5163 116.794 54.1973 112.699 54.1973H95.5003C94.6102 54.1973 93.8887 54.9188 93.8887 55.8089V73.0076Z",
                        fill: "#1C1D1F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M109.574 60.7969H112.253V69.0253C112.253 69.9492 112.033 70.7576 111.591 71.4505C111.154 72.1435 110.542 72.6838 109.754 73.0715C108.966 73.4551 108.048 73.6469 107.001 73.6469C105.949 73.6469 105.029 73.4551 104.241 73.0715C103.454 72.6838 102.841 72.1435 102.404 71.4505C101.967 70.7576 101.748 69.9492 101.748 69.0253V60.7969H104.427V68.7964C104.427 69.279 104.532 69.7079 104.743 70.0833C104.957 70.4586 105.258 70.7535 105.646 70.968C106.033 71.1825 106.485 71.2897 107.001 71.2897C107.52 71.2897 107.972 71.1825 108.356 70.968C108.743 70.7535 109.042 70.4586 109.253 70.0833C109.467 69.7079 109.574 69.279 109.574 68.7964V60.7969Z",
                        fill: "#FFF1C5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M156.891 73.0076C156.891 77.1018 153.572 80.4209 149.477 80.4209H138.08C133.986 80.4209 130.667 77.1019 130.667 73.0076V61.6106C130.667 57.5163 133.986 54.1973 138.08 54.1973H155.279C156.169 54.1973 156.891 54.9188 156.891 55.8089V73.0076Z",
                        fill: "#1C1D1F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M146.049 64.4413C145.999 63.9422 145.787 63.5545 145.411 63.2782C145.036 63.0018 144.527 62.8636 143.883 62.8636C143.446 62.8636 143.077 62.9255 142.776 63.0493C142.475 63.1689 142.244 63.3359 142.083 63.5504C141.926 63.7649 141.848 64.0082 141.848 64.2804C141.839 64.5073 141.887 64.7053 141.99 64.8744C142.097 65.0435 142.244 65.1899 142.429 65.3136C142.615 65.4332 142.829 65.5384 143.073 65.6291C143.316 65.7158 143.576 65.79 143.852 65.8519L144.991 66.1241C145.543 66.2478 146.051 66.4128 146.513 66.619C146.975 66.8253 147.375 67.0789 147.713 67.38C148.051 67.6811 148.313 68.0358 148.499 68.4441C148.688 68.8525 148.785 69.3206 148.789 69.8485C148.785 70.624 148.587 71.2963 148.195 71.8654C147.808 72.4305 147.247 72.8698 146.513 73.1832C145.783 73.4926 144.902 73.6472 143.871 73.6472C142.848 73.6472 141.957 73.4905 141.198 73.177C140.443 72.8636 139.853 72.3996 139.429 71.785C139.008 71.1663 138.787 70.4012 138.767 69.4897H141.359C141.388 69.9145 141.509 70.2692 141.724 70.5538C141.943 70.8343 142.233 71.0467 142.596 71.1911C142.963 71.3313 143.378 71.4014 143.84 71.4014C144.294 71.4014 144.687 71.3354 145.022 71.2035C145.36 71.0715 145.622 70.8879 145.807 70.6528C145.993 70.4177 146.086 70.1476 146.086 69.8424C146.086 69.5578 146.001 69.3185 145.832 69.1247C145.667 68.9308 145.424 68.7659 145.102 68.6297C144.784 68.4936 144.395 68.3699 143.933 68.2585L142.553 67.9121C141.485 67.6522 140.641 67.246 140.023 66.6933C139.404 66.1406 139.097 65.3961 139.101 64.4598C139.097 63.6927 139.301 63.0224 139.713 62.4491C140.13 61.8758 140.701 61.4283 141.427 61.1066C142.153 60.7849 142.978 60.624 143.902 60.624C144.842 60.624 145.663 60.7849 146.364 61.1066C147.069 61.4283 147.618 61.8758 148.01 62.4491C148.402 63.0224 148.604 63.6865 148.616 64.4413H146.049Z",
                        fill: "#F5E4FF"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M167.443 61.6106C167.443 57.5163 170.762 54.1973 174.857 54.1973H186.254C190.348 54.1973 193.667 57.5163 193.667 61.6106V73.0076C193.667 77.1018 190.348 80.4209 186.254 80.4209H169.055C168.165 80.4209 167.443 79.6993 167.443 78.8093V61.6106Z",
                        fill: "#1C1D1F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M176.273 73.4674V60.7969H184.811V63.0056H178.952V66.0247H184.372V68.2334H178.952V71.2588H184.836V73.4674H176.273Z",
                        fill: "#E1FFEE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M61.5511 45.6788L66.9687 45.5231V43.4822L64.4876 42.8976V22.6914L58.596 22.8469V24.8883L61.0772 25.473V29.7918C60.2591 29.5401 59.4179 29.4142 58.5544 29.4142C55.9558 29.4142 53.95 30.1969 52.5801 31.7951L52.5795 31.7958C51.23 33.3817 50.5679 35.5014 50.5679 38.1281C50.5679 40.5181 51.0833 42.43 52.1427 43.8359L52.1434 43.8368C53.2258 45.26 54.8406 45.9578 56.9431 45.9578C58.614 45.9578 60.0882 45.3894 61.3574 44.2625L61.5511 45.6788ZM54.1209 37.8429C54.1209 39.5291 54.4118 40.835 54.9705 41.7819C55.5212 42.6903 56.3601 43.1463 57.5277 43.1463C58.2328 43.1463 58.8409 42.993 59.3596 42.694L59.3612 42.6931C59.9141 42.3798 60.3361 42.0449 60.6361 41.6921L60.6383 41.6894C60.8035 41.5006 60.924 41.3558 61.0021 41.2532C61.0382 41.2057 61.0624 41.171 61.0772 41.1474V32.7325L61.0733 32.7308C61.005 32.7022 60.9131 32.667 60.7962 32.6249L60.7906 32.6229L60.785 32.6205C60.5808 32.5354 60.2586 32.4488 59.8071 32.3642C59.3694 32.2821 58.8527 32.24 58.255 32.24C56.8553 32.24 55.8409 32.7036 55.1667 33.604C54.4826 34.5177 54.1209 35.9174 54.1209 37.8429ZM73.9063 26.8134L73.9085 26.8112C74.3547 26.3868 74.5689 25.8195 74.5689 25.1374C74.5689 24.42 74.4036 23.8365 74.0301 23.4321C73.6532 23.024 73.1037 22.8404 72.4288 22.8404C71.8431 22.8404 71.3351 23.0454 70.9184 23.4514C70.4894 23.8694 70.2887 24.4426 70.2887 25.1374C70.2887 25.8186 70.4726 26.3841 70.8688 26.8022C71.2647 27.2202 71.794 27.4202 72.4288 27.4202C72.9811 27.4202 73.4761 27.212 73.9063 26.8134ZM70.8733 42.9079L68.3921 43.6352V45.6725H76.4654V43.642L74.2837 42.9148V29.7071L68.3921 29.8625V31.8898L70.8733 32.4744V42.9079ZM91.8943 43.2151L90.6807 41.4283L90.476 41.585C90.4427 41.6105 90.4142 41.6328 90.3876 41.6537C90.2563 41.7564 90.171 41.8232 89.7872 42.0536C89.3315 42.3176 88.7456 42.5676 88.0249 42.8016C87.3197 43.0306 86.5516 43.1462 85.7188 43.1462C84.5251 43.1462 83.5733 42.7019 82.8416 41.8097C82.1454 40.9518 81.7681 39.8123 81.7304 38.3702L91.7651 38.3134L91.804 38.1187C91.8252 38.0128 91.8548 37.7987 91.8926 37.4871C91.9318 37.1637 91.9514 36.8402 91.9514 36.5167C91.9514 34.1991 91.434 32.4155 90.3565 31.2101C89.2743 29.9996 87.6651 29.4141 85.5762 29.4141C84.1441 29.4141 82.8567 29.7827 81.7214 30.5232L81.7206 30.5237C80.5979 31.2623 79.7236 32.276 79.0974 33.5578L79.0967 33.5591C78.4802 34.841 78.1743 36.2704 78.1743 37.8428C78.1743 40.3516 78.7727 42.3444 80.0004 43.7899L80.001 43.7907C81.2472 45.2462 83.0676 45.9577 85.4193 45.9577C86.4837 45.9577 87.4924 45.777 88.4436 45.4141L88.4449 45.4137C89.3887 45.0477 90.1859 44.6452 90.8326 44.2042L90.8332 44.2038C91.1524 43.9847 91.3944 43.8138 91.5576 43.692C91.6386 43.6316 91.7039 43.5804 91.7505 43.5401C91.7731 43.5206 91.7966 43.4989 91.8164 43.4771C91.8259 43.4666 91.8399 43.4502 91.8529 43.4296L91.8532 43.4292C91.8611 43.4167 91.8943 43.3642 91.8943 43.29V43.2151ZM87.6419 33.1885L87.644 33.1914C88.0865 33.8224 88.3331 34.6491 88.366 35.6884H81.8682C81.9921 34.7103 82.3411 33.8974 82.9084 33.2395C83.5217 32.5392 84.3494 32.1829 85.4193 32.1829C86.4729 32.1829 87.1946 32.53 87.6419 33.1885ZM22.9616 42.8974L20.4805 43.4821V45.6725H28.9958V43.4821L26.5146 42.8974V27.512L28.9958 26.9273V24.7321L20.4805 24.8985V26.9273L22.9616 27.512V42.8974ZM46.6771 34.9194C46.6771 33.2293 46.2789 31.8782 45.4507 30.8983C43.1081 28.4089 39.3461 29.3409 36.511 31.5575L36.2813 29.707L31.0036 29.8632V31.8896L33.4847 32.4743V42.9078L31.0036 43.635V45.6724H38.7916V43.65L36.8951 42.9227V34.5491C36.9158 34.5245 36.9457 34.491 36.9862 34.4478C37.087 34.3401 37.2408 34.1851 37.4492 33.9814C37.8496 33.5901 38.3498 33.222 38.953 32.8785C39.5427 32.5481 40.1857 32.3824 40.8866 32.3824C41.7795 32.3824 42.3649 32.6189 42.7095 33.0355C43.0652 33.4658 43.2667 34.1722 43.2667 35.2046V42.9227L41.3702 43.65V45.6724H48.8589V43.6419L46.6771 42.9107V34.9194Z",
                        fill: "#1C1D1F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M156.523 29.8626V31.8766L157.711 32.2512L155.744 35.5469H153.645V22.6924L147.753 22.8478V24.8893L150.234 25.474V42.909L147.753 43.6362V45.6736H155.541V43.6512L153.645 42.9239V38.2301H155.797L159.975 45.6736H164.311V43.6427L162.001 42.8778L158.365 36.5282L161.227 32.2824L163.427 31.9031V29.7092L156.523 29.8626ZM177.27 41.7277C177.157 41.8044 176.984 41.913 176.748 42.0545C176.293 42.3185 175.707 42.5686 174.986 42.8026C174.281 43.0315 173.513 43.1472 172.68 43.1472C171.486 43.1472 170.535 42.7029 169.803 41.8108C169.107 40.9529 168.729 39.8134 168.692 38.3712L178.726 38.3144L178.765 38.1197C178.786 38.0138 178.816 37.7997 178.854 37.4881C178.893 37.1647 178.912 36.8412 178.912 36.5176C178.912 34.2001 178.395 32.4164 177.318 31.2111C176.235 30.0006 174.626 29.4151 172.537 29.4151C171.105 29.4151 169.818 29.7837 168.682 30.5242L168.682 30.5247C167.559 31.2633 166.685 32.277 166.058 33.5588L166.058 33.5601C165.441 34.842 165.135 36.2714 165.135 37.8438C165.135 40.3525 165.734 42.3454 166.962 43.7909L166.962 43.7916C168.208 45.2471 170.029 45.9587 172.38 45.9587C173.445 45.9587 174.453 45.778 175.405 45.4151L175.406 45.4146C176.35 45.0487 177.147 44.6462 177.794 44.2052L177.794 44.2048C178.113 43.9857 178.355 43.8147 178.519 43.693C178.6 43.6325 178.665 43.5814 178.712 43.5411C178.734 43.5215 178.758 43.4999 178.777 43.4781C178.787 43.4675 178.801 43.4512 178.814 43.4306C178.822 43.4187 178.855 43.3659 178.855 43.291V43.2161L177.641 41.4294C177.641 41.4294 177.421 41.6224 177.342 41.6774C177.323 41.6913 177.299 41.708 177.27 41.7277ZM174.603 33.1895L174.605 33.1924C175.048 33.8233 175.294 34.6501 175.327 35.6894H168.829C168.953 34.7112 169.302 33.8984 169.87 33.2405C170.483 32.5402 171.311 32.1839 172.38 32.1839C173.434 32.1839 174.156 32.531 174.603 33.1895ZM146.217 30.6068C146.085 30.546 145.783 30.4245 145.321 30.2452C144.839 30.0487 144.222 29.865 143.476 29.6926C142.715 29.5075 141.936 29.4151 141.138 29.4151C139.57 29.4151 138.19 29.766 137.006 30.4762C135.825 31.1752 134.91 32.1556 134.262 33.4115L134.262 33.4128C133.624 34.6684 133.308 36.095 133.308 37.6869C133.308 40.2635 133.941 42.3011 135.238 43.7661C136.541 45.2385 138.426 45.9587 140.853 45.9587C141.833 45.9587 142.772 45.7821 143.666 45.4283L143.667 45.4278C144.553 45.0715 145.306 44.6837 145.923 44.2628C146.228 44.0581 146.459 43.8979 146.615 43.7832C146.693 43.7263 146.756 43.6776 146.801 43.6388C146.823 43.62 146.846 43.5987 146.866 43.5768C146.875 43.5662 146.89 43.5496 146.903 43.5287C146.911 43.5153 146.943 43.4637 146.943 43.3908V43.3247L145.731 41.2537L145.508 41.4571C145.482 41.4809 145.459 41.502 145.439 41.5212C145.305 41.6451 145.251 41.6945 144.891 41.9506C144.483 42.2312 143.951 42.5034 143.287 42.7649C142.644 43.0185 141.929 43.1472 141.138 43.1472C139.788 43.1472 138.755 42.6669 138.007 41.715C137.255 40.7477 136.861 39.3219 136.861 37.4017C136.861 35.6337 137.236 34.3502 137.945 33.5089C138.65 32.671 139.655 32.2409 140.995 32.2409C141.594 32.2409 142.138 32.2783 142.627 32.3523C142.991 32.4071 143.248 32.4508 143.407 32.4832L143.857 35.0073H146.192L146.364 30.6751L146.217 30.6068ZM125.993 34.4785V36.5735H123.898C121.72 36.5735 120.01 36.9274 118.796 37.6636C117.547 38.4109 116.938 39.6556 116.938 41.3374C116.938 42.7713 117.337 43.9192 118.165 44.7466L118.166 44.7477C118.993 45.5647 120.135 45.9587 121.56 45.9587C122.524 45.9587 123.434 45.7196 124.288 45.2434L124.289 45.2429C125.009 44.837 125.657 44.3701 126.232 43.842L126.784 45.6793L131.742 45.5234V43.4858L129.403 42.9011V34.1933C129.403 32.5333 128.929 31.2866 127.925 30.5206C126.952 29.7711 125.55 29.4151 123.755 29.4151C122.995 29.4151 122.189 29.5077 121.338 29.6913C120.497 29.8633 119.763 30.0455 119.136 30.2383C118.531 30.4179 118.142 30.5393 117.98 30.5999L117.816 30.6617L117.974 34.7221H120.307L120.73 32.4737C120.805 32.4528 120.906 32.4249 121.037 32.3897C121.282 32.3262 121.619 32.2613 122.052 32.1954C122.476 32.131 122.943 32.0983 123.456 32.0983C124.321 32.0983 124.942 32.3121 125.357 32.7024C125.769 33.09 125.993 33.6682 125.993 34.4785ZM96.0622 42.8984L93.5811 43.483V45.6735H102.396V43.4782L99.6152 42.8935V36.3334H108.91V42.8938L106.144 43.4784V45.6735H114.944V43.483L112.463 42.8984V27.5129L114.944 26.9283V24.7332L106.144 24.8993V26.9329L108.91 27.5176V33.5076H99.6152V27.5178L102.396 26.9331V24.7332L93.5811 24.8993V26.9283L96.0622 27.5129V42.8984ZM121.218 39.5047C121.785 39.153 122.763 38.9572 124.198 38.9572H125.993V40.9821C125.973 41.0067 125.943 41.0403 125.904 41.0838C125.805 41.1915 125.655 41.3465 125.451 41.5502C125.058 41.943 124.58 42.3116 124.014 42.6549C123.47 42.9847 122.901 43.1472 122.301 43.1472C121.687 43.1472 121.234 42.9651 120.909 42.6239C120.58 42.2789 120.406 41.8114 120.406 41.1948C120.406 40.385 120.686 39.8406 121.218 39.5047ZM188.044 30.2248C187.435 30.633 186.889 31.0729 186.407 31.545L186.185 29.706L180.906 29.8622V31.8887L183.388 32.4733V42.8988L180.906 43.6341V45.6715H189.721V43.6261L186.798 42.8988V34.5022C187.219 33.9631 187.757 33.4752 188.414 33.0397C189.024 32.6357 189.747 32.4149 190.589 32.385L191.016 34.5774H193.364L193.52 29.9251L193.348 29.8676C193.283 29.8459 193.124 29.8014 192.882 29.7362L191.9 29.5164C191.505 29.4473 191.087 29.4131 190.647 29.4131C189.712 29.4131 188.843 29.6853 188.044 30.2248Z",
                        fill: "#1C1D1F"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_113_1452",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "213.333",
                        height: "100",
                        fill: "white",
                        transform: "translate(0.333008)"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/SocialMedia.jsx



function FacebookIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
        })
    });
}
function InstagramIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
        })
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8.29 20.253c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.392 4.75a4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.715v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 2 18.41a11.616 11.616 0 0 0 6.29 1.84"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        })
    });
}
function DribbbleIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"
        })
    });
}
const socialMediaProfiles = [
    {
        title: "Facebook",
        href: "https://facebook.com",
        icon: FacebookIcon
    },
    {
        title: "Instagram",
        href: "https://instagram.com",
        icon: InstagramIcon
    },
    {
        title: "Twitter",
        href: "https://twitter.com",
        icon: TwitterIcon
    },
    {
        title: "GitHub",
        href: "https://github.com",
        icon: GitHubIcon
    },
    {
        title: "Dribbble",
        href: "https://dribbble.com",
        icon: DribbbleIcon
    }
];
function SocialMedia({ className, invert = false }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        role: "list",
        className: clsx_default()("flex gap-x-10", invert ? "text-white" : "text-neutral-950", className),
        children: socialMediaProfiles.map((socialMediaProfile)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: socialMediaProfile.href,
                    "aria-label": socialMediaProfile.title,
                    className: clsx_default()("transition", invert ? "hover:text-neutral-200" : "hover:text-neutral-700"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(socialMediaProfile.icon, {
                        className: "h-6 w-6 fill-current"
                    })
                })
            }, socialMediaProfile.title))
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.jsx






const Footer_navigation = [
    {
        title: "Work",
        links: [
            {
                title: "FamilyFund",
                href: "/work/family-fund"
            },
            {
                title: "Unseal",
                href: "/work/unseal"
            },
            {
                title: "Phobia",
                href: "/work/phobia"
            },
            {
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "See all ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-hidden": "true",
                            children: "→"
                        })
                    ]
                }),
                href: "/work"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Process",
                href: "/process"
            },
            {
                title: "Blog",
                href: "/blog"
            },
            {
                title: "Contact us",
                href: "/contact"
            }
        ]
    },
    {
        title: "Connect",
        links: socialMediaProfiles
    }
];
function Navigation() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            role: "list",
            className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
            children: Footer_navigation.map((section, sectionIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                            children: section.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            role: "list",
                            className: "mt-4 text-sm text-neutral-700",
                            children: section.links.map((link, linkIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: link.href,
                                        className: "transition hover:text-neutral-950",
                                        children: link.title
                                    })
                                }, linkIndex))
                        })
                    ]
                }, sectionIndex))
        })
    });
}
function ArrowIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 3 10 .5v2H0v1h10v2L16 3Z"
        })
    });
}
function NewsletterForm() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "max-w-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                children: "Sign up for our newsletter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-4 text-sm text-neutral-700",
                children: "Subscribe to get the latest design news, articles, resources and inspiration."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative mt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        autoComplete: "email",
                        "aria-label": "Email address",
                        className: "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-y-1 right-1 flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            "aria-label": "Submit",
                            className: "flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                className: "w-4"
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        as: "footer",
        className: "mt-24 w-full sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn.FadeIn, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex lg:justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterForm, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                className: "h-8",
                                fillOnHover: true
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-neutral-700",
                            children: [
                                "\xa9 Studio Agency Inc. ",
                                new Date().getFullYear()
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/GridPattern.jsx
var GridPattern = __webpack_require__(97203);
;// CONCATENATED MODULE: ./src/components/Offices.jsx


function Office({ name, children, invert = false }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
        className: clsx_default()("text-sm not-italic", invert ? "text-neutral-300" : "text-neutral-600"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                className: invert ? "text-white" : "text-neutral-950",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            children
        ]
    });
}
function Offices({ invert = false, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        role: "list",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Office, {
                    name: "Indie Hacker House 第一站",
                    invert: invert,
                    children: [
                        "雪庐艺术公寓",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "云南省大理白族自治州大理市大理欣怡缶庐客栈西南100米(小邑庄线公路南)"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/RootLayout.jsx
/* __next_internal_client_entry_do_not_use__ RootLayout auto */ 












const RootLayoutContext = /*#__PURE__*/ (0,react_.createContext)(null);
function XIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"
            })
        ]
    });
}
function MenuIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M2 6h20v2H2zM2 16h20v2H2z"
        })
    });
}
function Header({ panelId, icon: Icon, expanded, onToggle, toggleRef, invert = false }) {
    let { logoHovered, setLogoHovered } = (0,react_.useContext)(RootLayoutContext);
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    "aria-label": "Home",
                    onMouseEnter: ()=>setLogoHovered(true),
                    onMouseLeave: ()=>setLogoHovered(false),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logomark, {
                            className: "h-8 sm:hidden",
                            invert: invert,
                            filled: logoHovered
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                            className: "hidden h-8 sm:block",
                            invert: invert,
                            filled: logoHovered
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-x-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            href: "https://www.notion.so/indiehackerhouse/Indie-Hacker-House-dd350509871b4cbeb6246424f497df28?pvs=4",
                            target: "_blank",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            ref: toggleRef,
                            type: "button",
                            onClick: onToggle,
                            "aria-expanded": expanded ? "true" : "false",
                            "aria-controls": panelId,
                            className: clsx_default()("group -m-2.5 rounded-full p-2.5 transition", invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"),
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                className: clsx_default()("h-6 w-6", invert ? "fill-white group-hover:fill-neutral-200" : "fill-neutral-950 group-hover:fill-neutral-700")
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function NavigationRow({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "even:mt-px sm:bg-neutral-950",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2",
                children: children
            })
        })
    });
}
function NavigationItem({ href, children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"
            })
        ]
    });
}
function RootLayout_Navigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "mt-px font-display text-5xl font-medium tracking-tight text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/work",
                        children: "Our Work"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/about",
                        children: "About Us"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/process",
                        children: "Our Process"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/blog",
                        children: "Blog"
                    })
                ]
            })
        ]
    });
}
function RootLayoutInner({ children }) {
    let panelId = (0,react_.useId)();
    let [expanded, setExpanded] = (0,react_.useState)(false);
    let openRef = (0,react_.useRef)(null);
    let closeRef = (0,react_.useRef)(null);
    let navRef = (0,react_.useRef)(null);
    let shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
    (0,react_.useEffect)(()=>{
        function onClick(event) {
            if (event.target instanceof HTMLElement && event.target.closest("a")?.href === window.location.href) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", onClick);
        return ()=>{
            window.removeEventListener("click", onClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MotionConfig/* MotionConfig */.A, {
        transition: shouldReduceMotion ? {
            duration: 0
        } : undefined,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 top-2 z-40 pt-14",
                        "aria-hidden": expanded ? "true" : undefined,
                        inert: expanded ? "" : undefined,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            panelId: panelId,
                            icon: MenuIcon,
                            toggleRef: openRef,
                            expanded: expanded,
                            onToggle: ()=>{
                                setExpanded((expanded)=>!expanded);
                                window.setTimeout(()=>closeRef.current?.focus({
                                        preventScroll: true
                                    }));
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        layout: true,
                        id: panelId,
                        style: {
                            height: expanded ? "auto" : "0.5rem"
                        },
                        className: "relative z-50 overflow-hidden bg-neutral-950 pt-2",
                        "aria-hidden": expanded ? undefined : "true",
                        inert: expanded ? undefined : "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            layout: true,
                            className: "bg-neutral-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    ref: navRef,
                                    className: "bg-neutral-950 pb-16 pt-14",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                        invert: true,
                                        panelId: panelId,
                                        icon: XIcon,
                                        toggleRef: closeRef,
                                        expanded: expanded,
                                        onToggle: ()=>{
                                            setExpanded((expanded)=>!expanded);
                                            window.setTimeout(()=>openRef.current?.focus({
                                                    preventScroll: true
                                                }));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RootLayout_Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Offices, {
                                                        invert: true,
                                                        className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sm:border-l sm:border-transparent sm:pl-16",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "关注我们"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(SocialMedia, {
                                                            className: "mt-6",
                                                            invert: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                layout: true,
                style: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                },
                className: "relative flex flex-auto overflow-hidden bg-white pt-14",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    layout: true,
                    className: "relative isolate flex w-full flex-col pt-9",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridPattern.GridPattern, {
                            className: "absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",
                            yOffset: -96,
                            interactive: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "w-full flex-auto",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        ]
    });
}
function RootLayout({ children }) {
    let pathname = (0,navigation.usePathname)();
    let [logoHovered, setLogoHovered] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutContext.Provider, {
        value: {
            logoHovered,
            setLogoHovered
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutInner, {
            children: children
        }, pathname)
    });
}


/***/ }),

/***/ 8781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.store/next@13.4.16/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(40075);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/viggozhang/Documents/Indie Hacker House/Github/Indie-Hacker-House.github.io/src/components/RootLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["RootLayout"];

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(93527);
;// CONCATENATED MODULE: ./src/app/layout.jsx



const metadata = {
    title: {
        template: "%s - Studio",
        default: "Studio - Award winning developer studio based in Denmark"
    }
};
function Layout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full bg-neutral-950 text-base antialiased",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full flex-col",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 53762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9982);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83548);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10226);




function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
        className: "flex h-full items-center pt-24 sm:pt-32 lg:pt-40",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            className: "flex max-w-xl flex-col items-center text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 font-display text-2xl font-semibold text-neutral-950",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2 text-sm text-neutral-600",
                    children: "Sorry, we couldn’t find the page you’re looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",
                    children: "Go to the home page"
                })
            ]
        })
    });
}


/***/ }),

/***/ 83548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43674);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Container({ as, className, children }) {
    let Component = as ?? "div";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-none",
            children: children
        })
    });
}


/***/ }),

/***/ 10226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ e0),
/* harmony export */   o: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40075);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/viggozhang/Documents/Indie Hacker House/Github/Indie-Hacker-House.github.io/src/components/FadeIn.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FadeIn"];

const e1 = proxy["FadeInStagger"];


/***/ }),

/***/ 97388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78501);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 93527:
/***/ (() => {



/***/ })

};
;