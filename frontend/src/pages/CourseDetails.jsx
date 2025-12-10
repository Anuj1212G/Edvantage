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
    brochure: "https://drive.google.com/file/d/1nVygUvzUnF2WOHcmuIeNIxTh_b-QKOLw/view?usp=drive_link",
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
    image: "/images/Directional Drilling.jpg",
    payment: {
      stripe: `https://buy.stripe.com/bJe8wRfUh9uF0kC8hbaR50C`,
      razorpay: `https://rzp.io/rzp/dw3i8KWL`,
    },
  },

  {
    id: "2",
    title: "Evaluating Unconventional Resources Using Decline Curve Analysis & Horizontal Well Fracturing",
    brochure: "https://drive.google.com/file/d/13MF1q-CU9s_Ujo7u6YDsqtDK_ANIfzAX/view?usp=drive_link",
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
    image: "/images/Evaluating Unconventional Resources Using Decline Curves Analysis, Optimizing Production Using Horizontal Well Fracturing.png",
    payment: {
      stripe: `https://buy.stripe.com/4gMfZj6jH8qBc3k0OJaR50E`,
      razorpay: `https://rzp.io/rzp/YMzgvy7`,
    },
  },

  {
    id: "3",
    title: "Reserves Estimation & Classification",
    brochure: "https://drive.google.com/file/d/1_I2t7h6Ztb07g1iu3U9ZmDKz9v7HFzFw/view?usp=drive_link",
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
    image: "/images/Reserve Estimation & Classification.jpg",
    payment: {
      stripe: `https://buy.stripe.com/3cIdRb9vT9uF1oG0OJaR50F`,
      razorpay: `https://rzp.io/rzp/MKrRo2R`,
    },
  },

  {
    id: "4",
    title: "Sequence Stratigraphy in the Era of Digitalization",
    brochure: "https://drive.google.com/file/d/1_RZnIlLklEQulDByJhYT5aAKlqzOyuP8/view?usp=drive_link",
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
    image: "/images/Sequence Stratigraphy in the era of Digitalization.png",
    payment: {
      stripe: `https://buy.stripe.com/5kQ9AVgYlgX7ebsdBvaR50G`,
      razorpay: `https://rzp.io/rzp/9tBFwWG`,
    },
  },

  {
    id: "5",
    title: "Well Intervention, Fishing & Smart Completions",
    brochure: "https://drive.google.com/file/d/17gS6s80wT6odieVgYLlPdMTX63O-GpE8/view?usp=drive_link",
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
    image: "/images/Well Intervention, Fishing & Smart Completions.jpg",
    payment: {
      stripe: `https://buy.stripe.com/4gM5kF23rgX70kC40VaR50H`,
      razorpay: `https://rzp.io/rzp/2OB3XZSk`,
    },
  },

  {
    id: "6",
    title: "Advance Well Engineering",
    brochure: "https://drive.google.com/file/d/1a4W8zNIyL1dkHI-YeAP_gsQWkJNVFKXJ/view?usp=drive_link",
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
    image: "/images/Advance Well Engineering.jpg",
    payment: {
      stripe: `https://buy.stripe.com/9B63cx6jH9uF5EW40VaR50I`,
      razorpay: `https://rzp.io/rzp/eOv5Ggb`,
    },
  },

  {
    id: "7",
    title: "Reservoir Surveillance & Tight Reservoir Management",
    brochure: "https://drive.google.com/file/d/14tk2LFIneWO8of7Z-gOt67DrNSJmf68_/view?usp=drive_link",
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
    image: "/images/Reservoir Surveillance & Tight Reservoir.jpg",
    payment: {
      stripe: `https://buy.stripe.com/eVq00lgYl0Y92sK9lfaR50J`,
      razorpay: `https://rzp.io/rzp/VTsA8qwE`,
    },
  },

  {
    id: "8",
    title: "Learn Energy Data Analytics From Scratch",
    brochure: "https://drive.google.com/file/d/1vR6-Q-qQgNwgsiQ8TwCSO4bhqa6MKT9B/view?usp=drive_link",
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
    image: "/images/Learn Energy Data Analytics from Scratch.png",
    payment: {
      stripe: `https://buy.stripe.com/6oU9AVdM9gX75EW7d7aR50K`,
      razorpay: `https://rzp.io/rzp/pjv1YOrZ`,
    },
  },

  {
    id: "9",
    title: "Well Planning, Deepwater Design & Engineering",
    brochure: "https://drive.google.com/file/d/1ZllJqbXMqREzJLzqe7o20Qj9LCvZ1ysi/view?usp=drive_link",
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
    image: "/images/Well planning, deepwater Design and engineering.jpg",
    payment: {
      stripe: `https://buy.stripe.com/aFa3cx0ZneOZ6J0dBvaR50L`,
      razorpay: `https://rzp.io/rzp/ZQ58xzh`,
    },
  },

  {
    id: "10",
    title: "Drilling Analytics from Scratch",
    brochure: "https://drive.google.com/file/d/1yJ0Vu71JQ3IXeIaLdWU8S4ayO8Mj6WfL/view?usp=drive_link",
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
    image: "/images/Drilling Analytics From Scratch.jpg",
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
    brochure: "https://drive.google.com/file/d/1qAfjtkQreYLHFen_tJEpSrVcHgRl1IL-/view?usp=drive_link",
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
    image: "/images/Deep Learning For Oil and Gas Applications.webp",
    payment: {
      stripe: `https://buy.stripe.com/8x2cN723rgX72sKgNHaR50N`,
      razorpay: `https://rzp.io/rzp/jsQQEt7`,
    },
  },

  {
    id: "12",
    title: "Oil & Gas Software Development Using Python",
    brochure: "https://drive.google.com/file/d/1MQ2_BiStdELEt1OlxkehGOOVZJzw2R0Y/view?usp=drive_link",
    category: "self-paced",
    duration: "28+ Hours",
    format: "Self Pacced",
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
    image: "/images/Oil and Gas Software Development Using Python.jpg",
    payment: {
      stripe: `https://buy.stripe.com/28E6oJ0ZncGRgjAgNHaR50O`,
      razorpay: `https://rzp.io/rzp/Nign9Y28`,
    },
  },

  {
    id: "13",
    title: "Mastering Reservoir Engineering: From Basics to Software-Driven Solutions",
    brochure: "https://drive.google.com/file/d/1uWjxoD9xCy7c_TjgseDW1p8AZ8lEk1VT/view?usp=drive_link",
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
    image: "/images/Mastering Reservoir Engineering from Basics to Software-Driven Solutions.jpg",
    payment: {
      stripe: `https://buy.stripe.com/aFa5kF37vbCNd7o0OJaR51g`,
      razorpay: `https://rzp.io/rzp/xTxrIbQ`,
    },
  },

  {
    id: "14",
    title: "Master Oil & Gas Production Optimization with AI & Machine Learning",
    brochure: "https://drive.google.com/file/d/1l6cctqldVyVo-k7dLeCgBDhD__xRjA5l/view?usp=drive_link",
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
    image: "/images/Master Oil & Gas Production Optimization with AI and ML.jpg",
    payment: {
      stripe: `https://buy.stripe.com/28EbJ3dM9eOZc3k7d7aR51h`,
      razorpay: `https://rzp.io/rzp/8LpGoT6W`,
    },
  },

  {
    id: "15",
    title: "Oil & Gas Forecasting & Predictions Using Time Series Analysis",
    brochure: "https://drive.google.com/file/d/1D_FAxB6sDTgIzs0Hx-E4oJtemTuJ8WT-/view?usp=drive_link",
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
    image: "/images/Oil & Gas Forecasting & Predictions using time series analysis.jpeg",
    payment: {
      stripe: `https://buy.stripe.com/14AdRb9vT22d6J0cxraR51i`,
      razorpay: `https://rzp.io/rzp/3OmwE9e`,
    },
  },

  {
    id: "16",
    title: "PVT Modelling and Advanced Fluid Characterization",
    brochure: "https://drive.google.com/file/d/16wN1I2maQuWCatOg6RIFIQwlBhRBV-PB/view?usp=drive_link",
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
    image: "/images/PVT Modeling & Advanced Fluid Characterization.png",
    payment: {
      stripe: `https://buy.stripe.com/8x2cN74bz8qB8R854ZaR51j`,
      razorpay: `https://rzp.io/rzp/edTLw7i`,
    },
  },

  {
    id: "17",
    title: "Data Analytics & Visualisation Using Power BI for Oil & Gas",
    brochure: "https://drive.google.com/file/d/1ZQ0zNnE4FI4q2Zi6BQgTEpVh-9l2pwaB/view?usp=drive_link",
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
    image: "/images/Data Analytics & Visualization using Power BI for Oil & Gas.png",
    payment: {
      stripe: `https://buy.stripe.com/5kQ3cx0ZneOZ2sK40VaR51k`,
      razorpay: `https://rzp.io/rzp/B30hGumz`,
    },
  },

  {
    id: "18",
    title: "Electric Submersible Pump (ESP) Training",
    brochure: "https://drive.google.com/file/d/1scytw08Y51JDKz-1R5_2YZrDfbIC3uhJ/view?usp=drive_link",
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
    image: "/images/Electric Submersible Pump (ESP) Fundamental.webp",
    payment: {
      stripe: `https://buy.stripe.com/bJeaEZeQd8qB9Vc54ZaR51l`,
      razorpay: `https://rzp.io/rzp/UBwl9mt1`,
    },
  },

  {
    id: "19",
    title: "Python in Oil & Gas",
    brochure: "https://drive.google.com/file/d/1ulKfYO9M-3dt77SsMDo9U8PbZpIaGSDY/view?usp=drive_link",
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
    image: "/images/Python in Oil & Gas.webp",
    payment: {
      stripe: `https://buy.stripe.com/9B65kFeQddKVebs9lfaR51m`,
      razorpay: `https://rzp.io/rzp/11RKRVuq`,
    },
  },

  {
    id: "20",
    title: "Well Completion Training",
    brochure: "https://drive.google.com/file/d/1MfeqXE_CkSnx1A-dT49MGDuVbr4Gju0-/view?usp=drive_link",
    category: "self-paced",
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
    image: "/images/Well Completion.jpg",
    payment: {
      stripe: `https://buy.stripe.com/fZu28t5fD36hebs1SNaR51n`,
      razorpay: `https://rzp.io/rzp/a2nOPMUc`,
    },
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////
 {
  id: "21",
  title: "Advanced Drilling Operations & Risk Mitigation",
  brochure: "https://drive.google.com/file/d/1BLrUYOHU6hV4C53Ll2mGwexc1yIzd0XV/view?usp=drive_link",
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
  "Introduction to Advanced Drilling Operations",
  "Stuck Pipe Prevention & Real-Time Indicators",
  "Well Control Fundamentals & Unconventional Scenarios",
  "Wellbore Instability: Causes, Indicators & Mitigation",
  "Lost Circulation: Mechanisms, Field Indicators & Prevention",
  "Vertical Drilling Deviation: Detection, Consequences & Correction",
  "Hole Cleaning Essentials & Immediate Corrective Actions",
  "BHA Failure Analysis & Fatigue Prevention",
  "Mud and Cement Contamination: Identification & Countermeasures",
  "Human Factors, Crew Communication & Operational Discipline",
  "Risk Mitigation Strategies for Reducing NPT",
  "Case Studies, Group Exercises & Scenario-Based Problem Solving"
],
targetAudience: [
  "Final-year petroleum engineering students",
  "Final-year mechanical engineering students",
  "Junior drilling engineers",
  "Assistant drilling engineers",
  "Rig supervisors",
  "Drilling operations staff",
  "Wellsite engineers",
  "Field engineers seeking drilling troubleshooting skills",
  "Professionals transitioning into drilling & well operations"
],
  price: "$150 / ₹11,000",
  image: "/images/Advanced Drilling Operations & Risk Mitigation.webp",
  payment: {
    stripe: `https://buy.stripe.com/9B63cx6jH9uF5EW40VaR50I`,
    razorpay: `https://rzp.io/rzp/eOv5Ggb`,
  },
},

