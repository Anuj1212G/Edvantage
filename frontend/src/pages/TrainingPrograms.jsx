import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock,
  Users,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Star,
  Play,
} from 'lucide-react';
import AuthModal from './AuthModal.jsx';
import { useAuth } from '../context/AuthContext.jsx';

/* -------------------------------------------------------------------
   🧠 DEFAULT_PROGRAMS — 75 Courses (concise but complete fields)
------------------------------------------------------------------- */
const DEFAULT_PROGRAMS = [
  // 1 - 10: Instructor-led / Upcoming
  {
    id: '1',
    title: 'Webinar on Oil & Gas Trends',
    category: 'instructor-led',
    duration: '2 Hours · Online',
    format: 'Live Webinar',
    overview: 'Latest industry trends, market drivers and technology impacts.',
    outcomes: [
      'Understand current market trends',
      'Identify technology adoption areas',
      'Network with professionals',
    ],
    curriculum: [
      { module: 'Trends & Drivers', topics: ['Market outlook', 'Energy transition'] },
    ],
    benefits: ['Live Q&A', 'Briefing notes'],
    targetAudience: ['Professionals', 'Students'],
    price: 'Free',
    image: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: 'Beginner',
    language: 'English',
    certificate: 'No',
    prerequisites: 'None',
  },
  {
    id: '2',
    title: 'Petroleum Geomechanics & CCUS',
    category: 'instructor-led',
    duration: '5 Days · Online',
    format: 'Live + Recorded',
    overview: 'Geomechanics fundamentals plus CCUS field-scale applications.',
    outcomes: ['Apply geomechanics principles', 'Plan CCUS pilots', 'Interpret subsurface data'],
    curriculum: [
      { module: 'Geomechanics', topics: ['Stress', 'Rock properties'] },
      { module: 'CCUS', topics: ['Injection design', 'Monitoring'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Geoscientists', 'Engineers'],
    price: '$499',
    image: '/images/Petroleum Geomechanics & CCUS.png',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Geoscience background',
  },
  {
    id: '3',
    title: 'Machine Learning for Time Series in Energy',
    category: 'instructor-led',
    duration: '4 Weeks · Online',
    format: 'Live + Projects',
    overview: 'ML techniques for forecasting production and demand time series.',
    outcomes: ['Build forecasting models', 'Feature engineering', 'Evaluate models'],
    curriculum: [
      { module: 'Foundations', topics: ['ARIMA', 'Feature engineering'] },
      { module: 'ML Models', topics: ['LSTM', 'XGBoost'] },
    ],
    benefits: ['Project dataset', 'Certificate'],
    targetAudience: ['Data Scientists', 'Engineers'],
    price: '$699',
    image: '/images/Machine Learning with Time Series Applications for Energy Industry.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python basics',
  },
  {
    id: '4',
    title: 'Advanced Drilling Operations & Risk Mitigation',
    category: 'instructor-led',
    duration: '5 Days · Online',
    format: 'Live Workshops',
    overview: 'Safe drilling practices, risk assessment and operational optimization.',
    outcomes: ['Assess drilling risks', 'Design mitigations', 'Optimize operations'],
    curriculum: [
      { module: 'Drilling Ops', topics: ['Well control', 'Mud systems'] },
      { module: 'Risk', topics: ['HAZOP', 'Mitigation'] },
    ],
    benefits: ['Workshops', 'Templates'],
    targetAudience: ['Drilling Engineers'],
    price: '$549',
    image: '/images/Advanced Drilling Operations & Risk Mitigation.webp',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Field experience',
  },
  {
    id: '5',
    title: 'Oil & Gas Forecasting with Python',
    category: 'instructor-led',
    duration: '4 Weeks · Online',
    format: 'Live + Code Labs',
    overview: 'Python-based production and demand forecasting techniques.',
    outcomes: ['Time-series modeling', 'Model deployment', 'Scenario analysis'],
    curriculum: [
      { module: 'Python for Forecasting', topics: ['pandas', 'statsmodels'] },
    ],
    benefits: ['Code notebooks', 'Dataset access'],
    targetAudience: ['Analysts', 'Engineers'],
    price: '$399',
    image: '/images/Oil & Gas Forecasting & Predictions Using Python.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python basics',
  },
  {
    id: '6',
    title: 'Power BI Analytics for Drilling Engineers',
    category: 'instructor-led',
    duration: '3 Weeks · Online',
    format: 'Live + Exercises',
    overview: 'Use Power BI to monitor drilling KPIs and dashboards.',
    outcomes: ['Build dashboards', 'Transform data', 'Visualize KPIs'],
    curriculum: [
      { module: 'Power BI', topics: ['Data modeling', 'DAX basics'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Drilling/Production Engineers'],
    price: '$299',
    image: '/images/Power BI Analytics For Drilling Engineer.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Excel knowledge',
  },
  {
    id: '7',
    title: 'AI-Powered Excel Automation for Oil & Gas',
    category: 'instructor-led',
    duration: '2 Weeks · Online',
    format: 'Live + Labs',
    overview: 'Automate Excel workflows using Python, Power Query and AI scripts.',
    outcomes: ['Automate reports', 'Integrate ML with Excel', 'Build macros safely'],
    curriculum: [
      { module: 'Automation', topics: ['Power Query', 'Python integration'] },
    ],
    benefits: ['Workbooks', 'Templates'],
    targetAudience: ['Data Analysts', 'Engineers'],
    price: '$199',
    image: '/images/AI Powered Excel Automation for  Oil & Gas.webp',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Excel basics',
  },
  {
    id: '8',
    title: 'Big Data & ML for Production Facilities',
    category: 'instructor-led',
    duration: '5 Days · Online',
    format: 'Live',
    overview: 'Handle sensor data, anomaly detection and predictive maintenance.',
    outcomes: ['Process big data', 'Detect anomalies', 'Build predictive models'],
    curriculum: [
      { module: 'Big Data', topics: ['Streaming', 'Batch processing'] },
      { module: 'ML', topics: ['Anomaly detection', 'Predictive maintenance'] },
    ],
    benefits: ['Datasets', 'Certificate'],
    targetAudience: ['Ops Engineers', 'Data Engineers'],
    price: '$599',
    image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Data fundamentals',
  },
  {
    id: '9',
    title: 'Production & Nodal Analysis with Python',
    category: 'instructor-led',
    duration: '4 Weeks · Online',
    format: 'Live + Project',
    overview: 'Well performance evaluation and nodal analysis using Python.',
    outcomes: ['Do nodal analysis', 'Model inflow/outflow', 'Optimize well design'],
    curriculum: [
      { module: 'Nodal Analysis', topics: ['I/O curves', 'Well models'] },
    ],
    benefits: ['Sample code', 'Certificate'],
    targetAudience: ['Production Engineers'],
    price: '$449',
    image: '/images/Production and Nodal Analysis with Python & ML.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Petroleum fundamentals',
  },
  {
    id: '10',
    title: 'HSE Leadership Program',
    category: 'instructor-led',
    duration: '3 Months · Online',
    format: 'Online + Workshops',
    overview: 'HSE leadership, risk governance and incident management for O&G.',
    outcomes: ['Lead HSE programs', 'Design controls', 'Policy alignment'],
    curriculum: [
      { module: 'HSE Leadership', topics: ['Culture', 'Governance'] },
    ],
    benefits: ['Mentorship', 'Certificate'],
    targetAudience: ['HSE Managers'],
    price: '$1,899',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'HSE experience',
  },

  // 11 - 25: Diploma Programs
  {
    id: '11',
    title: 'Diploma in Petroleum Project Management & Field Dev Economics',
    category: 'diploma',
    duration: '12 Months · Online',
    format: 'Online + Capstone',
    overview: 'Project economics, planning and field development strategies.',
    outcomes: ['Economic evaluation', 'Project planning', 'Field development'],
    curriculum: [
      { module: 'Economics', topics: ['Npv', 'Cashflow'] },
      { module: 'Planning', topics: ['Field design', 'Budgeting'] },
    ],
    benefits: ['Capstone project', 'Diploma'],
    targetAudience: ['Engineers', 'Managers'],
    price: '$2,499',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Bachelor’s degree',
    featured: true,
  },
  {
    id: '12',
    title: 'Diploma in Well Engineering & Completion Engineering',
    category: 'diploma',
    duration: '12 Months · Online',
    format: 'Online + Workshops',
    overview: 'Well design, completions and stimulation strategies.',
    outcomes: ['Design completions', 'Select equipment', 'Optimize production'],
    curriculum: [
      { module: 'Well Engineering', topics: ['Casing', 'Completion'] },
    ],
    benefits: ['Industry cases', 'Diploma'],
    targetAudience: ['Drilling Engineers'],
    price: '$2,499',
    image: '/images/Diploma in Well Engineering & Completion Engineering.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Engineering degree',
  },
  {
    id: '13',
    title: 'Diploma for Machine Learning in Oil & Gas',
    category: 'diploma',
    duration: '9 Months · Online',
    format: 'Online + Projects',
    overview: 'ML workflows, model ops and production analytics for O&G.',
    outcomes: ['End-to-end ML', 'Deploy models', 'Interpret results'],
    curriculum: [
      { module: 'ML Pipeline', topics: ['Data prep', 'Modeling', 'Deployment'] },
    ],
    benefits: ['Projects', 'Diploma'],
    targetAudience: ['Data Scientists'],
    price: '$2,199',
    image: '/images/Diploma for Machine Learning in Oil & Gas.webp',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python & stats',
  },
  {
    id: '14',
    title: 'Diploma in Integrated Oil & Gas Analytics Using Big Data',
    category: 'diploma',
    duration: '12 Months · Online',
    format: 'Online + Labs',
    overview: 'Big data pipelines, analytics and decision systems for wells and assets.',
    outcomes: ['Build pipelines', 'Perform analytics', 'Deploy dashboards'],
    curriculum: [
      { module: 'Big Data', topics: ['Hadoop', 'Spark'] },
    ],
    benefits: ['Labs', 'Diploma'],
    targetAudience: ['Data Engineers', 'Analysts'],
    price: '$2,799',
    image: '/images/Diploma in Integrated Oil & Gas Analytics Using Big Data A full well Lifecycle Approach.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Programming & Linux',
  },
  {
    id: '15',
    title: 'Diploma in Petroleum Asset Management',
    category: 'diploma',
    duration: '10 Months · Online',
    format: 'Online + Capstone',
    overview: 'Asset lifecycle, economic optimization and field strategy.',
    outcomes: ['Optimize portfolios', 'Set KPIs', 'Plan investments'],
    curriculum: [
      { module: 'Asset Mgmt', topics: ['Lifecycle', 'KPI'] },
    ],
    benefits: ['Capstone', 'Diploma'],
    targetAudience: ['Managers'],
    price: '$2,299',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Experience preferred',
  },
  {
    id: '16',
    title: 'Diploma in Reservoir Engineering & Simulation',
    category: 'diploma',
    duration: '12 Months · Online',
    format: 'Online + Software Labs',
    overview: 'Reservoir behavior, simulation and enhanced recovery methods.',
    outcomes: ['Run simulations', 'Calibrate models', 'Design EOR'],
    curriculum: [
      { module: 'Reservoir Simulation', topics: ['Grid', 'History matching'] },
    ],
    benefits: ['Software labs', 'Diploma'],
    targetAudience: ['Reservoir Engineers'],
    price: '$2,599',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Reservoir fundamentals',
  },
  {
    id: '17',
    title: 'Diploma in ESG, Carbon Trading & Sustainable Finance',
    category: 'diploma',
    duration: '6 Months · Online',
    format: 'Online',
    overview: 'ESG fundamentals, carbon markets and sustainable investments.',
    outcomes: ['Understand ESG', 'Carbon accounting', 'Policy implications'],
    curriculum: [
      { module: 'ESG & Finance', topics: ['Reporting', 'Carbon markets'] },
    ],
    benefits: ['Industry insights', 'Diploma'],
    targetAudience: ['Managers', 'Analysts'],
    price: '$1,999',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '18',
    title: 'Diploma in Well Intervention & Stimulation',
    category: 'diploma',
    duration: '9 Months · Online',
    format: 'Online + Labs',
    overview: 'Intervention techniques, simulation and stimulation design.',
    outcomes: ['Design interventions', 'Simulate jobs', 'Evaluate outcomes'],
    curriculum: [
      { module: 'Intervention', topics: ['Coiled tubing', 'Acidizing'] },
    ],
    benefits: ['Labs', 'Diploma'],
    targetAudience: ['Well Engineers'],
    price: '$2,199',
    image: '/images/Diploma in Well Engineering & Completion Engineering.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Well engineering basics',
  },
  {
    id: '19',
    title: 'Diploma in Production Optimization & Artificial Lift',
    category: 'diploma',
    duration: '10 Months · Online',
    format: 'Online + Case Studies',
    overview: 'Artificial lift design, production modeling and optimization.',
    outcomes: ['Select lift systems', 'Model performance', 'Improve recovery'],
    curriculum: [
      { module: 'Artificial Lift', topics: ['ESP', 'Gas lift', 'Sucker rod'] },
    ],
    benefits: ['Case studies', 'Diploma'],
    targetAudience: ['Production Engineers'],
    price: '$2,349',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Production basics',
  },
  {
    id: '20',
    title: 'Diploma in Pipeline Engineering & Integrity Management',
    category: 'diploma',
    duration: '9 Months · Online',
    format: 'Online + Inspections',
    overview: 'Pipeline design, inspection practices, integrity and corrosion control.',
    outcomes: ['Design pipelines', 'Assess integrity', 'Plan inspections'],
    curriculum: [
      { module: 'Pipelines', topics: ['Material', 'Corrosion', 'Monitoring'] },
    ],
    benefits: ['Templates', 'Diploma'],
    targetAudience: ['Pipeline Engineers'],
    price: '$2,149',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Materials or engineering knowledge',
  },

  // 21 - 40: E-learning (Self-paced)
  {
    id: '21',
    title: 'Artificial Lift Modeling, Reservoir Deliverability & Well Performance',
    category: 'e-learning',
    duration: '6 Months · Online',
    format: 'Self-paced',
    overview: 'Model lift systems and reservoir deliverability for production forecasting.',
    outcomes: ['Model lifts', 'Forecast deliverability', 'Optimize wells'],
    curriculum: [
      { module: 'Lift Modeling', topics: ['ESP modeling', 'Gas lift analysis'] },
    ],
    benefits: ['Self-paced', 'Certificate'],
    targetAudience: ['Engineers', 'Students'],
    price: '$799',
    image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic reservoir knowledge',
  },
  {
    id: '22',
    title: 'Reservoir Engineering, Modeling & Flow Simulation',
    category: 'e-learning',
    duration: '6 Months · Online',
    format: 'Self-paced',
    overview: 'Core reservoir engineering and flow simulation techniques.',
    outcomes: ['Simulate reservoirs', 'Run history matching', 'Predict performance'],
    curriculum: [
      { module: 'Reservoir Modeling', topics: ['Grid design', 'Simulator inputs'] },
    ],
    benefits: ['Labs', 'Certificate'],
    targetAudience: ['Reservoir Engineers'],
    price: '$799',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Reservoir basics',
  },
  {
    id: '23',
    title: 'Power BI Essentials for Oil & Gas',
    category: 'e-learning',
    duration: '6 Months · Online',
    format: 'Self-paced',
    overview: 'Power BI for drilling, production and reservoir visualizations.',
    outcomes: ['Build dashboards', 'Use DAX', 'Model data'],
    curriculum: [
      { module: 'Power BI', topics: ['Data modeling', 'Visualization'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Analysts', 'Engineers'],
    price: '$499',
    image: '/images/Power BI Essentials for Oil & Gas.png',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Excel basics',
  },
  {
    id: '24',
    title: 'Geomechanics for Drilling & Completion',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Geomechanical concepts applied to wellbore stability and completions.',
    outcomes: ['Assess stability', 'Plan completions', 'Interpret logs'],
    curriculum: [
      { module: 'Geomechanics', topics: ['Stress', 'Pore pressure', 'Wellbore stability'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Drilling Engineers', 'Geologists'],
    price: '$399',
    image: '/images/Geomechanics and its application in Drilling & Completion.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basics of geology',
  },
  {
    id: '25',
    title: 'SQL, Power BI & Tableau for Oil & Gas Analytics',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'End-to-end analytics stack for oil and gas data projects.',
    outcomes: ['Query data', 'Create dashboards', 'Prepare reports'],
    curriculum: [
      { module: 'Analytics Stack', topics: ['SQL', 'Power BI', 'Tableau'] },
    ],
    benefits: ['Project-based', 'Certificate'],
    targetAudience: ['Analysts'],
    price: '$449',
    image: '/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic Excel',
  },
  {
    id: '26',
    title: 'Well Test Analysis & Reservoir Modeling Using MS Excel',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Perform well test analysis and simple reservoir models in Excel.',
    outcomes: ['Analyze tests', 'Estimate deliverability', 'Report findings'],
    curriculum: [
      { module: 'Well Test', topics: ['Pressure transient', 'Type curves'] },
    ],
    benefits: ['Template files', 'Certificate'],
    targetAudience: ['Engineers', 'Students'],
    price: '$299',
    image: '/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Excel skills',
  },
  {
    id: '27',
    title: 'Machine Learning & Python for Petrophysics',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Apply Python ML methods to petrophysical logs and interpretations.',
    outcomes: ['Process logs', 'Train classifiers', 'Predict lithology'],
    curriculum: [
      { module: 'Petrophysics ML', topics: ['Preprocessing', 'Modeling'] },
    ],
    benefits: ['Lab notebooks', 'Certificate'],
    targetAudience: ['Petrophysicists', 'Data Scientists'],
    price: '$399',
    image: '/images/Machine Learning & Python Applications for Petrophysics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python & logs understanding',
  },
  {
    id: '28',
    title: 'Mastering ML for Production Forecasting',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Advanced ML models for production and reservoir forecasting.',
    outcomes: ['Ensemble models', 'Uncertainty quantification', 'Deployment'],
    curriculum: [
      { module: 'Advanced ML', topics: ['Ensembles', 'Bayesian'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Data Scientists'],
    price: '$699',
    image: '/images/Mastering Machine Learning for Enhanced Production and Reservoir Forecasting Analytics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'ML experience',
  },
  {
    id: '29',
    title: 'Petroleum Field Development Planning',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'From concept selection to execution and economic appraisal.',
    outcomes: ['Field plan', 'Economic appraisal', 'Execution schedule'],
    curriculum: [
      { module: 'Field Planning', topics: ['Concepts', 'Economics', 'Scheduling'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Field Planners', 'PMs'],
    price: '$549',
    image: '/images/Petroleum Field Development Planning from Concept to Execution.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Engineering basics',
  },
  {
    id: '30',
    title: 'Production Forecasting & Well Performance with Python & ML',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Blend physics and ML for robust production forecasting.',
    outcomes: ['Forecast production', 'Combine physics+ML', 'Validate models'],
    curriculum: [
      { module: 'Hybrid Forecasting', topics: ['Physics-based', 'ML-based'] },
    ],
    benefits: ['Notebooks', 'Certificate'],
    targetAudience: ['Analysts', 'Engineers'],
    price: '$599',
    image: '/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python & production basics',
  },

  // 31 - 45: More E-learning & Short courses
  {
    id: '31',
    title: 'Advanced Python for Reservoir, Production and Petrophysics',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Advanced Python patterns used in reservoir workflows.',
    outcomes: ['Efficient code', 'Data handling', 'Model automation'],
    curriculum: [
      { module: 'Advanced Python', topics: ['OOP', 'NumPy', 'Optimization'] },
    ],
    benefits: ['Code samples', 'Certificate'],
    targetAudience: ['Engineers', 'Developers'],
    price: '$549',
    image: '/images/Advanced Python for Reservoir, Production and Petrophysics.jpeg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python basics',
  },
  {
    id: '32',
    title: 'Introduction to Upstream Oil & Gas Operations',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Core processes in exploration and production explained for newcomers.',
    outcomes: ['Understand upstream lifecycle', 'Know stakeholders', 'Basic terminology'],
    curriculum: [
      { module: 'Upstream', topics: ['Exploration', 'Drilling', 'Production'] },
    ],
    benefits: ['Good for beginners', 'Certificate'],
    targetAudience: ['Students', 'Career changers'],
    price: '$149',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '33',
    title: 'Well Test Interpretation Fundamentals',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Theory and practice of pressure transient analysis.',
    outcomes: ['Interpret tests', 'Estimate properties', 'Report results'],
    curriculum: [
      { module: 'PTA', topics: ['Type curves', 'Skin', 'Permeability'] },
    ],
    benefits: ['Exercises', 'Certificate'],
    targetAudience: ['Reservoir/Prod Engineers'],
    price: '$199',
    image: '/images/Well Test Analysis & Reservoir Modeling Using MS Excel.jpeg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic reservoir knowledge',
  },
  {
    id: '34',
    title: 'Data Engineering for Oil & Gas',
    category: 'e-learning',
    duration: '4 Months · Online',
    format: 'Self-paced',
    overview: 'Building data pipelines, ETL and ingestion for energy datasets.',
    outcomes: ['Build pipelines', 'Handle streaming', 'Data quality'],
    curriculum: [
      { module: 'Data Engineering', topics: ['ETL', 'Streaming', 'Storage'] },
    ],
    benefits: ['Labs', 'Certificate'],
    targetAudience: ['Data Engineers'],
    price: '$799',
    image: '/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'SQL & Python',
  },
  {
    id: '35',
    title: 'Intro to Energy Transition & Low Carbon Solutions',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Overview of low-carbon tech, renewables and decarbonization strategies.',
    outcomes: ['Understand transition pathways', 'Learn tech options', 'Policy overview'],
    curriculum: [
      { module: 'Transition', topics: ['Renewables', 'CCUS', 'Policy'] },
    ],
    benefits: ['Policy briefs', 'Certificate'],
    targetAudience: ['Managers', 'Students'],
    price: '$199',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '36',
    title: 'SCADA and Remote Monitoring for Oil & Gas',
    category: 'e-learning',
    duration: '12 Weeks · Online',
    format: 'Self-paced',
    overview: 'SCADA architectures, telemetry and alarm handling for field operations.',
    outcomes: ['Design SCADA', 'Configure telemetry', 'Manage alarms'],
    curriculum: [
      { module: 'SCADA', topics: ['RTUs', 'Telemetry', 'Historians'] },
    ],
    benefits: ['Practical examples', 'Certificate'],
    targetAudience: ['Instrumentation Engineers'],
    price: '$649',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Instrumentation basics',
  },
  {
    id: '37',
    title: 'Fundamentals of Reservoir Petrophysics',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Core petrophysical measurements and log interpretations.',
    outcomes: ['Calculate saturation', 'Interpret logs', 'Estimate porosity'],
    curriculum: [
      { module: 'Petrophysics', topics: ['Logs', 'Saturation', 'Porosity'] },
    ],
    benefits: ['Exercises', 'Certificate'],
    targetAudience: ['Petrophysicists', 'Engineers'],
    price: '$299',
    image: '/images/Machine Learning & Python Applications for Petrophysics.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic geology',
  },
  {
    id: '38',
    title: 'Advanced Production Data Analysis',
    category: 'e-learning',
    duration: '3 Months · Online',
    format: 'Self-paced',
    overview: 'Techniques to process, clean and analyze production datasets.',
    outcomes: ['Data cleaning', 'Trend analysis', 'Anomaly detection'],
    curriculum: [
      { module: 'Prod Data', topics: ['Cleaning', 'Aggregation', 'Anomaly'] },
    ],
    benefits: ['Datasets', 'Certificate'],
    targetAudience: ['Analysts', 'Engineers'],
    price: '$399',
    image: '/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'SQL & Excel',
  },
  {
    id: '39',
    title: 'Energy Economics & Market Analysis',
    category: 'e-learning',
    duration: '10 Weeks · Online',
    format: 'Self-paced',
    overview: 'Principles of energy markets, pricing and economic evaluation.',
    outcomes: ['Market analysis', 'Pricing fundamentals', 'Economic metrics'],
    curriculum: [
      { module: 'Markets', topics: ['Price drivers', 'Contracts', 'Hedging'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Analysts', 'Managers'],
    price: '$349',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic economics',
  },
  {
    id: '40',
    title: 'Data Visualization & Dashboarding with Tableau',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Create interactive dashboards and visual analytics for energy data.',
    outcomes: ['Build dashboards', 'Storytelling with data', 'Publish reports'],
    curriculum: [
      { module: 'Tableau', topics: ['Workbooks', 'Calculated fields', 'Publishing'] },
    ],
    benefits: ['Examples', 'Certificate'],
    targetAudience: ['Analysts'],
    price: '$249',
    image: '/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },

  // 41 - 55: Instructor-led & Short workshops
  {
    id: '41',
    title: 'Well Completion Design Workshop',
    category: 'instructor-led',
    duration: '3 Days · Online',
    format: 'Workshop',
    overview: 'Design completions with best practices and case studies.',
    outcomes: ['Design completions', 'Select tools', 'Risk assessment'],
    curriculum: [
      { module: 'Completion Design', topics: ['Perforation', 'Sand control'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Completion Engineers'],
    price: '$349',
    image: '/images/Diploma in Well Engineering & Completion Engineering.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Well design basics',
  },
  {
    id: '42',
    title: 'Enhanced Oil Recovery (EOR) Principles',
    category: 'instructor-led',
    duration: '5 Days · Online',
    format: 'Live',
    overview: 'EOR techniques and screening for candidate fields.',
    outcomes: ['Understand EOR', 'Screen fields', 'Design pilots'],
    curriculum: [
      { module: 'EOR', topics: ['Chemical', 'Thermal', 'Gas injection'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Reservoir Engineers'],
    price: '$599',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Reservoir basics',
  },
  {
    id: '43',
    title: 'Subsurface Uncertainty & Decision Analysis',
    category: 'instructor-led',
    duration: '4 Days · Online',
    format: 'Live',
    overview: 'Quantify uncertainty and make decisions under risk for subsurface projects.',
    outcomes: ['Quantify uncertainty', 'Decision trees', 'Value of information'],
    curriculum: [
      { module: 'Uncertainty', topics: ['Monte Carlo', 'Decision trees'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Reservoir/Asset Managers'],
    price: '$499',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Statistics basics',
  },
  {
    id: '44',
    title: 'Offshore Operations & Safety',
    category: 'instructor-led',
    duration: '5 Days · Online',
    format: 'Live + Case Studies',
    overview: 'Offshore operations, safety protocols and emergency response planning.',
    outcomes: ['Plan operations', 'Handle emergencies', 'Regulatory awareness'],
    curriculum: [
      { module: 'Offshore Ops', topics: ['Metocean', 'Safety systems'] },
    ],
    benefits: ['Checklists', 'Certificate'],
    targetAudience: ['Offshore Engineers'],
    price: '$549',
    image: '/images/Advanced Drilling Operations & Risk Mitigation.webp',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Field experience',
  },
  {
    id: '45',
    title: 'Reservoir Surveillance & Production Monitoring',
    category: 'instructor-led',
    duration: '3 Days · Online',
    format: 'Live',
    overview: 'Surveillance techniques to monitor reservoir health and production.',
    outcomes: ['Define surveillance plans', 'Use monitoring tools', 'Interpret data'],
    curriculum: [
      { module: 'Surveillance', topics: ['Sensor selection', 'Analytics'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Reservoir/Production Engineers'],
    price: '$349',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Production basics',
  },

  // 46 - 60: Corporate / Soft-skill & Management programs
  {
    id: '46',
    title: 'Placement Booster Program',
    category: 'corporate',
    duration: '3 Months · Online',
    format: 'Instructor-led + Mentorship',
    overview: 'Mock interviews, resume building and career coaching.',
    outcomes: ['Improve interview skills', 'Build portfolios', 'Networking'],
    curriculum: [
      { module: 'Career Prep', topics: ['Resume', 'Interview', 'Soft skills'] },
    ],
    benefits: ['Mock interviews', 'Placement assistance'],
    targetAudience: ['Students', 'Graduates'],
    price: '$299',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: 'All Levels',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '47',
    title: 'Leadership & Stakeholder Management for Energy Projects',
    category: 'corporate',
    duration: '6 Weeks · Online',
    format: 'Live + Workshops',
    overview: 'Stakeholder engagement, leadership skills and governance for projects.',
    outcomes: ['Manage stakeholders', 'Lead teams', 'Govern projects'],
    curriculum: [
      { module: 'Leadership', topics: ['Stakeholder mapping', 'Communication'] },
    ],
    benefits: ['Toolkit', 'Certificate'],
    targetAudience: ['Managers', 'Leads'],
    price: '$899',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Managerial role',
  },
  {
    id: '48',
    title: 'Contracting & Commercials in Oil & Gas',
    category: 'corporate',
    duration: '8 Weeks · Online',
    format: 'Self-paced + Live Q&A',
    overview: 'Commercial models, contracts and negotiation essentials for upstream projects.',
    outcomes: ['Understand contracts', 'Commercial risk', 'Negotiate terms'],
    curriculum: [
      { module: 'Commercials', topics: ['Contracts', 'Risk allocation'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Commercial Managers'],
    price: '$749',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Business fundamentals',
  },
  {
    id: '49',
    title: 'Project Controls & Scheduling for Energy Projects',
    category: 'corporate',
    duration: '6 Weeks · Online',
    format: 'Live + Tools',
    overview: 'Scheduling, cost control and risk for capital projects.',
    outcomes: ['Create schedules', 'Control costs', 'Report progress'],
    curriculum: [
      { module: 'Controls', topics: ['Scheduling', 'Earned value'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Project Controls Engineers'],
    price: '$699',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Project experience',
  },
  {
    id: '50',
    title: 'Regulatory Compliance & Environmental Permitting',
    category: 'corporate',
    duration: '4 Weeks · Online',
    format: 'Self-paced + Live',
    overview: 'Regulatory frameworks, permitting processes and compliance best practices.',
    outcomes: ['Understand permits', 'Manage compliance', 'Prepare reports'],
    curriculum: [
      { module: 'Regulation', topics: ['Permitting', 'Reporting', 'Compliance'] },
    ],
    benefits: ['Checklists', 'Certificate'],
    targetAudience: ['Regulatory Officers'],
    price: '$349',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '51',
    title: 'Finance for Non-Finance Managers in Energy',
    category: 'corporate',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Financial concepts, capital budgeting and cost control for energy managers.',
    outcomes: ['Understand finance', 'Run budgets', 'Evaluate projects'],
    curriculum: [
      { module: 'Finance', topics: ['NPV', 'IRR', 'Budgeting'] },
    ],
    benefits: ['Worksheets', 'Certificate'],
    targetAudience: ['Managers'],
    price: '$299',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '52',
    title: 'Supplier & Contract Management for Oil & Gas',
    category: 'corporate',
    duration: '4 Weeks · Online',
    format: 'Live Workshops',
    overview: 'Supplier selection, performance metrics and contract lifecycle management.',
    outcomes: ['Select suppliers', 'Measure performance', 'Manage contracts'],
    curriculum: [
      { module: 'Supplier Mgmt', topics: ['Selection', 'KPIs'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Procurement'],
    price: '$349',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Procurement basics',
  },
  {
    id: '53',
    title: 'Operational Excellence & Lean for Oil & Gas',
    category: 'corporate',
    duration: '8 Weeks · Online',
    format: 'Live + Projects',
    overview: 'Lean methods to improve reliability, reduce waste and optimize operations.',
    outcomes: ['Implement lean', 'Improve reliability', 'Reduce waste'],
    curriculum: [
      { module: 'Lean Ops', topics: ['Kaizen', '5S', 'Root cause analysis'] },
    ],
    benefits: ['Workshops', 'Certificate'],
    targetAudience: ['Operations Managers'],
    price: '$799',
    image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Ops experience',
  },
  {
    id: '54',
    title: 'Corporate Sustainability & Net-Zero Strategy',
    category: 'corporate',
    duration: '6 Weeks · Online',
    format: 'Self-paced + Live',
    overview: 'Build corporate net-zero roadmaps and emissions strategies.',
    outcomes: ['Plan net-zero', 'Measure emissions', 'Set targets'],
    curriculum: [
      { module: 'Sustainability', topics: ['Scope 1/2/3', 'Roadmaps'] },
    ],
    benefits: ['Frameworks', 'Certificate'],
    targetAudience: ['Sustainability Leads'],
    price: '$699',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '55',
    title: 'Energy Trading Basics for O&G Professionals',
    category: 'corporate',
    duration: '8 Weeks · Online',
    format: 'Live + Simulations',
    overview: 'Fundamentals of trading, risk management and market operations.',
    outcomes: ['Understand trading', 'Use risk metrics', 'Run simulations'],
    curriculum: [
      { module: 'Trading', topics: ['Markets', 'Risk', 'Derivatives'] },
    ],
    benefits: ['Sim tools', 'Certificate'],
    targetAudience: ['Traders', 'Analysts'],
    price: '$899',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Finance basics',
  },

  // 56 - 75: Mixed — more technical & niche programs to reach 75 total
  {
    id: '56',
    title: 'Natural Gas Processing & Plant Operations',
    category: 'instructor-led',
    duration: '4 Weeks · Online',
    format: 'Live + Plant Studies',
    overview: 'Process design, units and operations for gas processing facilities.',
    outcomes: ['Design process trains', 'Operate plants', 'Troubleshoot issues'],
    curriculum: [
      { module: 'Gas Processing', topics: ['Acid gas removal', 'Fractionation'] },
    ],
    benefits: ['Plant cases', 'Certificate'],
    targetAudience: ['Process Engineers'],
    price: '$699',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Process basics',
  },
  {
    id: '57',
    title: 'Hydraulic Fracturing Design & Analysis',
    category: 'instructor-led',
    duration: '5 Days · Online',
    format: 'Live',
    overview: 'Frac design, proppant selection and job evaluation techniques.',
    outcomes: ['Design fracs', 'Select proppants', 'Analyze jobs'],
    curriculum: [
      { module: 'Fracturing', topics: ['Design', 'Execution', 'Evaluation'] },
    ],
    benefits: ['Field cases', 'Certificate'],
    targetAudience: ['Completion Engineers'],
    price: '$549',
    image: '/images/Diploma in Well Engineering & Completion Engineering.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Completion basics',
  },
  {
    id: '58',
    title: 'Flow Assurance: Hydrates, Wax & Scale Management',
    category: 'instructor-led',
    duration: '3 Days · Online',
    format: 'Live',
    overview: 'Prevent and mitigate hydrates, wax and scale in flowlines.',
    outcomes: ['Identify flow problems', 'Design controls', 'Select chemicals'],
    curriculum: [
      { module: 'Flow Assurance', topics: ['Hydrates', 'Wax', 'Scale'] },
    ],
    benefits: ['Mitigation templates', 'Certificate'],
    targetAudience: ['Pipeline/Production Engineers'],
    price: '$399',
    image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Production/pipeline basics',
  },
  {
    id: '59',
    title: 'Subsea Systems & Umbilicals',
    category: 'instructor-led',
    duration: '4 Weeks · Online',
    format: 'Live + Case Studies',
    overview: 'Design, installation and integrity of subsea systems and umbilicals.',
    outcomes: ['Design subsea systems', 'Manage installations', 'Integrity monitoring'],
    curriculum: [
      { module: 'Subsea', topics: ['Umbilicals', 'Christmas trees'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Subsea Engineers'],
    price: '$899',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Offshore experience',
  },
  {
    id: '60',
    title: 'Sensors & IoT for Field Monitoring',
    category: 'instructor-led',
    duration: '2 Weeks · Online',
    format: 'Live + Demos',
    overview: 'Sensor selection, IoT architectures and edge analytics for field monitoring.',
    outcomes: ['Select sensors', 'Architect IoT', 'Process edge data'],
    curriculum: [
      { module: 'IoT', topics: ['Sensors', 'Edge computing'] },
    ],
    benefits: ['Demos', 'Certificate'],
    targetAudience: ['Instrumentation', 'Data Engineers'],
    price: '$349',
    image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic electronics',
  },
  {
    id: '61',
    title: 'Python for Petroleum Engineers',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Python programming applied to petroleum engineering problems.',
    outcomes: ['Code simulations', 'Automate tasks', 'Data analysis'],
    curriculum: [
      { module: 'Python', topics: ['pandas', 'NumPy', 'Visualization'] },
    ],
    benefits: ['Notebooks', 'Certificate'],
    targetAudience: ['Engineers'],
    price: '$249',
    image: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic programming',
  },
  {
    id: '62',
    title: 'Cloud Infrastructure for Energy Applications',
    category: 'e-learning',
    duration: '10 Weeks · Online',
    format: 'Self-paced',
    overview: 'Deploy scalable data pipelines and ML workloads for energy applications on cloud platforms.',
    outcomes: ['Cloud deployment', 'Serverless', 'Security basics'],
    curriculum: [
      { module: 'Cloud', topics: ['AWS/Azure', 'Containers', 'Security'] },
    ],
    benefits: ['Labs', 'Certificate'],
    targetAudience: ['DevOps', 'Data Engineers'],
    price: '$699',
    image: '/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Cloud basics',
  },
  {
    id: '63',
    title: 'MLOps for Energy Models',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Model lifecycle, CI/CD, monitoring and governance for ML in production.',
    outcomes: ['Model CI/CD', 'Monitoring', 'Governance'],
    curriculum: [
      { module: 'MLOps', topics: ['Pipelines', 'Monitoring'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Data Scientists', 'ML Engineers'],
    price: '$799',
    image: '/images/Machine Learning & Python Applications for Petrophysics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'ML basics',
  },
  {
    id: '64',
    title: 'Anomaly Detection in Production Systems',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Techniques for finding anomalies in sensor and production data.',
    outcomes: ['Detect anomalies', 'Implement detectors', 'Evaluate performance'],
    curriculum: [
      { module: 'Anomaly Detection', topics: ['Statistical', 'ML-based'] },
    ],
    benefits: ['Code labs', 'Certificate'],
    targetAudience: ['Data Engineers', 'Analysts'],
    price: '$349',
    image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Python & data basics',
  },
  {
    id: '65',
    title: 'Digital Twins for Asset Management',
    category: 'e-learning',
    duration: '10 Weeks · Online',
    format: 'Self-paced',
    overview: 'Create and use digital twins to improve uptime and decisions.',
    outcomes: ['Build twins', 'Integrate data', 'Simulate scenarios'],
    curriculum: [
      { module: 'Digital Twins', topics: ['Modeling', 'Integration', 'Use cases'] },
    ],
    benefits: ['Use cases', 'Certificate'],
    targetAudience: ['Engineers', 'Data Teams'],
    price: '$899',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Data & modeling experience',
  },
  {
    id: '66',
    title: 'Cybersecurity Essentials for OT/ICS',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'OT/ICS security fundamentals for field systems and SCADA.',
    outcomes: ['Understand OT threats', 'Implement controls', 'Incident response'],
    curriculum: [
      { module: 'OT Security', topics: ['Network segmentation', 'Monitoring'] },
    ],
    benefits: ['Playbooks', 'Certificate'],
    targetAudience: ['OT Engineers', 'Security Teams'],
    price: '$399',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'IT basics',
  },
  {
    id: '67',
    title: 'Renewables Integration for Oil & Gas Companies',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Strategies to incorporate renewable sources and hybrid energy systems.',
    outcomes: ['Design integrations', 'Economic assessment', 'Operational impacts'],
    curriculum: [
      { module: 'Renewables', topics: ['Solar', 'Wind', 'Hybrid systems'] },
    ],
    benefits: ['Case studies', 'Certificate'],
    targetAudience: ['Energy Managers'],
    price: '$499',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Basic energy knowledge',
  },
  {
    id: '68',
    title: 'Carbon Accounting & Reporting',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Measure and report emissions following common frameworks.',
    outcomes: ['Calculate emissions', 'Report', 'Set baselines'],
    curriculum: [
      { module: 'Accounting', topics: ['Scope 1/2/3', 'Standards'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Sustainability', 'Compliance'],
    price: '$299',
    image: '/images/ESG, Carbon Trading and Sustainable Finance.webp',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '69',
    title: 'Petrophysical Log Interpretation with ML',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Combine classic log interpretation with ML methods.',
    outcomes: ['Interpret logs', 'Train models', 'Predict properties'],
    curriculum: [
      { module: 'Logs + ML', topics: ['Preprocessing', 'Modeling'] },
    ],
    benefits: ['Notebooks', 'Certificate'],
    targetAudience: ['Petrophysicists', 'Data Scientists'],
    price: '$399',
    image: '/images/Machine Learning & Python Applications for Petrophysics.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Logs basics & Python',
  },
  {
    id: '70',
    title: 'Introduction to Upstream Project Risk Management',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Risk frameworks and practical tools to manage project risk.',
    outcomes: ['Identify risks', 'Mitigate', 'Monitor'],
    curriculum: [
      { module: 'Risk Mgmt', topics: ['Identification', 'Mitigation', 'Monitoring'] },
    ],
    benefits: ['Templates', 'Certificate'],
    targetAudience: ['Project Managers', 'Engineers'],
    price: '$249',
    image: '/images/Diploma in Petroleum Project Management & Field Development Economics.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '71',
    title: 'Statistical Methods for Petroleum Engineers',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Key statistical techniques used in reservoir and production analysis.',
    outcomes: ['Perform statistical analysis', 'Fit distributions', 'Uncertainty quantification'],
    curriculum: [
      { module: 'Statistics', topics: ['Regression', 'Bayesian basics'] },
    ],
    benefits: ['Exercises', 'Certificate'],
    targetAudience: ['Engineers', 'Analysts'],
    price: '$299',
    image: '/images/Production Forecasting & Well Performance Optimization with Python & Machine Learning.png',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Math basics',
  },
  {
    id: '72',
    title: 'Fundamentals of Petroleum Geology',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Basic geology concepts relevant to hydrocarbon exploration.',
    outcomes: ['Understand stratigraphy', 'Identify reservoirs', 'Basic mapping'],
    curriculum: [
      { module: 'Geology', topics: ['Stratigraphy', 'Structural geology'] },
    ],
    benefits: ['Introductory', 'Certificate'],
    targetAudience: ['Students', 'Geoscientists'],
    price: '$199',
    image: '/images/Reservoir Engineering, Modeling & flow Simulation.webp',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '73',
    title: 'Field Data Management & Quality Assurance',
    category: 'e-learning',
    duration: '6 Weeks · Online',
    format: 'Self-paced',
    overview: 'Methods to collect, validate and store field data reliably.',
    outcomes: ['Set QA processes', 'Validate data', 'Store securely'],
    curriculum: [
      { module: 'Data QA', topics: ['Validation', 'Storage', 'Governance'] },
    ],
    benefits: ['Checklists', 'Certificate'],
    targetAudience: ['Data Stewards', 'Engineers'],
    price: '$249',
    image: '/images/Integrated Insights SL power BI and Tableau for Oil & Gas analytics.jpg',
    level: 'Beginner',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'None',
  },
  {
    id: '74',
    title: 'Field Hydraulics & Multiphase Flow Basics',
    category: 'e-learning',
    duration: '8 Weeks · Online',
    format: 'Self-paced',
    overview: 'Principles of multiphase flow for pipelines and wellbores.',
    outcomes: ['Understand multiphase flow', 'Compute pressure drops', 'Apply correlations'],
    curriculum: [
      { module: 'Multiphase', topics: ['Flow regimes', 'Pressure drop'] },
    ],
    benefits: ['Examples', 'Certificate'],
    targetAudience: ['Pipeline/Production Engineers'],
    price: '$299',
    image: '/images/Big Data Analytics & Machine Learning for Smarter Production Facilities Operations.jpg',
    level: 'Intermediate',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Fluid mechanics basics',
  },
  {
    id: '75',
    title: 'Capstone: Integrated Field Development Project',
    category: 'diploma',
    duration: '3 Months · Capstone',
    format: 'Project-based',
    overview: 'A hands-on capstone integrating geology, reservoir, production and economics.',
    outcomes: ['Deliver integrated field plan', 'Economic evaluation', 'Presentation skills'],
    curriculum: [
      { module: 'Capstone', topics: ['Field concept', 'Simulations', 'Economic case'] },
    ],
    benefits: ['Project review', 'Diploma / Certificate'],
    targetAudience: ['Final year students', 'Professionals'],
    price: '$1,499',
    image: '/images/Petroleum Field Development Planning from Concept to Execution.jpg',
    level: 'Advanced',
    language: 'English',
    certificate: 'Yes',
    prerequisites: 'Relevant diploma or degree',
    featured: true,
  },
];

/* -------------------------------------------------------------------
   🧭 TrainingPrograms component (same structure as you provided)
------------------------------------------------------------------- */
const TrainingPrograms = ({ programs }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const allPrograms = useMemo(
    () => (programs && programs.length ? programs : DEFAULT_PROGRAMS),
    [programs]
  );

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCurriculum, setExpandedCurriculum] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [redirectTo, setRedirectTo] = useState('/payment');
  const [programToPay, setProgramToPay] = useState(null);

  const categories = useMemo(() => {
    const byCategory = {};
    allPrograms.forEach((p) => {
      byCategory[p.category] = (byCategory[p.category] || 0) + 1;
    });
    return [
      { id: 'all', name: 'All Programs', count: allPrograms.length },
      { id: 'diploma', name: 'Diploma Programs', count: byCategory['diploma'] || 0 },
      { id: 'instructor-led', name: 'Instructor-Led Trainings', count: byCategory['instructor-led'] || 0 },
      { id: 'e-learning', name: 'E-Learning', count: byCategory['e-learning'] || 0 },
      { id: 'corporate', name: 'Corporate Training', count: byCategory['corporate'] || 0 },
    ];
  }, [allPrograms]);

  const filteredPrograms =
    selectedCategory === 'all'
      ? allPrograms
      : allPrograms.filter((program) => program.category === selectedCategory);

  const toggleCurriculum = (programId) => {
    setExpandedCurriculum(expandedCurriculum === programId ? null : programId);
  };

  const handleEnrollClick = (program) => {
    const path = `/payment/${program.id}`;
    setProgramToPay(program);
    setRedirectTo(path);

    if (user) {
      navigate(path);
      return;
    }
    setAuthOpen(true);
    setRedirectTo(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive training solutions designed by industry experts to advance your career in oil and gas.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* IMAGE */}
                <div className="relative lg:col-span-1">
                  <img src={program.image} alt={program.title} className="w-full h-64 lg:h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {program.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Featured</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-2 p-8 flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                    <p className="text-gray-600 text-lg">{program.overview}</p>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold">{program.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">Format</div>
                        <div className="font-semibold">{program.format}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">Level</div>
                        <div className="font-semibold">{program.level}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="text-sm text-gray-500">Certificate</div>
                        <div className="font-semibold">{program.certificate}</div>
                      </div>
                    </div>
                  </div>

                  {/* OUTCOMES */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Learning Outcomes</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {program.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CURRICULUM */}
                  <div className="mb-6">
                    <button onClick={() => toggleCurriculum(program.id)} className="flex items-center justify-between w-full text-left">
                      <h3 className="text-lg font-semibold text-gray-900">Course Curriculum</h3>
                      {expandedCurriculum === program.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>

                    {expandedCurriculum === program.id && (
                      <div className="mt-4 space-y-4">
                        {program.curriculum.map((module, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">{module.module}</h4>
                            <ul className="space-y-1">
                              {module.topics.map((topic, topicIdx) => (
                                <li key={topicIdx} className="text-sm text-gray-600 flex items-center space-x-2">
                                  <Play className="h-3 w-3" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* TARGET AUDIENCE */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Who Should Enroll</h3>
                    <div className="flex flex-wrap gap-2">
                      {program.targetAudience.map((audience, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{audience}</span>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-6 border-t border-gray-200">
                    <div className="mb-4 sm:mb-0">
                      <div className="text-3xl font-bold text-teal-600">{program.price}</div>
                      <div className="text-sm text-gray-500">One-time payment</div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" onClick={() => handleEnrollClick(program)}>
                        Enroll Now
                      </button>
                      <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors">
                        Request Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredPrograms.length === 0 && (
            <div className="text-center text-gray-500">No programs found for this category.</div>
          )}
        </div>
      </section>

      {/* AUTH MODAL */}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} redirectTo={redirectTo} program={programToPay} />
    </div>
  );
};

export default TrainingPrograms;
