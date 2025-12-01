// export default TrainingPrograms;
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock, Users, Award, BookOpen,
  ChevronDown, ChevronUp, Star, Play,
} from "lucide-react";
import AuthModal from "./AuthModal.jsx";
import { useAuth } from "../context/AuthContext.jsx";

// PROGRAM ARRAYS (unchanged)
const DEFAULT_PROGRAMS = [ {
    id: "1",
    title: "Directional Drilling",
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
      "Petroleum production system fundamentals",
      "Reservoir deliverability & well performance (IPR & flow regimes)",
      "Overview and selection of artificial lift methods",
      "ESP design: components, calculations & optimization",
      "SRP system design, troubleshooting & performance analysis",
      "Gas lift design, mechanism & limitations",
      "Plunger lift operations & performance evaluation",
      "Economic analysis and lift selection case study",
    ],
    targetAudience: [
      "Petroleum engineers",
      "Production and field engineers",
      "Energy professionals seeking upskilling",
      "Students entering upstream oil & gas",
    ],
    price: "$45",
    image: "/images/Artificial Lift Modeling, Reservoir Deliverability & Well performance.jpg",
    level: "Intermediate",
    certificate: "Yes",
    prerequisites: "None",
  },
  {
    id: "2",
    title: "Evaluating Unconventional Resources Using Decline Curve Analysis & Horizontal Well Fracturing",
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
      "3D Dynamic Simulation (6hrs)",
      "Input Data",
      "Tools - Software",
      "Model Preparation",
      "Forecast / Prediction",
      "Uncertainty Analysis & optimization",
      "Automatic History Match",
      "Understanding through DCA and 3D slim diagrams",
    ],
    targetAudience: ["Reservoir engineers", "Modelers", "Students"],
    price: "$40 / ₹2500",
    image: "/images/Reservoir Engineering, Modeling & flow Simulation.webp",
    level: "Intermediate",
    certificate: "Yes",
    prerequisites: "Basic reservoir knowledge",
  },

  {
    id: "3",
    title: "Reserves Estimation & Classification",
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
      "Introduction to drilling performance metrics",
      "Designing a drilling efficiency dashboard",
      "Visualizing drilling KPIs (ROP, NPT, Wellbore trajectory)",
      "Hands-on: Building a complete drilling optimization dashboard",
      "Incorporating time-series analysis for drilling progress",
      "Data importing techniques",
      "Data transformation with Power Query Editor",
      "Designing visualization for reservoir pressure, production rate & well status",
    ],
    targetAudience: [
      "Oil & gas drilling, reservoir, or production professionals",
      "Petroleum engineers",
      "Data analysts",
      "Managers seeking operational monitoring",
    ],
    price: "$150 / ₹10,000",
    image: "/images/Power BI Essentials for Oil & Gas.png",
    level: "Intermediate",
    certificate: "Yes",
    prerequisites: "Basic Excel",
  },
  {
    id: "4",
    title: "Sequence Stratigraphy in the Era of Digitalization",
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
      "Wellbore stresses",
      "Drilling applications",
      "Drilling fluid applications",
      "Wellbore strengthening and cementing",
      "Fracturing technology applications",
      "Fracturing background",
      "Job sequence",
    ],
    targetAudience: ["Petroleum engineers", "Geologists", "Consultants", "Supervisors"],
    price: "$100 / ₹7,500",
    image: "/images/Geomechanics and its application in Drilling & Completion.webp",
    level: "Intermediate",
    certificate: "Yes",
    prerequisites: "Basic geology",
  },
  {
    id: "5",
    title: "Well Intervention, Fishing & Smart Completions",
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
      "Introduction to SQL",
      "Oilfield data wrangling, aggregation & operations in SQL",
      "Data exploration, transformation & analysis with Power BI",
      "Production dashboards & reporting",
      "Drilling data visualization with Tableau",
      "Oilfield geospatial analysis",
      "Maps & filled maps in Tableau",
      "Creating dynamic field report dashboards",
    ],
    targetAudience: [
      "Oil & gas engineers",
      "Data & BI analysts",
      "Technical managers",
      "Energy professionals",
      "Students",
    ],
    price: "$200 / ₹15,000",
    image: "/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "Basic SQL recommended",
  },
  {
    id: "6",
    title: "Advance Well Engineering",
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
      "Introduction to reservoir engineering & PVT analysis",
      "Material balance & reservoir performance",
      "Production data analysis (Decline curves)",
      "Pressure transient analysis (Well test interpretation)",
      "Production optimization",
      "Optimization tools & monitoring techniques",
      "Enhanced technical skills",
      "Improved decision making",
    ],
    targetAudience: [
      "Reservoir engineers",
      "Production engineers",
      "Petroleum analysts",
      "Technicians",
      "Students",
    ],
    price: "$100 / ₹8,000",
    image: "/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "Excel skills",
  },

  {
    id: "7",
    title: "Reservoir Surveillance & Tight Reservoir Management",
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
      "Python fundamentals & data structures",
      "Regression, classification & clustering",
      "Statistics & ML model evaluation",
      "Deep learning (ANN, CNN, RNN)",
      "Production forecasting & anomaly detection",
      "Data analytics with NumPy, Pandas, Matplotlib",
      "Power BI dashboards & field data",
      "End-to-end ML deployment projects",
    ],
    targetAudience: ["Students", "Engineers", "Professionals"],
    price: "₹22,500",
    image: "/images/Diploma for Machine Learning in Oil & Gas.webp",
    level: "Beginner–Intermediate",
    certificate: "Yes (Persian Gulf University)",
    prerequisites: "Basic Python recommended",
  },
  {
    id: "8",
    title: "Learn Energy Data Analytics From Scratch",
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
      "Data science foundations for O&G",
      "Upstream analytics (well logs, forecasting)",
      "Midstream analytics (gas storage)",
      "Downstream analytics (ML/DL consumption forecasts)",
      "Market analytics (gas price modeling)",
      "Capstone project",
      "Advanced analytics topics & real-time systems",
    ],
    targetAudience: ["Petroleum engineers", "Production engineers", "Data scientists"],
    price: "$300 / ₹17,500",
    image: "/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg",
    level: "Advanced",
    certificate: "Yes (Lincoln Professional University)",
    prerequisites: "Data fundamentals",
  },
  {
    id: "9",
    title: "Well Planning, Deepwater Design & Engineering",
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
      "Project management fundamentals",
      "Petroleum project lifecycle",
      "Field development planning",
      "WBS, scheduling & CPM",
      "Petroleum economics (CAPEX/OPEX)",
      "Sensitivity analysis",
      "Risk management",
      "Procurement & contract management",
      "HSE compliance",
      "Project execution & dashboards",
      "Final project presentation",
    ],
    targetAudience: ["Petroleum engineers", "Project managers", "Graduates"],
    price: "$300",
    image: "images/Diploma in Petroleum Project Management & Field Development Economics.jpg",
    level: "Beginner–Professional",
    certificate: "Yes (Lincoln Professional Academy)",
    prerequisites: "Bachelor’s degree recommended",
  },
  {
    id: "10",
    title: "Diploma in Well Engineering & Completion Engineering",
    category: "diploma",
    duration: "3 Months",
    format: "Instructor-led",
    overview: "Covers well engineering, completions, stimulation and artificial lift.",
    outcomes: ["Design completions", "Understand stimulation technologies", "Evaluate artificial lift systems"],
    curriculum: [
      "Introduction to petroleum production",
      "Reservoir deliverability & IPR analysis",
      "Artificial lift overview",
      "ESP fundamentals",
      "SRP fundamentals",
      "Gas lift mechanisms",
      "Plunger lift operations",
      "Completion operations",
      "Economic comparison of lift systems",
    ],
    targetAudience: ["Petroleum engineers", "Production engineers", "Field operators"],
    price: "$300 / ₹22,500",
    image: "images/Diploma in Well Engineering & Completion Engineering.jpg",
    level: "Beginner–Advanced",
    certificate: "Yes (Persian Gulf University)",
    prerequisites: "Engineering background",
  }, ];
