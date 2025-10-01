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
      title: "Single cell-resolution in situ sequencing reveals spatial dynamics of H3K27M-mutated diffuse midline gliomas and identifies myeloid-tumor cell interactions",
      venue: "In preparation",
      year: "2024",
      blurb: "High-resolution CosMx sequencing ties myeloid neighborhoods to H3K27M tumor evolution during GD2-CAR therapy.",
      contribution: "Co-led spatial inferences and CAR T response analytics.",
      link: null
    },
    {
      title: "Pre-infusion biomarker classifier predicts lymphoma response and toxicity after CAR T cell",
      venue: "In preparation",
      year: "2024",
      blurb: "Multi-cohort biomarker signature that stratifies outcomes prior to CAR T infusion in lymphoma.",
      contribution: "Designed the machine learning stack and prospective validation pipeline.",
      link: null
    },
    {
      title: "CCL8/CCL13-producing tumor-associated macrophages linked to poor outcomes after CAR T cell therapy for LBCL",
      venue: "Blood 144(Suppl. 1) · Cancer Cell (submitted)",
      year: "2024",
      blurb: "Connects chemokine-driven macrophage states with post-infusion CAR T failure and charts intervention points.",
      contribution: "Led the single-cell integration and interactome modeling.",
      link: "https://ashpublications.org/blood/article/144/Supplement_1/4752/496067/CCL8-CCL13-Producing-Tumor-Associated"
    },
    {
      title: "Unraveling temporal dynamics of GD2-CAR T cell therapy in H3K27M-mutant diffuse midline glioma through single-cell and multi-omic profiling",
      venue: "In preparation",
      year: "2024",
      blurb: "Joint single-cell, spatial, and serum proteomic monitoring across GD2-CAR therapy.",
      contribution: "Architected longitudinal data model and multi-omic harmonization.",
      link: null
    },
    {
      title: "Humanized anti-CAR antibodies affects durable GD2 CAR T cell response in diffuse midline glioma",
      venue: "Neuro-Oncology (submitted)",
      year: "2025",
      blurb: "Characterizes anti-CAR immune responses that influence durability of GD2-CAR therapy in pediatric brain tumors.",
      contribution: "Led computational analysis of antibody repertoires and survival associations.",
      link: null
    },
    {
      title: "Multiple instance learning identifies perturbation targets poised to improve clinical outcomes after CD19-CAR therapy for large B cell lymphoma",
      venue: "In preparation",
      year: "2024",
      blurb: "Weakly supervised learning reveals cell states to target for durable CD19-CAR responses.",
      contribution: "Developed the MIL framework and interpretability tooling.",
      link: null
    },
    {
      title: "Patient-level prediction from single-cell data using attention-based multiple instance learning",
      venue: "NeurIPS 2025 (in review)",
      year: "2025",
      blurb: "Attention-based MIL links diagnostic single-cell data to clinical outcomes for CAR T therapy.",
      contribution: "Driving methodology and benchmarking across multi-site datasets.",
      link: null
    },
    {
      title: "Overcoming T cell tolerance to tumor self-antigens through catch-bond engineering",
      venue: "Science (in review)",
      year: "2025",
      blurb: "Catch-bond receptor engineering strategy that rescues self-antigen recognition for solid tumors.",
      contribution: "Contributed translational analytics on engineered T cell persistence.",
      link: "https://www.science.org/doi/10.1126/science.adl1234"
    },
    {
      title: "Pan-hematologic cancer predictive biomarkers for chimeric antigen receptor T-cell therapy",
      venue: "Nature Biomedical Engineering (in review)",
      year: "2024",
      blurb: "Cross-indication biomarker atlas forecasting efficacy across hematologic CAR programs.",
      contribution: "Built the harmonized feature store and calibration pipelines.",
      link: null
    },
    {
      title: "Spatial transcriptomics analysis of glioblastoma reveals three distinct regional programs of T-cell infiltration",
      venue: "Neuro-Oncology 26(Suppl. 8) viii12",
      year: "2024",
      blurb: "Maps immune niches across glioblastoma and highlights infiltration programs for intervention.",
      contribution: "Delivered spatial statistics and visual analytics for the abstract.",
      link: "https://academic.oup.com/neuro-oncology/article/26/Supplement_8/viii12/7449396"
    },
    {
      title: "CD22-targeted CAR T cell single cell multiomic features linked to immune effector cell-associated hemophagocytic lymphohistiocytosis-like syndrome",
      venue: "Blood 144(Suppl. 1)",
      year: "2024",
      blurb: "Multiomic signatures that anticipate IEC-HLH-like toxicities after CD22-CAR therapy.",
      contribution: "Co-developed the multiomic analysis and toxicity classifier.",
      link: "https://ashpublications.org/blood/article-abstract/144/Supplement_1/4708/496191/CD22-Targeted-CAR-T-Cell-Single-Cell-Multiomic"
    },
    {
      title: "Biomechanical analysis of swallow-induced primary peristalsis in patients with EGJOO",
      venue: "Gastroenterology 160(6 Suppl. 1) S-102",
      year: "2021",
      blurb: "Quantified esophageal mechanics to differentiate EGJOO phenotypes using high-resolution manometry.",
      contribution: "Implemented the biomechanics pipeline and visualization suite.",
      link: "https://www.gastrojournal.org/article/S0016-5085(21)02031-4"
    }
  ],

  education: [
    {
      role: "PhD, Biological and Biomedical Sciences",
      org: "Harvard University",
      dates: "Sep 2025 - Jun 2030",
      desc: "Doctoral research aimed at programmable cancer immunotherapies and spatial immune modeling."
    },
    {
      role: "B.A., Data Science & Molecular and Cell Biology",
      org: "University of California, Berkeley",
      dates: "Sep 2021 - Dec 2023",
      desc: "Integrated data science frameworks with advanced molecular biology to prototype translational pipelines."
    },
    {
      role: "B.S., Bioinformatics & Computer Science",
      org: "University of California, San Diego",
      dates: "Sep 2019 - Jun 2021",
      desc: "Built the computational tooling foundation that powers Kelvin's current lab work."
    }
  ],

  experience: [
    {
      role: "Life Science Research Professional",
      org: "Stanford University School of Medicine",
      dates: "Mar 2023 - Present",
      points: [
        "Characterized CAR T exhaustion and myeloid biology for the first on-treatment scRNA-seq cohort in LBCL, surfacing biomarkers for new trials.",
        "Predicted CD19-CAR response and toxicity using multimodal ML classifiers on pre-infusion immune features, integrating sgGPT-based transformers.",
        "Mapped temporal and spatial programs in GD2-CAR therapy for diffuse midline glioma using CosMx, CITE-seq, and proteomic readouts.",
        "Built the lab's single source of truth for patient metadata, wet-lab instrumentation, and ML pipelines, enabling real-time translational decisions."
      ]
    },
    {
      role: "Biotechnology Development Intern",
      org: "Genentech",
      dates: "Jun 2022 - Dec 2022",
      points: [
        "Implemented Raman spectroscopy-based feedback control for cell culture bioreactors, enhancing feed control capabilities.",
        "Delivered dashboards and automation that reduced manual interventions during pilot biologics runs by 80%."
      ]
    },
    {
      role: "Data Science Intern",
      org: "Novartis",
      dates: "Jun 2021 - Aug 2021",
      points: [
        "Built ranking models on structure-aware embeddings to triage antibody screening campaigns.",
        "Deployed decision-support tooling that accelerated hit triage for wet-lab partners."
      ]
    },
    {
      role: "Data Science Intern",
      org: "Intel Labs",
      dates: "Jan 2021 - Oct 2021",
      points: [
        "Built accelerator-aware inference pipelines for large-scale biological simulations and HPC clusters.",
        "Published internal whitepapers to senior leadership on GPU/CPU utilization for omics workloads."
      ]
    },
    {
      role: "Lead Data Analyst",
      org: "UC San Diego School of Medicine",
      dates: "Mar 2020 - Jun 2021",
      points: [
        "Constructed tension-area hysteresis analyses and impedance-based manometry tooling for EGJOO patients.",
        "Led data ingestion for clinical swallow studies and mentored undergraduates in reproducible analytics."
      ]
    },
    {
      role: "Research Intern",
      org: "Singlera Genomics",
      dates: "Jul 2019 - Sep 2019",
      points: [
        "Shipped early prototypes for cfDNA analytics and assay QC dashboards.",
        "Anchored Kelvin's transition from pure wet-lab work into computational biology."
      ]
    }
  ],

  contact: {
    note: "Let us build the next generation of immune therapies together.",
    email: "kelvin.mo@hotmail.com",
    linkedin: "https://www.linkedin.com/in/kelvin-mo/",
    github: "https://github.com/kelvinmo0513"
  }
};
