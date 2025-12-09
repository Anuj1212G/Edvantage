// src/pages/CourseDetails.jsx
import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, Users, Award, BookOpen, Play, ArrowLeft, Download } from "lucide-react";
import AuthModal from "./AuthModal.jsx";
import { useAuth } from "../context/AuthContext.jsx";

// ----------------------------
// PROGRAM DATA (same as before)
// ----------------------------
//  🔥 KEEP YOUR CURRENT PROGRAM ARRAYS EXACTLY AS THEY ARE.
//  Add this one extra field inside every course object:
//  brochure: "https://your-brochure-link.com/brochure.pdf"
// ----------------------------

/* Your DEFAULT_PROGRAMS + PROGRAMS_PART_2 remain unchanged */
const DEFAULT_PROGRAMS = [
  {
    id: "1",
    title: "Directional Drilling",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "5+ Hours",
    format: "Self-Paced",
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A comprehensive program designed to build strong foundational and advanced skills in directional drilling, covering trajectory planning, BHA design, MWD/LWD tools, and real-world drilling challenges through practical case studies.",
    outcomes: [
      "Understand fundamental concepts, terminology, and types of directional wells",
      "Learn BHA design, tool selection, and MWD/LWD applications",
      "Develop skills in advanced well trajectory planning and survey calculations",
      "Master deflection techniques using motors and rotary steerable systems",
      "Gain expertise in solving drilling challenges like stuck pipe and hole cleaning",
      "Explore extended reach, multilateral drilling, and emerging automation trends",
      "Work on real-world case studies and a practical directional well planning project",
    ],
    curriculum: [
      "Directional Drilling Fundamentals",
      "Well Types & Survey Calculations",
      "Deflection Tools – Motors & RSS",
      "BHA Design & Optimization",
      "Trajectory Planning & Anti-Collision",
      "Stuck Pipe & Hole Cleaning",
      "MWD/LWD Applications",
      "Directional Drilling Case Studies",
    ],
    targetAudience: ["Drilling engineers", "Petroleum students", "Well planning engineers"],
    price: "$70 / ₹2,500",
    image: "/images/directional-drilling.jpg",
    payment: {
      stripe: `https://buy.stripe.com/bJe8wRfUh9uF0kC8hbaR50C`,
      razorpay: `https://rzp.io/rzp/dw3i8KWL`,
    },
  },

  {
    id: "2",
    title: "Evaluating Unconventional Resources Using Decline Curve Analysis & Horizontal Well Fracturing",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "5+ Hours",
    format: "Self-Paced",
    level: "Advanced",
    certificate: "Yes",
    overview:
      "A comprehensive program focused on understanding unconventional reservoirs—shale, tight gas, shale oil, and CBM—through reservoir characterization, decline curve modelling, and horizontal well fracturing techniques.",
    outcomes: [
      "Understand geology, petrophysical properties, and classification of unconventional reservoirs",
      "Learn TOC evaluation, logging tools, and completion strategies",
      "Gain expertise in fracturing principles, fracture conductivity, and multi-stage fracturing",
      "Analyze horizontal & multi-fractured well performance",
      "Apply advanced decline curve models: Arps, Duong, LGA, PLE",
      "Perform production forecasting for unconventional assets",
    ],
    curriculum: [
      "Unconventional Reservoir Geology",
      "TOC, Logs & Petrophysics",
      "Hydraulic Fracturing Principles",
      "Horizontal Well Design",
      "Advanced DCA Models",
      "Forecasting Techniques",
      "Case Studies",
    ],
    targetAudience: ["Reservoir engineers", "Completion engineers", "Analysts"],
    price: "$200 / ₹15,000",
    image: "/images/unconventional-resources.jpg",
    payment: {
      stripe: `https://buy.stripe.com/4gMfZj6jH8qBc3k0OJaR50E`,
      razorpay: `https://rzp.io/rzp/YMzgvy7
`,
    },
  },

  {
    id: "3",
    title: "Reserves Estimation & Classification",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "—",
    format: "Self-Paced",
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A focused program that builds a strong understanding of petroleum reserves estimation methods and globally recognized classification systems.",
    outcomes: [
      "Understand global standards for reserves and resources classification",
      "Learn volumetric, decline curve, and material-balance methods for reserve estimation",
      "Perform reserves calculations using Excel-based exercises",
      "Evaluate resource commerciality and interpret regulatory guidelines",
      "Strengthen skills required for reservoir evaluation and upstream planning",
    ],
    curriculum: [
      "PRMS, SEC & UNFC Standards",
      "Volumetric Calculations",
      "Decline Curve Methods",
      "Material Balance Calculations",
      "Regulatory & Commercial Evaluation",
      "Excel-Based Reserve Estimation",
    ],
    targetAudience: ["Reservoir engineers", "Analysts", "Students"],
    price: "$35 / ₹2,500",
    image: "/images/reserves-estimation.jpg",
    payment: {
      stripe: `https://buy.stripe.com/3cIdRb9vT9uF1oG0OJaR50F`,
      razorpay: `https://rzp.io/rzp/MKrRo2R`,
    },
  },

  {
    id: "4",
    title: "Sequence Stratigraphy in the Era of Digitalization",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "hybrid",
    duration: "35+ Hours",
    format: "Hybrid (Virtual + Practical Workshops)",
    level: "Beginner to Intermediate",
    certificate: "Yes (with Internship Completion Certificate)",
    overview:
      "A comprehensive training–cum–internship covering sequence stratigraphy, depositional systems, facies modelling, and modern ML–enabled geological interpretation.",
    outcomes: [
      "Differentiate lithostratigraphy and sequence stratigraphy",
      "Understand depositional systems, facies cycles, unconformities & systems tracts",
      "Apply sequence boundaries, parasequence analysis & electrolog interpretation",
      "Perform stratigraphic correlation and seismic-based systems tract identification",
      "Learn deep-marine depositional processes & biostratigraphic integration",
      "Explore ML & AI applications in geological data interpretation",
      "Build industry-ready skills for facies modelling and geomodel development",
    ],
    curriculum: [
      "Sequence Stratigraphy Basics",
      "Depositional Systems",
      "Electrolog Interpretation",
      "Systems Tracts",
      "Seismic Interpretation",
      "ML for Geoscience",
      "Geomodeling Workshop",
      "Internship Project",
    ],
    targetAudience: ["Geologists", "Geophysicists", "Students"],
    price: "$60 / ₹4,000",
    image: "/images/sequence-stratigraphy.jpg",
    payment: {
      stripe: `https://buy.stripe.com/5kQ9AVgYlgX7ebsdBvaR50G`,
      razorpay: `https://rzp.io/rzp/9tBFwWG`,
    },
  },

  {
    id: "5",
    title: "Well Intervention, Fishing & Smart Completions",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "5+ Hours",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A practical, industry-focused program covering essential well intervention techniques, workover operations, fishing and milling practices, stimulation methods, and modern smart completion technologies.",
    outcomes: [
      "Understand well intervention objectives, requirements, and SOPs",
      "Learn workover planning, design, execution, and failure analysis",
      "Gain expertise in fishing operations, milling tools, and case-based problem solving",
      "Master stimulation techniques including acidizing, hydraulic fracturing & novel methods",
      "Explore advanced smart completions, multilateral systems & slim wells",
      "Build skills for evaluating unconventional reservoirs",
      "Strengthen readiness for field roles through real-life scenarios and examples",
    ],
    curriculum: [
      "Intervention Operations",
      "Fishing & Milling",
      "Workover Planning",
      "Stimulation Techniques",
      "Smart Completions",
      "Operational Case Studies",
    ],
    targetAudience: ["Completion engineers", "Well intervention engineers", "Students"],
    price: "$100 / ₹7,500",
    image: "/images/well-intervention.jpg",
    payment: {
      stripe: `https://buy.stripe.com/4gM5kF23rgX70kC40VaR50H`,
      razorpay: `https://rzp.io/rzp/2OB3XZSk`,
    },
  },

  {
    id: "6",
    title: "Advance Well Engineering",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "10+ Hours",
    format: "Self-Paced",
    level: "Intermediate to Advanced",
    certificate: "Yes",
    overview:
      "An intensive, industry-oriented program designed to develop strong competencies in well design, pore pressure analysis, casing & cementing, drilling challenges, well control assurance, and modern engineering software.",
    outcomes: [
      "Gain strong fundamentals in pore pressure, fracture pressure & kick tolerance",
      "Learn casing design, load calculations & API/NORSOK/ISO-based standards",
      "Master cementing functions, slurry design, additives, hardware & testing",
      "Understand drilling fluids, SCE, rig hydraulics & rheology",
      "Learn drill string, BHA design, bit selection & IADC dull grading",
      "Explore wellbore stability, stuck pipe mechanisms & mitigations",
      "Perform well cost estimation, AFE calculations & planning workflows",
      "Understand BOP components, selection, accumulator sizing & well control basics",
      "Apply knowledge through simulations, case studies & a well-design project",
    ],
    curriculum: [
      "Well Design Fundamentals",
      "Casing & Cementing",
      "Directional Drilling",
      "Drilling Hydraulics",
      "Wellbore Stability",
      "Well Control Basics",
      "AFE & Cost Estimation",
      "Engineering Software Demos",
    ],
    targetAudience: ["Drilling engineers", "Well engineers", "Advanced students"],
    price: "—",
    image: "/images/advanced-well-engineering.jpg",
    payment: {
      stripe: `https://buy.stripe.com/9B63cx6jH9uF5EW40VaR50I`,
      razorpay: `https://rzp.io/rzp/eOv5Ggb`,
    },
  },

  {
    id: "7",
    title: "Reservoir Surveillance & Tight Reservoir Management",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "5+ Hours",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A comprehensive program designed to build strong competencies in reservoir surveillance principles, tight reservoir characterization, dynamic modelling, and uncertainty-driven decision-making.",
    outcomes: [
      "Understand fundamentals of subsurface engineering & reservoir surveillance",
      "Develop effective surveillance plans aligned with asset objectives",
      "Apply advanced data gathering, measurement reliability & intelligent tools",
      "Characterize tight unconventional reservoirs using geological & petrophysical inputs",
      "Build dynamic models and optimize field development strategies",
      "Conduct economic evaluation & risk analysis for tight oil assets",
    ],
    curriculum: [
      "Surveillance Fundamentals",
      "Tight Reservoir Characterization",
      "Dynamic Modeling",
      "Field Development Optimization",
      "Risk & Economic Analysis",
    ],
    targetAudience: ["Reservoir engineers", "Asset teams", "Students"],
    price: "$100 / ₹7,500",
    image: "/images/reservoir-surveillance.jpg",
    payment: {
      stripe: `https://buy.stripe.com/eVq00lgYl0Y92sK9lfaR50J`,
      razorpay: `https://rzp.io/rzp/VTsA8qwE`,
    },
  },

  {
    id: "8",
    title: "Learn Energy Data Analytics From Scratch",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "35+ Hours",
    format: "Self-Paced",
    level: "Beginner (No Coding Required)",
    certificate: "Yes",
    overview:
      "A practical program designed to help energy professionals master statistics, Python, ML, Power BI, SQL, and real oil & gas data workflows.",
    outcomes: [
      "Understand statistics, hypothesis testing & regression for energy datasets",
      "Learn Python fundamentals, data types, loops, functions & error handling",
      "Apply Python for well logs, reservoir parameters & formation evaluation",
      "Perform data analytics using Python, SQL & Power BI",
      "Build dashboards and visualizations for reservoir & production data",
      "Apply ML techniques for porosity, saturation, facies & reservoir forecasting",
      "Use supervised, unsupervised & time-series models",
      "Complete end-to-end O&G data science projects",
    ],
    curriculum: [
      "Python Fundamentals",
      "Statistics for Energy Data",
      "Reservoir & Production Data Analytics",
      "Power BI Dashboards",
      "Machine Learning Models",
      "Energy Sector Case Studies",
    ],
    targetAudience: ["Data analysts", "Engineers", "Beginners"],
    price: "$150 / ₹11,000",
    image: "/images/energy-data-analytics.jpg",
    payment: {
      stripe: `https://buy.stripe.com/6oU9AVdM9gX75EW7d7aR50K`,
      razorpay: `https://rzp.io/rzp/pjv1YOrZ`,
    },
  },

  {
    id: "9",
    title: "Well Planning, Deepwater Design & Engineering",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "5+ Hours",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A specialized program designed to equip learners with essential skills in deepwater well planning, subsea engineering, real-time data integration, and risk management.",
    outcomes: [
      "Master deepwater well design principles and planning workflows",
      "Analyze and apply real-time industry data for informed decision-making",
      "Understand deepwater rig systems, subsea BOPs, and well control challenges",
      "Identify and mitigate deepwater drilling risks and shallow hazards",
      "Apply casing design, cementing, MPD basics & hydraulic analysis",
      "Gain proficiency in subsea operations, well abandonment & relief well planning",
      "Learn regulatory requirements & offshore best practices",
    ],
    curriculum: [
      "Deepwater Well Planning",
      "Subsea Systems",
      "Hydraulics & Casing",
      "Well Control",
      "Deepwater Risk Management",
      "Simulations & Case Studies",
    ],
    targetAudience: ["Offshore engineers", "Drilling engineers", "Students"],
    price: "$150 / ₹10,500",
    image: "/images/deepwater-engineering.jpg",
    payment: {
      stripe: `https://buy.stripe.com/aFa3cx0ZneOZ6J0dBvaR50L`,
      razorpay: `https://rzp.io/rzp/ZQ58xzh`,
    },
  },

  {
    id: "10",
    title: "Drilling Analytics from Scratch",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "20+ Hours",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A practical program introducing real-time drilling data analytics, ML workflows, vibration analysis, and time-series interpretation for drilling optimization.",
    outcomes: [
      "Perform real-time drilling analytics and anomaly detection",
      "Visualize drilling parameters using heatmaps, 3D trajectories & radar charts",
      "Apply ML models for optimizing ROP, WOB & detecting tool failures",
      "Analyze drilling time-series data for borehole cleaning, instability & formation changes",
      "Conduct stuck pipe analysis & NPT evaluation",
      "Interpret drill string dynamics through vibration & frequency analysis",
      "Build workflows to reduce drilling risks and increase efficiency",
    ],
    curriculum: [
      "Real-Time Drilling Analytics",
      "ML for Drilling Optimization",
      "Time-Series Interpretation",
      "Stuck Pipe Diagnosis",
      "Vibration & Dynamic Analysis",
      "Performance Enhancement Workflows",
    ],
    targetAudience: ["Drilling engineers", "Data analysts", "Students"],
    price: "$140 / ₹12,000",
    image: "/images/drilling-analytics.jpg",
    payment: {
      stripe: `https://buy.stripe.com/9B6dRbbE10Y91oG693aR50M`,
      razorpay: `https://rzp.io/rzp/lcANZ6Uf`,
    },
  },
];