const PROGRAMS_PART_2 = [  {
    id: "11",
    title: "Machine Learning & Python Applications for Petrophysics",
    category: "instructor-led",
    duration: "5 Weeks",
    format: "Live Online Sessions + Hands-on Case Studies",
    overview:
      "A practical program introducing real-time drilling data analytics, ML workflows, vibration analysis, and time-series interpretation for drilling optimization.",
    outcomes: [
      "Preprocess and analyze petrophysical data using Python (Lasio, Welly)",
      "Build ML models to predict reservoir properties (permeability, saturation)",
      "Perform lithofacies classification using SVM & Random Forest",
      "Apply clustering methods to evaluate reservoir heterogeneity",
      "Conduct data quality control and log reconstruction",
      "Visualize, interpret, and integrate well log, core, and reservoir data",
    ],
    curriculum: [
      {
        module: "Petrophysical Data Analysis with Python",
        topics: [
          "Loading & exploring LAS files (Lasio, Welly)",
          "Log–core integration & formation tops merging",
          "Well log visualization & preprocessing",
        ],
      },
      {
        module: "ML Prediction of Reservoir Properties",
        topics: [
          "Regression models (Linear, Gradient Boosting)",
          "Feature engineering & hyperparameter tuning",
          "Case study: Predicting permeability & water saturation",
        ],
      },
      {
        module: "Lithofacies Classification",
        topics: [
          "SVM & Random Forest classification",
          "Handling imbalanced datasets",
          "Case study: Rock type & flow zone identification",
        ],
      },
      {
        module: "ML-Assisted Log Data Quality Control",
        topics: [
          "Outlier detection & log reconstruction",
          "ML-based imputation for missing properties",
          "Case study: Synthetic sonic log generation",
        ],
      },
      {
        module: "Reservoir Characterization with Clustering",
        topics: [
          "K-Means, Hierarchical, DBSCAN",
          "Dimensionality reduction & model building",
          "Case study: Reservoir heterogeneity clustering",
        ],
      },
    ],
    targetAudience: ["Petrophysicists", "Geoscientists", "Reservoir engineers", "Data scientists"],
    price: "₹12,000 / $150",
    image: "images/Machine Learning & Python Applications for Petrophysics.jpg",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "Basic Python & log interpretation",
  },
  {
    id: "12",
    title: "Oil & Gas Software Development Using Python",
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
      {
        module: "Production Forecasting & ML Applications",
        topics: [
          "Production forecasting fundamentals",
          "PCP, SRP & ESP system overview",
          "Production data collection & preprocessing",
          "Feature engineering for production datasets",
          "Regression, Random Forest, Gradient Boosting & Neural Networks",
          "Model performance evaluation",
          "Time series forecasting (ARIMA, SARIMA, Prophet)",
          "ML-based optimization for PCP, SRP & ESP",
        ],
      },
      {
        module: "Reservoir Analytics",
        topics: [
          "Introduction to reservoir analytics",
          "Reservoir engineering fundamentals",
          "Data preparation & preprocessing",
          "Feature engineering for reservoir properties",
          "ML models for reservoir characterization & forecasting",
          "Evaluation metrics for reservoir ML models",
          "Advanced methods: Ensemble, Bayesian techniques",
          "Real-world case studies",
        ],
      },
    ],
    targetAudience: ["Petroleum engineers", "Reservoir engineers", "Production engineers"],
    price: "₹16,000 / $200",
    image: "images/Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics.jpg",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "Python & ML basics",
  },
  {
    id: "13",
    title: "Mastering Reservoir Engineering: From Basics to Software-Driven Solutions",
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
      {
        module: "Core Python Foundations",
        topics: [
          "Python basics & programming workflow",
          "Lists, dictionaries & control flow",
          "NumPy for numerical operations",
          "Pandas for data analysis",
          "Matplotlib for visualization",
        ],
      },
      {
        module: "Petroleum Engineering Applications",
        topics: ["Material balance calculations in Python", "IPR curve creation & analysis", "Working with petroleum datasets"],
      },
      {
        module: "Web Application Deployment",
        topics: ["Introduction to web frameworks", "Building a user-friendly application", "Deploying oil & gas data apps"],
      },
    ],
    targetAudience: ["Petroleum engineers", "Students", "Beginners"],
    price: "₹6,000 / $80 (Students) | $250 (Professionals)",
    image: "images/Petro Python - Mastering Core Concepts & Real World Applications.png",
    level: "Beginner",
    certificate: "Yes",
    prerequisites: "None",
  },
  {
    id: "14",
    title: "Master Oil & Gas Production Optimization with AI & Machine Learning",
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
      {
        module: "Fundamentals of Field Development Planning",
        topics: [
          "Upstream lifecycle & FDP stages (DG0–DG3)",
          "G&G, reservoir, production & cost data",
          "Multidisciplinary team workflows",
          "Regulatory frameworks & approvals",
          "Practical: FDP data requirement mapping",
        ],
      },
      {
        module: "Subsurface Characterization & Reserves Estimation",
        topics: [
          "Seismic basics: faults, structures, traps",
          "Well logs, porosity & saturation analysis",
          "Drive mechanisms & fluid behavior",
          "STOIIP/GIIP volumetrics",
          "Decline curve analysis",
          "Practical: Log interpretation & STOIIP",
        ],
      },
      {
        module: "Development Strategy, Well Planning & Drilling",
        topics: [
          "Greenfield & brownfield options",
          "Vertical/horizontal/multilateral wells",
          "Well spacing & pattern design",
          "Rig scheduling & drilling sequence",
          "Intro to completions & artificial lift",
          "Practical: Well placement exercise",
        ],
      },
      {
        module: "Surface Facilities & Economic Evaluation",
        topics: [
          "Separators, flowlines & export systems",
          "Matching deliverability & capacity",
          "Infrastructure & utilities",
          "Economics: Capex, Opex, NPV, IRR",
          "Risk & sensitivity analysis",
          "Practical: Excel economics",
        ],
      },
      {
        module: "FDP Integration & Case Study",
        topics: ["FDP structure & documentation", "Risk & uncertainty mapping", "Full FDP case review", "Practical: Mini-FDP presentation"],
      },
    ],
    targetAudience: ["Petroleum engineers", "Geoscientists", "Energy students"],
    price: "₹9,000 / $150",
    image: "images/Petroleum Field Development Planning from Concept to Execution.jpg",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "None",
  },
  {
    id: "15",
    title: "Oil & Gas Forecasting & Predictions Using Time Series Analysis",
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
      {
        module: "ML Fundamentals & Time-Series Basics",
        topics: ["ML applications in oil & gas", "Supervised vs. unsupervised learning", "Time-series structure (trend, seasonality, noise)", "Real-world forecasting examples"],
      },
      {
        module: "Math & Statistics for Forecasting",
        topics: ["Algebra & calculus basics", "Hypothesis testing", "Differencing & lag features", "Seasonality & periodicity"],
      },
      {
        module: "Visualization & Signal Analysis",
        topics: ["Time-series visualization", "Smoothing & trend extraction", "Fourier transforms", "Frequency analysis", "Recurrence plots", "Signal-based anomaly detection"],
      },
      {
        module: "Statistical & ML Forecasting Models",
        topics: ["AR & MA models", "Decline curve analysis (DCA)", "ARIMA & ARIMAX forecasting", "LSTM models for rate & pressure prediction"],
      },
      {
        module: "Production Optimization with ML",
        topics: ["Well performance optimization", "Gas-lift optimization", "Choke optimization", "Sand production prediction", "Production allocation", "Failure prediction"],
      },
      {
        module: "Advanced ML & Case Studies",
        topics: ["Hydraulic fracture optimization", "Ensemble forecasting methods", "Re-frac feasibility analysis", "Autoencoders vs Isolation Forests", "Real-world ML case studies"],
      },
    ],
    targetAudience: ["Engineers", "Data analysts", "Energy professionals"],
    price: "₹15,000 / $200",
    image: "images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "Python basics",
  },
  {
    id: "16",
    title: "PVT Modelling and Advanced Fluid Characterization",
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
      {
        module: "Production Analytics & Machine Learning",
        topics: ["Multi-well production handling", "Time-series visualization", "Regression for DCA", "ML models for production prediction"],
      },
      {
        module: "Formation Evaluation & ML Applications",
        topics: ["LAS/DLIS log handling", "Well log interpretation", "CT-scan data visualization", "Facies classification using ML"],
      },
      {
        module: "Permeability Prediction (Neural Networks)",
        topics: ["Core analysis data cleansing", "Correlation studies", "Neural network modelling", "Uncertainty quantification"],
      },
      {
        module: "Reservoir Simulation & Well Placement Optimization",
        topics: ["PyMRST introduction", "Waterflooding simulation", "Well placement optimization", "Bayesian optimization & simulated annealing"],
      },
    ],
    targetAudience: ["Petroleum engineers", "Reservoir engineers", "Petrophysicists", "Researchers"],
    price: "₹11,000 / $150",
    image: "images/Advanced Python for Reservoir, Production and Petrophysics.jpeg",
    level: "Beginner–Intermediate",
    certificate: "Yes",
    prerequisites: "Python basics",
  },
  {
    id: "17",
    title: "Data Analytics & Visualisation Using Power BI for Oil & Gas",
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
      {
        module: "Introduction to Oil & Gas Industry",
        topics: ["Industry structure & operations", "Facilities overview", "Major stakeholders"],
      },
      {
        module: "Fundamentals of HSE",
        topics: ["Health, safety & environment basics", "Hazard identification", "Risk assessment frameworks"],
      },
      {
        module: "Operations & Major Hazards",
        topics: ["Exploration, drilling & production hazards", "Transportation risks", "Major hazard management"],
      },
      {
        module: "Occupational Health & Industrial Hygiene",
        topics: ["Exposure control", "Emergency health response", "Workplace hazard mitigation"],
      },
      {
        module: "Safety Management & Incident Handling",
        topics: ["Safety systems & procedures", "Incident investigation", "Reporting & continuous improvement"],
      },
      {
        module: "Environmental Management",
        topics: ["Impact assessment", "Pollution control", "Sustainability principles", "Regulatory compliance"],
      },
      {
        module: "Emergency Response & Crisis Management",
        topics: ["Emergency planning", "Crisis communication", "Scenario-based drills"],
      },
      {
        module: "HSE Audits & Inspections",
        topics: ["Audit principles", "Inspection techniques", "Corrective actions"],
      },
      {
        module: "Human Factors & Workplace Behavior",
        topics: ["Human error management", "Behavioral safety", "Competency development"],
      },
      {
        module: "Advanced HSE Applications",
        topics: ["Process safety", "Offshore HSE", "Cybersecurity for safety systems"],
      },
      {
        module: "Capstone Project",
        topics: ["Complete HSE plan development", "Case study analysis"],
      },
    ],
    targetAudience: ["Students", "HSE professionals", "Engineers", "Technicians"],
    price: "₹24,000 / $300",
    image: "/images/Diploma for HSE in Oil & Gas.avif",
    level: "Beginner–Intermediate",
    certificate: "Yes (Lincoln Professional Academy)",
    prerequisites: "None",
  },
  {
    id: "18",
    title: "Electric Submersible Pump (ESP) Training",
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
      {
        module: "ESG Foundations & Sustainability",
        topics: ["ESG pillars & frameworks (GRI, SASB, TCFD, SDGs)", "Sustainability trends", "Climate risks", "Regulatory landscape"],
      },
      {
        module: "ESG Reporting & Practical Evaluation",
        topics: ["ESG disclosure standards", "Scoring methods", "Sustainability assessments", "Hands-on ESG analysis"],
      },
      {
        module: "Carbon Markets & Trading",
        topics: ["Cap-and-trade systems", "Carbon taxes", "Offsets & credits", "Verification standards (VCS, Gold Standard, CDM)", "Carbon exchanges & trading simulations"],
      },
      {
        module: "Emissions Reduction & Climate Strategy",
        topics: ["Decarbonization pathways", "Carbon footprint analysis", "Evaluating corporate climate action plans"],
      },
      {
        module: "Sustainable Finance & Green Investment",
        topics: ["Impact investing & SRI", "Green/blue bonds", "Climate finance tools", "Sustainable lending practices"],
      },
      {
        module: "ESG Risk Management & Governance",
        topics: ["Climate risk integration", "Enterprise risk management", "Responsible leadership", "Corporate governance frameworks"],
      },
      {
        module: "Practical ESG & Sustainability Applications",
        topics: ["Developing ESG policies", "Evaluating corporate sustainability performance", "Reporting workflows", "Real-world case studies"],
      },
      {
        module: "Capstone Project",
        topics: ["Complete ESG strategy design", "Carbon footprint analysis report"],
      },
    ],
    targetAudience: ["Finance professionals", "Sustainability managers", "Analysts", "Students", "Policy advisors"],
    price: "₹24,000 / $300",
    image: "/images/ESG, Carbon Trading and Sustainable Finance.webp",
    level: "Beginner–Intermediate",
    certificate: "Yes (Lincoln Professional University)",
    prerequisites: "None",
  }, ];

