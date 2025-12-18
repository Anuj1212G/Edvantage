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
    domain: "Drilling & Well Completion",
    format: "Self-Paced",
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A comprehensive program designed to build strong foundational and advanced skills in directional drilling, covering trajectory planning, BHA design, MWD/LWD tools, and real-world drilling challenges through practical case studies. ",
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
    domain: "Reservoir engineering",
    format: "Self-Paced",
    level: "Advanced",
    certificate: "Yes",
    overview:
      "A comprehensive program focused on understanding unconventional reservoirs—shale, tight gas, shale oil, and CBM—through reservoir characterization, decline curve modelling, and horizontal well fracturing techniques to optimize production and forecast performance. ",
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
    price: "$100 / ₹8,000",
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
    domain: "Petroleum economics",
    duration: "$100 / ₹7,500",
    format: "Self-Paced",
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A focused program that builds a strong understanding of petroleum reserves estimation methods and globally recognized classification systems. Learn volumetric, decline curve, and material balance techniques used to evaluate assets and support business decisions. ",
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
    price: "$50 / ₹3,500",
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
    domain: "Digital Oil & gas",
    format: "Hybrid (Virtual + Practical Workshops)",
    level: "Beginner to Intermediate",
    certificate: "Yes (with Internship Completion Certificate)",
    overview:
      "A comprehensive training–cum–internship that builds strong foundations in sequence stratigraphy, depositional systems, facies modelling, and modern ML–enabled geological interpretation. Participants learn through virtual training, practical workshops, and real industry case studies. ",
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
    domain: "Drilling & Well Completion",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A practical, industry-focused program covering essential well intervention techniques, workover operations, fishing and milling practices, stimulation methods, and modern smart completion technologies to enhance well performance in complex reservoirs. ",
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
    domain: "Drilling & Well Completion",
    format: "Self-Paced",
    level: "Intermediate to Advanced",
    certificate: "Yes",
    overview:
      "An intensive, industry-oriented program designed to develop strong competencies in advanced well design, pore pressure analysis, casing & cementing design, drilling challenges, well control assurance, and modern well-engineering software. Ideal for learners aiming to go from foundational knowledge to expert-level well engineering skills. ",
    outcomes: [
      "Gain strong fundamentals in pore pressure, fracture pressure & kick tolerance",
      "Learn casing design, load calculations & API/NORSOK/ISO-based standards",
      "Master cementing functions, slurry design, additives, hardware & testing",
      "Understand drilling fluids, SCE, rig hydraulics & rheology",
      "Learn drill string, BHA design, bit selection & IADC dull grading",
      "Build directional drilling skills using trajectory planning & software demos",
      "Explore wellbore stability, stuck pipe mechanisms & operational mitigations",
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
    price: "$100 / ₹7,500",
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
    domain: "Reservoir engineering",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A comprehensive program designed to build strong competencies in reservoir surveillance principles, tight reservoir characterization, dynamic modelling, and uncertainty-driven decision-making. Participants learn how to gather, analyze, and use subsurface data to optimize asset performance in unconventional fields. ",
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
    domain: "Digital Oil & gas",
    format: "Self-Paced",
    level: "Beginner (No Coding Required)",
    certificate: "Yes",
    overview:
      "A practical, application-oriented program designed for energy professionals to master statistics, Python, data analytics, machine learning, and real oil & gas data workflows. Blending fundamentals with hands-on reservoir, drilling, and production datasets, the course prepares learners for data-driven roles in the energy sector. ",
    outcomes: [
      "Understand statistics, hypothesis testing & regression for energy datasets",
      "Learn Python fundamentals, data types, loops, functions & error handling",
      "Apply Python for well logs, reservoir parameters & formation evaluation",
      "Perform data analytics using Python, SQL & Power BI",
      "Build dashboards and visualizations for reservoir & production data",
      "Apply ML techniques for porosity, saturation, facies & reservoir forecasting",
      "Use supervised, unsupervised & time-series models for real OG case studies",
      "Complete end-to-end data science projects relevant to oil & gas workflows",
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
    domain: "Drilling & Well Completion",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A specialized program designed to equip learners with essential skills in deepwater well planning, subsea engineering, real-time data integration, and risk management. This practical, industry-oriented course blends engineering fundamentals with real offshore case studies to prepare professionals for complex deepwater operations. ",
    outcomes: [
      "Master deepwater well design principles and planning workflows",
      "Analyze and apply real-time industry data for informed decision-making",
      "Understand deepwater rig systems, subsea BOPs, and well control challenges",
      "Identify and mitigate deepwater drilling risks and shallow hazards",
      "Apply casing design, cementing, MPD basics & hydraulic analysis",
      "Gain proficiency in subsea operations, well abandonment & relief well planning",
      "Strengthen communication with multidisciplinary offshore teams",
      "Learn regulatory requirements, environmental guidelines & industry best practices",
      "Use essential deepwater engineering tools and software",
      "Apply concepts through exercises, simulations & case studies",
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
    price: "$100 / ₹7,500",
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
    domain: "Digital Oil & gas",
    format: "Self-Paced",
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A practical, 20+ hour training program that introduces real-time drilling data analytics, machine learning workflows, vibration analysis, and time-series interpretation. Designed to help professionals detect drilling anomalies, reduce NPT, and optimize performance using data-driven decision-making. ",
    outcomes: [
      "Perform real-time drilling analytics and anomaly detection",
      "Visualize drilling parameters using heatmaps, 3D trajectories, radar charts & spectrograms",
      "Apply ML models for optimizing ROP, WOB & detecting tool failures",
      "Analyze drilling time-series data for borehole cleaning, instability & formation changes",
      "Conduct stuck pipe analysis, cluster-based NPT evaluation & performance qualifiers",
      "Interpret drill string dynamics through vibration, wavelet & frequency analysis",
      "Build workflows to enhance operational efficiency & reduce drilling risks",
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
    price: "$150 / ₹12,000",
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
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A practical program designed to teach the fundamentals of deep learning from scratch, with real-world applications in the oil & gas industry. Learners explore neural networks, CNNs, RNNs, TensorFlow/Keras workflows, and hands-on case studies for drilling, production forecasting, and core image analysis.",
    outcomes: [
      "Understand neural networks, deep neural networks & learning mechanisms",
      "Work with TensorFlow and Keras for building deep learning models",
      "Apply CNNs for image-based reservoir/core applications",
      "Use RNNs for time-series production & operational forecasting",
      "Perform transfer learning for energy datasets",
      "Implement deep learning case studies in drilling optimization, production prediction & image classification",
      "Gain confidence handling large industry datasets for research & analysis",
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
    price: "$150 / ₹12,000",
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
      "A hands-on program designed to teach Python from scratch and apply it to real oil & gas engineering problems. Learners build data analytics workflows, create reservoir engineering models (MBAL, IPR), and deploy a Python-based web application—gaining practical, industry-ready software development skills. ",
    outcomes: [
      "Learn Python fundamentals, data types, loops, functions & modular programming",
      "Use NumPy, Pandas & Matplotlib for numerical analysis and data visualization",
      "Build engineering calculators for material balance, IPR curves & reservoir parameters",
      "Apply Git for version control and collaborative development",
      "Develop Python-based mini projects such as pressure profile & Klinkenberg models",
      "Deploy a functional Python web application for accessing oil & gas datasets",
      "Gain practical skills to automate workflows and solve engineering challenges",
    ],
    curriculum: [
      "Python Fundamentals",
      "Data Analysis with NumPy/Pandas",
      "Engineering Calculators & MBAL/IPR",
      "Web App Deployment",
      "Project Work",
    ],
    targetAudience: ["Engineers", "Developers", "Students"],
    price: "$150 / ₹12,000",
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
      "A comprehensive program covering the full spectrum of reservoir engineering—from geological fundamentals to advanced modeling techniques. Learners explore reservoir fluids, rock properties, drive mechanisms, material balance, recovery methods, and software-based simulation workflows to build strong technical and practical expertise. ",
    outcomes: [
      "Understand geological framework, petrophysics & reservoir fluid behavior",
      "Perform core analysis, rock property evaluation & fluid laboratory assessments",
      "Apply material balance for oil & gas reservoirs and decline curve analysis",
      "Analyze drive mechanisms, water influx, gas coning & reservoir performance",
      "Explore secondary recovery and advanced EOR fundamentals",
      "Learn classical reservoir engineering workflows & reservoir simulation concepts",
      "Gain exposure to multiple reservoir software tools and modeling techniques",
      "Conduct advanced reservoir modeling through hands-on exercises",
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
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A practical program designed to teach machine learning and time-series forecasting for production optimization in the oil & gas industry. Learners build ARIMA and LSTM models, apply ML to gas lift & choke optimization, and perform anomaly detection using advanced statistical and deep learning techniques. ",
    outcomes: [
      "Understand ML fundamentals and forecasting techniques for Oil & Gas",
      "Analyze and visualize production time-series data using statistical & signal-based methods",
      "Build AR, MA, ARIMA & LSTM models for production and pressure forecasting",
      "Apply ML for well performance optimization, choke & gas lift optimization",
      "Detect anomalies using Autoencoders, Isolation Forest & signal-based methods",
      "Use ML for DCA, hydraulic fracture optimization, well failure prediction & infill spacing",
      "Learn best practices for model development & deploy insights in real workflows",
    ],
    curriculum: [
      "ML Fundamentals for Production",
      "Time-Series Forecasting",
      "Optimization Workflows",
      "Case Studies",
    ],
    targetAudience: ["Engineers", "Data analysts", "Operations"],
    price: "$150 / ₹12,000",
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
    level: "Intermediate",
    certificate: "Yes",
    overview:
      "A practical forecasting program designed to teach time series fundamentals, statistical modeling, and deep learning techniques for energy prediction. Participants learn how to clean data, identify trends and anomalies, and build forecasting models for production, consumption, and operational performance in the oil & gas industry. ",
    outcomes: [
      "Understand time series structure, trends, seasonality & white noise",
      "Clean, prepare & analyze real-world oil & gas datasets",
      "Apply mathematical and statistical concepts for forecasting",
      "Use ACF, PACF, differencing & hypothesis testing for model selection",
      "Build AR, MA & ARIMA models for oil & gas time series predictions",
      "Implement deep learning models like RNNs & LSTMs for advanced forecasting",
      "Detect anomalies using Autoencoders & Isolation Forest",
      "Approach time series problems as regression workflows",
    ],
    curriculum: [
      "Time-Series Fundamentals",
      "ARIMA & Statistical Models",
      "Deep Learning for Forecasting",
      "Anomaly Detection",
    ],
    targetAudience: ["Data analysts", "Engineers", "Students"],
    price: "$1500 / ₹12,000",
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
      "A specialized program designed to build strong expertise in reservoir fluid behaviour, PVT analysis, and Equation of State (EOS) modelling. Through hands-on case studies and industry-standard software, participants learn to characterize reservoir fluids, tune EOS models, and apply PVT concepts in reservoir engineering, production optimization, and enhanced oil recovery (EOR). ",
    outcomes: [
      "Understand fundamentals of PVT behaviour and reservoir fluid characterization",
      "Learn laboratory PVT experiments: DL, CCE, Separator Tests & QC workflows",
      "Apply EOS models (PR, SRK) for fluid modelling & compositional behaviour",
      "Tune & validate EOS using regression techniques and experimental data",
      "Use PVT data for material balance, reserves estimation & reservoir simulation",
      "Model miscible/immiscible gas injection, CO₂ processes & EOR behaviour",
      "Apply PVT models in production engineering, multiphase flow & flow assurance",
      "Work on hands-on case studies using PVT modelling software",
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
    level: "Beginner to Intermediate",
    certificate: "Yes",
    overview:
      "A practical program designed to help learners master Power BI for data analytics, reporting, and interactive dashboard creation. Participants learn to connect, clean, transform, and model oil & gas datasets, build insightful visualizations, and leverage DAX, AI tools, and real-time dashboards to support operational and strategic decision-making. ",
    outcomes: [
      "Understand Power BI interface, data models, datasets & visualization types",
      "Import, clean, transform, and prepare field datasets",
      "Perform exploratory data analysis with distributions, outliers & relationships",
      "Analyze production trends by field, block & well-level performance",
      "Identify key influencers, bad actors & operational inefficiencies",
      "Build real-time drilling, production, reservoir & well-testing dashboards",
      "Use DAX formulas and Power BI AI insights for advanced interpretations",
      "Integrate Power BI with Excel, SharePoint & other Microsoft tools",
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
      "A focused training program that provides a complete understanding of Electric Submersible Pump (ESP) systems used in the oil & gas industry. Through interactive sessions and real-world case studies, participants learn ESP fundamentals, installation, operation, troubleshooting, monitoring, and performance optimization to enhance production efficiency and reduce downtime. ",
    outcomes: [
      "Understand ESP fundamentals, system components & industry applications",
      "Learn best practices for ESP installation, operation & maintenance",
      "Perform ESP performance calculations, equipment sizing & optimization",
      "Use monitoring tools, downhole sensors & control systems for real-time surveillance",
      "Troubleshoot common ESP failures and resolve operational issues",
      "Apply advanced techniques to improve well performance and lift efficiency",
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
      "A practical program designed to teach Python from absolute basics to advanced oil & gas applications. Participants learn data types, loops, functions, NumPy, Pandas, and Matplotlib—followed by real reservoir, production, and well log analytics projects. The program focuses on solving field problems using Python, data analytics, and machine learning tools. ",
    outcomes: [
      "Learn Python fundamentals: variables, loops, functions, data structures & exceptions",
      "Understand modules, packages, data processing & debugging",
      "Perform numerical computing with NumPy and data manipulation with Pandas",
      "Create industry-grade visualizations using Matplotlib",
      "Analyze reservoir & well log datasets (porosity, water saturation, shale evaluation, cross-plots)",
      "Perform exploratory data analysis for petroleum datasets",
      "Work on MBAL, IPR, well test, and reservoir simulation–related Python projects",
      "Apply Python in production engineering, reservoir engineering & well performance evaluation",
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
      "A comprehensive program designed to develop a deep understanding of well completion processes—from reservoir–wellbore interface to downhole equipment, tubing, packers, wellheads, Christmas trees, and completion accessories. Participants learn how to transform a drilled well into a fully productive one using industry best practices and modern completion technologies, including intelligent completions. ",
    outcomes: [
      "Understand the fundamentals of well completion operations",
      "Learn completion components for naturally flowing wells & intervention strategies",
      "Identify and apply the functions of downhole tools and completion strings",
      "Analyze tubing selection, packer mechanisms, safety valves & downhole accessories",
      "Interpret wellhead & Christmas tree configurations and API/premium connections",
      "Evaluate reservoir data, fluid data & equipment requirements for completion design",
      "Gain exposure to intelligent completions and performance optimization",
      "Study case-based examples to understand real-field completion challenges",
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
  "id": "21",
  "title": "Advanced Drilling Operations & Risk Mitigation",
  "brochure": "https://drive.google.com/file/d/1BLrUYOHU6hV4C53Ll2mGwexc1yIzd0XV/view?usp=drive_link",
  "category": "self-paced",
  "duration": "5+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides practical training in advanced drilling operations, risk assessment, and real-time problem-solving. Learners will explore well control, NPT reduction strategies, stuck-pipe prevention, and decision-making techniques to enhance safety, efficiency, and operational performance in drilling environments.",
  "outcomes": [
    "Identify and mitigate critical drilling risks using real-time strategies",
    "Prevent non-productive time (NPT) with structured operational planning",
    "Develop strong skills in well control and pressure management",
    "Understand failure mechanisms and troubleshooting techniques",
    "Strengthen career prospects in drilling and field supervision roles",
    "Gain exposure to stuck-pipe prevention and contingency planning",
    "Learn industry best practices for safety and operational efficiency",
    "Apply decision-making tools for complex drilling scenarios"
  ],
  "curriculum": [
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
  "targetAudience": [
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
  "price": "$150 / ₹11,000",
  "image": "/images/Advanced Drilling Operations & Risk Mitigation.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/9B63cx6jH9uF5EW40VaR50I",
    "razorpay": "https://rzp.io/rzp/eOv5Ggb"
  }
},
{
  "id": "22",
  "title": "Well Test Analysis & Reservoir Modelling using MS Excel",
  "brochure": "https://drive.google.com/file/d/1h1b8aF4yDPkPYjshxCBMxSrTVQJMThwv/view?usp=drive_link",
  "category": "self-paced",
  "duration": "10+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program delivers practical Excel-based training in well testing and reservoir modelling, enabling learners to analyse reservoir performance using real datasets. It equips participants with essential engineering techniques, data interpretation skills, and industry tools for informed decision-making and career growth.",
  "outcomes": [
    "Understand reservoir engineering fundamentals & PVT analysis",
    "Perform material balance and reservoir performance evaluation",
    "Conduct production data analysis using decline curve methods",
    "Interpret well tests through pressure transient analysis",
    "Apply Excel-based models for production optimization",
    "Strengthen analytical and problem-solving capabilities",
    "Improve job readiness for petroleum engineering roles",
    "Enhance decision-making in field development and operations",
    "Build technical confidence for career advancement"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Petroleum engineers",
    "Reservoir engineers",
    "Production engineers",
    "Petroleum engineering students",
    "Geoscience students and professionals",
    "Early-career upstream engineers seeking practical reservoir skills",
    "Oil & gas professionals wanting to improve well test analysis abilities",
    "Engineers looking to strengthen Excel-based reservoir modeling skills"
  ],
  "price": "$130 / ₹10,000",
  "image": "/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg",
  "payment": {
    "stripe": "https://buy.stripe.com/00waEZ23r6it2sK0OJaR50P",
    "razorpay": "https://rzp.io/rzp/7nmMx0a"
  }
},

{
  "id": "23",
  "title": "Data Science and Its Application for Oil & Gas",
  "brochure": "https://drive.google.com/file/d/1aiB2wHKnSxsZXHgiLhY5wwkn0FTdpULF/view?usp=drive_link",
  "category": "self-paced",
  "duration": "80+ Hours",
  "domain": "Digital Oil & gas",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This comprehensive program offers industry-focused training on data science applications in the oil and gas sector. Through real datasets and hands-on projects, learners explore advanced analytics, forecasting, machine learning, and smart monitoring to drive operational efficiency and informed decision-making.",
  "outcomes": [
    "Perform data gathering, cleaning, and exploratory analysis",
    "Apply machine learning algorithms across oilfield datasets",
    "Build predictive models for production and performance forecasting",
    "Implement smart monitoring for real-time operational tracking",
    "Design and manage virtual flow processes and simulations",
    "Use Python, ML tools, and BI dashboards for insights",
    "Optimize asset management with data-driven strategies",
    "Enhance decision-making using advanced analytics techniques"
  ],
  "curriculum": [
    "Data Handling & Python Basics",
    "Machine Learning Foundations",
    "Reservoir & Production Data Workflows",
    "Operational Forecasting",
    "Real-World Analytics Projects"
  ],
  "targetAudience": [
    "Data analysts",
    "Energy engineers",
    "Students"
  ],
  "price": "$300 / ₹22,500",
  "image": "/images/Data Science & Its Application for Oil & Gas.png",
  "payment": {
    "stripe": "https://buy.stripe.com/8x28wReQd36hd7o40VaR50Q",
    "razorpay": "https://rzp.io/rzp/Nl6YWPi"
  }
},
{
  "id": "24",
  "title": "Machine Learning with Time Series Application for Energy Industry",
  "brochure": "https://drive.google.com/file/d/1XCT0jO3gFF9-Mivt0_2l4HAvTlevU53j/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "domain": "Digital Oil & gas",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "Comprehensive program focusing on Machine Learning With Time Se Application For Energy Industry with real life examples and case studies it will also use the enhanced tools and techniques for the problems.",
  "outcomes": [
    "Learn directly from experienced professionals through live sessions",
    "Access recorded lectures for flexible, on-demand learning",
    "Utilize digital manuals for comprehensive reference and study",
    "Gain practical insights through field case studies",
    "Receive e-certificates upon passing the assessment, recognizing your achievement",
    "The course is designed to address current challenges and opportunities within the energy sector"
  ],
  "curriculum": [
    "ML & Time Series Fundamentals",
    "Data Preparation & Feature Engineering",
    "Forecasting Models (ARIMA/LSTM)",
    "Field Case Studies",
    "Deployment Techniques"
  ],
  "targetAudience": [
    "Data analysts",
    "Energy engineers",
    "Students"
  ],
  "price": "$200 / ₹14,000",
  "image": "/images/Machine Learning with Time Series Applications for Energy Industry.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/5kQ28teQd6it9Vc7d7aR50R",
    "razorpay": "https://rzp.io/rzp/xViy6Nla"
  }
},
{
  "id": "25",
  "title": "Power BI Analytics for Drilling Engineer",
  "brochure": "https://drive.google.com/file/d/1b4GGGjrwD91rpp8JZ2Ts0eL9o0cD7fTx/view?usp=drive_link",
  "category": "self-paced",
  "duration": "10+ Hours",
  "domain": "Digital Oil & gas",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program equips drilling engineers with practical Power BI skills to analyse field data, optimize drilling operations, and visualize KPIs. Through real datasets and case studies, learners gain the ability to monitor performance, reduce NPT, and support data-driven decisions.",
  "outcomes": [
    "Understand Power BI interface, tools, and workspace",
    "Use Power Query to clean and transform drilling datasets",
    "Build production & drilling dashboards with ROP, NPT, cost per foot, etc.",
    "Apply DAX formulas for advanced technical insights",
    "Analyse real drilling scenarios through case studies",
    "Interpret drilling data for operational optimization",
    "Present data-driven decisions using visual reports and dashboards",
    "Strengthen analytical skills for engineering and field roles"
  ],
  "curriculum": [
    "Power BI Basics",
    "Drilling Data Transformation",
    "Performance Dashboards",
    "KPI Visualization",
    "Case Studies"
  ],
  "targetAudience": [
    "Drilling engineers",
    "Data analysts",
    "Students"
  ],
  "price": "$150 / ₹9,000",
  "image": "/images/Power BI Analytics For Drilling Engineer.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/28E4gBgYlfT36J0fJDaR50S",
    "razorpay": "https://rzp.io/rzp/DTl79Ij"
  }
},
{
  "id": "26",
  "title": "AI-POWERED EXCEL AUTOMATION FOR OIL & GAS: FROM RAW DATA TO SMART DECISIONS",
  "brochure": "https://drive.google.com/file/d/1rfCMIA2-yCnXDBzB6YHeetA3u3yDZKhc/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "domain": "Digital Oil & gas",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program teaches AI-driven Excel automation for oil and gas workflows, turning raw data into actionable insights. Participants will learn to use macros, formulas, and AI tools to optimize analysis, eliminate repetitive tasks, and improve decision-making across field operations.",
  "outcomes": [
    "Clean and organize raw oilfield datasets efficiently",
    "Extract and process data using automated techniques",
    "Recognize industry patterns using AI-powered algorithms",
    "Automate complex analysis using Excel AI tools and scripts",
    "Use macros and custom formulas to reduce manual work",
    "Implement AI-based production monitoring",
    "Build smart dashboards for real-time decision-making",
    "Enhance productivity and analytical capabilities in oil & gas roles"
  ],
  "curriculum": [
    "Excel Automation Essentials",
    "AI Tools & Macros",
    "Predictive Modelling",
    "Real-Time Dashboards",
    "Case Workflows"
  ],
  "targetAudience": [
    "Engineers",
    "Excel analysts",
    "Students"
  ],
  "price": "$150 / ₹11,000",
  "image": "/images/AI Powered Excel Automation for Oil & Gas.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/5kQ00l23r8qBebs2WRaR50T",
    "razorpay": "https://rzp.io/rzp/VUuZhIl"
  }
},
{
  "id": "27",
  "title": "Spotfire Analytics for Oil & Gas",
  "brochure": "https://drive.google.com/file/d/1ET4sHRQKD_e1ivWEx06ibHXf4PqHzuTU/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "domain": "Digital Oil & gas",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides hands-on training in Spotfire Analytics for the oil and gas sector using real datasets and case studies. Learners will master data visualization, dashboard creation, trend analysis, and operational insights to support faster, smarter decision-making in field operations.",
  "outcomes": [
    "Understand Spotfire interface, tools, and data workflow",
    "Import, clean, and transform E&P datasets efficiently",
    "Build interactive dashboards for drilling & production insights",
    "Perform data visualization and trend analysis for field performance",
    "Use calculated fields & expressions for advanced analysis",
    "Apply Spotfire in real industry case studies",
    "Integrate external data sources for continuous monitoring",
    "Optimize decisions using analytics-driven techniques"
  ],
  "curriculum": [
    "Spotfire Fundamentals",
    "Data Integration & Cleaning",
    "Dashboarding & Visual Analytics",
    "Operational Case Studies"
  ],
  "targetAudience": [
    "Analysts",
    "Production teams",
    "Students"
  ],
  "price": "$150 / ₹11,000",
  "image": "/images/Spotfire Analytics for Oil & Gas.png",
  "payment": {
    "stripe": "https://buy.stripe.com/cNiaEZbE1cGR4AS7d7aR50U",
    "razorpay": "https://rzp.io/rzp/tP1DNcu"
  }
},

{
  "id": "28",
  "title": "Petroleum Geomechanics & CCUS from Subsurface Principles to Field -Scale",
  "brochure": "https://drive.google.com/file/d/1mZV9smy7_Ay5-ILaHFXnXgDrl_3D7_2H/view?usp=drive_link",
  "category": "self-paced",
  "duration": "5+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This intensive program explores petroleum geomechanics and CCUS from subsurface principles to field-scale applications. Using real case studies and industry tools, learners will analyze rock behavior, reservoir stability, and geomechanical solutions for safe CO₂ storage and sustainable field operations.",
  "outcomes": [
    "Understand core concepts and fundamentals of petroleum geomechanics",
    "Study rock properties and their geomechanical implications",
    "Analyze wellbore stability and failure mechanisms",
    "Evaluate reservoir geomechanics for field development",
    "Explore CCUS applications from concept to field-scale",
    "Apply geomechanical models using real datasets",
    "Perform stress analysis and stability assessments",
    "Use industry tools for diagnostics and decision-making"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Petroleum engineers",
    "Reservoir engineers",
    "Drilling & completion engineers",
    "Geologists and geophysicists",
    "CCUS and energy-transition professionals",
    "Students entering subsurface engineering roles"
  ],
  "price": "$100 / ₹8,000",
  "image": "/images/Petroleum Geomechanics & CCUS.png",
  "payment": {
    "stripe": "https://buy.stripe.com/4gM4gBazX6itffwapjaR50V",
    "razorpay": "https://rzp.io/rzp/dM7Hkm2e"
  }
},
{
  "id": "29",
  "title": "Python for Geophysics Data Processing",
  "brochure": "https://drive.google.com/file/d/10UmJRxPTKc7x_3pjZRhdQbFWphUQURUG/view?usp=drive_link",
  "category": "self-paced",
  "duration": "3+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program teaches Python-based techniques for processing and interpreting geophysical data, including seismic, gravity, and subsurface datasets. Learners gain hands-on experience in data workflows, visualization, and exploration analysis—bridging geoscience knowledge with digital skills for modern energy industry demands.",
  "outcomes": [
    "Use Python for seismic and gravity data processing",
    "Learn subsurface data visualization and interpretation techniques",
    "Automate geophysical workflows for faster analysis",
    "Bridge interpretation with data intelligence using ML tools",
    "Build portfolio-worthy geoscience projects",
    "Identify geological structures and anomalies using code",
    "Strengthen job readiness for geodata-driven roles",
    "Apply Python tools used in modern exploration teams"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Geophysicists",
    "Geologists & exploration engineers",
    "Earth science M.Sc/PhD students & researchers",
    "Oil & gas & mining professionals",
    "Geotech & CCS project analysts",
    "Data scientists entering geoscience/energy domain"
  ],
  "price": "$150 / ₹11,000",
  "image": "/images/Python for Geophysics Data Processing.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/4gMdRbcI5eOZc3k0OJaR50W",
    "razorpay": "https://rzp.io/rzp/aYcbqrkq"
  }
},
{
  "id": "30",
  "title": "Oil & Gas Forecasting & Predictions using Python",
  "brochure": "https://drive.google.com/file/d/1JIcyun75L7o0gc1rl1uh8dzMGiLRuc0K/view?usp=drive_link",
  "category": "self-paced",
  "duration": "35+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program trains learners to use Python for forecasting and predictive analytics in the oil and gas industry. Through real datasets and hands-on projects, participants will master time-series analysis, operational prediction, trend detection, and data-driven decision-making for field applications.",
  "outcomes": [
    "Clean and prepare datasets for forecasting",
    "Build time-series models to predict production trends",
    "Identify seasonal patterns and anomalies in field data",
    "Create predictive dashboards using Python libraries",
    "Learn end-to-end workflow from raw data to insights",
    "Understand demand, consumption, and performance forecasting",
    "Apply forecasting to real oilfield datasets",
    "Strengthen analytical skills for industry-ready roles"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Petroleum & energy sector students",
    "Oil & gas professionals",
    "Data analysts & data enthusiasts",
    "Engineers wanting forecasting skills",
    "Beginners in Python-based time series analysis"
  ],
  "price": "$200 / ₹14,000",
  "image": "/images/Oil and Gas Software Development Using Python.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/28EbJ3fUhbCN4AS54ZaR50X",
    "razorpay": "https://rzp.io/rzp/1uLWuXP"
  }
},
{
  "id": "31",
  "title": "Production & Nodal Analysis with Python and ML",
  "brochure": "https://drive.google.com/file/d/1tUKOFlM-iArYjr5NXbQ4cI_ypbaZhSSU/view?usp=drive_link",
  "category": "self-paced",
  "duration": "10+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program teaches nodal analysis and production optimization using Python and machine learning. Learners will analyse reservoir deliverability, evaluate well performance, model artificial lift systems, and apply data-driven techniques to enhance productivity and decision-making in field operations.",
  "outcomes": [
    "Understand nodal analysis and production system concepts",
    "Use Python for well performance and deliverability modelling",
    "Apply ML techniques for production prediction and optimization",
    "Learn artificial lift evaluation and selection workflows",
    "Perform data analysis using real oilfield datasets",
    "Build Excel and Python-based production models",
    "Strengthen industry-relevant skills for engineering roles",
    "Enhance employability and career advancement in upstream operations"
  ],
  "curriculum": [
    "Python basics for oil & gas: variables, loops, functions, file handling",
    "Data handling with Pandas, NumPy & visualization with Matplotlib",
    "Intro to ML: training/testing, regression, clustering, MSE",
    "ML workflows applied to production datasets",
    "Inflow & outflow performance concepts for wells (IPR & VLP)",
    "Nodal analysis workflow and production system optimization",
    "Flow assurance basics: hydrate & wax formation predictions",
    "Hands-on exercises using real oilfield production data"
  ],
  "targetAudience": [
    "Petroleum and production engineers",
    "Reservoir engineers",
    "Oil & gas data analysts",
    "Students entering the energy sector",
    "Professionals wanting Python + ML skills for production workflows"
  ],
  "price": "$250 / ₹20,000",
  "image": "/images/Production and Nodal Analysis with Python & ML.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/4gM6oJ37v4algjA40VaR50Y",
    "razorpay": "https://rzp.io/rzp/1HyI5k5"
  }
},
{
  "id": "32",
  "title": "Diploma for HSE in Oil & Gas",
  "brochure": "https://drive.google.com/file/d/1c0L2gU99uqQii07oHYBb2zGh_-J6ANjj/view?usp=drive_link",
  "category": "diploma",
  "duration": "80+ Hours",
  "format": "Diploma",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This diploma program provides practical HSE training tailored to the oil and gas industry. Through real-world case studies, safety tools, and industry standards, learners gain the skills needed to manage risks, protect workers, and maintain regulatory compliance.",
  "outcomes": [
    "Understand HSE regulations, standards, and industry compliance requirements",
    "Identify and manage workplace hazards using risk assessment tools",
    "Develop strong emergency response and disaster management skills",
    "Apply occupational health principles for safer work environments",
    "Implement safety procedures and correct PPE usage",
    "Promote environmental sustainability and pollution control measures",
    "Use structured methods for incident investigation and reporting",
    "Ensure safe operation and maintenance of oilfield equipment"
  ],
  "curriculum": [
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
  "targetAudience": [
    "HSE officers and safety professionals",
    "Oil & gas engineers and operations staff",
    "Students entering HSE or petroleum careers",
    "Supervisors, technicians & field personnel",
    "Professionals transitioning to HSE roles"
  ],
  "price": "$300 / ₹24,000",
  "image": "/images/Diploma for HSE in Oil & Gas.avif",
  "payment": {
    "stripe": "https://buy.stripe.com/cNidRb8rP6it0kCeFzaR50Z",
    "razorpay": "https://rzp.io/rzp/55gplkKz"
  }
},
{
  "id": "33",
  "title": "Fundamentals to Advance Well Control",
  "brochure": "https://drive.google.com/file/d/1Y-WI_cz4iIpvltpFkYc7YB5ydE4No2z9/view?usp=drive_link",
  "category": "self-paced",
  "duration": "15+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides practical training in well control, focusing on pressure management, kick detection, safety procedures, and real field case studies. Learners develop problem-solving skills using industry tools and techniques to handle critical drilling challenges with confidence and accuracy.",
  "outcomes": [
    "Understand well control principles and pressure fundamentals",
    "Detect signs of kicks and handle well control events",
    "Apply BOP equipment and safety procedures correctly",
    "Learn drilling fluid management and pressure balancing",
    "Perform risk assessment for drilling operations",
    "Practice emergency response with real case simulations",
    "Follow international well control standards (IWCF/IADC)",
    "Improve operational decision-making and field readiness"
  ],
  "curriculum": [
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
    "Shallow Hazards: Shallow Gas, Hydrates, Procedures & Mitigation"
  ],
  "targetAudience": [
    "Drilling engineers",
    "Well engineers & wellsite supervisors",
    "Completion & workover engineers",
    "Rig crews and drilling supervisors",
    "Petroleum engineering students",
    "Blowout prevention and well control trainees"
  ],
  "price": "$150 / ₹10,500",
  "image": "/images/Fundamental to Advance Well Control.png",
  "payment": {
    "stripe": "https://buy.stripe.com/3cI14p37vbCN5EW0OJaR510",
    "razorpay": "https://rzp.io/rzp/vuEqzOe2"
  }
},
{
  "id": "34",
  "title": "Extended Reach Drilling",
  "brochure": "https://drive.google.com/file/d/1CRuKgr1GnESBRWO7qG8OAy9_QojyGRbN/view?usp=drive_link",
  "category": "self-paced",
  "duration": "5+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides hands-on training in Extended Reach Drilling (ERD), covering planning, hydraulics, directional techniques, and risk control. Learners gain practical knowledge to solve real operational challenges using modern tools, engineering strategies, and industry case studies.",
  "outcomes": [
    "Understand ERD principles, benefits, and field applications",
    "Plan wells using risk evaluation and trajectory strategies",
    "Apply advanced drilling techniques and specialized tools",
    "Perform hydraulic optimization for long-reach wells",
    "Use directional drilling methods and survey analysis",
    "Conduct risk assessment and mitigation planning",
    "Manage ERD projects with cost and scheduling efficiency",
    "Improve decision-making for complex drilling operations"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Drilling engineers",
    "Well planning & well engineering professionals",
    "Directional drillers & MWD/LWD engineers",
    "Completion & workover engineers",
    "Geomechanics and subsurface engineers",
    "Petroleum engineering students & fresh graduates",
    "Field supervisors and rig operations personnel"
  ],
  "price": "$150 / ₹10,500",
  "image": "/images/Extended Reach Drilling.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/cNicN7bE16itc3kcxraR511",
    "razorpay": "https://rzp.io/rzp/FCgqej5"
  }
},
{
  "id": "35",
  "title": "Analytics for Oil & Gas",
  "brochure": "https://drive.google.com/file/d/1yKkUiGPJLaRddg1Lfik1SdBiRDEa8oS8/view?usp=drive_link",
  "category": "self-paced",
  "duration": "35+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides industry-focused training on data analytics for the oil and gas sector. Using real-world datasets and case studies, learners gain the skills to optimize production, forecast performance, reduce operational costs, and make data-driven strategic decisions.",
  "outcomes": [
    "Analyse production data to improve operational efficiency",
    "Apply predictive maintenance using historical datasets",
    "Model and forecast reservoir performance for planning",
    "Perform supply chain and logistics optimization",
    "Use data for risk detection and mitigation",
    "Monitor environmental compliance through analytics",
    "Interpret market trends to support business decisions",
    "Utilize geospatial and real-time monitoring for asset tracking"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Petroleum engineering students & graduates",
    "Reservoir, drilling & production engineers",
    "Energy-sector professionals transitioning into data analytics",
    "Aspiring petroleum data scientists",
    "Geoscience professionals wanting Python skills",
    "Freshers seeking oil & gas analytics exposure"
  ],
  "price": "$200 / ₹15,000",
  "image": "/images/Analytics for Oil & Gas.png",
  "payment": {
    "stripe": "https://buy.stripe.com/fZu00l23r7mx6J02WRaR512",
    "razorpay": "https://rzp.io/rzp/Bmf3HWN"
  }
},
{
  "id": "36",
  "title": "Artificial Lift Modelling, Reservoir Deliverability & Well Performance",
  "brochure": "https://drive.google.com/file/d/1_buWD-kGdg8CxiyotEuRJVatz5eJ9dlh/view?usp=drive_link",
  "category": "self-paced",
  "duration": "7+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides practical Excel-based training on modelling artificial lift systems, understanding well and reservoir performance, optimizing production strategies, and evaluating lift economics, enabling learners to make data-driven decisions for efficient petroleum production operations.",
  "outcomes": [
    "Understand petroleum production systems and reservoir deliverability",
    "Analyze inflow and outflow performance relationships",
    "Master design & calculation of ESP, SRP, Gas Lift, and Plunger Lift systems",
    "Evaluate lift methods and optimize production performance",
    "Apply economics for artificial lift selection"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Petroleum engineering students & fresh graduates",
    "Production & reservoir engineers",
    "Well performance and artificial lift engineers",
    "Field engineers seeking design & optimization skills",
    "Professionals transitioning into production engineering",
    "Anyone wanting hands-on artificial lift and well performance modelling using Excel"
  ],
  "price": "$45 / ₹4,000",
  "image": "/images/Artificial Lift Modeling, Reservoir Deliverability & Well performance.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/dRm4gB6jH22d0kC54ZaR513",
    "razorpay": "https://rzp.io/rzp/vDKmPtL"
  }
},
{
  "id": "37",
  "title": "Reservoir Engineering Modelling & Flow Simulation",
  "brochure": "https://drive.google.com/file/d/1NeKkOyAy7wG_Qlbb93k8MjCXLBKenZZs/view?usp=drive_link",
  "category": "self-paced",
  "duration": "7+ Hours",
  "format": "Self-Paced",
  "level": "Beginner",
  "certificate": "Yes",
  "overview": "This program offers hands-on training in reservoir engineering modelling and flow simulation, focusing on reserve estimation, dynamic analysis, and real-world asset planning using industry tools. Learners gain practical skills in model initialization, preparation, and 3D dynamic simulation techniques.",
  "outcomes": [
    "Assess subsurface hydrocarbon reserves in our online Reservoir engineering courses",
    "Participate in real-world asset planning, simulation & modelling",
    "Understand about various RE tools and where they are used",
    "Perform 3D Dynamic Simulation and Model initialization",
    "Execute model preparation and forecasting"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Graduate engineers transitioning into petroleum engineering",
    "Petroleum engineers seeking advanced reservoir engineering skills",
    "Reservoir engineers",
    "Asset development engineers",
    "Energy industry professionals involved in planning & field development",
    "Students pursuing petroleum engineering or related fields",
    "Managers looking to understand RE modelling & simulation workflows"
  ],
  "price": "$40 / ₹2,500",
  "image": "/images/Reservoir Engineering, Modeling & flow Simulation.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/7sY7sNdM9dKV0kCfJDaR514",
    "razorpay": "https://rzp.io/rzp/0XdSJcp"
  }
},
{
  "id": "38",
  "title": "Power BI Essentials for Oil and Gas: Optimizing Drilling, Production and Reservoir Management",
  "brochure": "https://drive.google.com/file/d/1JDiSLvKjjez0kOR2IgVaJtHCbNR0Xi-S/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This course teaches Power BI applications for the oil and gas industry, enabling learners to analyze drilling efficiency, monitor reservoir performance, and create real-time dashboards. Gain practical skills to transform raw operational data into actionable insights for better decision-making.",
  "outcomes": [
    "Build interactive dashboards for drilling and production optimization",
    "Visualize complex oilfield and reservoir data for insightful analysis",
    "Integrate real-time data from Oil and gas operations for Continuous monitoring",
    "Gain hands-on experience with Power BI tools tailored to the Oil & Gas sector",
    "Create Drilling optimization Dashboards"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Oil & Gas drilling engineers",
    "Reservoir engineers",
    "Production engineers",
    "Oilfield data analysts",
    "Energy sector data professionals",
    "Managers seeking dashboard-driven decision-making",
    "Beginners interested in Power BI for Oil & Gas analytics"
  ],
  "price": "$150 / ₹10,000",
  "image": "/images/Power BI Essentials for Oil & Gas.png",
  "payment": {
    "stripe": "https://buy.stripe.com/8x26oJcI5fT3aZg7d7aR515",
    "razorpay": "https://rzp.io/rzp/jNCAZZMX"
  }
},

{
  "id": "39",
  "title": "Geomechanics & Its Application in Drilling and Completion",
  "brochure": "https://drive.google.com/file/d/1dSaAZ-0cq-m6dCNpF9UjddB9Pm9WR6X7/view?usp=drive_link",
  "category": "self-paced",
  "duration": "10+ Hours",
  "format": "Self-Paced",
  "level": "Intermediate",
  "certificate": "Yes",
  "overview": "This program provides essential knowledge of petroleum geomechanics, focusing on rock behavior, wellbore stability, drilling challenges, and completion design. Learners gain practical skills to mitigate risks, optimize operations, and apply real-world geomechanical solutions in drilling and field development. ",
  "outcomes": [
    "Recognize the significance of rock mechanics and petroleum geomechanics",
    "Identify application of geomechanics for optimization and risk reduction",
    "Use the basic terminology of petroleum geomechanics",
    "Describe the basic principles of rock mechanics and its problem-solving techniques",
    "Evaluate with real life experiences"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Drilling engineers",
    "Completion engineers",
    "Petroleum engineering students",
    "Geomechanics enthusiasts",
    "Reservoir engineers seeking geomechanics exposure",
    "Well design & operations team members",
    "Energy sector professionals involved in drilling/completion optimization"
  ],
  "price": "$100 / ₹7,500",
  "image": "/images/Geomechanics and its application in Drilling & Completion.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/8x2cN78rPeOZ5EW0OJaR516",
    "razorpay": "https://rzp.io/rzp/NU8mAzk"
  }
},
{
  "id": "40",
  "title": "Integrated Insights: SQL, Power BI & Tableau for Oil & Gas Analytics",
  "brochure": "https://drive.google.com/file/d/1Tz_ouda5XEAk80PpMkstV6nv9mloOXus/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "format": "Self-Paced",
  "level": "Beginner",
  "certificate": "Yes",
  "overview": "This course combines SQL, Power BI, and Tableau to deliver complete data analytics skills for the oil and gas industry. Learners gain hands-on experience in querying, visualizing, and interpreting field data to drive operational decisions and improve efficiency. ",
  "outcomes": [
    "Learn SQL Basics for Oil & Gas",
    "Introduction to SQL and its specific application in the Oil & Gas industry",
    "Effective Querying Techniques",
    "Master SQL syntax and structure for optimal data retrieval and filtering",
    "Can able to do Advanced Data Manipulation in Oilfields"
  ],
  "curriculum": [
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
  "targetAudience": [
    "Drilling engineers",
    "Completion engineers",
    "Petroleum engineering students",
    "Geomechanics enthusiasts",
    "Reservoir engineers seeking geomechanics exposure",
    "Well design & operations team members",
    "Energy sector professionals involved in drilling/completion optimization"
  ],
  "price": "$150 / ₹12,000",
  "image": "/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/dRm8wRazX6it7N4eFzaR517",
    "razorpay": "https://rzp.io/rzp/7Sqvi2YU"
  }
},
{
  "id": "41",
  "title": "Diploma in Machine Learning for Oil & Gas",
  "brochure": "https://drive.google.com/file/d/1inu-OU7XNX_rBfjwmG8vv9wR5bzpx2Cj/view?usp=drive_link",
  "category": "diploma",
  "duration": "20+ Hours",
  "format": "Diploma",
  "level": "Beginner to Intermediate",
  "certificate": "Yes",
  "overview": "This Diploma program offers industry-focused training in machine learning for oil and gas, using real datasets and practical projects. Learners gain proficiency in Python, data analysis, and predictive modelling to solve operational challenges and drive data-based decision-making. ",
  "outcomes": [
    "Strong foundation in machine learning algorithms & workflows",
    "Ability to preprocess, analyze, and model oil & gas datasets",
    "Build ML models for prediction, anomaly detection & optimization",
    "Apply data visualization techniques for technical storytelling",
    "Use Python, ML libraries, and Power BI for real industry datasets",
    "Understand best practices, ethics, and ML deployment methods"
  ],
  "curriculum": [
    "Why Data Science & ML in Oil & Gas Industry",
    "Introduction to Python, IDE Setup & Installation",
    "Writing First Python Program & Understanding Data Types",
    "Variables, Mathematical Operations & Basic Programming Logic",
    "Data Structures: Lists, Tuples, Dictionaries",
    "Control Flow: If-Else, Loops, Iterables",
    "Functions, Modules & Exception Handling",
    "NumPy for Numerical Computing & Synthetic Data Generation",
    "Pandas for Data Loading, Cleaning & Manipulation",
    "Data Visualization with Matplotlib",
    "Mini Python Projects: Pressure Profile, Klinkenberg Effect",
    "Deploying ML Applications on Web Servers",
    "Introduction to Statistics for ML",
    "Supervised Learning: Linear Regression, Logistic Regression",
    "Tree-Based Algorithms & End-to-End ML Project",
    "Deep Learning: ANNs, RNNs, CNNs with Hands-on Projects",
    "Computer Vision Applications in Oil & Gas",
    "Power BI Data Loading & Field Data Preparation",
    "Exploratory Data Analysis: Distributions, Outliers, Relationships",
    "Trend Analysis for Production & Well Performance",
    "Building Multi-Well & Field-Level Dashboards in Power BI",
    "Real-Time Reservoir Monitoring Dashboards",
    "Decomposition Tree & Advanced BI Visualization",
    "Machine Learning for Production Forecasting",
    "ML for Drilling Optimization & Well Performance",
    "Anomaly Detection in Sensors & Operations",
    "Feature Engineering for Seismic, Logs, Production Data",
    "Ethics & Best Practices in ML for Oil & Gas",
    "Model Deployment & Monitoring",
    "Oilfield Case Studies & Capstone Project Development"
  ],
  "targetAudience": [
    "Oil & Gas professionals transitioning into Machine Learning",
    "Petroleum engineering students",
    "Data analysts aiming to specialize in energy sector",
    "Reservoir, drilling, production engineers",
    "Geoscientists interested in ML applications",
    "Freshers seeking a certified ML diploma for Oil & Gas",
    "Python learners wanting industry-specific ML applications"
  ],
  "price": "$300 / ₹22,500",
  "image": "/images/Diploma for Machine Learning in Oil & Gas.webp",
  "payment": {
    "stripe": "https://buy.stripe.com/fZucN7azXeOZgjA54ZaR518",
    "razorpay": "https://rzp.io/rzp/k0lOLYXh"
  }
},
{
  "id": "42",
  "title": "Integrated Oil & Gas Analytics Using Big Data",
  "brochure": "https://drive.google.com/file/d/1mDRVv13ZUwlucjmsLu5ODz9qTcjLjTR-/view?usp=drive_link",
  "category": "self-paced",
  "duration": "50+ Hours",
  "format": "Self-Paced",
  "level": "Advanced",
  "certificate": "Yes",
  "overview": "This advanced program trains learners to apply big data and analytics across the full oil and gas value chain. Through real datasets and end-to-end projects, participants master forecasting, optimization, and decision-making using modern data science and industry tools.",
  "outcomes": [
    "Apply big data & advanced analytics across E&P, transportation, and refining",
    "Perform production forecasting and build time-series models using field data",
    "Analyze storage performance and optimize midstream operations",
    "Use ML/DL methods to forecast consumption & market demand",
    "Interpret gas price trends using market analytics techniques",
    "Build an end-to-end capstone covering full lifecycle datasets",
    "Strengthen decision-making with modern data science tools"
  ],
  "curriculum": [
    "Overview of data science applications across upstream, midstream, and downstream sectors",
    "Python tools and libraries for big data analytics in energy",
    "Role and importance of big data in oil & gas operations",
    "Well log and core data analytics: cleaning, preprocessing, normalization",
    "Production data visualization and interpretation",
    "Time-series forecasting for multi-field gas production trends",
    "Gas storage analytics: depleted reservoirs, salt caverns, aquifers",
    "Storage capacity optimization models",
    "Performance analytics for midstream assets",
    "Machine learning and deep learning for gas consumption forecasting",
    "Case studies: forecasting demand in volatile market environments",
    "Gas price forecasting using statistical, ML, and hybrid models",
    "Market scenario analysis & actionable pricing insights",
    "Integrated analytics using upstream, midstream, and downstream datasets",
    "Problem-solving using ML, time-series, and storage analytics",
    "Industry-style presentation of findings",
    "Advanced ML methods: ensemble learning, neural networks",
    "Future trends: real-time analytics, predictive maintenance, digital twins",
    "Big data workflows for full lifecycle oil & gas operations",
    "Hands-on experience with real industry datasets",
    "Practical big data workflows for field, facility, and market analytics",
    "End-to-end energy analytics pipeline development"
  ],
  "targetAudience": [
    "Oil & gas professionals (upstream, midstream, downstream)",
    "Petroleum engineers",
    "Reservoir engineers",
    "Data scientists entering the energy sector",
    "Energy analysts and market analysts",
    "Students aspiring to work in oil & gas data analytics",
    "Professionals transitioning into digital & big data roles in energy"
  ],
  "price": "$300 / ₹17,500",
  "image": "/images/Diploma in Integrated Oil & Gas Analytics Using Big Data A full well Lifecycle Approach.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/28E00l37v36h2sKfJDaR519",
    "razorpay": "https://rzp.io/rzp/ZVF76Sai"
  }
},
{
  "id": "43",
  "title": "Diploma in Petroleum Project Management & Field Development Economics",
  "brochure": "https://drive.google.com/file/d/1xo_-1DH_u-wbpOjQjsRB5WLuKgZrND1B/view?usp=drive_link",
  "category": "diploma",
  "duration": "60+ Hours",
  "format": "Diploma",
  "level": "Beginner to Professional",
  "certificate": "Yes",
  "overview": "Gain industry-ready expertise in Petroleum Project Management & Field Development Economics through a structured, practical, and globally recognized diploma program designed to equip learners with essential project, economic, and field planning skills for the oil & gas sector. ",
  "outcomes": [
    "Develop core project management skills tailored to petroleum projects",
    "Perform economic evaluations using NPV, IRR & cash-flow modelling",
    "Apply risk identification, assessment & mitigation techniques",
    "Build leadership, communication & stakeholder management capabilities",
    "Use MS Project, Primavera & professional project tools",
    "Understand complete petroleum project lifecycle & field development planning"
  ],
  "curriculum": [
    "Project management fundamentals for oil & gas projects",
    "Importance of structured project management in petroleum operations",
    "Phases: Initiation, planning, execution, monitoring, closure",
    "Roles & responsibilities of petroleum project managers",
    "Case study: Analysis of a real petroleum project",
    "Overview of upstream, midstream, and downstream operations",
    "Exploration & Production (E&P) lifecycle",
    "Feasibility, engineering, procurement, construction, commissioning",
    "Project constraints: Scope, time, cost, quality",
    "Activity: Develop lifecycle chart for a sample oil & gas project",
    "Concept & components of Field Development Planning",
    "Exploration → Appraisal → Development workflow",
    "Onshore, offshore, deepwater & shale field types",
    "Production profiles, recovery factors & development strategy",
    "Environmental & regulatory considerations",
    "Activity: Build a simplified FDP with key milestones",
    "Developing project scope, deliverables & objectives",
    "Work Breakdown Structure (WBS) creation",
    "Critical Path Method (CPM) fundamentals",
    "Gantt chart development",
    "Resource allocation & optimization",
    "Activity: Build WBS + Gantt chart using MS Project / Primavera",
    "Petroleum economic fundamentals (NPV, IRR, Payback Period)",
    "Cash flow modeling & forecasting",
    "CAPEX vs OPEX estimation",
    "Economic evaluation of oil & gas projects",
    "Sensitivity & scenario analysis",
    "Activity: Perform an NPV/IRR evaluation for an FDP",
    "Risk identification and classification (operational, financial, environmental, political)",
    "Risk evaluation & prioritization",
    "Risk mitigation, avoidance, transfer & acceptance strategies",
    "Developing risk management plans",
    "Activity: Prepare a risk management plan for an offshore project",
    "Cost estimation methods: bottom-up, analogous, parametric",
    "CAPEX/OPEX structuring in petroleum projects",
    "Cost control techniques",
    "Earned Value Management (EVM) for budget tracking",
    "Activity: Create a budget for a drilling project",
    "Procurement cycle & vendor selection",
    "Contract types: Lump sum, cost-plus, T&M",
    "Contract risk evaluation & performance monitoring",
    "Activity: Draft procurement plan & basic contract structure",
    "HSE regulations in petroleum operations",
    "Risk assessment & mitigation",
    "Safety audits & emergency planning",
    "Activity: Create an HSE plan for a field construction project",
    "Leadership styles for project managers",
    "Communication strategies for multidisciplinary teams",
    "Conflict resolution & stakeholder management",
    "Activity: Role-play conflict resolution within a project team",
    "Execution strategies for petroleum projects",
    "KPIs & performance metrics",
    "Project tracking tools & dashboarding",
    "Managing scope changes",
    "Activity: Develop a monitoring dashboard for a refinery project",
    "Project handover procedures",
    "Documentation & final audits",
    "Lessons learned & continuous improvement",
    "Activity: Prepare a closeout report for an FDP project",
    "Complete petroleum project plan presentation",
    "Integrated assessment across FDP, planning, risk, cost & execution"
  ],
  "targetAudience": [
    "Petroleum engineers",
    "Project managers",
    "Field development planners",
    "Oil & gas economists",
    "Engineering graduates",
    "Energy sector professionals",
    "Aspiring project management professionals"
  ],
  "price": "$300 / ₹22,500",
  "image": "/images/Diploma in Petroleum Project Management & Field Development Economics.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/6oUeVf7nL0Y9gjAapjaR51a",
    "razorpay": "https://rzp.io/rzp/2ep8Kki"
  }
},
{
  "id": "44",
  "title": "Machine Learning & Python Applications For Petrophysics",
  "brochure": "https://drive.google.com/file/d/1Q1IV3JUZHF1me91b4jiaaJbbWmXYHlA3/view?usp=drive_link",
  "category": "self-paced",
  "duration": "28+ Hours",
  "format": "Self-Paced",
  "level": "Beginner to Intermediate",
  "certificate": "Yes",
  "overview": "A hands-on program that blends petrophysics with modern machine learning. Learn to analyze well log data, build predictive ML models, and apply clustering techniques for reservoir evaluation. Designed for learners aiming to use Python and AI to enhance subsurface interpretation.",
  "outcomes": [
    "Preprocess and analyze petrophysical data using Python (Lasio, Welly)",
    "Build ML models to predict reservoir properties (permeability, saturation)",
    "Perform lithofacies classification using SVM & Random Forest",
    "Apply clustering methods to evaluate reservoir heterogeneity",
    "Conduct data quality control and log reconstruction using ML",
    "Visualize, interpret, and integrate well log, core, and reservoir data"
  ],
  "curriculum": [
    "Fundamentals of project management for the petroleum industry",
    "Importance of structured management across oil & gas projects",
    "Five phases of petroleum project management: Initiation, Planning, Execution, Monitoring, Closure",
    "Roles and responsibilities of petroleum project managers",
    "Case study: Analysis of a real-world petroleum project",
    "Overview of upstream, midstream, and downstream operations",
    "Exploration & Production (E&P) project lifecycle",
    "Feasibility, engineering, procurement, construction & commissioning stages",
    "Understanding project constraints: Scope, Time, Cost, Quality",
    "Activity: Create a lifecycle chart for a sample oil & gas project",
    "Introduction to Field Development Planning and its components",
    "Exploration → Appraisal → Development workflow",
    "Onshore, offshore, deepwater & shale field characteristics",
    "Production profiles, recovery strategies, and economic considerations",
    "Regulatory and environmental compliance in FDP",
    "Activity: Build a simplified FDP with key milestones",
    "Project scope definition, deliverables & objectives",
    "Work Breakdown Structure (WBS) creation",
    "Critical Path Method (CPM) and scheduling fundamentals",
    "Gantt chart development and timeline optimization",
    "Activity: Build WBS + Gantt chart using MS Project / Primavera",
    "Economic principles: NPV, IRR, Payback Period",
    "Building cash flow models for petroleum projects",
    "CAPEX vs OPEX evaluation for field developments",
    "Economic assessment techniques for oil & gas fields",
    "Sensitivity & scenario analysis for decision making",
    "Activity: Perform NPV/IRR evaluation for a field development plan",
    "Types of risks: operational, financial, environmental, political",
    "Risk identification, evaluation & prioritization methods",
    "Mitigation, avoidance, transfer & acceptance strategies",
    "Developing a full risk management plan",
    "Activity: Prepare a risk management plan for an offshore project",
    "Cost estimation methods: Bottom-up, analogous, parametric",
    "Structuring CAPEX & OPEX for petroleum projects",
    "Cost monitoring, control systems, and EVM (Earned Value Management)",
    "Activity: Build cost estimates and budget for a drilling project",
    "Procurement workflow in oil & gas projects",
    "Contract types: Lump sum, Time & Material, Cost-plus",
    "Vendor evaluation and contract performance monitoring",
    "Activity: Draft procurement plan + basic contract document",
    "Key HSE regulations in petroleum projects",
    "HSE risk assessment and mitigation planning",
    "Safety audits, emergency planning & HSE compliance systems",
    "Activity: Prepare an HSE plan for an oilfield construction project",
    "Leadership styles suited for petroleum project environments",
    "Effective communication for multidisciplinary teams",
    "Conflict resolution & stakeholder engagement strategies",
    "Activity: Conflict resolution role-play for project teams",
    "Execution methodologies for petroleum projects",
    "KPIs & performance-based evaluation systems",
    "Monitoring tools such as dashboards, EVM metrics, and trackers",
    "Handling scope changes & change-management workflow",
    "Activity: Develop a monitoring dashboard for a refinery project",
    "Project handover processes and documentation standards",
    "Final audits, performance review, and quality assurance",
    "Capturing lessons learned & continuous improvement strategies",
    "Activity: Prepare a closeout report for a field development project",
    "Capstone: Complete petroleum project management plan",
    "Integrated assessment covering FDP, economics, risk, cost & execution"
  ],
  "targetAudience": [
    "Petroleum engineers",
    "Project managers",
    "Field development planners",
    "Oil & gas economists",
    "Engineering graduates",
    "Energy sector professionals",
    "Aspiring petroleum project managers",
    "Reservoir and production engineers seeking PM skills"
  ],
  "price": "$150 / ₹12,000",
  "image": "/images/Machine Learning & Python Applications for Petrophysics.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/8x29AVdM95ep4AS2WRaR51b",
    "razorpay": "https://rzp.io/rzp/BxIDiV8"
  }
},
{
  "id": "45",
  "title": "Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics",
  "brochure": "https://drive.google.com/file/d/1khKRwmRbAhCeJGR2JkI7m2olgyuVIq8h/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "format": "Self-Paced",
  "level": "Beginner to Intermediate",
  "certificate": "Yes",
  "overview": "Master enhanced production and reservoir forecasting using machine learning. This program blends core petroleum concepts with practical ML applications, enabling participants to analyze production systems, build forecasting models, and optimize PCP, SRP, and ESP operations using real datasets.",
  "outcomes": [
    "Build and evaluate ML models for production & reservoir forecasting",
    "Perform data preprocessing, feature engineering, and time-series analysis",
    "Apply ML techniques to PCP, SRP & ESP optimization",
    "Analyze reservoir datasets using advanced ML methods",
    "Gain hands-on experience with Python-based workflows"
  ],
  "curriculum": [
    "Overview of production forecasting and analytics for the oil & gas industry",
    "Introduction to PCP, SRP, and ESP production systems",
    "Components, operation principles, and production challenges for PCP, SRP, ESP",
    "Production data collection techniques & preprocessing workflows",
    "Feature engineering methods for production datasets",
    "Machine Learning models for production forecasting including regression, Random Forest, Gradient Boosting, Neural Networks",
    "Model evaluation: performance metrics and validation techniques",
    "Time-series forecasting using ARIMA, SARIMA, Prophet",
    "ML applications for optimizing PCP, SRP, and ESP systems",
    "Introduction to reservoir analytics and its importance in reservoir management",
    "Fundamentals of reservoir engineering and classification of reservoir types",
    "Reservoir data collection methods and preprocessing techniques",
    "Feature engineering tailored for reservoir datasets",
    "ML models for reservoir characterization, forecasting, and optimization",
    "Evaluation metrics for ML-based reservoir analytics",
    "Advanced reservoir analytics: uncertainty handling, ensemble learning, Bayesian methods",
    "Real-world case studies of ML applications in reservoir engineering"
  ],
  "targetAudience": [
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
  "price": "$150 / ₹12,000",
  "image": "/images/Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/8x228teQdbCNgjAcxraR51c",
    "razorpay": "https://rzp.io/rzp/zAZ4a5Y"
  }
},
{
  "id": "46",
  "title": "Petroleum Field Development Planning from Concept to Execution",
  "brochure": "https://drive.google.com/file/d/1pHkU23Au0SNWcnN2bgIQLJA9Ok-uITfs/view?usp=drive_link",
  "category": "self-paced",
  "duration": "7+ Hours",
  "format": "Self-Paced",
  "level": "Beginner to Intermediate",
  "certificate": "Yes",
  "overview": "Gain a complete understanding of how petroleum field development plans (FDPs) are created, evaluated, and executed. This program blends geoscience, reservoir engineering, drilling, facilities, and economics to help you contribute confidently to real-world field development teams. ",
  "outcomes": [
    "Understand the full lifecycle of field development from discovery to production",
    "Analyze geological, seismic & reservoir data for FDP decisions",
    "Estimate reserves using volumetric and decline curve methods",
    "Design well plans, development schemes & surface facility layouts",
    "Build simple economic models to compare development scenarios"
  ],
  "curriculum": [
    "Upstream lifecycle overview and role of FDP in field maturation",
    "Stages of field development (DG0–DG3) and decision gates",
    "Key data types required: G&G, reservoir, production, cost inputs",
    "Stakeholder roles: subsurface, drilling, facilities, finance, regulatory",
    "Regulatory workflows, approvals & compliance requirements",
    "Practical: Interpret block map & lifecycle chart; identify FDP starter dataset",
    "Seismic interpretation basics: structures, faults, traps",
    "Log analysis: porosity, saturation, reservoir quality assessment",
    "Drive mechanisms & reservoir behavior fundamentals",
    "Volumetric reserves estimation (STOIIP / GIIP)",
    "Decline curve analysis & recovery factor estimation",
    "Practical: Log interpretation; calculate STOIIP using volumetric methods",
    "Development scheme selection: onshore, offshore, greenfield, brownfield",
    "Well type selection: vertical, deviated, horizontal, multilateral",
    "Well spacing, pad design & drainage area concepts",
    "Drilling sequence planning, rig scheduling & cost estimation basics",
    "Intro to completions & artificial lift strategy",
    "Practical: Design a basic well placement plan; draft drilling sequence for 3 wells",
    "Surface production facilities: separators, flowlines, storage, export",
    "Matching reservoir deliverability with facility throughput",
    "Infrastructure requirements: utilities, pipelines, layout",
    "Introduction to petroleum economics: CAPEX, OPEX, NPV, IRR",
    "Sensitivity analysis & basic uncertainty evaluation",
    "Practical: Match facilities with forecast; compute simple economics in Excel",
    "How to structure a professional FDP document",
    "Integrating subsurface, wells, facilities, and economics",
    "Risk & uncertainty mapping in FDP decision-making",
    "Case study walkthrough (onshore/offshore)",
    "Group presentation of FDP concept",
    "Practical: Prepare a 5-slide mini-FDP — concept, wells, facilities, economics",
    "Recap session, test, and doubt-clearing workshop",
    "Hands-on consolidation of FDP workflow from discovery to execution"
  ],
  "targetAudience": [
    "Petroleum engineers",
    "Reservoir engineers",
    "Drilling engineers",
    "Production engineers",
    "Geoscientists",
    "Energy sector students",
    "Upstream analysts & planners",
    "Professionals transitioning into FDP or development roles"
  ],
  "price": "$150 / ₹10,000",
  "image": "/images/Petroleum Field Development Planning from Concept to Execution.jpg",
  "payment": {
    "stripe": "https://buy.stripe.com/fZu4gBfUh5epc3keFzaR51d",
    "razorpay": "https://rzp.io/rzp/NlG3vYz"
  }
},
{
  "id": "47",
  "title": "Production Forecasting & Well Performance Optimization with Python & Machine Learning",
  "brochure": "https://drive.google.com/file/d/1nvljWrdUmN2AOr0368WDKs2tsAh_Nvjl/view?usp=drive_link",
  "category": "self-paced",
  "duration": "20+ Hours",
  "format": "Self-Paced",
  "level": "Beginner to Intermediate",
  "certificate": "Yes",
  "overview": "Learn to forecast production, optimize well performance, and detect anomalies using Python and Machine Learning. This program blends time-series modeling, deep learning, and production optimization workflows tailored specifically for Oil & Gas applications.",
  "outcomes": [
    "Understand ML fundamentals & their role in Oil & Gas production forecasting",
    "Analyze, clean, and visualize time-series data for well performance",
    "Build ARIMA, ML, and LSTM models for forecasting & pressure prediction",
    "Apply ML for choke optimization, gas lift optimization & sand production prediction",
    "Detect anomalies using signal-based and ML-based techniques"
  ],
  "curriculum": [
    "Overview of ML applications in Oil & Gas production forecasting",
    "Understanding time series vs. regular datasets",
    "Algebra and calculus essentials for forecasting",
    "Lag features & differencing techniques",
    "Time plots & smoothing techniques",
    "Fourier Transform for frequency domain analysis",
    "Autoregression (AR) and Moving Average (MA)",
    "ARIMA and model diagnostics",
    "ML for well performance optimization",
    "Sand production prediction models",
    "Gas lift optimization & choke optimization workflows",
    "Hydraulic fracture optimization using ML",
    "Fracture intensity classification",
    "Re-fracturing feasibility prediction",
    "Anomaly detection using Autoencoders & Isolation Forest",
    "Hands-on ML workflows using Python, Pandas, Scikit-learn, and TensorFlow",
    "Capstone project on real production forecasting dataset",
    "End-to-end model deployment concepts"
  ],
  "targetAudience": [
    "Petroleum engineers",
    "Production engineers",
    "Reservoir engineers",
    "Data analysts in Oil & Gas",
    "Energy-sector ML enthusiasts",
    "Students in petroleum engineering",
    "Professionals seeking ML upskilling for forecasting & optimization",
    "Digital transformation engineers"
  ],
  "price": "$150 / ₹12,000",
  "image": "/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png",
  "payment": {
    "stripe": "https://buy.stripe.com/5kQ14p9vT4alaZgfJDaR51e",
    "razorpay": "https://rzp.io/rzp/0d7ulzd"
  }
},
{
  "id": "48",
  "title": "Advanced Python for Reservoir, Production and Petrophysics",
  "brochure": "https://drive.google.com/file/d/12M1hceDY517U94DPEFd6509LAALH2iqY/view?usp=drive_link",
  "category": "self-paced",
  "duration": "16+ Hours",
  "format": "Self-Paced",
  "level": "Beginner to Intermediate",
  "certificate": "Yes",
  "overview": "A 16+ hour hands-on program designed to help learners apply Python to real petroleum workflows—covering production analytics, reservoir simulation, well log processing, and machine learning for petrophysics. Ideal for students and professionals seeking fast, industry-relevant upskilling.",
  "outcomes": [
    "Analyze multi-well production data using Python",
    "Apply ML & regression methods for DCA & production forecasting",
    "Process LAS/DLIS logs & visualize core CT-scan data",
    "Build facies classification models using petrophysical logs",
    "Predict permeability using neural networks",
    "Run reservoir simulations & optimize well placement using PyMRST"
  ],
  "curriculum": [
    "Handling multi-well production datasets using Python & Pandas",
    "Time-series visualization: trends, anomalies, moving averages",
    "Importing and processing LAS / DLIS well log files",
    "Visualizing CT-scan core images & depth-wise interpretation",
    "Facies classification using ML algorithms (SVM, Random Forest, XGBoost)",
    "Processing multi-well Routine Core Analysis (RCA) datasets",
    "Exploratory Data Analysis (EDA) for permeability correlations",
    "Feature engineering for geological & petrophysical parameters",
    "Introduction to PyMRST & setting up Python-based reservoir simulations",
    "Simulating waterflood scenarios: normal vs inverted injection",
    "Analyzing saturation maps, pressure fields & production response",
    "Hands-on Python notebooks for reservoir, production & petrophysics",
    "Real-world mini-projects covering all domains",
    "End-to-end coding workflows using Google Colab (no installation needed)"
  ],
  "targetAudience": [
    "Petroleum engineers",
    "Reservoir engineers",
    "Production engineers",
    "Petrophysicists",
    "Data science enthusiasts in the energy sector",
    "Final-year engineering students",
    "Researchers working with petroleum datasets",
    "Faculty members upgrading to Python-based curriculum"
  ],
  "price": "$150 / ₹11,000",
  "image": "/images/Advanced Python for Reservoir, Production and Petrophysics.jpeg",
  "payment": {
    "stripe": "https://buy.stripe.com/4gM14p0ZnfT3aZg40VaR51f",
    "razorpay": "https://rzp.io/rzp/f1nUjX7V"
  }
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