/* -----------------------------
   Program Data (PROGRAMS_PART_2)
   ----------------------------- */
const PROGRAMS_PART_2 = [
  {
    id: "11",
    title: "Deep Learning for Oil & Gas Applications",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "20+ Hours",
    format: "Self Paced",
    level: "Beginner",
    certificate: "Yes",
    overview:
      "A practical program teaching deep learning fundamentals with real oil & gas applications using neural networks, CNNs, RNNs, and TensorFlow/Keras.",
    outcomes: [
      "Understand neural networks, deep neural networks & learning mechanisms",
      "Work with TensorFlow and Keras for building deep learning models",
      "Apply CNNs for image-based reservoir/core analysis",
      "Use RNNs for time-series production & operational forecasting",
      "Perform transfer learning for energy datasets",
      "Implement deep learning case studies in drilling, production & image classification",
      "Gain confidence handling large industry datasets",
    ],
    curriculum: [
      "Deep Learning Basics",
      "CNNs for Core/Seismic Images",
      "RNNs & Time-Series",
      "Transfer Learning",
      "TensorFlow/Keras Workflows",
      "Case Studies & Projects",
    ],
    targetAudience: ["Data scientists", "Engineers", "Students"],
    price: "$250 / ₹15,000",
    image: "/images/deep-learning-oil-gas.jpg",
    payment: {
      stripe: `https://buy.stripe.com/8x2cN723rgX72sKgNHaR50N`,
      razorpay: `https://rzp.io/rzp/jsQQEt7`,
    },
  },

  {
    id: "12",
    title: "Oil & Gas Software Development Using Python",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "28+ Hours",
    format: "Self Paced",
    level: "Beginner",
    certificate: "Yes",
    overview:
      "A hands-on program teaching Python from scratch, applying it to petroleum engineering models, analytics workflows, and web app development.",
    outcomes: [
      "Learn Python fundamentals, data types, loops, functions & modular programming",
      "Use NumPy, Pandas & Matplotlib for data analysis and visualization",
      "Build engineering calculators for MBAL, IPR & reservoir parameters",
      "Apply Git for version control & collaborative development",
      "Develop Python mini-projects such as pressure profile & Klinkenberg models",
      "Deploy a Python web application for oil & gas datasets",
      "Automate petroleum workflows and solve engineering challenges",
    ],
    curriculum: [
      "Python Fundamentals",
      "Data Analysis with NumPy/Pandas",
      "Engineering Calculators & MBAL/IPR",
      "Web App Deployment",
      "Project Work",
    ],
    targetAudience: ["Engineers", "Developers", "Students"],
    price: "$200 / ₹15,000",
    image: "/images/python-oil-gas-software.jpg",
    payment: {
      stripe: `https://buy.stripe.com/28E6oJ0ZncGRgjAgNHaR50O`,
      razorpay: `https://rzp.io/rzp/Nign9Y28`,
    },
  },

  {
    id: "13",
    title: "Mastering Reservoir Engineering: From Basics to Software-Driven Solutions",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "20+ Hours",
    format: "Self Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A complete reservoir engineering program covering rock properties, fluids, drive mechanisms, MBE, DCA, EOR, and software-driven modeling workflows.",
    outcomes: [
      "Understand geological framework, petrophysics & fluid behavior",
      "Perform core analysis, rock property evaluation & fluid lab assessments",
      "Apply material balance & decline curve analysis",
      "Analyze drive mechanisms, water influx & reservoir performance",
      "Explore secondary recovery & EOR fundamentals",
      "Learn classical RE workflows & simulation concepts",
      "Gain exposure to reservoir engineering software tools",
      "Conduct hands-on advanced reservoir modeling exercises",
    ],
    curriculum: [
      "Reservoir Fundamentals",
      "Material Balance & DCA",
      "EOR Intro",
      "Simulation Workflows",
      "Hands-on Modeling",
    ],
    targetAudience: ["Reservoir engineers", "Students", "Analysts"],
    price: "$75 / ₹5,000",
    image: "/images/mastering-reservoir-engineering.jpg",
    payment: {
      stripe: `https://buy.stripe.com/aFa5kF37vbCNd7o0OJaR51g`,
      razorpay: `https://rzp.io/rzp/xTxrIbQ`,
    },
  },

  {
    id: "14",
    title: "Master Oil & Gas Production Optimization with AI & Machine Learning",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "20+ Hours",
    format: "Self Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A practical program teaching ML and deep learning techniques for optimizing production, forecasting flows, and identifying operational anomalies.",
    outcomes: [
      "Understand ML fundamentals and forecasting techniques",
      "Analyze & visualize production time-series data",
      "Build AR, MA, ARIMA & LSTM forecasting models",
      "Apply ML for choke & gas lift optimization",
      "Detect anomalies using Autoencoders & Isolation Forest",
      "Use ML for DCA, fracture optimization & failure prediction",
      "Apply ML best practices for deployment",
    ],
    curriculum: [
      "ML Fundamentals for Production",
      "Time-Series Forecasting",
      "Optimization Workflows",
      "Case Studies",
    ],
    targetAudience: ["Engineers", "Data analysts", "Operations"],
    price: "$200 / ₹15,000",
    image: "/images/production-optimization-ml.jpg",
    payment: {
      stripe: `https://buy.stripe.com/28EbJ3dM9eOZc3k7d7aR51h`,
      razorpay: `https://rzp.io/rzp/8LpGoT6W`,
    },
  },

  {
    id: "15",
    title: "Oil & Gas Forecasting & Predictions Using Time Series Analysis",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "28+ Hours",
    format: "Self Paced",
    level: "Beginner",
    certificate: "Yes",
    overview:
      "A complete time-series forecasting program for energy prediction using statistical and deep learning methods.",
    outcomes: [
      "Understand time series structure, trends & seasonality",
      "Clean, prepare & analyze oil & gas datasets",
      "Apply statistical concepts for forecasting",
      "Use ACF, PACF, differencing & hypothesis testing",
      "Build AR, MA & ARIMA models",
      "Implement RNN & LSTM models for advanced forecasting",
      "Detect anomalies with Autoencoders & Isolation Forest",
      "Apply regression-based forecasting methods",
    ],
    curriculum: [
      "Time-Series Fundamentals",
      "ARIMA & Statistical Models",
      "Deep Learning for Forecasting",
      "Anomaly Detection",
    ],
    targetAudience: ["Data analysts", "Engineers", "Students"],
    price: "$200 / ₹14,000",
    image: "/images/time-series-oil-gas.jpg",
    payment: {
      stripe: `https://buy.stripe.com/14AdRb9vT22d6J0cxraR51i`,
      razorpay: `https://rzp.io/rzp/3OmwE9e`,
    },
  },

  {
    id: "16",
    title: "PVT Modelling and Advanced Fluid Characterization",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "12+ Hours",
    format: "Self Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A specialized program covering PVT analysis, EOS modelling, tuning, validation, and EOR fluid characterization.",
    outcomes: [
      "Understand PVT behavior & fluid characterization",
      "Learn lab PVT experiments: DL, CCE, Separator tests",
      "Apply EOS models (PR, SRK) for fluid modelling",
      "Tune EOS using regression & experimental data",
      "Use PVT for MBE, reserves & simulation",
      "Model miscible/immiscible gas injection & CO₂ EOR",
      "Apply PVT in production engineering & flow assurance",
      "Perform case studies using PVT modelling software",
    ],
    curriculum: [
      "PVT Fundamentals",
      "EOS Modelling",
      "Lab Data Interpretation",
      "Case Studies & Software",
    ],
    targetAudience: ["Reservoir engineers", "Laboratory engineers", "Students"],
    price: "$100 / ₹7,500",
    image: "/images/pvt-modelling.jpg",
    payment: {
      stripe: `https://buy.stripe.com/8x2cN74bz8qB8R854ZaR51j`,
      razorpay: `https://rzp.io/rzp/edTLw7i`,
    },
  },

  {
    id: "17",
    title: "Data Analytics & Visualisation Using Power BI for Oil & Gas",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "15+ Hours",
    format: "Self-Paced",
    level: "Beginner",
    certificate: "Yes",
    overview:
      "A practical Power BI program for creating dashboards, analyzing oil & gas datasets, and building real-time visual insights.",
    outcomes: [
      "Understand Power BI interface & visualization types",
      "Import, clean & transform field datasets",
      "Perform exploratory data analysis",
      "Analyze production trends & well performance",
      "Identify key influencers & operational inefficiencies",
      "Build drilling, production & reservoir dashboards",
      "Use DAX formulas & AI insights",
      "Integrate Power BI with Excel & SharePoint",
    ],
    curriculum: [
      "Power BI Basics",
      "Data Modeling & DAX",
      "Dashboard Design",
      "Field Data Use-Cases",
    ],
    targetAudience: ["Data analysts", "Engineers", "Managers"],
    price: "$200 / ₹17,000",
    image: "/images/power-bi-oil-gas.jpg",
    payment: {
      stripe: `https://buy.stripe.com/5kQ3cx0ZneOZ2sK40VaR51k`,
      razorpay: `https://rzp.io/rzp/B30hGumz`,
    },
  },

  {
    id: "18",
    title: "Electric Submersible Pump (ESP) Training",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "10+ Hours",
    format: "Self-Paced",
    level: "Beginner",
    certificate: "Yes",
    overview:
      "A focused ESP training covering fundamentals, installation, operation, troubleshooting, monitoring, and performance optimization.",
    outcomes: [
      "Understand ESP fundamentals & applications",
      "Learn ESP installation, operation & maintenance",
      "Perform ESP sizing, performance calculations & optimization",
      "Use monitoring tools & real-time surveillance",
      "Troubleshoot common ESP failures",
      "Improve production efficiency through ESP optimization",
    ],
    curriculum: [
      "ESP Basics",
      "Installation & Commissioning",
      "Performance Monitoring",
      "Troubleshooting & Case Studies",
    ],
    targetAudience: ["Production engineers", "Field operators", "Students"],
    price: "$100 / ₹7,500",
    image: "/images/esp-training.jpg",
    payment: {
      stripe: `https://buy.stripe.com/bJeaEZeQd8qB9Vc54ZaR51l`,
      razorpay: `https://rzp.io/rzp/UBwl9mt1`,
    },
  },

  {
    id: "19",
    title: "Python in Oil & Gas",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "self-paced",
    duration: "35+ Hours",
    format: "Self-Paced",
    level: "Beginner",
    certificate: "Yes",
    overview:
      "A practical Python program teaching fundamentals through petroleum engineering datasets, analytics, MBAL, IPR, and simulation-related projects.",
    outcomes: [
      "Learn Python fundamentals: loops, functions, data structures",
      "Understand modules, packages & debugging",
      "Perform computing with NumPy & data manipulation with Pandas",
      "Create visualizations using Matplotlib",
      "Analyze reservoir & well log datasets",
      "Perform exploratory data analysis for petroleum datasets",
      "Work on MBAL, IPR & simulation-related Python projects",
      "Apply Python for real engineering workflows",
    ],
    curriculum: [
      "Python Basics",
      "Data Analysis with Pandas",
      "Visualization & Projects",
      "MBAL/IPR Tools",
    ],
    targetAudience: ["Engineers", "Students", "Data enthusiasts"],
    price: "$200 / ₹15,000",
    image: "/images/python-in-oil-gas.jpg",
    payment: {
      stripe: `https://buy.stripe.com/9B65kFeQddKVebs9lfaR51m`,
      razorpay: `https://rzp.io/rzp/11RKRVuq`,
    },
  },

  {
    id: "20",
    title: "Well Completion Training",
    brochure: "https://your-brochure-link.com/file.pdf",
    category: "instructor-led",
    duration: "20+ Hours",
    format: "Live Online",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A comprehensive training on well completion equipment, wellheads, tubing, packers, safety valves, intelligent completions and real-field case studies.",
    outcomes: [
      "Understand fundamentals of well completions",
      "Learn completion components & intervention strategies",
      "Analyze tubing selection, packers & safety valves",
      "Interpret wellhead & Christmas tree configurations",
      "Evaluate reservoir/fluid data for completion design",
      "Gain exposure to intelligent completions",
      "Learn from case-based field examples",
    ],
    curriculum: [
      "Completion Fundamentals",
      "Downhole Components",
      "Completion Design",
      "Intelligent Completions",
      "Case Studies",
    ],
    targetAudience: ["Petroleum engineers", "Completions engineers", "Students"],
    price: "$100 / ₹8,500",
    image: "/images/well-completion-training.jpg",
    payment: {
      stripe: `https://buy.stripe.com/fZu28t5fD36hebs1SNaR51n`,
      razorpay: `https://rzp.io/rzp/a2nOPMUc`,
    },
  },

  {
  id: "21",
  title: "Advanced Drilling Operations & Risk Mitigation",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "5+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Hands-on training in advanced drilling operations focusing on real-time risks, stuck pipe prevention, pressure control, and operational decision-making for safe and efficient well execution.",
  outcomes: [
    "Identify drilling risks and mitigation strategies",
    "Prevent non-productive time through operational planning",
    "Strengthen well control and pressure management skills",
    "Troubleshoot drilling failures and stuck-pipe events",
    "Improve safety and operational efficiency",
    "Apply decision-making tools for complex scenarios"
  ],
  curriculum: [
    "Drilling Risk Fundamentals",
    "Well Control & Pressure Management",
    "Stuck Pipe Prevention",
    "NPT Analysis & Reduction Techniques",
    "Operational Troubleshooting",
    "Decision Making in Critical Situations"
  ],
  targetAudience: ["Drilling engineers", "Field supervisors", "Students"],
  price: "$150 / ₹11,000",
  image: "/images/Advanced Drilling Operations & Risk Mitigation.png",
  payment: {
    stripe: `https://buy.stripe.com/9B63cx6jH9uF5EW40VaR50I`,
    razorpay: `https://rzp.io/rzp/eOv5Ggb`,
  },
},

{
  id: "22",
  title: "Well Test Analysis & Reservoir Modelling using MS Excel",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "10+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "A practical Excel-driven program teaching well test interpretation, production data analysis and reservoir modeling for optimized field performance.",
  outcomes: [
    "Understand reservoir engineering fundamentals",
    "Perform decline curve & pressure transient analysis",
    "Use Excel-based models for optimization",
    "Evaluate reservoir performance and productivity",
    "Strengthen analytical and engineering decision skills"
  ],
  curriculum: [
    "Reservoir Fundamentals",
    "Material Balance Basics",
    "Pressure Transient Analysis",
    "Excel Modelling for Reservoirs",
    "Production Forecasting"
  ],
  targetAudience: ["Reservoir engineers", "Analysts", "Students"],
  price: "$130 / ₹10,000",
  image: "/images/Well Test Analysis & Reservoir Modelling.png",
  payment: {
    stripe: `https://buy.stripe.com/00waEZ23r6it2sK0OJaR50P`,
    razorpay: `https://rzp.io/rzp/7nmMx0a`,
  },
},

{
  id: "23",
  title: "Data Science and Its Application for Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "80+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Full stack data science program featuring data processing, ML, production analytics, and virtual flow modeling using real energy datasets.",
  outcomes: [
    "Perform data cleaning and exploratory analysis",
    "Build ML models for production forecasting",
    "Apply smart monitoring for operations",
    "Run simulations and predictive analysis",
    "Create BI dashboards for asset optimization"
  ],
  curriculum: [
    "Data Handling & Python Basics",
    "Machine Learning Foundations",
    "Reservoir & Production Data Workflows",
    "Operational Forecasting",
    "Real-World Analytics Projects"
  ],
  targetAudience: ["Data analysts", "Energy engineers", "Students"],
  price: "$300 / ₹22,500",
  image: "/images/Data Science for Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/8x28wReQd36hd7o40VaR50Q`,
    razorpay: `https://rzp.io/rzp/Nl6YWPi`,
  },
},