{
  id: "22",
  title: "Well Test Analysis & Reservoir Modelling using MS Excel",
  brochure: "https://drive.google.com/file/d/1h1b8aF4yDPkPYjshxCBMxSrTVQJMThwv/view?usp=drive_link",
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
  "Introduction to Reservoir Engineering & Fluid Properties",
  "PVT Analysis & Excel-Based Data Interpretation",
  "Material Balance Principles & Reservoir Performance Evaluation",
  "Material Balance Calculations for Oil Reservoirs",
  "Production Data Analysis & Decline Curve Modeling in Excel",
  "Forecasting Reservoir Performance Using Decline Models",
  "Pressure Transient Analysis & Well Test Interpretation",
  "Excel-Based Calculation of Permeability, Skin & Drainage Radius",
  "Reservoir Characterization & Surveillance Methods",
  "Production Optimization Fundamentals",
  "Excel-Based Nodal Analysis & System Bottleneck Identification",
  "Real-World Case Studies & Hands-On Excel Exercises"
],

  targetAudience: [
  "Petroleum engineers",
  "Reservoir engineers",
  "Production engineers",
  "Petroleum engineering students",
  "Geoscience students and professionals",
  "Early-career upstream engineers seeking practical reservoir skills",
  "Oil & gas professionals wanting to improve well test analysis abilities",
  "Engineers looking to strengthen Excel-based reservoir modeling skills"
],
  price: "$130 / ₹10,000",
  image: "/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg",
  payment: {
    stripe: `https://buy.stripe.com/00waEZ23r6it2sK0OJaR50P`,
    razorpay: `https://rzp.io/rzp/7nmMx0a`,
  },
},

{
  id: "23",
  title: "Data Science and Its Application for Oil & Gas",
  brochure: "https://drive.google.com/file/d/1aiB2wHKnSxsZXHgiLhY5wwkn0FTdpULF/view?usp=drive_link",
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
  // ------------------ MODULE 1: Statistics ------------------
  "Sample vs Population Data",   // :contentReference[oaicite:0]{index=0}
  "Descriptive Statistics: Measures of central tendency, asymmetry & variability",  // :contentReference[oaicite:1]{index=1}
  

  // ------------------ MODULE 2: Python Fundamentals ------------------
  "Introduction to Python & programming basics",  // :contentReference[oaicite:4]{index=4}
  "Data types, variables, I/O operations, operators",  // :contentReference[oaicite:5]{index=5}
  

  // ------------------ MODULE 3: SQL & Database Management ------------------
  "Introduction to SQL, syntax, commands & queries",  // :contentReference[oaicite:9]{index=9}
  "Data types, operators, expressions & comments",  // :contentReference[oaicite:10]{index=10}
  

  // ------------------ MODULE 4: Data Analytics ------------------
  "Power BI introduction for analytics",  // :contentReference[oaicite:12]{index=12}
  "AI & ML introduction",  // :contentReference[oaicite:13]{index=13}
  
  

  // ------------------ MODULE 5: Data Mining ------------------
  "CRISP-DM workflow & modelling steps",  // :contentReference[oaicite:20]{index=20}
  "SPSS for data modelling, testing & assessment",  // :contentReference[oaicite:21]{index=21}
  
  

  // ------------------ MODULE 6: Deep Learning (TensorFlow & Keras) ------------------
  "Introduction to AI & Deep Learning",  // :contentReference[oaicite:26]{index=26}
  "Convolutional Neural Networks (CNN)",  // :contentReference[oaicite:27]{index=27}
  

  // ------------------ MODULE 7: Applied Oil & Gas ML Projects ------------------
  "Geoscience: Facies classification, well log prediction",  // :contentReference[oaicite:31]{index=31}
  "Reservoir: PVT estimation",  // :contentReference[oaicite:32]{index=32}
  

  // ------------------ MODULE 8: Reservoir Engineering in Python ------------------
  "Well test analysis: Drawdown & buildup",  // :contentReference[oaicite:36]{index=36}
  "1D reservoir simulation using Klinkenberg effects",  // :contentReference[oaicite:37]{index=37}
  
 

  // ------------------ FINAL PROJECTS ------------------
  "AI & ML research project (Oil & Gas use-case)",  // :contentReference[oaicite:43]{index=43}
  "Data science capstone project with real datasets",  // :contentReference[oaicite:44]{index=44}
],

   targetAudience: [
  "Undergraduate petroleum engineering students",
  "Graduate students in petroleum, geology, or mechanical engineering",
  "Working professionals in the energy sector",
  "Petroleum engineers seeking data science upskilling",
  "Geoscientists and reservoir engineers exploring ML/AI applications",
  "Mechanical engineers transitioning into oil & gas data roles",
  "Fresh graduates looking to enter energy analytics",
  "Professionals wanting certified application-based data science training for oil & gas"
],
  price: "$300 / ₹22,500",
  image: "/images/Data Science & Its Application for Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/8x28wReQd36hd7o40VaR50Q`,
    razorpay: `https://rzp.io/rzp/Nl6YWPi`,
  },
},

{
  id: "24",
  title: "Machine Learning with Time Series Application for Energy Industry",
  brochure: "https://drive.google.com/file/d/1XCT0jO3gFF9-Mivt0_2l4HAvTlevU53j/view?usp=drive_link",
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
  "Introduction to Time Series Data & Real-Life Forecasting Concepts",
  "Basics of Mathematics & Statistics for Time Series (Lag Features, Outliers, Calculus)",
  "Time Series Terminology (Trend, Seasonality, Periodicity, White Noise, Unit Root, Smoothing)",
  "Signal Analysis Fundamentals (Fourier Transform, Recurrence Plots, Anomaly Spikes)",
  "Core Time Series Techniques (Differencing, ACF, PACF, Hypothesis Testing)",
  "Time Series Data Analysis using Pandas & Datetime Objects",
  "Statistical Forecasting Models: AR, MA, ARIMA",
  "Machine Learning & Deep Learning for Time Series (RNN, LSTM)",
  "Regression Perspective for Time Series Problems",
  "Anomaly Detection Methods (Autoencoders, Isolation Forest) — Optional Advanced",
  "Hands-on Forecasting for Energy Consumption, Production & Pricing",
  "Case Studies & Real-World Applications in Energy Industry"
],

  targetAudience: [
  "Energy sector professionals",
  "Petroleum engineers",
  "Reservoir engineers",
  "Production engineers",
  "Data analysts working in energy domain",
  "Students in petroleum, energy, or data science fields",
  "Researchers working on forecasting and time series modeling",
  "Professionals transitioning into energy data science roles",
  "Beginners looking to learn ML + time series from scratch"
],
  price: "$200 / ₹14,000",
  image: "/images/Machine Learning with Time Series Applications for Energy Industry.webp",
  payment: {
    stripe: `https://buy.stripe.com/5kQ28teQd6it9Vc7d7aR50R`,
    razorpay: `https://rzp.io/rzp/xViy6Nla`,
  },
},

