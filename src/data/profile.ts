export const profile = {
  name: "Anurag Prabhuling Swami",
  shortName: "GARUDA P.",
  role: "Analyst - Graduate Engineering Trainee",
  company: "Pratt & Whitney",
  location: "Bengaluru, Karnataka, India",

  headline: "I engineer what seems complex.",

  subheadline:
    "Software engineering, AI, data and systems — with a growing focus on reliable engineering.",

  summary:
    "Strong believer that nothing is impossible. Driven by curiosity, persistence, and the pursuit of meaningful impact.",

  links: {
    email: "mailto:swami.anu30@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/anurag-prabhuling-swami-76b187215"
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
   * Cinematic background visuals
   *
   * IMPORTANT:
   * These paths point directly to:
   * public/images/*.jpg
   *
   * Section IDs must match the IDs generated
   * by the Chapter component.
   */
  visuals: [
    {
      id: "precision",
      src: "/images/precision.jpg",
      alt: "Software verification and validation"
    },
    {
      id: "proof",
      src: "/images/proof.jpg",
      alt: "Engineering achievements"
    },
    {
      id: "next-mission",
      src: "/images/next_mission.jpg",
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
      detail:
        "Began B.Tech in Computer Science & Engineering at CMR University."
    },
    {
      year: "2023",
      title: "Data + Leadership",
      detail:
        "Explored analytics while taking leadership roles in the university Tech Club and as Class Representative."
    },
    {
      year: "2024",
      title: "Software + AI",
      detail:
        "Expanded into software engineering, AI/ML and freelance business development."
    },
    {
      year: "2025",
      title: "Cybersecurity + AI",
      detail:
        "Worked across secure data-hiding and applied AI; deepened cloud, RAG and agentic-AI learning."
    },
    {
      year: "2026",
      title: "Aerospace Engineering",
      detail:
        "Moved from Software Engineering Intern to Analyst - Graduate Engineering Trainee at Pratt & Whitney."
    }
  ],

  experience: [
    {
      company: "Pratt & Whitney",
      role: "Analyst - Graduate Engineering Trainee",
      period: "Aug 2026 – Present",
      detail:
        "Current role in aerospace engineering."
    },
    {
      company: "Pratt & Whitney",
      role: "Software Engineer Intern",
      period: "Mar 2026 – Aug 2026",
      detail:
        "DO-178C-oriented software verification, Python automation testing, embedded control systems and SCADE."
    },
    {
      company: "Edunet Foundation",
      role: "AI Intern",
      period: "Dec 2024 – Jul 2025",
      detail:
        "Worked on CNN and imaging for early plant disease detection using Python, TensorFlow and Streamlit."
    },
    {
      company: "Freelance",
      role: "Business Development Manager",
      period: "Aug 2024 – Oct 2025",
      detail:
        "Built and deployed websites/apps, social media pages, ads and SEO strategies."
    },
    {
      company: "Freelance",
      role: "Private Tutor",
      period: "Feb 2023 – Jul 2023",
      detail:
        "Tutored high-school students in mathematics, physics and chemistry."
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
      image: "/images/solve.jpeg",
      imageAlt: "Rubik's Cube Solver",
      href: "#"
    },
    {
      number: "02",
      category: "ENTERPRISE / SOFTWARE",
      title: "Enterprise Fee Management",
      statement:
        "From operational complexity to a structured system.",
      stack: [
        "Java",
        "Spring Boot",
        "REST",
        "MySQL"
      ],
      accent: "ARCHITECTURE",
      image: "/images/architecture.jpg",
      imageAlt: "Enterprise software architecture",
      href: "#"
    },
    {
      number: "03",
      category: "DATA / BUSINESS",
      title: "SAP Analytics Cloud",
      statement:
        "Turning business data into decisions.",
      stack: [
        "SAP SAC",
        "EDA",
        "Dashboards",
        "UAT"
      ],
      accent: "INSIGHT",
      image: "/images/insight.jpg",
      imageAlt: "Data analytics and business intelligence",
      href: "#"
    },
    {
      number: "04",
      category: "AI / COMPUTER VISION",
      title: "Plant Disease Detection",
      statement:
        "Teaching machines to see patterns in agriculture.",
      stack: [
        "Python",
        "TensorFlow",
        "CNN",
        "Streamlit"
      ],
      accent: "INFER",
      image: "/images/infer.jpg",
      imageAlt: "AI powered plant disease detection",
      href: "#"
    }
  ]
} as const;