{
  id: "24",
  title: "Machine Learning with Time Series Application for Energy Industry",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Industry-focused program teaching ML-driven time-series forecasting using real field datasets and case studies from drilling and production environments.",
  outcomes: [
    "Apply ML forecasting techniques to oilfield datasets",
    "Analyze operational trends and anomalies",
    "Use Python tools for predictive modeling",
    "Support real-time monitoring and decision intelligence"
  ],
  curriculum: [
    "ML & Time Series Fundamentals",
    "Data Preparation & Feature Engineering",
    "Forecasting Models (ARIMA/LSTM)",
    "Field Case Studies",
    "Deployment Techniques"
  ],
  targetAudience: ["Data analysts", "Energy engineers", "Students"],
  price: "$200 / ₹14,000",
  image: "/images/Machine Learning Time Series for Energy Industry.png",
  payment: {
    stripe: `https://buy.stripe.com/5kQ28teQd6it9Vc7d7aR50R`,
    razorpay: `https://rzp.io/rzp/xViy6Nla`,
  },
},

{
  id: "25",
  title: "Power BI Analytics for Drilling Engineer",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "10+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "A hands-on Power BI program tailored for drilling engineers to analyze field data and drive data-informed operational decisions.",
  outcomes: [
    "Clean and transform drilling datasets",
    "Build dashboards showing ROP, NPT & KPIs",
    "Apply DAX formulas for deeper insights",
    "Support drilling optimization workflows"
  ],
  curriculum: [
    "Power BI Basics",
    "Drilling Data Transformation",
    "Performance Dashboards",
    "KPI Visualization",
    "Case Studies"
  ],
  targetAudience: ["Drilling engineers", "Data analysts", "Students"],
  price: "$150 / ₹9,000",
  image: "/images/Power BI for Drilling Engineers.png",
  payment: {
    stripe: `https://buy.stripe.com/28E4gBgYlfT36J0fJDaR50S`,
    razorpay: `https://rzp.io/rzp/DTl79Ij`,
  },
},