{
  id: "25",
  title: "Power BI Analytics for Drilling Engineer",
  brochure: "https://drive.google.com/file/d/1b4GGGjrwD91rpp8JZ2Ts0eL9o0cD7fTx/view?usp=drive_link",
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
  "Introduction to Power BI for Drilling Engineering",
  "Understanding Power BI Interface & Building First Dashboard",
  "Drilling Data Preparation & Cleaning using Power Query",
  "Connecting to Drilling Data Sources (Excel, SQL, APIs)",
  "Advanced Power Query for Formation-Based Analysis",
  "Dashboard Design: Slicers, Filters & Well Trajectory Visualizations",
  "Data Modeling in Power BI (Power Pivot & Relationships)",
  "Introduction to DAX for Drilling KPIs (ROP, NPT, Cost/ft)",
  "Advanced DAX Functions for Operational Analytics",
  "Time Intelligence & Progress Tracking for Drilling Operations",
  "Case Study: Daily Drilling Performance & Downtime Dashboard",
  "Case Study: Well Production Monitoring & Optimization",
  "Forecasting Drilling Costs using DAX & Dashboard Insights",
  "End-to-End Project: Drilling Performance Analysis Dashboard",
  "End-to-End Project: Well Production Monitoring Dashboard",
  "Exporting & Sharing Dashboards through Power BI Service"
],

 targetAudience: [
  "Drilling engineers",
  "Petroleum engineers",
  "Wellsite drilling engineers",
  "Drilling data analysts",
  "Operations engineers involved in drilling performance monitoring",
  "Field engineers seeking data visualization skills",
  "Energy professionals transitioning into data-driven drilling roles",
  "Students aiming to build analytics skills for drilling engineering"
],
  price: "$150 / ₹9,000",
  image: "/images/Power BI Analytics For Drilling Engineer.jpg",
  payment: {
    stripe: `https://buy.stripe.com/28E4gBgYlfT36J0fJDaR50S`,
    razorpay: `https://rzp.io/rzp/DTl79Ij`,
  },
},

{
  id: "26",
  title: "AI-Powered Excel Automation for Oil & Gas",
  brochure: "https://drive.google.com/file/d/1rfCMIA2-yCnXDBzB6YHeetA3u3yDZKhc/view?usp=drive_link",
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
  "Introduction to AI-Powered Excel for Oil & Gas",
  "Data Cleaning for Oilfield Datasets (Well Logs, History Data, Core & Test Reports)",
  "One-Shot Structuring of Unstructured & Messy Petroleum Data",
  "Automated Data Extraction from PDFs, Images & Scanned Reports",
  "OCR-Based Extraction for Daily Drilling Reports, EOWR & Geological Reports",
  "AI-Driven Pattern Recognition & Categorization (HSE, Assets, Inventory, PO Logs)",
  "Auto-Summarization of Maintenance Logs & Vendor Reports",
  "Extracting Technical Specifications from Well Data Sheets & Equipment Docs",
  "Natural Language–Driven Analysis of Production & Well Performance Data",
  "Automated Pivot Tables, Smart Lookups & Insight Generation",
  "AI-Based Root Cause Investigation & Recommendation Systems",
  "Auto-Generating Daily/Weekly/Monthly Production Summaries",
  "Building Field Performance Dashboards with Natural Language Commands",
  "AI-Assisted Formula Generation & Simplification",
  "Automating Dynamic Production Allocation & Reconciliation",
  "AI-Driven Decline Curve Calculations & Trend Analysis",
  "Cross-Sheet Well Test Data Aggregation & Analysis",
  "Automation of Repetitive Tasks Using AI, Macros & Custom Scripts",
  "End-to-End Oilfield Reporting Workflow Automation Project"
],

  targetAudience: [
  "Petroleum engineers",
  "Reservoir engineers",
  "Production engineers",
  "Drilling and completion engineers",
  "Field engineers and operations staff",
  "Data analysts working in oil & gas",
  "HSE and maintenance reporting teams",
  "Fresh graduates seeking digital oilfield skills",
  "Professionals wanting to automate Excel workflows using AI",
  "Anyone handling large volumes of oilfield data, logs, or reports"
],
  price: "$150 / ₹11,000",
  image: "/images/AI Powered Excel Automation for  Oil & Gas.webp",
  payment: {
    stripe: `https://buy.stripe.com/5kQ00l23r8qBebs2WRaR50T`,
    razorpay: `https://rzp.io/rzp/VUuZhIl`,
  },
},

{
  id: "27",
  title: "Spotfire Analytics for Oil & Gas",
  brochure: "https://drive.google.com/file/d/1ET4sHRQKD_e1ivWEx06ibHXf4PqHzuTU/view?usp=drive_link",
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
  "Introduction to AI-Powered Excel for Oil & Gas",
  "Data Cleaning for Oilfield Datasets (Well Logs, History Data, Core & Test Reports)",
  "One-Shot Structuring of Unstructured & Messy Petroleum Data",
  "Automated Data Extraction from PDFs, Images & Scanned Reports",
  "OCR-Based Extraction for Daily Drilling Reports, EOWR & Geological Reports",
  "AI-Driven Pattern Recognition & Categorization (HSE, Assets, Inventory, PO Logs)",
  "Auto-Summarization of Maintenance Logs & Vendor Reports",
  "Extracting Technical Specifications from Well Data Sheets & Equipment Docs",
  "Natural Language–Driven Analysis of Production & Well Performance Data",
  "Automated Pivot Tables, Smart Lookups & Insight Generation",
  "AI-Based Root Cause Investigation & Recommendation Systems",
  "Auto-Generating Daily/Weekly/Monthly Production Summaries",
  "Building Field Performance Dashboards with Natural Language Commands",
  "AI-Assisted Formula Generation & Simplification",
  "Automating Dynamic Production Allocation & Reconciliation",
  "AI-Driven Decline Curve Calculations & Trend Analysis",
  "Cross-Sheet Well Test Data Aggregation & Analysis",
  "Automation of Repetitive Tasks Using AI, Macros & Custom Scripts",
  "End-to-End Oilfield Reporting Workflow Automation Project"
],

  targetAudience: [
  "Petroleum engineers",
  "Reservoir engineers",
  "Production engineers",
  "Drilling and completion engineers",
  "Field engineers and operations staff",
  "Data analysts working in oil & gas",
  "HSE and maintenance reporting teams",
  "Fresh graduates seeking digital oilfield skills",
  "Professionals wanting to automate Excel workflows using AI",
  "Anyone handling large volumes of oilfield data, logs, or reports"
],
  price: "$150 / ₹11,000",
  image: "/images/Spotfire Analytics for Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/cNiaEZbE1cGR4AS7d7aR50U`,
    razorpay: `https://rzp.io/rzp/tP1DNcu`,
  },
},

{
  id: "28",
  title: "Petroleum Geomechanics & CCUS",
  brochure: "https://drive.google.com/file/d/1mZV9smy7_Ay5-ILaHFXnXgDrl_3D7_2H/view?usp=drive_link",
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
  "Introduction to Petroleum Geomechanics & Subsurface Stress Concepts",
  "Earth Stress Regimes, Pore Pressure Origins & Petroleum System Geomechanics",
  "Rock Mechanics Fundamentals: Elasticity, Plasticity & Failure Criteria",
  "Wireline Log Interpretation & Borehole Imaging from a Geomechanics Perspective",
  "Core Testing & Laboratory Measurement of Rock Mechanical Properties",
  "1D Mechanical Earth Model (MEM) Development from Well Logs",
  "Introduction to 2D & 3D MEMs and Their Applications in Drilling & Completions",
  "In-Situ Stress Measurements & Stress Plotting Techniques",
  "Wellbore Stability Analysis: Collapse, Breakouts, Fracturing & Stress Path Modeling",
  "Sand Production Mechanisms, Prediction & Mitigation Strategies",
  "Reservoir Geomechanics: Deformation, Compaction & Stress Changes During Production",
  "Geomechanical Modeling Approaches (Analytical & Numerical / FEM Overview)",
  "Geomechanical Hazards: Lost Circulation, Fracture Reactivation, Wellbore Failures",
  "CCUS Geomechanics: Storage Integrity, Caprock Behavior & Induced Seismicity",
  "Case Studies & Hands-On MEM Construction Workflow"
],

  targetAudience: [
  "Petroleum engineers",
  "Reservoir engineers",
  "Drilling & completion engineers",
  "Geologists and geophysicists",
  "CCUS and energy-transition professionals",
  "Students entering subsurface engineering roles"
],
  price: "$100 / ₹8,000",
  image: "/images/Petroleum Geomechanics & CCUS.png",
  payment: {
    stripe: `https://buy.stripe.com/4gM4gBazX6itffwapjaR50V`,
    razorpay: `https://rzp.io/rzp/dM7Hkm2e`,
  },
},

{
  id: "29",
  title: "Python for Geophysics Data Processing",
  brochure: "https://drive.google.com/file/d/10UmJRxPTKc7x_3pjZRhdQbFWphUQURUG/view?usp=drive_link",
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
  "Introduction to Python Programming for Geoscience",
  "Working with Arrays, Matrices & DataFrames for Geophysical Data",
  "Scientific Visualization with Matplotlib & Gravity Mapping Techniques",
  "Statistical Analysis of Geophysical Datasets using Pandas & Seaborn",
  "Numerical Methods: Regression, Interpolation & Extrapolation",
  "Processing Bouguer Gravity Anomalies & Gravity Data Interpretation",
  "Regional–Residual Separation using FFT & Second Vertical Derivative (SVD)",
  "Seismic Data Handling with segyio & Trace Header Analysis",
  "Seismic Wavelet, Frequency Analysis & Deconvolution Techniques",
  "Seismic Survey Visualization & Mapping Workflows",
  "Introduction to Inverse Modeling in Python",
  "Seismic Multi-Attribute Extraction & Analysis",
  "Post-Stack Inversion & Fluid Factor Interpretation",
  "Fundamentals of AVO Modeling & Practical Applications",
  "Hands-on Gravity & Seismic Case Studies using Real Datasets"
],

  targetAudience: [
  "Geophysicists",
  "Geologists & exploration engineers",
  "Earth science M.Sc/PhD students & researchers",
  "Oil & gas & mining professionals",
  "Geotech & CCS project analysts",
  "Data scientists entering geoscience/energy domain"
],
  price: "$150 / ₹11,000",
  image: "/images/Python for Geophysics Data Processing.webp",
  payment: {
    stripe: `https://buy.stripe.com/4gMdRbcI5eOZc3k0OJaR50W`,
    razorpay: `https://rzp.io/rzp/aYcbqrkq`,
  },
},

