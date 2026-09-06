module.exports = [
"[project]/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/profile.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Hero() {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!root.current) return;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "power3.out"
                }
            });
            tl.from(".hero-meta", {
                opacity: 0,
                y: 18,
                stagger: .08,
                duration: .7
            }).from(".hero-title span", {
                opacity: 0,
                yPercent: 110,
                stagger: .1,
                duration: 1
            }, "-=.35").from(".hero-copy", {
                opacity: 0,
                y: 18,
                duration: .7
            }, "-=.5").from(".hero-cta", {
                opacity: 0,
                y: 15,
                duration: .6
            }, "-=.35").from(".hero-node", {
                opacity: 0,
                scale: .6,
                stagger: .06,
                duration: .5
            }, "-=.5");
        }, root);
        return ()=>ctx.revert();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top",
        ref: root,
        className: "relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-32 md:px-12 lg:px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_360px] lg:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-meta eyebrow mb-6",
                                children: "System initialization · Bengaluru · Building"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "display max-w-5xl overflow-hidden text-[clamp(4rem,10vw,9.5rem)] font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block overflow-hidden",
                                        children: "I ENGINEER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block overflow-hidden text-white/35",
                                        children: "WHAT SEEMS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block overflow-hidden",
                                        children: "COMPLEX."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-copy mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].subheadline
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#the-lab",
                                className: "hero-cta mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm transition hover:bg-white hover:text-black",
                                children: "Explore the lab ↓"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative hidden aspect-square lg:block",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].domains.map((domain, i)=>{
                                const positions = [
                                    "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                                    "right-4 top-16",
                                    "left-5 bottom-20",
                                    "right-10 bottom-8"
                                ];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `hero-node absolute ${positions[i]} rounded-full border border-white/10 bg-white/[.035] px-4 py-2 backdrop-blur`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mono text-[10px] tracking-[.14em] text-white/60",
                                        children: domain
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, domain, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/10 rotate-[18deg]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 bg-white/10 -rotate-[32deg]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profile",
    ()=>profile
]);
const profile = {
    name: "Anurag Prabhuling Swami",
    shortName: "GARUDA P.",
    role: "Analyst - Graduate Engineering Trainee",
    company: "Pratt & Whitney",
    location: "Bengaluru, Karnataka, India",
    headline: "I engineer what seems complex.",
    subheadline: "Software engineering, AI, data and systems — with a growing focus on reliable engineering.",
    summary: "Strong believer that nothing is impossible. Driven by curiosity, persistence, and the pursuit of meaningful impact.",
    links: {
        email: "mailto:swami.anu30@gmail.com",
        linkedin: "https://www.linkedin.com/in/anurag-prabhuling-swami-76b187215"
    },
    metrics: [
        {
            value: "9.62",
            suffix: "/10",
            label: "CGPA"
        },
        {
            value: "GATE",
            suffix: " CS '26",
            label: "Qualified"
        },
        {
            value: "9×",
            suffix: " SSB",
            label: "Qualified"
        },
        {
            value: "2×",
            suffix: " NDA",
            label: "Cleared"
        }
    ],
    domains: [
        "Software",
        "AI / ML",
        "Data",
        "Systems"
    ],
    /*
   * ==========================================================
   * CINEMATIC VISUAL MAPPING
   * ==========================================================
   *
   * Images are directly inside:
   *
   * public/images/
   *
   * Change only the filename if you replace an image.
   */ visuals: [
        {
            id: "curiosity",
            src: "/images/solve.webp",
            alt: "Rubik's Cube solving system"
        },
        {
            id: "evolution",
            src: "/images/precision.webp",
            alt: "Aerospace engineering and precision"
        },
        {
            id: "the-lab",
            src: "/images/architecture.webp",
            alt: "Enterprise software architecture"
        },
        {
            id: "intelligence",
            src: "/images/infer.webp",
            alt: "Artificial intelligence and computer vision"
        },
        {
            id: "precision",
            src: "/images/precision.webp",
            alt: "Software verification and validation"
        },
        {
            id: "proof",
            src: "/images/proof.webp",
            alt: "Engineering achievements"
        },
        {
            id: "next-mission",
            src: "/images/next_mission.webp",
            alt: "The next engineering mission"
        }
    ],
    skills: {
        "AI / ML": [
            "AI Agents",
            "LLMs",
            "RAG",
            "Retrievers",
            "PyTorch",
            "TensorFlow",
            "CNNs"
        ],
        Software: [
            "Java",
            "Python",
            "C++",
            "JavaScript",
            "Spring Boot",
            "React",
            "REST APIs"
        ],
        Data: [
            "SQL",
            "EDA",
            "Power BI",
            "Tableau",
            "SAP Analytics Cloud"
        ],
        "Cloud / DevOps": [
            "AWS",
            "Docker",
            "OCI",
            "Kubernetes",
            "Jenkins"
        ],
        "Systems / V&V": [
            "DO-178C",
            "SCADE",
            "Simulink",
            "MATLAB"
        ],
        Security: [
            "Python",
            "Encryption",
            "Steganography"
        ]
    },
    timeline: [
        {
            year: "2022",
            title: "Computer Science",
            detail: "Began B.Tech in Computer Science & Engineering at CMR University."
        },
        {
            year: "2023",
            title: "Data + Leadership",
            detail: "Explored analytics while taking leadership roles in the university Tech Club and as Class Representative."
        },
        {
            year: "2024",
            title: "Software + AI",
            detail: "Expanded into software engineering, AI/ML and freelance business development."
        },
        {
            year: "2025",
            title: "Cybersecurity + AI",
            detail: "Worked across secure data-hiding and applied AI; deepened cloud, RAG and agentic-AI learning."
        },
        {
            year: "2026",
            title: "Aerospace Engineering",
            detail: "Moved from Software Engineering Intern to Analyst - Graduate Engineering Trainee at Pratt & Whitney."
        }
    ],
    experience: [
        {
            company: "Pratt & Whitney",
            role: "Analyst - Graduate Engineering Trainee",
            period: "Aug 2026 – Present",
            detail: "Current role in aerospace engineering."
        },
        {
            company: "Pratt & Whitney",
            role: "Software Engineer Intern",
            period: "Mar 2026 – Aug 2026",
            detail: "DO-178C-oriented software verification, Python automation testing, embedded control systems and SCADE."
        },
        {
            company: "Edunet Foundation",
            role: "AI Intern",
            period: "Dec 2024 – Jul 2025",
            detail: "Worked on CNN and imaging for early plant disease detection using Python, TensorFlow and Streamlit."
        },
        {
            company: "Freelance",
            role: "Business Development Manager",
            period: "Aug 2024 – Oct 2025",
            detail: "Built and deployed websites/apps, social media pages, ads and SEO strategies."
        },
        {
            company: "Freelance",
            role: "Private Tutor",
            period: "Feb 2023 – Jul 2023",
            detail: "Tutored high-school students in mathematics, physics and chemistry."
        }
    ],
    projects: [
        {
            number: "01",
            category: "ALGORITHMS / INTERACTION",
            title: "Rubik's Cube Solver",
            statement: "Can an algorithm find the way out?",
            stack: [
                "JavaScript",
                "Kociemba"
            ],
            accent: "SOLVE",
            image: "/images/solve.webp",
            imageAlt: "Rubik's Cube Solver",
            href: "#"
        },
        {
            number: "02",
            category: "ENTERPRISE / SOFTWARE",
            title: "Enterprise Fee Management",
            statement: "From operational complexity to a structured system.",
            stack: [
                "Java",
                "Spring Boot",
                "REST",
                "MySQL"
            ],
            accent: "ARCHITECTURE",
            image: "/images/architecture.webp",
            imageAlt: "Enterprise software architecture",
            href: "#"
        },
        {
            number: "03",
            category: "DATA / BUSINESS",
            title: "SAP Analytics Cloud",
            statement: "Turning business data into decisions.",
            stack: [
                "SAP SAC",
                "EDA",
                "Dashboards",
                "UAT"
            ],
            accent: "INSIGHT",
            image: "/images/insight.webp",
            imageAlt: "Data analytics and business intelligence",
            href: "#"
        },
        {
            number: "04",
            category: "AI / COMPUTER VISION",
            title: "Plant Disease Detection",
            statement: "Teaching machines to see patterns in agriculture.",
            stack: [
                "Python",
                "TensorFlow",
                "CNN",
                "Streamlit"
            ],
            accent: "INFER",
            image: "/images/infer.webp",
            imageAlt: "AI powered plant disease detection",
            href: "#"
        }
    ]
};
}),
];

//# sourceMappingURL=src_1vq7raw._.js.map