{
  id: "26",
  title: "AI-Powered Excel Automation for Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Learn advanced Excel automation with AI-based tools to speed analysis, create smart dashboards and reduce manual engineering workloads.",
  outcomes: [
    "Automate repetitive engineering workflows",
    "Perform prediction & anomaly tracking in Excel",
    "Build smart dashboards for decisions",
    "Enhance field reporting efficiency"
  ],
  curriculum: [
    "Excel Automation Essentials",
    "AI Tools & Macros",
    "Predictive Modelling",
    "Real-Time Dashboards",
    "Case Workflows"
  ],
  targetAudience: ["Engineers", "Excel analysts", "Students"],
  price: "$150 / ₹11,000",
  image: "/images/AI Excel Automation Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/5kQ00l23r8qBebs2WRaR50T`,
    razorpay: `https://rzp.io/rzp/VUuZhIl`,
  },
},

{
  id: "27",
  title: "Spotfire Analytics for Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "A focused program teaching Spotfire analytics for drilling & production insights, enabling faster decisions using dashboards and trend analysis.",
  outcomes: [
    "Master Spotfire tools and data workflows",
    "Visualize production and drilling insights",
    "Apply analytics to oilfield KPIs",
    "Integrate data sources for monitoring"
  ],
  curriculum: [
    "Spotfire Fundamentals",
    "Data Integration & Cleaning",
    "Dashboarding & Visual Analytics",
    "Operational Case Studies"
  ],
  targetAudience: ["Analysts", "Production teams", "Students"],
  price: "$150 / ₹11,000",
  image: "/images/Spotfire Analytics Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/cNiaEZbE1cGR4AS7d7aR50U`,
    razorpay: `https://rzp.io/rzp/tP1DNcu`,
  },
},