{
  id: "30",
  title: "Oil & Gas Forecasting & Predictions using Python",
  brochure: "https://drive.google.com/file/d/1JIcyun75L7o0gc1rl1uh8dzMGiLRuc0K/view?usp=drive_link",
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
  "Introduction to Oil & Gas Forecasting: Scope, Data & Use-Cases",
  "Time Series Fundamentals for Energy Data (Trend, Seasonality, Stationarity)",
  "Data Preparation & Feature Engineering for Energy Time Series",
  "Exploratory Data Analysis & Visualization with Python (Pandas, Matplotlib)",
  "Statistical Forecasting Models: AR, MA, ARIMA & SARIMA",
  "Advanced Statistical Tools: ACF, PACF, Differencing & Unit-Root Tests",
  "Machine Learning for Time Series: Regression, Tree-Based Models & Ensembles",
  "Deep Learning Approaches: RNNs, LSTM, GRU Architectures for Forecasting",
  "Evaluation Metrics, Backtesting & Cross-Validation Strategies for Time Series",
  "Anomaly Detection & Event Identification (Autoencoders, Isolation Forest)",
  "Signal Processing & Frequency Domain Analysis (FFT) for Energy Signals",
  "Forecasting Energy Prices, Production & Consumption Case Studies",
  "Model Deployment Basics: Pipelines, Scheduling & Simple APIs",
  "Model Explainability & Uncertainty Quantification for Decision Support",
  "End-to-End Capstone Project: Build, Validate & Present an Oil & Gas Forecasting Model"
],

  targetAudience: [
  "Petroleum & energy sector students",
  "Oil & gas professionals",
  "Data analysts & data enthusiasts",
  "Engineers wanting forecasting skills",
  "Beginners in Python-based time series analysis"
],curriculum: [
  "Introduction to Oil & Gas Forecasting: Scope, Data & Use-Cases",
  "Time Series Fundamentals for Energy Data (Trend, Seasonality, Stationarity)",
  "Data Preparation & Feature Engineering for Energy Time Series",
  "Exploratory Data Analysis & Visualization with Python (Pandas, Matplotlib)",
  "Statistical Forecasting Models: AR, MA, ARIMA & SARIMA",
  "Advanced Statistical Tools: ACF, PACF, Differencing & Unit-Root Tests",
  "Machine Learning for Time Series: Regression, Tree-Based Models & Ensembles",
  "Deep Learning Approaches: RNNs, LSTM, GRU Architectures for Forecasting",
  "Evaluation Metrics, Backtesting & Cross-Validation Strategies for Time Series",
  "Anomaly Detection & Event Identification (Autoencoders, Isolation Forest)",
  "Signal Processing & Frequency Domain Analysis (FFT) for Energy Signals",
  "Forecasting Energy Prices, Production & Consumption Case Studies",
  "Model Deployment Basics: Pipelines, Scheduling & Simple APIs",
  "Model Explainability & Uncertainty Quantification for Decision Support",
  "End-to-End Capstone Project: Build, Validate & Present an Oil & Gas Forecasting Model"
],

  targetAudience: [
  "Petroleum & energy sector students",
  "Oil & gas professionals",
  "Data analysts & data enthusiasts",
  "Engineers wanting forecasting skills",
  "Beginners in Python-based time series analysis"
],
  price: "$200 / ₹14,000",
  image: "/images/Oil and Gas Software Development Using Python.jpg",
  payment: {
    stripe: `https://buy.stripe.com/28EbJ3fUhbCN4AS54ZaR50X`,
    razorpay: `https://rzp.io/rzp/1uLWuXP`,
  },
},

{
  id: "31",
  title: "Production & Nodal Analysis with Python and ML",
  brochure: "https://drive.google.com/file/d/1tUKOFlM-iArYjr5NXbQ4cI_ypbaZhSSU/view?usp=drive_link",
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
  "Python basics for oil & gas: variables, loops, functions, file handling",
  "Data handling with Pandas, NumPy & visualization with Matplotlib",
  "Intro to ML: training/testing, regression, clustering, MSE",
  "ML workflows applied to production datasets",
  "Inflow & outflow performance concepts for wells (IPR & VLP)",
  "Nodal analysis workflow and production system optimization",
  "Flow assurance basics: hydrate & wax formation predictions",
  "Hands-on exercises using real oilfield production data"
],
targetAudience: [
  "Petroleum and production engineers",
  "Reservoir engineers",
  "Oil & gas data analysts",
  "Students entering the energy sector",
  "Professionals wanting Python + ML skills for production workflows"
],
  price: "$250 / ₹20,000",
  image: "/images/Production and Nodal Analysis with Python & ML.webp",
  payment: {
    stripe: `https://buy.stripe.com/4gM6oJ37v4algjA40VaR50Y`,
    razorpay: `https://rzp.io/rzp/1HyI5k5`,
  },
},

{
  id: "32",
  title: "Diploma for HSE in Oil & Gas",
  brochure: "https://drive.google.com/file/d/1c0L2gU99uqQii07oHYBb2zGh_-J6ANjj/view?usp=drive_link",
  category: "diploma",
  duration: "80+ Hours",
  format: "Diploma",
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
  "Introduction to Oil & Gas Industry (History, Operations, Stakeholders, Facilities)",
  "Fundamentals of Health, Safety & Environment (HSE Principles, Regulations, Hazard Identification)",
  "Oil & Gas Processes & Hazards (Exploration, Drilling, Production, Refining, Transport Risks)",
  "Occupational Health & Industrial Hygiene (Exposure Control, Health Risks, Incident Response)",
  "Safety Management Systems (Policies, Procedures, Incident Investigation, Continuous Improvement)",
  "Environmental Management in Oil & Gas (EIA, Pollution Control, Sustainability Practices)",
  "Emergency Response & Crisis Management (Planning, Communication, Drills & Lessons Learned)",
  "HSE Auditing & Inspections (Techniques, Compliance Checks, Corrective Actions)",
  "Human Factors in HSE (Behavioral Safety, Error Prevention, Competency Development)",
  "International HSE Standards & Best Practices (ISO Standards, Global Frameworks, Benchmarking)",
  "International Regulations & Compliance (Global Laws, Cross-Cultural HSE Requirements)",
  "Technology in HSE (Sensors, Drones, AI, Digital Safety Systems, Predictive Analytics)",
  "Capstone Project: Developing a Comprehensive HSE Plan for a Field Scenario",
  "Sustainable Practices in Oil & Gas (Carbon Reduction, Circular Economy, CSR Initiatives)",
  "Leadership & HSE Culture (Safety Leadership, Workforce Engagement, Change Management)",
  "Advanced Emergency Response Simulation (Hands-on Crisis Scenarios & Evaluation)",
  "Legal Aspects of HSE (Laws, Roles, Liabilities, Case Studies from Oil & Gas Incidents)",
  "Stakeholder Engagement & Communication (Internal & External Communication, Crisis PR)",
  "Professional Development & Networking (Career Pathways, Certifications, Mentorship)"
],

  targetAudience: [
  "HSE officers and safety professionals",
  "Oil & gas engineers and operations staff",
  "Students entering HSE or petroleum careers",
  "Supervisors, technicians & field personnel",
  "Professionals transitioning to HSE roles"
],
  price: "$300 / ₹24,000",
  image: "/images/Diploma for HSE in Oil & Gas.avif",
  payment: {
    stripe: `https://buy.stripe.com/cNidRb8rP6it0kCeFzaR50Z`,
    razorpay: `https://rzp.io/rzp/55gplkKz`,
  },
},

{
  id: "33",
  title: "Fundamentals to Advance Well Control",
  brochure: "https://drive.google.com/file/d/1Y-WI_cz4iIpvltpFkYc7YB5ydE4No2z9/view?usp=drive_link",
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
  "Introduction to Well Control: Principles, Procedures & Industry Standards",
  "Basic Well Control Fundamentals – Volume Calculations & Capacities",
  "Annular Volume, Internal Capacity, Pump Output & Annular Velocity",
  "Tripping (Dry & Wet), Slug Calculations & Hole Monitoring",
  "Basic Well Control Fundamentals – Pressure Concepts",
  "Hydrostatic Pressure, U-Tube Concept & Bottom Hole Pressure (BHP)",
  "Equivalent Circulating Density (ECD), Leak-Off Test (LOT) & MAASP",
  "Kick Causes, Early Warning Signs & Positive Kick Indicators",
  "Well Shut-In Procedures & Line-Up Configurations",
  "Recording SIDPP/SICP & Calculating Kill Mud Weight",
  "Formation Pressure, Influx Height & Influx Gradient Calculations",
  "Gas Migration Behavior (Open & Closed Wellbore) & Trip/Riser Margin",
  "Slow Circulation Rate (SCR) & Choke Line Friction Losses (CLFL)",
  "Well Control Methods: Driller’s Method, Wait & Weight Method",
  "Comparison of Methods, Casing & Shoe Pressure Behavior",
  "Kick Influx Behavior, Stripping Operations & Volumetric Methods",
  "Operational Problems in Well Control & Troubleshooting",
  "Kill Sheet Calculations: Golden Rules, Filled & Gauge Sheets",
  "Shallow Hazards: Shallow Gas, Hydrates, Procedures & Mitigation",
  
],

  targetAudience: [
  "Drilling engineers",
  "Well engineers & wellsite supervisors",
  "Completion & workover engineers",
  "Rig crews and drilling supervisors",
  "Petroleum engineering students",
  "Blowout prevention and well control trainees"
],
  price: "$150 / ₹10,500",
  image: "/images/Fundamental to Advance Well Control.png",
  payment: {
    stripe: `https://buy.stripe.com/3cI14p37vbCN5EW0OJaR510`,
    razorpay: `https://rzp.io/rzp/vuEqzOe2`,
  },
},

