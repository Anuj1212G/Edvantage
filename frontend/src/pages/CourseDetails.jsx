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
      stripe: `https://stripe.example.com/pay/1`,
      razorpay: `https://razorpay.example.com/pay/1`,
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
      stripe: `https://stripe.example.com/pay/2`,
      razorpay: `https://razorpay.example.com/pay/2`,
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
      stripe: `https://stripe.example.com/pay/3`,
      razorpay: `https://razorpay.example.com/pay/3`,
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
      stripe: `https://stripe.example.com/pay/4`,
      razorpay: `https://razorpay.example.com/pay/4`,
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
      stripe: `https://stripe.example.com/pay/5`,
      razorpay: `https://razorpay.example.com/pay/5`,
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
      stripe: `https://stripe.example.com/pay/6`,
      razorpay: `https://razorpay.example.com/pay/6`,
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
      stripe: `https://stripe.example.com/pay/7`,
      razorpay: `https://razorpay.example.com/pay/7`,
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
      stripe: `https://stripe.example.com/pay/8`,
      razorpay: `https://razorpay.example.com/pay/8`,
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
      stripe: `https://stripe.example.com/pay/9`,
      razorpay: `https://razorpay.example.com/pay/9`,
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
      stripe: `https://stripe.example.com/pay/10`,
      razorpay: `https://razorpay.example.com/pay/10`,
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
      stripe: `https://stripe.example.com/pay/11`,
      razorpay: `https://razorpay.example.com/pay/11`,
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
      stripe: `https://stripe.example.com/pay/12`,
      razorpay: `https://razorpay.example.com/pay/12`,
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
      stripe: `https://stripe.example.com/pay/13`,
      razorpay: `https://razorpay.example.com/pay/13`,
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
      stripe: `https://stripe.example.com/pay/14`,
      razorpay: `https://razorpay.example.com/pay/14`,
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
      stripe: `https://stripe.example.com/pay/15`,
      razorpay: `https://razorpay.example.com/pay/15`,
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
      stripe: `https://stripe.example.com/pay/16`,
      razorpay: `https://razorpay.example.com/pay/16`,
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
      stripe: `https://stripe.example.com/pay/17`,
      razorpay: `https://razorpay.example.com/pay/17`,
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
      stripe: `https://stripe.example.com/pay/18`,
      razorpay: `https://razorpay.example.com/pay/18`,
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
      stripe: `https://stripe.example.com/pay/19`,
      razorpay: `https://razorpay.example.com/pay/19`,
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
      stripe: `https://stripe.example.com/pay/20`,
      razorpay: `https://razorpay.example.com/pay/20`,
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