{
  id: "28",
  title: "Petroleum Geomechanics & CCUS",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "5+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "A geomechanics and CCUS-focused program covering stress regime, wellbore stability and safe CO₂ storage for field-scale operations.",
  outcomes: [
    "Understand rock behavior and stress mechanics",
    "Assess stability and failure mechanisms",
    "Evaluate CCUS applications and risks",
    "Use geomechanical software and diagnostics"
  ],
  curriculum: [
    "Geomechanics Principles",
    "Stress Analysis",
    "Wellbore Stability",
    "CCUS Fundamentals",
    "Field Applications"
  ],
  targetAudience: ["Geoscientists", "Drilling engineers", "Students"],
  price: "$100 / ₹8,000",
  image: "/images/Petroleum Geomechanics CCUS.png",
  payment: {
    stripe: `https://buy.stripe.com/4gM4gBazX6itffwapjaR50V`,
    razorpay: `https://rzp.io/rzp/dM7Hkm2e`,
  },
},

{
  id: "29",
  title: "Python for Geophysics Data Processing",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "3+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Python-based geophysical processing program including seismic data handling, visualization and subsurface interpretation workflows.",
  outcomes: [
    "Process seismic and geophysical datasets",
    "Visualize and interpret subsurface structures",
    "Automate workflows for faster insights",
    "Build ML-assisted interpretation projects"
  ],
  curriculum: [
    "Python for Geophysics Basics",
    "Seismic Data Processing",
    "Visualization Techniques",
    "Structural Interpretation"
  ],
  targetAudience: ["Geophysicists", "Python learners", "Students"],
  price: "$150 / ₹11,000",
  image: "/images/Python Geophysics Data Processing.png",
  payment: {
    stripe: `https://buy.stripe.com/4gMdRbcI5eOZc3k0OJaR50W`,
    razorpay: `https://rzp.io/rzp/aYcbqrkq`,
  },
},