{
  id: "34",
  title: "Extended Reach Drilling (ERD)",
  brochure: "https://drive.google.com/file/d/1CRuKgr1GnESBRWO7qG8OAy9_QojyGRbN/view?usp=drive_link",
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
  "Introduction to Extended Reach Drilling (ERD) – Principles, Terminology & Applications",
  "Unique Differences Between ERD Wells & Conventional Wells",
  "Directional Drilling Fundamentals & Surveying Techniques",
  "ERD Well Design & Planning Considerations (Geological, Geomechanical, Trajectory)",
  "Feasibility Studies, Torque & Drag Analysis & ERD Risk Evaluation",
  "Operational Aspects of Executing ERD Wells",
  "Wellbore Stability & Geomechanics for Highly Deviated Wells",
  "Wellbore Hydraulics Optimization for ERD (Hole Cleaning, Fluid Losses, ECD Management)",
  "Cementing Challenges in ERD Wells & Specialized Cementing Strategies",
  "Speciality Tools & Technologies for ERD (RSS, Downhole Tools, Advanced BHA Design)",
  "Completion & Workover Techniques for ERD Wells",
  "ERD Project Management (Cost Estimation, Scheduling, Team Communication)",
  "Regulatory & Environmental Compliance in ERD Operations",
  "Risk Assessment & Mitigation Strategies for ERD Drilling",
  "Case Studies of Successful ERD Wells from Global Operations",
  "Best Practices, Lessons Learned & Industry Benchmarks",
  "Impact of New Technologies on ERD Performance & Future Trends",
  "Simulation Exercises & Practical Scenarios for ERD Planning & Execution"
],

  targetAudience: [
  "Drilling engineers",
  "Well planning & well engineering professionals",
  "Directional drillers & MWD/LWD engineers",
  "Completion & workover engineers",
  "Geomechanics and subsurface engineers",
  "Petroleum engineering students & fresh graduates",
  "Field supervisors and rig operations personnel"
],
  price: "$150 / ₹10,500",
  image: "/images/Extended Reach Drilling.jpg",
  payment: {
    stripe: `https://buy.stripe.com/cNicN7bE16itc3kcxraR511`,
    razorpay: `https://rzp.io/rzp/FCgqej5`,
  },
},

{
  id: "35",
  title: "Analytics for Oil & Gas",
  brochure: "https://drive.google.com/file/d/1yKkUiGPJLaRddg1Lfik1SdBiRDEa8oS8/view?usp=drive_link",
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
  "Introduction to Python & Programming Concepts for Oil & Gas Applications",
  "Python Data Types, Variables, Operators & Basic Input–Output Operations",
  "Control Flow: Conditionals, Loops, Boolean Logic & List Processing",
  "Functions, Scopes, Tuples, Dictionaries & Data Processing Workflows",
  "Modules, Packages, String Methods, List Methods & Exception Handling",
  "NumPy for Oil & Gas: Arrays, Indexing, Slicing, Reshaping & Numerical Computations",
  "Pandas for Petroleum Data: DataFrames, CSV/Excel Handling & Data Manipulation",
  "Data Visualization with Matplotlib for Reservoir, Drilling & Production Problems",
  "Applied Petroleum Calculations: Porosity, Saturation, Shale Evaluation & Crossplots",
  "Analytics Projects Across Reservoir, Production & Drilling Disciplines",
  "Introduction to Time Series Analysis in Oil & Gas",
  "Mathematics & Statistics for Forecasting (Lag Features, Outliers, Algebra, Calculus)",
  "Time Series Terminology: Seasonality, Periodicity, Trend, White Noise & Smoothing",
  "Fourier Transform, Recurrence Plots & Anomaly Detection in Time Series",
  "Statistical Forecasting Models: AR, MA, ARIMA",
  "Oil & Gas Time Series Case Studies: Pressure, Rate, IPR & MBAL Forecasting",
  "Advanced Reservoir & Production Analytics (Klinkenberg, Spinner Log, Well Test Basics)",
  "Numerical Modeling: 1D Pressure Diffusion Solution",
  "Gas Material Balance & Decline Curve Comparative Analytics",
  "Custom Trainee Projects: End-to-End Analytics Implementation"
],

  targetAudience: [
  "Petroleum engineering students & graduates",
  "Reservoir, drilling & production engineers",
  "Energy-sector professionals transitioning into data analytics",
  "Aspiring petroleum data scientists",
  "Geoscience professionals wanting Python skills",
  "Freshers seeking oil & gas analytics exposure"
],
  price: "$200 / ₹15,000",
  image: "/images/Analytics for Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/fZu00l23r7mx6J02WRaR512`,
    razorpay: `https://rzp.io/rzp/Bmf3HWN`,
  },
},

{
  id: "36",
  title: "Artificial Lift Modelling, Reservoir Deliverability & Well Performance",
  brochure: "https://drive.google.com/file/d/1_buWD-kGdg8CxiyotEuRJVatz5eJ9dlh/view?usp=drive_link",
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
  "Introduction to Petroleum Production Systems",
  "Fundamentals of Oil & Gas Properties",
  "Reservoir Deliverability & Well Performance Concepts",
  "Flow Regimes, Inflow Performance Relationship (IPR) Models & Outflow Performance",
  "Overview of Artificial Lift Methods (Beam Pumping, ESP, Plunger Lift, Gas Lift)",
  "Advantages, Limitations & Screening Criteria for Selecting Artificial Lift Systems",
  "Electrical Submersible Pump (ESP) Components – Downhole & Surface",
  "ESP Mechanism, Performance Evaluation & Design Calculations in Excel",
  "Sucker Rod Pump (SRP) Components, Functionality & Dynamometer Card Interpretation",
  "SRP Design Calculations, Troubleshooting & Optimization",
  "Gas Lift System – Components, Mechanism & Valve Functionality",
  "Gas Lift Performance Analysis & Design Calculations with Excel",
  "Plunger Lift Components, Mechanism & Operational Principles",
  "Plunger Lift Design Calculations & Performance Evaluation",
  "Basics of Economics for Artificial Lift Systems",
  "Case Study: Selecting Optimal Artificial Lift Based on Technical & Economic Criteria"
],

  targetAudience: [
  "Petroleum engineering students & fresh graduates",
  "Production & reservoir engineers",
  "Well performance and artificial lift engineers",
  "Field engineers seeking design & optimization skills",
  "Professionals transitioning into production engineering",
  "Anyone wanting hands-on artificial lift and well performance modelling using Excel"
],
  price: "$45 / ₹4,000",
  image: "/images/Artificial Lift Modeling, Reservoir Deliverability & Well performance.jpg",
  payment: {
    stripe: `https://buy.stripe.com/dRm4gB6jH22d0kC54ZaR513`,
    razorpay: `https://rzp.io/rzp/vDKmPtL`,
  },
},

{
  id: "37",
  title: "Reservoir Engineering Modelling & Flow Simulation",
  brochure: "https://drive.google.com/file/d/1NeKkOyAy7wG_Qlbb93k8MjCXLBKenZZs/view?usp=drive_link",
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
  "Introduction to Reservoir Engineering (RE) & Its Role in the Oil & Gas Industry",
  "Types of Reservoir Engineers & Overview of RE Tools and Applications",
  "Material Balance Equation (MBE) Fundamentals & Practical Applications",
  "Pressure Transient Analysis (PTA) & Rate Transient Analysis (RTA)",
  "Decline Curve Analysis (DCA) Techniques & Interpretation",
  "3D Dynamic Reservoir Simulation – Concepts & Workflow",
  "Simulation Input Data Requirements & Quality Control",
  "Reservoir Simulation Tools & Software Overview",
  "Model Preparation, Grid Design & Property Assignment",
  "Model Initialization & Running Base Simulation Cases",
  "History Matching Fundamentals & Practical Adjustments",
  "Forecasting & Predicting Reservoir Performance Using Simulation Models",
  "Uncertainty Analysis & Optimization Techniques",
  "Automated History Matching Approaches",
  "3D Slim Simulation Concepts & Applications",
  "Course Summary, Integration of RE Tools & Real-World Field Applications"
],

  targetAudience: [
  "Graduate engineers transitioning into petroleum engineering",
  "Petroleum engineers seeking advanced reservoir engineering skills",
  "Reservoir engineers",
  "Asset development engineers",
  "Energy industry professionals involved in planning & field development",
  "Students pursuing petroleum engineering or related fields",
  "Managers looking to understand RE modelling & simulation workflows"
],

  price: "$40 / ₹2,500",
  image: "/images/Reservoir Engineering, Modeling & flow Simulation.webp",
  payment: {
    stripe: `https://buy.stripe.com/7sY7sNdM9dKV0kCfJDaR514`,
    razorpay: `https://rzp.io/rzp/0XdSJcp`,
  },
},

{
  id: "38",
  title: "Power BI Essentials for Oil & Gas",
  brochure: "https://drive.google.com/file/d/1JDiSLvKjjez0kOR2IgVaJtHCbNR0Xi-S/view?usp=drive_link",
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
  "Introduction to Power BI Tools & Interfaces (Desktop, Service, Mobile)",
  "Connecting to Oil & Gas Data Sources (Excel, SQL, APIs) & Exploring Power BI Environment",
  "Data Importing Techniques & Power Query Data Transformation",
  "Building Efficient Data Models & Creating Table Relationships for Oilfield Workflows",
  "Drilling Performance Metrics & Drilling Optimization Dashboard Design",
  "Visualizing Drilling KPIs: ROP, NPT, Wellbore Trajectory & Time-Series Progress",
  "Hands-on: Building a Complete Drilling Optimization Dashboard",
  "Reservoir & Production Metrics Visualization (Pressure, Rate, Well Status)",
  "Developing Production Monitoring Dashboards for Onshore/Offshore Fields",
  "Production Forecasting Using Power BI’s Forecasting Tools",
  "Subsurface Data Visualization (Seismic, Well Logs, Petrophysics) in Power BI",
  "GIS Mapping with ArcGIS & Bing Maps and Spatial Subsurface Analysis",
  "Hands-on: Building a Subsurface Interpretation Dashboard",
  "Advanced Visuals & Custom Visual Imports",
  "Introduction to DAX for Advanced Oil & Gas Calculations & KPIs",
  "Real-Time Reporting for Field Operations & Live Dashboard Embedding",
  "Integrating Power BI with IoT & Machine Learning for Predictive Analytics",
  "Hands-on: Implementing Real-Time Well Monitoring",
  "Publishing Dashboards to Power BI Service & Setting Up Data Gateways",
  "Sharing, Collaboration & Mobile Dashboard Deployment"
],

