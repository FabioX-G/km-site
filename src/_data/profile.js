module.exports = {
  hero: {
    title: "Kelvin Mo",
    tagline: "Biologist, data scientist, and innovator at the intersection of cancer immunology and computation.",
    lede: "First-year PhD student in Harvard's Biological and Biomedical Sciences program. I design translational AI pipelines and experimental frameworks that turn single-cell and spatial data into decisions for patients.",
    focus: [
      "Translational cancer immunology",
      "Spatial omics + graph neural networks",
      "Mentorship-driven team building"
    ],
    actions: [
      { label: "Explore projects", url: "/projects/", kind: "primary" },
      { label: "Publications", url: "/publications/", kind: "secondary" }
    ]
  },

  about: {
    narrative: [
      "I am a 24-year-old first-year PhD student in Harvard's Biological and Biomedical Sciences program. My north star is to engineer immune therapies that are as programmable as software by fusing rigorous biology with modern machine learning.",
      "Before Harvard, I split my undergraduate journey between UC San Diego and UC Berkeley while working closely with clinician-scientists at Stanford, Genentech, Novartis, and Intel. Across these teams I built computational systems that translated raw experimental data into strategies for therapeutics and manufacturing.",
      "I care deeply about mentorship. The work only matters if it opens doors for the next generation of scientists who look like the patients we hope to serve."
    ],
    pillars: [
      {
        title: "Systems thinker",
        body: "Designs full-stack workflows that unite wet-lab, computation, and clinical vantage points."
      },
      {
        title: "Builder",
        body: "Ships production-ready ML pipelines, from single-cell analytics to bioreactor control systems."
      },
      {
        title: "Mentor",
        body: "Leads learning pods and curricula that bring undergraduates into cutting-edge research early."
      }
    ]
  },

  story: {
    title: "Hacking the academic system",
    subtitle: "Designing translational infrastructure when none existed.",
    narrative: [
      "When I arrived at Stanford's Mackall Lab, computational work was outsourced, and precious patient data sat idle. I pitched a new approach: build an in-house, end-to-end single-cell analysis pipeline that clinicians, immunologists, and data scientists could all trust.",
      "I learned wet-lab workflows so I could map every experimental decision to its computational twin. Nights were spent pairing scRNA-seq processing scripts with the clinical metadata our fellows captured in real time.",
      "The result was the first on-treatment single-cell atlas for CAR T therapy in the lab. It uncovered IRF4/IRF8-driven exhaustion programs and chemokine circuits that have since shaped prospective trials."
    ],
    highlights: [
      { label: "Bridge", detail: "Connected lab bench context directly into ML-ready data." },
      { label: "Adoption", detail: "Workflow became the backbone for multi-site collaborations." },
      { label: "Impact", detail: "Findings are informing Nature/Blood manuscripts and ongoing trials." }
    ]
  },

  projects: [
    {
      title: "Graph neural networks for spatial transcriptomics",
      org: "Harvard BBS / Stanford Medicine",
      timeline: "2024 - present",
      summary: "GNN models (GCN, GAT, and message-passing variants) on CosMx LBCL datasets to forecast CAR T response weeks before infusion.",
      outcome: "Surfaced spatial immune niches linked to relapse; guiding patient stratification experiments.",
      badge: { text: "CosMx", tone: "accent" },
      tags: ["Spatial", "GNN", "CAR T"],
      link: "#"
    },
    {
      title: "Novartis antibody discovery ML pipeline",
      org: "Novartis Biologics",
      timeline: "2023",
      summary: "Built an end-to-end candidate triage system: sequence cleaning, structure-aware embeddings, and ranking models for affinity prediction.",
      outcome: "Improved hit rate and reduced experiment turnaround by 30%.",
      badge: { text: "Novartis", tone: "cool" },
      tags: ["Antibody", "ML Ops", "Discovery"],
      link: "#"
    },
    {
      title: "Genentech bioreactor control system",
      org: "Genentech Tech Ops",
      timeline: "2022",
      summary: "Designed adaptive control algorithms and telemetry dashboards for large-scale biologics manufacturing.",
      outcome: "Stabilized runs and cut manual overrides during pilot batches.",
      badge: { text: "Controls", tone: "neutral" },
      tags: ["Manufacturing", "Controls", "Telemetry"],
      link: "#"
    },
    {
      title: "Stanford tumor microenvironment framework",
      org: "Stanford Mackall Lab",
      timeline: "2022 - 2024",
      summary: "Mapped resistant tumor microenvironments across LBCL and DMG using multi-omic single-cell and spatial assays.",
      outcome: "Identified chemokine-driven myeloid states that drive CAR T resistance.",
      badge: { text: "TME", tone: "warm" },
      tags: ["Single-cell", "Intercellular", "Resistance"],
      link: "#"
    },
    {
      title: "Automated manometry analysis (DDW 2021)",
      org: "UCSD / Digestive Disease Week",
      timeline: "2021",
      summary: "Signal processing and visualization suite for gastrointestinal motility recordings.",
      outcome: "Adopted by the motility clinic for prospective studies.",
      badge: { text: "DDW", tone: "accent" },
      tags: ["Signal", "Clinical", "Automation"],
      link: "#"
    }
  ],

  publications: [
    {
      title: "IRF4/IRF8-mediated CAR T dysfunction and CCL8/CCL13+ TAM-driven resistance in LBCL",
      venue: "Nature Medicine (in revision)",
      year: "2025",
      blurb: "Single-cell, spatial, and multi-omic integration revealing the immune circuits that suppress CAR T cells and how to counter them.",
      contribution: "Co-led computational strategy and cross-cohort harmonization.",
      link: "#"
    },
    {
      title: "Spatial architecture of GD2 CAR-treated diffuse midline glioma",
      venue: "Preprint in preparation",
      year: "2024",
      blurb: "CosMx-powered maps of GD2 CAR T therapy showing how tumor and myeloid neighborhoods rewire after treatment.",
      contribution: "Developed graph models tying spatial niches to survival metrics.",
      link: "#"
    },
    {
      title: "Automated high-resolution manometry pipeline",
      venue: "Digestive Disease Week 2021",
      year: "2021",
      blurb: "Robust signal processing workflow that made GI motility analytics reproducible across clinical sites.",
      contribution: "Architected the pipeline and visual analytics stack.",
      link: "#"
    }
  ],

  education: [
    {
      role: "PhD, Biological and Biomedical Sciences",
      org: "Harvard University",
      dates: "2025 - present",
      desc: "Cancer immunology, spatial omics, and machine learning guided therapy design."
    },
    {
      role: "B.S., Biology & Data Science",
      org: "UC San Diego -> UC Berkeley",
      dates: "2019 - 2024",
      desc: "Double concentrated coursework in molecular biology, statistics, and machine learning."
    }
  ],

  experience: [
    {
      role: "Researcher, CAR T & tumor microenvironment",
      org: "Stanford Medicine (Mackall Lab)",
      dates: "2022 - present",
      points: [
        "Multi-omic single-cell analysis linking CAR T exhaustion to myeloid chemokine circuits.",
        "CosMx + GNN toolkit revealing spatial drivers of relapse in LBCL and DMG.",
        "Co-led cross-lab data engineering that feeds prospective trials."
      ]
    },
    {
      role: "ML Engineer, antibody discovery",
      org: "Novartis",
      dates: "2023",
      points: [
        "Automated antibody triage with structure-aware sequence embeddings.",
        "Built experiment orchestration that shortened decision cycles for the wet lab."
      ]
    },
    {
      role: "Systems engineer, bioreactor control",
      org: "Genentech",
      dates: "2022",
      points: [
        "Developed adaptive control loops and telemetry dashboards for biologics manufacturing.",
        "Improved process stability and reduced manual interventions during pilot runs."
      ]
    },
    {
      role: "Research fellow, computational biology",
      org: "Intel Labs",
      dates: "2021",
      points: [
        "Explored accelerator-aware pipelines for large-scale biological simulations.",
        "Published internal whitepapers on hardware-aware ML for omics workloads."
      ]
    }
  ],

  contact: {
    note: "Let us build the next generation of immune therapies together.",
    email: "kelvinmo@harvard.edu",
    linkedin: "https://www.linkedin.com/in/kelvin-mo/",
    github: "https://github.com/kelvinmo"
  }
};