{
  id: "30",
  title: "Oil & Gas Forecasting & Predictions using Python",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "35+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Forecasting program using Python time-series workflows for production trend prediction, operational anomaly detection and performance analytics.",
  outcomes: [
    "Clean and analyze oilfield data for modelling",
    "Create forecasting and anomaly detection models",
    "Build dashboards using Python",
    "Strengthen industry-ready analytical skills"
  ],
  curriculum: [
    "Time Series Fundamentals",
    "Python Forecasting Models",
    "Operational Prediction",
    "Production Trend Analysis"
  ],
  targetAudience: ["Students", "Engineers", "Data analysts"],
  price: "$200 / ₹14,000",
  image: "/images/Oil & Gas Forecasting Python.png",
  payment: {
    stripe: `https://buy.stripe.com/28EbJ3fUhbCN4AS54ZaR50X`,
    razorpay: `https://rzp.io/rzp/1uLWuXP`,
  },
},

{
  id: "31",
  title: "Production & Nodal Analysis with Python and ML",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "10+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Learn production system analysis, inflow-outflow modeling, and ML-based prediction for boosting well performance and optimizing artificial lift operations.",
  outcomes: [
    "Perform nodal analysis for well productivity",
    "Model well deliverability with Python",
    "Optimize artificial lift performance",
    "Apply ML models for production forecasting"
  ],
  curriculum: [
    "Nodal Analysis Basics",
    "Python for Well Performance",
    "Artificial Lift Workflows",
    "ML-Based Production Optimization"
  ],
  targetAudience: ["Production engineers", "Analysts", "Students"],
  price: "$250 / ₹20,000",
  image: "/images/Production Nodal Analysis Python ML.png",
  payment: {
    stripe: `https://buy.stripe.com/4gM6oJ37v4algjA40VaR50Y`,
    razorpay: `https://rzp.io/rzp/1HyI5k5`,
  },
},

{
  id: "32",
  title: "Diploma for HSE in Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "80+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Comprehensive diploma focusing on HSE laws, risk management, hazard control and workplace safety tailored to oil & gas operations.",
  outcomes: [
    "Understand regulatory safety standards",
    "Perform hazard and risk assessments",
    "Apply emergency response strategies",
    "Implement safe field operations"
  ],
  curriculum: [
    "HSE Standards & Regulations",
    "Risk Assessment & Mitigation",
    "Emergency Response Planning",
    "Occupational Safety Systems"
  ],
  targetAudience: ["HSE engineers", "Supervisors", "Students"],
  price: "$300 / ₹24,000",
  image: "/images/Diploma HSE Oil Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/cNidRb8rP6it0kCeFzaR50Z`,
    razorpay: `https://rzp.io/rzp/55gplkKz`,
  },
},

{
  id: "33",
  title: "Fundamentals to Advance Well Control",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "15+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Master well control concepts including kick detection, BOP operations, drilling fluid pressure balance and emergency response following IADC/IWCF standards.",
  outcomes: [
    "Understand pressure principles for well control",
    "Detect kick warning indicators correctly",
    "Apply BOP operations and safety procedures",
    "Improve emergency decision-making"
  ],
  curriculum: [
    "Well Pressure Fundamentals",
    "Kick Detection & Response",
    "BOP Systems & Operations",
    "Emergency Handling"
  ],
  targetAudience: ["Drilling engineers", "Toolpushers", "Students"],
  price: "$150 / ₹10,500",
  image: "/images/Advanced Well Control Training.png",
  payment: {
    stripe: `https://buy.stripe.com/3cI14p37vbCN5EW0OJaR510`,
    razorpay: `https://rzp.io/rzp/vuEqzOe2`,
  },
},

{
  id: "34",
  title: "Extended Reach Drilling (ERD)",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "5+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Learn ERD planning, directional methods, risk control, and hydraulic optimization for long-reach well execution.",
  outcomes: [
    "Understand ERD planning and design requirements",
    "Reduce torque & drag challenges",
    "Conduct trajectory strategy & survey analysis",
    "Perform field-risk assessments"
  ],
  curriculum: [
    "ERD Principles & Applications",
    "Directional Techniques",
    "Hydraulics Optimization",
    "Case Studies"
  ],
  targetAudience: ["Drilling engineers", "Students"],
  price: "$150 / ₹10,500",
  image: "/images/Extended Reach Drilling Training.png",
  payment: {
    stripe: `https://buy.stripe.com/cNicN7bE16itc3kcxraR511`,
    razorpay: `https://rzp.io/rzp/FCgqej5`,
  },
},

{
  id: "35",
  title: "Analytics for Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "35+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Learn data analytics to optimize production, prevent failures, reduce operational costs and support strategic field decisions.",
  outcomes: [
    "Analyze operational performance",
    "Apply predictive maintenance techniques",
    "Forecast reservoir and production performance",
    "Perform risk mitigation and asset optimization"
  ],
  curriculum: [
    "Analytics Fundamentals",
    "Performance Insights",
    "Forecasting Models",
    "Asset Optimization Case Work"
  ],
  targetAudience: ["Engineers", "Analysts", "Managers"],
  price: "$200 / ₹15,000",
  image: "/images/Oil & Gas Analytics Course.png",
  payment: {
    stripe: `https://buy.stripe.com/fZu00l23r7mx6J02WRaR512`,
    razorpay: `https://rzp.io/rzp/Bmf3HWN`,
  },
},

{
  id: "36",
  title: "Artificial Lift Modelling, Reservoir Deliverability & Well Performance",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "7+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Practical production engineering course covering inflow performance, artificial lift modeling and lift method selection for optimized output.",
  outcomes: [
    "Analyze reservoir deliverability",
    "Design ESP, SRP, Gas Lift & Plunger Lift",
    "Evaluate lift economics for decision-making",
    "Optimize well performance"
  ],
  curriculum: [
    "Inflow Performance",
    "Artificial Lift Modelling",
    "Economic Evaluation",
    "Optimization Strategies"
  ],
  targetAudience: ["Production engineers", "Students"],
  price: "$45 / ₹4,000",
  image: "/images/Artificial Lift Deliverability Performance.png",
  payment: {
    stripe: `https://buy.stripe.com/dRm4gB6jH22d0kC54ZaR513`,
    razorpay: `https://rzp.io/rzp/vDKmPtL`,
  },
},