targetAudience: [
  "Oil & Gas drilling engineers",
  "Reservoir engineers",
  "Production engineers",
  "Oilfield data analysts",
  "Energy sector data professionals",
  "Managers seeking dashboard-driven decision-making",
  "Beginners interested in Power BI for Oil & Gas analytics"
],
  price: "$150 / ₹10,000",
  image: "/images/Power BI Essentials for Oil & Gas.png",
  payment: {
    stripe: `https://buy.stripe.com/8x26oJcI5fT3aZg7d7aR515`,
    razorpay: `https://rzp.io/rzp/jNCAZZMX`,
  },
},

{
  id: "39",
  title: "Geomechanics & Its Application in Drilling and Completion",
  brochure: "https://drive.google.com/file/d/1dSaAZ-0cq-m6dCNpF9UjddB9Pm9WR6X7/view?usp=drive_link",
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
  "Introduction to Rock Mechanics & Petroleum Geomechanics",
  "Fundamental Terminology: In-situ Stresses, Pore Pressure, Failure Criteria, Constitutive Models",
  "Wellbore Stress Analysis: Effective Stresses, Hoop Stress, Fracture Closure Pressure",
  "Minimum & Maximum Horizontal Stress Determination",
  "Rock Mechanical Properties & Their Role in Well Design",
  "Drilling Applications: Wellbore Breakouts, Breakdowns & Instability Mechanisms",
  "Leak-Off Test (LOT), Extended LOT & Mini-Frac Interpretation",
  "Bit Founder Point Determination & Drilling Risk Indicators",
  "Drilling Fluid Applications: Mud Window, Stress Effects & NPT Reduction",
  "Formation Instability, Swelling, Cavings & Stuck Pipe Mechanisms",
  "Geomechanical Pre-Drill Assessment & Safe Mud Weight Window Design",
  "Wellbore Strengthening Techniques: Stress Cage, Plugged Zone & Strength Ring Theory",
  "Cementing Applications: Pressure Containment & Lost Circulation Mitigation",
  "Fracturing Technology: Stress Regimes, Closure Stress & Pay Zone Behavior",
  "Acid vs Proppant Fracturing Fundamentals",
  "Fracturing Simulator Overview, Model Building & Job Sequence Design",
  "Diagnostic Fluid Injection Test (DFIT) Concepts & Field Interpretation"
],

targetAudience: [
  "Drilling engineers",
  "Completion engineers",
  "Petroleum engineering students",
  "Geomechanics enthusiasts",
  "Reservoir engineers seeking geomechanics exposure",
  "Well design & operations team members",
  "Energy sector professionals involved in drilling/completion optimization"
],
  price: "$100 / ₹7,500",
  image: "/images/Geomechanics and its application in Drilling & Completion.webp",
  payment: {
    stripe: `https://buy.stripe.com/8x2cN78rPeOZ5EW0OJaR516`,
    razorpay: `https://rzp.io/rzp/NU8mAzk`,
  },
},

{
  id: "40",
  title: "Integrated Insights: SQL, Power BI & Tableau for Oil & Gas Analytics",
  brochure: "https://drive.google.com/file/d/1Tz_ouda5XEAk80PpMkstV6nv9mloOXus/view?usp=drive_link",
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
  "Introduction to Rock Mechanics & Petroleum Geomechanics",
  "Fundamental Terminology: In-situ Stresses, Pore Pressure, Failure Criteria, Constitutive Models",
  "Wellbore Stress Analysis: Effective Stresses, Hoop Stress, Fracture Closure Pressure",
  "Minimum & Maximum Horizontal Stress Determination",
  "Rock Mechanical Properties & Their Role in Well Design",
  "Drilling Applications: Wellbore Breakouts, Breakdowns & Instability Mechanisms",
  "Leak-Off Test (LOT), Extended LOT & Mini-Frac Interpretation",
  "Bit Founder Point Determination & Drilling Risk Indicators",
  "Drilling Fluid Applications: Mud Window, Stress Effects & NPT Reduction",
  "Formation Instability, Swelling, Cavings & Stuck Pipe Mechanisms",
  "Geomechanical Pre-Drill Assessment & Safe Mud Weight Window Design",
  "Wellbore Strengthening Techniques: Stress Cage, Plugged Zone & Strength Ring Theory",
  "Cementing Applications: Pressure Containment & Lost Circulation Mitigation",
  "Fracturing Technology: Stress Regimes, Closure Stress & Pay Zone Behavior",
  "Acid vs Proppant Fracturing Fundamentals",
  "Fracturing Simulator Overview, Model Building & Job Sequence Design",
  "Diagnostic Fluid Injection Test (DFIT) Concepts & Field Interpretation"
],

targetAudience: [
  "Drilling engineers",
  "Completion engineers",
  "Petroleum engineering students",
  "Geomechanics enthusiasts",
  "Reservoir engineers seeking geomechanics exposure",
  "Well design & operations team members",
  "Energy sector professionals involved in drilling/completion optimization"
],
  
  
  price: "$150 / ₹12,000",
  image: "/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg",
  payment: {
    stripe: `https://buy.stripe.com/dRm8wRazX6it7N4eFzaR517`,
    razorpay: `https://rzp.io/rzp/7Sqvi2YU`,
  },
},

{
  id: "41",
  title: "Diploma in Machine Learning for Oil & Gas",
  brochure: "https://drive.google.com/file/d/1inu-OU7XNX_rBfjwmG8vv9wR5bzpx2Cj/view?usp=drive_link",
  category: "diploma",
  duration: "20+ Hours",
  format: "Diploma",
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
  // Python Fundamentals
  "Why Data Science & ML in Oil & Gas Industry",
  "Introduction to Python, IDE Setup & Installation",
  "Writing First Python Program & Understanding Data Types",
  "Variables, Mathematical Operations & Basic Programming Logic",
  "Data Structures: Lists, Tuples, Dictionaries",
  "Control Flow: If-Else, Loops, Iterables",
  "Functions, Modules & Exception Handling",
  
  // Python Intermediate & Advanced
  "NumPy for Numerical Computing & Synthetic Data Generation",
  "Pandas for Data Loading, Cleaning & Manipulation",
  "Data Visualization with Matplotlib",
  "Mini Python Projects: Pressure Profile, Klinkenberg Effect",
  "Deploying ML Applications on Web Servers",

  // Statistics & Machine Learning
  "Introduction to Statistics for ML",
  "Supervised Learning: Linear Regression, Logistic Regression",
  "Tree-Based Algorithms & End-to-End ML Project",
  "Deep Learning: ANNs, RNNs, CNNs with Hands-on Projects",
  "Computer Vision Applications in Oil & Gas",

  // Power BI Modules
  "Power BI Data Loading & Field Data Preparation",
  "Exploratory Data Analysis: Distributions, Outliers, Relationships",
  "Trend Analysis for Production & Well Performance",
  "Building Multi-Well & Field-Level Dashboards in Power BI",
  "Real-Time Reservoir Monitoring Dashboards",
  "Decomposition Tree & Advanced BI Visualization",

  // Oil & Gas Applications
  "Machine Learning for Production Forecasting",
  "ML for Drilling Optimization & Well Performance",
  "Anomaly Detection in Sensors & Operations",
  "Feature Engineering for Seismic, Logs, Production Data",

  // Industry-Level Training
  "Ethics & Best Practices in ML for Oil & Gas",
  "Model Deployment & Monitoring",
  "Oilfield Case Studies & Capstone Project Development"
],

targetAudience: [
  "Oil & Gas professionals transitioning into Machine Learning",
  "Petroleum engineering students",
  "Data analysts aiming to specialize in energy sector",
  "Reservoir, drilling, production engineers",
  "Geoscientists interested in ML applications",
  "Freshers seeking a certified ML diploma for Oil & Gas",
  "Python learners wanting industry-specific ML applications"
],
  price: "$300 / ₹22,500",
  image: "/images/Diploma for Machine Learning in Oil & Gas.webp",
  payment: {
    stripe: `https://buy.stripe.com/fZucN7azXeOZgjA54ZaR518`,
    razorpay: `https://rzp.io/rzp/k0lOLYXh`,
  },
},

{
  id: "42",
  title: "Integrated Oil & Gas Analytics Using Big Data",
  brochure: "https://drive.google.com/file/d/1mDRVv13ZUwlucjmsLu5ODz9qTcjLjTR-/view?usp=drive_link",
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
  // Module 1: Introduction to Data Science in Oil & Gas
  "Overview of data science applications across upstream, midstream, and downstream sectors",
  "Python tools and libraries for big data analytics in energy",
  "Role and importance of big data in oil & gas operations",

  // Module 2: Upstream Analytics
  "Well log and core data analytics: cleaning, preprocessing, normalization",
  "Production data visualization and interpretation",
  "Time-series forecasting for multi-field gas production trends",

  // Module 3: Midstream Analytics
  "Gas storage analytics: depleted reservoirs, salt caverns, aquifers",
  "Storage capacity optimization models",
  "Performance analytics for midstream assets",

  // Module 4: Downstream Analytics
  "Machine learning and deep learning for gas consumption forecasting",
  "Case studies: forecasting demand in volatile market environments",

  // Module 5: Market Analytics
  "Gas price forecasting using statistical, ML, and hybrid models",
  "Market scenario analysis & actionable pricing insights",

  // Module 6: Capstone Project
  "Integrated analytics using upstream, midstream, and downstream datasets",
  "Problem-solving using ML, time-series, and storage analytics",
  "Industry-style presentation of findings",

  // Module 7: Advanced Topics & Emerging Trends
  "Advanced ML methods: ensemble learning, neural networks",
  "Future trends: real-time analytics, predictive maintenance, digital twins",
  "Big data workflows for full lifecycle oil & gas operations",

  // Resources & Skills
  "Hands-on experience with real industry datasets",
  "Practical big data workflows for field, facility, and market analytics",
  "End-to-end energy analytics pipeline development"
],

