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
    title: "Artificial Lift Modelling, Reservoir Deliverability & Well Performance",
    category: "instructor-led",
    duration: "1 Week",
    format: "Hands-on (Excel-based)",
    overview:
      "Comprehensive 1-week program focusing on reservoir deliverability, well performance, and artificial lift systems using Excel-based modelling.",
    outcomes: [
      "Understand petroleum production systems and reservoir deliverability",
      "Analyze inflow and outflow performance relationships",
      "Master design & calculation of ESP, SRP, Gas Lift, and Plunger Lift systems",
      "Evaluate lift methods and optimize production performance",
      "Apply economics for artificial lift selection",
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
    title: "Reservoir Engineering Modelling & Flow Simulation",
    category: "instructor-led",
    duration: "—",
    format: "Online",
    overview: "Comprehensive Program focusing on Reservoir Engineering Modelling and Flow Simulation.",
    outcomes: [
      "Assess subsurface hydrocarbon reserves in online reservoir engineering courses",
      "Participate in real-world asset planning, simulation & modelling",
      "Understand reservoir engineering tools and their applications",
      "3D Dynamic Simulation (6hrs) introduction",
      "Model preparation and initialization",
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
    title:
      "Power BI Essentials for Oil and Gas: Optimizing Drilling, Production and Reservoir Management",
    category: "instructor-led",
    duration: "4 Weeks",
    format: "Online",
    overview:
      "Comprehensive program focusing on Power BI for drilling, production, and reservoir optimization.",
    outcomes: [
      "Build interactive dashboards for drilling and production optimization",
      "Visualize complex oilfield and reservoir data",
      "Integrate real-time field data for continuous monitoring",
      "Gain hands-on experience with Power BI tools",
      "Create drilling optimization dashboards",
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
    title: "Geomechanics & Its Application in Drilling and Completion",
    category: "instructor-led",
    duration: "2 Weeks",
    format: "Online",
    overview:
      "Comprehensive 2-week training on petroleum geomechanics applied to drilling and completion.",
    outcomes: [
      "Recognize significance of rock mechanics",
      "Identify geomechanics applications for optimization",
      "Use petroleum geomechanics terminology",
      "Understand rock mechanics and problem-solving techniques",
      "Learn through real life examples",
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
    title: "Integrated Insights: SQL, Power BI & Tableau for Oil and Gas Analytics",
    category: "e-learning",
    duration: "4 Weeks",
    format: "Online",
    overview:
      "A complete analytics stack training for SQL, Power BI and Tableau tailored for oil & gas operations.",
    outcomes: [
      "Learn SQL basics for oil & gas",
      "Understand SQL applications in industry datasets",
      "Master querying and data filtering",
      "Perform advanced manipulation on oilfield datasets",
      "Build dashboards using Power BI and Tableau",
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
    title: "WELL TEST ANALYSIS & RESERVOIR MODELLING USING MS EXCEL",
    category: "instructor-led",
    duration: "10+ Hours",
    format: "Online",
    overview:
      "A practical Excel-based well test analysis and reservoir modelling program.",
    outcomes: [
      "Apply classical reservoir engineering principles",
      "Process and interpret PVT data using Excel",
      "Perform material balance calculations",
      "Analyze production & injection data",
      "Gain strong understanding of reservoir behavior",
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
    title: "Diploma in Machine Learning for Oil & Gas",
    category: "diploma",
    duration: "4 Weeks",
    format: "Live + Hands-on Projects",
    overview:
      "A machine learning diploma designed specifically for oil & gas applications.",
    outcomes: [
      "Learn ML algorithms & workflows",
      "Preprocess and analyze O&G datasets",
      "Build ML models for forecasting and anomaly detection",
      "Apply deep learning (ANN/CNN/RNN)",
      "Use Power BI for O&G analytics",
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
    title: "Integrated Oil & Gas Analytics Using Big Data",
    category: "instructor-led",
    duration: "8 Weeks",
    format: "Online (Weekend Classes)",
    overview:
      "Covers upstream, midstream, and downstream analytics with ML/DL forecasting and a capstone project.",
    outcomes: [
      "Apply big data analytics in O&G value chain",
      "Build forecasting models",
      "Optimize midstream operations",
      "Perform market analytics",
      "Complete an industry capstone",
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
    title: "Diploma in Petroleum Project Management & Field Development Economics",
    category: "diploma",
    duration: "3 Months (60+ Hours)",
    format: "Instructor-led",
    overview:
      "Covers project management, FDP workflows, economics and industry tools.",
    outcomes: [
      "Perform NPV/IRR economic evaluations",
      "Plan field development strategies",
      "Apply risk & procurement frameworks",
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
      "A hands-on program blending petrophysics with modern machine learning. Learn to analyze well log data, build predictive ML models, and apply clustering for reservoir evaluation.",
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
    title: "Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics",
    category: "e-learning",
    duration: "16–20+ Hours",
    format: "Live Online + Hands-On Case Studies",
    overview:
      "Master ML-driven production forecasting, reservoir analytics, and optimization workflows using real datasets.",
    outcomes: [
      "Build and evaluate ML/time-series models for production forecasting",
      "Perform feature engineering & preprocessing for production datasets",
      "Apply ML to PCP, SRP & ESP optimization",
      "Analyze reservoir datasets using ML",
      "Work with advanced ensemble and Bayesian techniques",
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
    title: "Petro Python - Mastering Core Concepts & Real World Applications",
    category: "e-learning",
    duration: "4 Weeks",
    format: "Live Online Sessions + Projects",
    overview:
      "Master Python from scratch and apply it directly to petroleum engineering workflows with real datasets.",
    outcomes: [
      "Learn Python fundamentals for engineering workflows",
      "Perform data manipulation using NumPy & Pandas",
      "Create engineering visualizations",
      "Build material balance & IPR analysis tools",
      "Deploy an oil & gas web application",
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
    title: "Petroleum Field Development Planning from Concept to Execution",
    category: "instructor-led",
    duration: "1 Week",
    format: "Live Online Sessions",
    overview:
      "Master FDP workflows, subsurface analysis, reserves estimation, well planning, facilities design and basic economics.",
    outcomes: [
      "Understand full FDP lifecycle",
      "Analyze geological & reservoir data",
      "Estimate STOIIP/GIIP & build economics",
      "Plan wells and surface facilities",
      "Integrate multidisciplinary FDP inputs",
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
    title: "Production Forecasting & Well Performance Optimization with Python & Machine Learning",
    category: "instructor-led",
    duration: "4 Weeks",
    format: "Live Online Sessions + Recordings",
    overview:
      "Learn ML-driven forecasting, anomaly detection, and optimization techniques for well performance.",
    outcomes: [
      "Build ARIMA, machine learning, and LSTM models",
      "Detect anomalies in production data",
      "Perform choke & gas-lift optimization",
      "Apply advanced signal-analysis techniques",
      "Use ML + physics for forecasting",
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
    title: "Advanced Python for Reservoir, Production and Petrophysics",
    category: "e-learning",
    duration: "16+ Hours",
    format: "Live Online + Lifetime Recordings",
    overview:
      "Advanced workflows for production analytics, well log processing, reservoir simulation, and ML for petrophysics.",
    outcomes: [
      "Analyze multi-well production data",
      "Automate decline curve analysis",
      "Process LAS/DLIS logs",
      "Build facies classification models",
      "Predict permeability with neural networks",
      "Run reservoir simulations & optimize well placement",
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
    title: "Diploma for HSE in Oil & Gas",
    category: "diploma",
    duration: "3 Months",
    format: "Online + Lifetime Access",
    overview:
      "A complete HSE diploma designed for the oil & gas sector covering safety, risk, environment & emergency response.",
    outcomes: [
      "Understand core HSE standards",
      "Identify & assess workplace hazards",
      "Develop emergency response capabilities",
      "Conduct audits & inspections",
      "Learn environmental protection practices",
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
    title: "Diploma in ESG, Carbon Trading & Sustainable Finance",
    category: "diploma",
    duration: "60 Hours",
    format: "Live + Self-paced + Project",
    overview:
      "A comprehensive diploma on ESG reporting, carbon markets, climate strategy & sustainable finance.",
    outcomes: [
      "Prepare ESG disclosures",
      "Understand carbon markets & credit trading",
      "Design decarbonization strategies",
      "Analyze sustainability performance",
      "Build ESG & carbon footprint reports",
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
  const { user } = useAuth();

  // ✔ Merge all programs
  const allPrograms = useMemo(() => {
    const combined = [...DEFAULT_PROGRAMS, ...PROGRAMS_PART_2];
    return programs && programs.length ? programs : combined;
  }, [programs]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState("/payment");
  const [programToPay, setProgramToPay] = useState(null);

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

  const handleEnrollClick = (program) => {
    const path = `/payment/${program.id}`;
    setProgramToPay(program);
    setRedirectTo(path);
    if (user) return navigate(path);
    setAuthOpen(true);
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

      {/* CATEGORY FILTER */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((c) => (
            <button key={c.id} onClick={() => setSelectedCategory(c.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === c.id ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"
              }`}>
              {c.name} ({c.count})
            </button>
          ))}
        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="pb-20 max-w-7xl mx-auto space-y-12">
        {filteredPrograms.map((program) => (
          <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="grid lg:grid-cols-3">
              
              {/* IMAGE */}
              <div className="relative">
                <img src={program.image} alt={program.title} className="w-full h-64 lg:h-full object-cover" />
                <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
                  {program.category.replace("-", " ").toUpperCase()}
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
                  <Info icon={Clock} label="Duration" value={program.duration} />
                  <Info icon={BookOpen} label="Format" value={program.format} />
                  <Info icon={Award} label="Level" value={program.level} />
                  <Info icon={Users} label="Certificate" value={program.certificate} />
                </div>

                {/* OUTCOMES */}
                <h3 className="text-lg font-semibold mb-2">Key Learning Outcomes</h3>
                <ul className="grid md:grid-cols-2 gap-2 mb-6">
                  {program.outcomes.map((o, i) => (
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
                <div className="flex justify-between items-center border-t pt-6 mt-auto">
                  <div>
                    <div className="text-3xl font-bold text-teal-600">{program.price}</div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>

                  <button
                    onClick={() => handleEnrollClick(program)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Enroll Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* MODAL */}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} redirectTo={redirectTo} program={programToPay} />
    </div>
  );
};

export default TrainingPrograms;

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-blue-600" />
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);