{
  id: "37",
  title: "Reservoir Engineering Modelling & Flow Simulation",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "7+ Hours",
  format: "Self-Paced",
  level: "Beginner",
  certificate: "Yes",
  overview:
    "Hands-on training on reserves estimation, dynamic modeling and 3D flow simulation for reservoir performance evaluation.",
  outcomes: [
    "Assess hydrocarbon reserves",
    "Perform dynamic simulation analysis",
    "Understand flow behavior in reservoir models",
    "Plan real-world field development actions"
  ],
  curriculum: [
    "Reservoir Modelling Basics",
    "Simulation Concepts",
    "Model Initialization",
    "Flow Simulation Techniques"
  ],
  targetAudience: ["Reservoir engineers", "Students"],
  price: "$40 / ₹2,500",
  image: "/images/Reservoir Modelling Flow Simulation.png",
  payment: {
    stripe: `https://buy.stripe.com/7sY7sNdM9dKV0kCfJDaR514`,
    razorpay: `https://rzp.io/rzp/0XdSJcp`,
  },
},

{
  id: "38",
  title: "Power BI Essentials for Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Power BI training tailored to drilling and production operations with real-time dashboards for performance tracking and reservoir insights.",
  outcomes: [
    "Build well and reservoir dashboards",
    "Visualize drilling KPIs and bottlenecks",
    "Apply DAX for advanced interpretations",
    "Integrate multiple data sources"
  ],
  curriculum: [
    "Power BI Fundamentals",
    "Drilling & Production Data Analysis",
    "DAX & Performance Insights",
    "Operational Dashboards"
  ],
  targetAudience: ["Data analysts", "Engineers", "Students"],
  price: "$150 / ₹10,000",
  image: "/images/Power BI Essentials Oil Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/8x26oJcI5fT3aZg7d7aR515`,
    razorpay: `https://rzp.io/rzp/jNCAZZMX`,
  },
},

{
  id: "39",
  title: "Geomechanics & Its Application in Drilling and Completion",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "10+ Hours",
  format: "Self-Paced",
  level: "Intermediate",
  certificate: "Yes",
  overview:
    "Learn rock properties, wellbore stability assessment and field techniques to reduce drilling and completion risks using geomechanics.",
  outcomes: [
    "Understand rock mechanics fundamentals",
    "Analyze stability and failure risks",
    "Apply geomechanics for drilling optimization",
    "Use case-based troubleshooting"
  ],
  curriculum: [
    "Rock Mechanics Essentials",
    "Wellbore Stability Modeling",
    "Geomechanics in Completions",
    "Field Troubleshooting Studies"
  ],
  targetAudience: ["Drilling engineers", "Geoscientists", "Students"],
  price: "$100 / ₹7,500",
  image: "/images/Geomechanics Drilling Completion.png",
  payment: {
    stripe: `https://buy.stripe.com/8x2cN78rPeOZ5EW0OJaR516`,
    razorpay: `https://rzp.io/rzp/NU8mAzk`,
  },
},

{
  id: "40",
  title: "Integrated Insights: SQL, Power BI & Tableau for Oil & Gas Analytics",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Beginner",
  certificate: "Yes",
  overview:
    "Complete energy analytics training with database querying, BI visualization and technical storytelling for operational excellence.",
  outcomes: [
    "Write SQL queries for field datasets",
    "Create BI dashboards for insights",
    "Perform advanced filtering & transformations",
    "Strengthen data-driven decision skills"
  ],
  curriculum: [
    "SQL for Energy Data",
    "Power BI Fundamentals",
    "Tableau Visualization",
    "Integrated Analytics Workflows"
  ],
  targetAudience: ["Analysts", "Students", "Managers"],
  price: "$150 / ₹12,000",
  image: "/images/SQL PowerBI Tableau OilGas.png",
  payment: {
    stripe: `https://buy.stripe.com/dRm8wRazX6it7N4eFzaR517`,
    razorpay: `https://rzp.io/rzp/7Sqvi2YU`,
  },
},

{
  id: "41",
  title: "Diploma in Machine Learning for Oil & Gas",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  overview:
    "Learn practical ML workflows with oil & gas datasets to develop predictive models, detect anomalies, and optimize field operations.",
  outcomes: [
    "Build ML models for prediction & risk detection",
    "Perform preprocessing and feature engineering",
    "Integrate BI visualization for reporting",
    "Work on real-world oilfield datasets"
  ],
  curriculum: [
    "Python & ML Fundamentals",
    "Reservoir & Production Data ML",
    "Anomaly Detection Models",
    "Capstone Project"
  ],
  targetAudience: ["Students", "Analysts", "Engineers"],
  price: "$300 / ₹22,500",
  image: "/images/Diploma ML Oil Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/fZucN7azXeOZgjA54ZaR518`,
    razorpay: `https://rzp.io/rzp/k0lOLYXh`,
  },
},

{
  id: "42",
  title: "Integrated Oil & Gas Analytics Using Big Data",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "50+ Hours",
  format: "Self-Paced",
  level: "Advanced",
  certificate: "Yes",
  overview:
    "Master big data and analytics across the entire oil & gas value chain using ML, time-series forecasting and market analytics techniques.",
  outcomes: [
    "Apply big data tools across Upstream & Midstream",
    "Perform demand & consumption forecasting",
    "Analyze storage and transportation efficiency",
    "Complete lifecycle analytics projects"
  ],
  curriculum: [
    "Big Data Fundamentals",
    "Market & Demand Forecasting",
    "Midstream Operations Analytics",
    "Full Asset Lifecycle Capstone"
  ],
  targetAudience: ["Data scientists", "Energy analysts", "Managers"],
  price: "$300 / ₹17,500",
  image: "/images/Big Data Oil Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/28E00l37v36h2sKfJDaR519`,
    razorpay: `https://rzp.io/rzp/ZVF76Sai`,
  },
},

{
  id: "43",
  title: "Diploma in Petroleum Project Management & Field Development Economics",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "60+ Hours",
  format: "Self-Paced",
  level: "Beginner to Professional",
  certificate: "Yes",
  overview:
    "Develop core project management and petroleum economics skills to support major capital projects and field development workflows.",
  outcomes: [
      "Perform economic evaluation of petroleum projects",
      "Apply risk management methodologies",
      "Use project scheduling tools and concepts",
      "Understand petroleum project lifecycle"
  ],
  curriculum: [
      "Project Management Principles",
      "Economic Evaluation & Cash Flow Models",
      "Risk & Stakeholder Management",
      "Field Development Planning"
  ],
  targetAudience: ["Project engineers", "Analysts", "Students"],
  price: "$300 / ₹22,500",
  image: "/images/Petroleum Project Management Diploma.png",
  payment: {
      stripe: `https://buy.stripe.com/6oUeVf7nL0Y9gjAapjaR51a`,
      razorpay: `https://rzp.io/rzp/2ep8Kki`,
  },
},

{
  id: "44",
  title: "Machine Learning & Python Applications for Petrophysics",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "28+ Hours",
  format: "Self-Paced",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  overview:
    "Hands-on ML for subsurface data including well logs, facies classification and reservoir property prediction using Python workflows.",
  outcomes: [
      "Analyze well logs using Python",
      "Predict permeability & saturation",
      "Perform facies classification",
      "Evaluate reservoir heterogeneity"
  ],
  curriculum: [
      "Petrophysics Data Workflows",
      "ML for Reservoir Properties",
      "Facies & Cluster Analysis",
      "Well Log Interpretation"
  ],
  targetAudience: ["Petrophysicists", "Students", "Analysts"],
  price: "$150 / ₹12,000",
  image: "/images/ML Petrophysics Python.png",
  payment: {
      stripe: `https://buy.stripe.com/8x29AVdM95ep4AS2WRaR51b`,
      razorpay: `https://rzp.io/rzp/BxIDiV8`,
  },
},