targetAudience: [
  "Oil & gas professionals (upstream, midstream, downstream)",
  "Petroleum engineers",
  "Reservoir engineers",
  "Data scientists entering the energy sector",
  "Energy analysts and market analysts",
  "Students aspiring to work in oil & gas data analytics",
  "Professionals transitioning into digital & big data roles in energy"
],
  price: "$300 / ₹17,500",
  image: "/images/Diploma in Integrated Oil & Gas Analytics Using Big Data A full well Lifecycle Approach.jpg",
  payment: {
    stripe: `https://buy.stripe.com/28E00l37v36h2sKfJDaR519`,
    razorpay: `https://rzp.io/rzp/ZVF76Sai`,
  },
},

{
  id: "43",
  title: "Diploma in Petroleum Project Management & Field Development Economics",
  brochure: "https://drive.google.com/file/d/1xo_-1DH_u-wbpOjQjsRB5WLuKgZrND1B/view?usp=drive_link",
  category: "diploma",
  duration: "60+ Hours",
  format: "Diploma",
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
  // Module 1: Introduction to Project Management in the Petroleum Industry
  "Project management fundamentals for oil & gas projects",
  "Importance of structured project management in petroleum operations",
  "Phases: Initiation, planning, execution, monitoring, closure",
  "Roles & responsibilities of petroleum project managers",
  "Case study: Analysis of a real petroleum project",

  // Module 2: Petroleum Industry Operations & Project Lifecycle
  "Overview of upstream, midstream, and downstream operations",
  "Exploration & Production (E&P) lifecycle",
  "Feasibility, engineering, procurement, construction, commissioning",
  "Project constraints: Scope, time, cost, quality",
  "Activity: Develop lifecycle chart for a sample oil & gas project",

  // Module 3: Field Development Planning (FDP)
  "Concept & components of Field Development Planning",
  "Exploration → Appraisal → Development workflow",
  "Onshore, offshore, deepwater & shale field types",
  "Production profiles, recovery factors & development strategy",
  "Environmental & regulatory considerations",
  "Activity: Build a simplified FDP with key milestones",

  // Module 4: Project Planning & Scheduling
  "Developing project scope, deliverables & objectives",
  "Work Breakdown Structure (WBS) creation",
  "Critical Path Method (CPM) fundamentals",
  "Gantt chart development",
  "Resource allocation & optimization",
  "Activity: Build WBS + Gantt chart using MS Project / Primavera",

  // Module 5: Petroleum Economics & Financial Modeling
  "Petroleum economic fundamentals (NPV, IRR, Payback Period)",
  "Cash flow modeling & forecasting",
  "CAPEX vs OPEX estimation",
  "Economic evaluation of oil & gas projects",
  "Sensitivity & scenario analysis",
  "Activity: Perform an NPV/IRR evaluation for an FDP",

  // Module 6: Risk Management in Petroleum Projects
  "Risk identification and classification (operational, financial, environmental, political)",
  "Risk evaluation & prioritization",
  "Risk mitigation, avoidance, transfer & acceptance strategies",
  "Developing risk management plans",
  "Activity: Prepare a risk management plan for an offshore project",

  // Module 7: Cost Estimation & Budgeting
  "Cost estimation methods: bottom-up, analogous, parametric",
  "CAPEX/OPEX structuring in petroleum projects",
  "Cost control techniques",
  "Earned Value Management (EVM) for budget tracking",
  "Activity: Create a budget for a drilling project",

  // Module 8: Procurement & Contract Management
  "Procurement cycle & vendor selection",
  "Contract types: Lump sum, cost-plus, T&M",
  "Contract risk evaluation & performance monitoring",
  "Activity: Draft procurement plan & basic contract structure",

  // Module 9: Health, Safety, and Environment (HSE)
  "HSE regulations in petroleum operations",
  "Risk assessment & mitigation",
  "Safety audits & emergency planning",
  "Activity: Create an HSE plan for a field construction project",

  // Module 10: Leadership & Team Management
  "Leadership styles for project managers",
  "Communication strategies for multidisciplinary teams",
  "Conflict resolution & stakeholder management",
  "Activity: Role-play conflict resolution within a project team",

  // Module 11: Project Execution & Monitoring
  "Execution strategies for petroleum projects",
  "KPIs & performance metrics",
  "Project tracking tools & dashboarding",
  "Managing scope changes",
  "Activity: Develop a monitoring dashboard for a refinery project",

  // Module 12: Project Closeout & Lessons Learned
  "Project handover procedures",
  "Documentation & final audits",
  "Lessons learned & continuous improvement",
  "Activity: Prepare a closeout report for an FDP project",

  // Final Assessment
  "Complete petroleum project plan presentation",
  "Integrated assessment across FDP, planning, risk, cost & execution"
],

targetAudience: [
  "Petroleum engineers",
  "Project managers",
  "Field development planners",
  "Oil & gas economists",
  "Engineering graduates",
  "Energy sector professionals",
  "Aspiring project management professionals"
],
  price: "$300 / ₹22,500",
  image: "/images/Diploma in Petroleum Project Management & Field Development Economics.jpg",
  payment: {
      stripe: `https://buy.stripe.com/6oUeVf7nL0Y9gjAapjaR51a`,
      razorpay: `https://rzp.io/rzp/2ep8Kki`,
  },
},

{
  id: "44",
  title: "Machine Learning & Python Applications for Petrophysics",
  brochure: "https://drive.google.com/file/d/1Q1IV3JUZHF1me91b4jiaaJbbWmXYHlA3/view?usp=drive_link",
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
  // Module 1: Introduction to Petroleum Project Management
  "Fundamentals of project management for the petroleum industry",
  "Importance of structured management across oil & gas projects",
  "Five phases of petroleum project management: Initiation, Planning, Execution, Monitoring, Closure",
  "Roles and responsibilities of petroleum project managers",
  "Case study: Analysis of a real-world petroleum project",

  // Module 2: Petroleum Industry Operations & Project Lifecycle
  "Overview of upstream, midstream, and downstream operations",
  "Exploration & Production (E&P) project lifecycle",
  "Feasibility, engineering, procurement, construction & commissioning stages",
  "Understanding project constraints: Scope, Time, Cost, Quality",
  "Activity: Create a lifecycle chart for a sample oil & gas project",

  // Module 3: Field Development Planning (FDP)
  "Introduction to Field Development Planning and its components",
  "Exploration → Appraisal → Development workflow",
  "Onshore, offshore, deepwater & shale field characteristics",
  "Production profiles, recovery strategies, and economic considerations",
  "Regulatory and environmental compliance in FDP",
  "Activity: Build a simplified FDP with key milestones",

  // Module 4: Project Planning & Scheduling
  "Project scope definition, deliverables & objectives",
  "Work Breakdown Structure (WBS) creation",
  "Critical Path Method (CPM) and scheduling fundamentals",
  "Gantt chart development and timeline optimization",
  "Activity: Build WBS + Gantt chart using MS Project / Primavera",

  // Module 5: Petroleum Economics & Financial Modeling
  "Economic principles: NPV, IRR, Payback Period",
  "Building cash flow models for petroleum projects",
  "CAPEX vs OPEX evaluation for field developments",
  "Economic assessment techniques for oil & gas fields",
  "Sensitivity & scenario analysis for decision making",
  "Activity: Perform NPV/IRR evaluation for a field development plan",

  // Module 6: Risk Management in Petroleum Projects
  "Types of risks: operational, financial, environmental, political",
  "Risk identification, evaluation & prioritization methods",
  "Mitigation, avoidance, transfer & acceptance strategies",
  "Developing a full risk management plan",
  "Activity: Prepare a risk management plan for an offshore project",

  // Module 7: Cost Estimation & Budgeting
  "Cost estimation methods: Bottom-up, analogous, parametric",
  "Structuring CAPEX & OPEX for petroleum projects",
  "Cost monitoring, control systems, and EVM (Earned Value Management)",
  "Activity: Build cost estimates and budget for a drilling project",

  // Module 8: Procurement & Contract Management
  "Procurement workflow in oil & gas projects",
  "Contract types: Lump sum, Time & Material, Cost-plus",
  "Vendor evaluation and contract performance monitoring",
  "Activity: Draft procurement plan + basic contract document",

  // Module 9: Health, Safety & Environment (HSE)
  "Key HSE regulations in petroleum projects",
  "HSE risk assessment and mitigation planning",
  "Safety audits, emergency planning & HSE compliance systems",
  "Activity: Prepare an HSE plan for an oilfield construction project",

  // Module 10: Leadership & Team Management
  "Leadership styles suited for petroleum project environments",
  "Effective communication for multidisciplinary teams",
  "Conflict resolution & stakeholder engagement strategies",
  "Activity: Conflict resolution role-play for project teams",

  // Module 11: Project Execution & Monitoring
  "Execution methodologies for petroleum projects",
  "KPIs & performance-based evaluation systems",
  "Monitoring tools such as dashboards, EVM metrics, and trackers",
  "Handling scope changes & change-management workflow",
  "Activity: Develop a monitoring dashboard for a refinery project",

  // Module 12: Project Closeout & Lessons Learned
  "Project handover processes and documentation standards",
  "Final audits, performance review, and quality assurance",
  "Capturing lessons learned & continuous improvement strategies",
  "Activity: Prepare a closeout report for a field development project",

  // Final Assessment
  "Capstone: Complete petroleum project management plan",
  "Integrated assessment covering FDP, economics, risk, cost & execution"
],

