const imagePath = (fileName: string) =>
  `${process.env.NODE_ENV === "production" ? "/Portfolio" : ""}/images/${fileName}`;

export const profile = {
  name: "Anurag Prabhuling Swami",
  shortName: "ANURAG PRABHULING SWAMI",
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
      value: "11×",
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
  * These paths point directly to files in public/images.
   *
   * Section IDs must match the IDs generated
   * by the Chapter component.
   */
  visuals: [
    {
      id: "top",
      src: imagePath("intro.jpg"),
      alt: "Engineering portfolio introduction"
    },
    {
      id: "curiosity",
      src: imagePath("curious.jpeg"),
      alt: "Curiosity and problem solving"
    },
    {
      id: "evolution",
      src: imagePath("journey.jpeg"),
      alt: "Engineering journey across systems"
    },
    {
      id: "intelligence",
      src: imagePath("data_to_solutions.jpeg"),
      alt: "Turning data into solutions"
    },
    {
      id: "precision",
      src: imagePath("precision.jpg"),
      alt: "Software verification and validation"
    },
    {
      id: "proof",
      src: imagePath("proof.jpg"),
      alt: "Engineering achievements"
    },
    {
      id: "next-mission",
      src: imagePath("next_mission.jpg"),
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
      image: imagePath("solve.jpeg"),
      imageAlt: "Rubik's Cube Solver",
      href: "https://aero-hack.vercel.app/"
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
      image: imagePath("architecture.jpg"),
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
      image: imagePath("insight.jpg"),
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
      image: imagePath("infer.jpg"),
      imageAlt: "AI powered plant disease detection",
      href: "#"
    }
  ]
} as const;