const TrainingPrograms = ({ programs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Merge programs (if prop supplied, use it - otherwise combine default sets)
  const allPrograms = useMemo(() => {
    const combined = [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
    return programs && programs.length ? programs : combined;
  }, [programs]);

  // --- CHANGED: only three categories: all, self-paced, diploma
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [authOpen, setAuthOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);
  const [programToPay, setProgramToPay] = useState(null);

  // reflect URL ?category= on load / when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && ["all", "self-paced", "diploma"].includes(cat)) {
      setSelectedCategory(cat);
    } else {
      // default to all if invalid or missing
      setSelectedCategory("all");
    }
  }, [location.search]);

  // categories
  const categories = useMemo(() => {
    const byCategory = {};
    allPrograms.forEach((p) => {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
    });
    return [
      { id: "all", name: "All Programs", count: allPrograms.length },
      { id: "diploma", name: "Diploma Programs", count: byCategory["diploma"] || 0 },
      { id: "instructor-led", name: "Instructor-Led Trainings", count: byCategory["instructor-led"] || 0 },
      { id: "e-learning", name: "E-Learning", count: byCategory["e-learning"] || 0 },
      { id: "corporate", name: "Corporate Training", count: byCategory["corporate"] || 0 },
    ];
  }, [allPrograms]);

  const filteredPrograms = selectedCategory === "all"
    ? allPrograms
    : allPrograms.filter((program) => program.category === selectedCategory);

  const toggleCurriculum = (e, programId) => {
    e.stopPropagation();   // ✔ Prevent redirection / bubbling
    setExpandedCurriculum(expandedCurriculum === programId ? null : programId);
  };

  // When user clicks a payment button
  const handlePayClick = (program, method) => {
    const link = (program.payment && (program.payment[method])) || null;
    if (!link) return alert("Payment link not configured for this program.");
    setProgramToPay(program);
    setRedirectTo(link);
    if (user) {
      // If user logged in - open payment in new tab
      window.open(link, "_blank");
      return;
    }
    // Not logged in -> open auth modal; when login completes your AuthModal should use redirectTo
    setAuthOpen(true);
  };

  const handleEnrollClick = (program) => {
    // legacy support - default to stripe
    handlePayClick(program, "stripe");
  };

  const handleViewDetails = (program) => {
    navigate(`/course/${program.id}`);
    // scroll to top behavior if needed
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive training solutions designed by industry experts to advance your career in oil and gas.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER (UPDATED to 3 categories) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSetCategory(c.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === c.id ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"
              }`}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="pb-20 max-w-7xl mx-auto space-y-12 px-4">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              
              {/* IMAGE */}
              <div className="relative">
                <img src={program.image || "/images/course-placeholder.jpg"} alt={program.title} className="w-full h-64 lg:h-full object-cover" />
                <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                  {(program.category || "self-paced").replace("-", " ").toUpperCase()}
                </span>
                {program.featured && (
                  <span className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-3 w-3 mr-1" /> Featured
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{program.overview}</p>

                {/* STATS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Info icon={Clock} label="Duration" value={program.duration || "—"} />
                  <Info icon={BookOpen} label="Format" value={program.format || "—"} />
                  <Info icon={Award} label="Level" value={program.level || "—"} />
                  <Info icon={Users} label="Certificate" value={program.certificate || "—"} />
                </div>

                {/* OUTCOMES */}
                <h3 className="text-lg font-semibold mb-2">Key Learning Outcomes</h3>
                <ul className="grid md:grid-cols-2 gap-2 mb-6">
                  {(program.outcomes || []).map((o, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-teal-500 mt-2"></span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                {/* CURRICULUM - FIXED */}
                <button
                  onClick={(e) => toggleCurriculum(e, program.id)}
                  className="flex justify-between w-full font-semibold text-left"
                >
                  Course Curriculum
                  {expandedCurriculum === program.id ? <ChevronUp /> : <ChevronDown />}
                </button>

                {expandedCurriculum === program.id && (
                  <div className="mt-4 space-y-4 max-h-64 overflow-y-auto pr-2 custom-scroll">

                    {program.curriculum.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {typeof item === "string" ? item : item.module}
                        </h4>

                        {typeof item === "object" && item.topics && (
                          <ul className="space-y-1">
                            {item.topics.map((t, ti) => (
                              <li key={ti} className="flex items-center text-sm text-gray-600">
                                <Play className="h-3 w-3 mr-2" /> {t}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* AUDIENCE */}
                <h3 className="text-lg font-semibold mt-6 mb-3">Who Should Enroll</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.targetAudience.map((a, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{a}</span>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6 mt-auto gap-4">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">{program.price}</div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleViewDetails(program)}
                      className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-lg font-semibold"
                    >
                      View Details
                    </button>

                    {/* Two payment buttons side-by-side */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handlePayClick(program, "stripe")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                      >
                        Pay with Stripe
                      </button>
                      <button
                        onClick={() => handlePayClick(program, "razorpay")}
                        className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-lg font-semibold"
                      >
                        Pay with Razorpay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* AUTH MODAL */}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} redirectTo={redirectTo} program={programToPay} />
    </div>
  );
};

export default TrainingPrograms;



/* Info small component */
const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-blue-600" />
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);