targetAudience: [
  "Petroleum engineers",
  "Project managers",
  "Field development planners",
  "Oil & gas economists",
  "Engineering graduates",
  "Energy sector professionals",
  "Aspiring petroleum project managers",
  "Reservoir and production engineers seeking PM skills"
],
  price: "$150 / ₹12,000",
  image: "/images/Machine Learning & Python Applications for Petrophysics.jpg",
  payment: {
      stripe: `https://buy.stripe.com/8x29AVdM95ep4AS2WRaR51b`,
      razorpay: `https://rzp.io/rzp/BxIDiV8`,
  },
},

{
  id: "45",
  title: "Mastering Machine Learning for Enhanced Production & Reservoir Forecasting Analytics",
  brochure: "https://drive.google.com/file/d/1khKRwmRbAhCeJGR2JkI7m2olgyuVIq8h/view?usp=drive_link",
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
  // Production Forecasting, Analytics & ML Applications for PCP, SRP, ESP
  "Overview of production forecasting and analytics for the oil & gas industry",
  "Introduction to PCP, SRP, and ESP production systems",
  "Components, operation principles, and production challenges for PCP, SRP, ESP",
  "Production data collection techniques & preprocessing workflows",
  "Feature engineering methods for production datasets",
  "Machine Learning models for production forecasting including regression, Random Forest, Gradient Boosting, Neural Networks",
  "Model evaluation: performance metrics and validation techniques",
  "Time-series forecasting using ARIMA, SARIMA, Prophet",
  "ML applications for optimizing PCP, SRP, and ESP systems",

  // Reservoir Analytics
  "Introduction to reservoir analytics and its importance in reservoir management",
  "Fundamentals of reservoir engineering and classification of reservoir types",
  "Reservoir data collection methods and preprocessing techniques",
  "Feature engineering tailored for reservoir datasets",
  "ML models for reservoir characterization, forecasting, and optimization",
  "Evaluation metrics for ML-based reservoir analytics",
  "Advanced reservoir analytics: uncertainty handling, ensemble learning, Bayesian methods",
  "Real-world case studies of ML applications in reservoir engineering"
],

targetAudience: [
  "Petroleum engineers",
  "Production engineers",
  "Reservoir engineers",
  "Artificial lift engineers",
  "Oil & gas data analysts",
  "Machine learning enthusiasts in energy sector",
  "Engineering students interested in ML applications",
  "Freshers aiming to enter petroleum analytics",
  "Professionals seeking ML upskilling for forecasting"
],
  price: "$150 / ₹12,000",
  image: "/images/Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics.jpg",
  payment: {
      stripe: `https://buy.stripe.com/8x228teQdbCNgjAcxraR51c`,
      razorpay: `https://rzp.io/rzp/zAZ4a5Y`,
  },
},

{
  id: "46",
  title: "Petroleum Field Development Planning from Concept to Execution",
  brochure: "https://drive.google.com/file/d/1pHkU23Au0SNWcnN2bgIQLJA9Ok-uITfs/view?usp=drive_link",
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
  // Module 1: Fundamentals of Field Development Planning (FDP)
  "Upstream lifecycle overview and role of FDP in field maturation",
  "Stages of field development (DG0–DG3) and decision gates",
  "Key data types required: G&G, reservoir, production, cost inputs",
  "Stakeholder roles: subsurface, drilling, facilities, finance, regulatory",
  "Regulatory workflows, approvals & compliance requirements",
  "Practical: Interpret block map & lifecycle chart; identify FDP starter dataset",

  // Module 2: Subsurface Characterization & Reserves Estimation
  "Seismic interpretation basics: structures, faults, traps",
  "Log analysis: porosity, saturation, reservoir quality assessment",
  "Drive mechanisms & reservoir behavior fundamentals",
  "Volumetric reserves estimation (STOIIP / GIIP)",
  "Decline curve analysis & recovery factor estimation",
  "Practical: Log interpretation; calculate STOIIP using volumetric methods",

  // Module 3: Development Strategy, Well Planning & Drilling
  "Development scheme selection: onshore, offshore, greenfield, brownfield",
  "Well type selection: vertical, deviated, horizontal, multilateral",
  "Well spacing, pad design & drainage area concepts",
  "Drilling sequence planning, rig scheduling & cost estimation basics",
  "Intro to completions & artificial lift strategy",
  "Practical: Design a basic well placement plan; draft drilling sequence for 3 wells",

  // Module 4: Surface Facilities Planning & Economic Evaluation
  "Surface production facilities: separators, flowlines, storage, export",
  "Matching reservoir deliverability with facility throughput",
  "Infrastructure requirements: utilities, pipelines, layout",
  "Introduction to petroleum economics: CAPEX, OPEX, NPV, IRR",
  "Sensitivity analysis & basic uncertainty evaluation",
  "Practical: Match facilities with forecast; compute simple economics in Excel",

  // Module 5: FDP Integration, Case Study & Presentation
  "How to structure a professional FDP document",
  "Integrating subsurface, wells, facilities, and economics",
  "Risk & uncertainty mapping in FDP decision-making",
  "Case study walkthrough (onshore/offshore)",
  "Group presentation of FDP concept",
  "Practical: Prepare a 5-slide mini-FDP — concept, wells, facilities, economics",

  // Completion Module
  "Recap session, test, and doubt-clearing workshop",
  "Hands-on consolidation of FDP workflow from discovery to execution"
],

targetAudience: [
  "Petroleum engineers",
  "Reservoir engineers",
  "Drilling engineers",
  "Production engineers",
  "Geoscientists",
  "Energy sector students",
  "Upstream analysts & planners",
  "Professionals transitioning into FDP or development roles"
],
  price: "$150 / ₹10,000",
  image: "/images/Petroleum Field Development Planning from Concept to Execution.jpg",
  payment: {
      stripe: `https://buy.stripe.com/fZu4gBfUh5epc3keFzaR51d`,
      razorpay: `https://rzp.io/rzp/NlG3vYz`,
  },
},

{
  id: "47",
  title: "Production Forecasting & Well Performance Optimization Using Python & Machine Learning",
  brochure: "https://drive.google.com/file/d/1nvljWrdUmN2AOr0368WDKs2tsAh_Nvjl/view?usp=drive_link",
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
  // Module 1: Introduction to Machine Learning & Time Series Data
  "Overview of ML applications in Oil & Gas production forecasting",
  "Understanding time series vs. regular datasets",
  
  // Module 2: Mathematics & Statistics for Time Series Forecasting
  "Algebra and calculus essentials for forecasting",
  "Lag features & differencing techniques",
  

  // Module 3: Time Series Visualization & Signal Analysis
  "Time plots & smoothing techniques",
  "Fourier Transform for frequency domain analysis",


  // Module 4: Statistical & ML Forecasting Models
  "Autoregression (AR) and Moving Average (MA)",
  "ARIMA and model diagnostics",
 

  // Module 5: Production Optimization using ML
  "ML for well performance optimization",
  "Sand production prediction models",
  "Gas lift optimization & choke optimization workflows",
  

  // Module 6: Advanced ML Techniques & Case Studies
  "Hydraulic fracture optimization using ML",
  "Fracture intensity classification",
  "Re-fracturing feasibility prediction",
  "Anomaly detection using Autoencoders & Isolation Forest",


  // Program Deliverables
  "Hands-on ML workflows using Python, Pandas, Scikit-learn, and TensorFlow",
  "Capstone project on real production forecasting dataset",
  "End-to-end model deployment concepts"
],

targetAudience: [
  "Petroleum engineers",
  "Production engineers",
  "Reservoir engineers",
  "Data analysts in Oil & Gas",
  "Energy-sector ML enthusiasts",
  "Students in petroleum engineering",
  "Professionals seeking ML upskilling for forecasting & optimization",
  "Digital transformation engineers"
],
  price: "$150 / ₹12,000",
  image: "/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png",
  payment: {
      stripe: `https://buy.stripe.com/5kQ14p9vT4alaZgfJDaR51e`,
      razorpay: `https://rzp.io/rzp/0d7ulzd`,
  },
},

{
  id: "48",
  title: "Advanced Python for Reservoir, Production & Petrophysics",
  brochure: "https://drive.google.com/file/d/12M1hceDY517U94DPEFd6509LAALH2iqY/view?usp=drive_link",
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
  // Day 1 – Production Data Analytics & ML
  "Handling multi-well production datasets using Python & Pandas",
  "Time-series visualization: trends, anomalies, moving averages",
  
  
  // Day 2 – Formation Evaluation & Petrophysics with Python
  "Importing and processing LAS / DLIS well log files",
  
  "Visualizing CT-scan core images & depth-wise interpretation",
  "Facies classification using ML algorithms (SVM, Random Forest, XGBoost)",
  
  // Day 3 – Core Data Analytics & Neural Networks
  "Processing multi-well Routine Core Analysis (RCA) datasets",
  "Exploratory Data Analysis (EDA) for permeability correlations",
  "Feature engineering for geological & petrophysical parameters",
  
  
  // Day 4 – Reservoir Simulation & Optimization with PyMRST
  "Introduction to PyMRST & setting up Python-based reservoir simulations",
  "Simulating waterflood scenarios: normal vs inverted injection",
  "Analyzing saturation maps, pressure fields & production response",
  

  // Program Deliverables
  "Hands-on Python notebooks for reservoir, production & petrophysics",
  "Real-world mini-projects covering all domains",
  "End-to-end coding workflows using Google Colab (no installation needed)"
],

targetAudience: [
  "Petroleum engineers",
  "Reservoir engineers",
  "Production engineers",
  "Petrophysicists",
  "Data science enthusiasts in the energy sector",
  "Final-year engineering students",
  "Researchers working with petroleum datasets",
  "Faculty members upgrading to Python-based curriculum"
],
  price: "$150 / ₹11,000",
  image: "/images/Advanced Python for Reservoir, Production and Petrophysics.jpeg",
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
     setRedirectTo(link);
    if (user) return window.open(link, "_blank");

   
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