{
  id: "45",
  title: "Mastering Machine Learning for Enhanced Production & Reservoir Forecasting Analytics",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  overview:
    "Master ML applications for PCP, SRP and ESP performance optimization and reservoir forecasting using field datasets.",
  outcomes: [
      "Optimize artificial lift performance with ML",
      "Build models for production forecasting",
      "Detect anomalies and failures efficiently",
      "Apply ML for reservoir behavior analysis"
  ],
  curriculum: [
      "Production Data Analytics",
      "ML Models for Well Performance",
      "Lift Method Optimization",
      "Forecasting Case Studies"
  ],
  targetAudience: ["Production engineers", "Analysts"],
  price: "$150 / ₹12,000",
  image: "/images/ML Production Reservoir Forecasting.png",
  payment: {
      stripe: `https://buy.stripe.com/8x228teQdbCNgjAcxraR51c`,
      razorpay: `https://rzp.io/rzp/zAZ4a5Y`,
  },
},

{
  id: "46",
  title: "Petroleum Field Development Planning from Concept to Execution",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "7+ Hours",
  format: "Self-Paced",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  overview:
    "Learn full FDP lifecycle from discovery to execution including reserves evaluation, development scheme design and economic screening.",
  outcomes: [
      "Analyze exploration & reservoir datasets",
      "Develop field development strategies",
      "Plan drilling & facilities layout",
      "Create economic comparison models"
  ],
  curriculum: [
      "Field Development Lifecycle",
      "Reserves Evaluation",
      "Well Planning & Facilities",
      "Economics for Project Screening"
  ],
  targetAudience: ["Reservoir engineers", "Students", "Planning teams"],
  price: "$150 / ₹10,000",
  image: "/images/Petroleum Field Development Planning.png",
  payment: {
      stripe: `https://buy.stripe.com/fZu4gBfUh5epc3keFzaR51d`,
      razorpay: `https://rzp.io/rzp/NlG3vYz`,
  },
},

{
  id: "47",
  title: "Production Forecasting & Well Performance Optimization Using Python & Machine Learning",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "20+ Hours",
  format: "Self-Paced",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  overview:
    "Practical training on ML-based production optimization including time-series modelling, choke management and anomaly detection.",
  outcomes: [
      "Build ARIMA & LSTM forecasting models",
      "Visualize well performance data",
      "Detect operational anomalies",
      "Support field optimization workflows"
  ],
  curriculum: [
      "Python for Production Data",
      "ML Forecasting Techniques",
      "Optimization & Choke Strategy",
      "Monitoring & Anomaly Alerts"
  ],
  targetAudience: ["Students", "Data analysts", "Engineers"],
  price: "$150 / ₹12,000",
  image: "/images/Production Forecasting Python ML.png",
  payment: {
      stripe: `https://buy.stripe.com/5kQ14p9vT4alaZgfJDaR51e`,
      razorpay: `https://rzp.io/rzp/0d7ulzd`,
  },
},

{
  id: "48",
  title: "Advanced Python for Reservoir, Production & Petrophysics",
  brochure: "https://your-brochure-link.com/file.pdf",
  category: "self-paced",
  duration: "16+ Hours",
  format: "Self-Paced",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  overview:
    "Advanced practical training to use Python for reservoir simulation, production analytics, well log processing and petrophysical ML models.",
  outcomes: [
      "Process multi-well production datasets",
      "Apply ML for reservoir prediction",
      "Interpret well logs with AI workflows",
      "Support decision-driven well placement"
  ],
  curriculum: [
      "Advanced Python Workflows",
      "Reservoir Simulation Interfaces",
      "Well Log Analytics",
      "Petrophysics ML Models"
  ],
  targetAudience: ["Reservoir engineers", "Petrophysicists", "Students"],
  price: "$150 / ₹11,000",
  image: "/images/Advanced Python Reservoir Petrophysics.png",
  payment: {
      stripe: `https://buy.stripe.com/4gM14p0ZnfT3aZg40VaR51f`,
      razorpay: `https://rzp.io/rzp/f1nUjX7V`,
  },
},

];


const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);

  const allPrograms = useMemo(() => {
    return [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
  }, []);

  const program = allPrograms.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Course not found</h2>
          <p className="text-gray-600 mb-6">Please go back and try again.</p>
          <button onClick={() => navigate(-1)} className="bg-blue-600 text-white px-4 py-2 rounded">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handlePay = (method) => {
    const link = program.payment?.[method];
    if (!link) return alert("Payment link missing.");
    if (user) return window.open(link, "_blank");

    setRedirectTo(link);
    setAuthOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* -----------------------------
          HERO IMAGE BANNER SECTION
      ------------------------------*/}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

        {/* Title inside hero */}
        <div className="absolute bottom-6 left-6 text-white max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold">{program.title}</h1>
          <p className="text-gray-200 mt-2 max-w-2xl">{program.overview}</p>

          {/* Download Brochure */}
          <a
            href={program.brochure || "#"}
            target="_blank"
            className="inline-flex items-center gap-2 mt-4 bg-white/90 hover:bg-white text-black px-5 py-2 rounded-lg text-sm font-semibold shadow"
          >
            <Download size={18} />
            Download Brochure
          </a>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-700 mb-6">
          <ArrowLeft size={18} /> Back
        </button>

        {/* Course Info Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Stat icon={Clock} label="Duration" value={program.duration} />
          <Stat icon={BookOpen} label="Format" value={program.format} />
          <Stat icon={Award} label="Level" value={program.level} />
          <Stat icon={Users} label="Certificate" value={program.certificate} />
        </div>

        {/* WHAT YOU WILL LEARN */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {program.outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2"></span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CURRICULUM */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
          <div className="space-y-3">
            {program.curriculum.map((c, i) => (
              <div key={i} className="bg-white shadow-sm border p-4 rounded-xl">
                <strong>{c}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* TARGET AUDIENCE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who should attend</h2>
          <div className="flex flex-wrap gap-2">
            {program.targetAudience.map((a, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {a}
              </span>
            ))}
          </div>
        </section>

        {/* PAYMENT SECTION */}
        <section className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-teal-600">{program.price}</div>
            <div className="text-sm text-gray-500">One-time payment</div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => handlePay("stripe")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Pay with Stripe
            </button>
            <button
              onClick={() => handlePay("razorpay")}
              className="bg-white border px-5 py-2 rounded-lg font-semibold hover:bg-gray-50"
            >
              Pay with Razorpay
            </button>
          </div>
        </section>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} redirectTo={redirectTo} program={program} />
    </div>
  );
};

export default CourseDetails;

// -----------------------------------
const Stat = ({ icon: Icon, label, value }) => (
  <div className="bg-white shadow-sm border rounded-xl p-4 flex items-center gap-3">
    <Icon className="text-blue-600" size={22} />
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);
