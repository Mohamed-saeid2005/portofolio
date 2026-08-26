import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  Database,
  BarChart3,
  PieChart,
  LineChart,
  Linkedin,
  Clipboard,
  Code2,
  Server,
  Globe,
  Layers,
} from "lucide-react";

/* ---------- UI helpers ---------- */

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-14 md:py-20">
    <div className="max-w-6xl mx-auto px-4">

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-muted-foreground">
            {subtitle}
          </p>
        )}
      </motion.div>

      <div className="mt-8">
        {children}
      </div>

    </div>
  </section>
);


const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-5 shadow-sm bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
    {children}
  </span>
);


const Card = ({ children }) => (
  <div className="rounded-2xl border bg-white/70 dark:bg-zinc-900/50 shadow-sm hover:shadow-md transition-shadow p-6">
    {children}
  </div>
);


/* ---------- Page ---------- */

export default function Portfolio() {

  const [projectCategory, setProjectCategory] = useState("data");


  /* ---------- Basic Information ---------- */

  const name = "Mohammed ElSaeid Elantably";

  const title = "Full-stack .NET & Data Analyst";

  const aboutText =
    "Commerce student at Kafr El Sheikh University and a Digital Egypt Pioneers Initiative (DEPI) Fellow. I specialize in Full-Stack .NET Web Development using C#, .NET Core Web API, MVC, and SQL Server, alongside Data Analysis using Microsoft Excel and visualization tools. My focus is on combining web technologies and data insights to develop structured, scalable applications and support data-driven decision-making.";

  const location = "Kafr Elsheikh, Egypt";

  const email = "m.saeid2690@gmail.com";

  const phone = "01119488149";

  const dob = "Feb 21, 2005";

  const linkedin =
    "https://www.linkedin.com/in/mohamed--elantably";

  const whatsapp =
    "https://wa.me/qr/TF72DTJFP6ZHF1";

  const dataAnalysisCertificate =
    "https://drive.google.com/file/d/1wUWlg3_FfQ-Z1r2JefLAEMBnB9Tn77-N/view?usp=sharing";


  /* ---------- Services ---------- */

  const services = [

    {
      icon: <Clipboard className="w-8 h-8 text-indigo-500" />,
      title: "Data Entry",
      desc:
        "Accurate and efficient data entry, validation, and formatting to ensure high-quality datasets ready for analysis.",
    },

    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "Data Cleaning & Transformation",
      desc:
        "Ensuring data accuracy and consistency by identifying and correcting errors, handling missing values, and preparing datasets for analysis.",
    },

    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: "Data Analysis & Interpretation",
      desc:
        "Conducting exploratory data analysis, descriptive statistics, and identifying trends, patterns, and anomalies to uncover useful insights.",
    },

    {
      icon: <PieChart className="w-8 h-8 text-purple-500" />,
      title: "Interactive Dashboard Development",
      desc:
        "Designing and building dynamic dashboards using tools such as Power BI and Tableau to support data-driven decision-making.",
    },

    {
      icon: <LineChart className="w-8 h-8 text-orange-500" />,
      title: "Predictive Modeling & Forecasting",
      desc:
        "Developing statistical and machine learning models to predict outcomes, understand trends, and support proactive decision-making.",
    },

    {
      icon: <Database className="w-8 h-8 text-teal-500" />,
      title: "Database Querying & Management",
      desc:
        "Using SQL for efficient data extraction, manipulation, querying, and management from structured datasets.",
    },

    {
      icon: <Code2 className="w-8 h-8 text-cyan-500" />,
      title: "Web Application Development",
      desc:
        "Building structured and responsive web applications using C#, .NET, HTML5, CSS3, and JavaScript.",
    },

    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: "ASP.NET Core Web API",
      desc:
        "Developing backend services and RESTful APIs with ASP.NET Core to connect applications with reliable business logic and data services.",
    },

    {
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: "ASP.NET Core MVC",
      desc:
        "Developing web applications using the MVC architecture with structured controllers, models, and views.",
    },

    {
      icon: <Layers className="w-8 h-8 text-violet-500" />,
      title: "Database & SQL Server",
      desc:
        "Designing and working with relational databases using SQL Server for data storage, querying, and application integration.",
    },

  ];


  /* ---------- Skills ---------- */

  const skills = [

    {
      group: "Data Analysis",
      items: [
        "Microsoft Excel",
        "Power BI",
        "Tableau",
        "SQL",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "WordCloud",
        "Data Cleaning",
        "EDA",
        "Data Visualization",
      ],
    },

    {
      group: "Full-Stack .NET",
      items: [
        "C#",
        ".NET",
        ".NET Core",
        "ASP.NET Core Web API",
        "ASP.NET Core MVC",
        "SQL Server",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "GitHub",
        "Docker",
        "Unit Testing",
      ],
    },

    {
      group: "Soft Skills",
      items: [
        "Decision Making",
        "Teamwork",
        "Critical Thinking",
        "Curiosity",
        "Problem Solving",
        "Attention to Detail",
      ],
    },

    {
      group: "Languages",
      items: [
        "Arabic – Native",
        "English – Good",
      ],
    },

  ];


  /* ---------- Data Analysis Projects ---------- */

  const dataProjects = [

    {
      name:
        "CRM Database System (BRD + Use Case + SQL DDL)",

      blurb:
        "Designed a complete CRM database with normalization and constraints covering customers, orders, products, and marketing campaigns.",

      link:
        "https://docs.google.com/document/d/1e74jsKxxhnCPd2bRTmtaop6MTOtrk9fKXucbLLtVb7Y/edit?usp=sharing",

      images: [
        "/elantably_images/image 2.png",
        "/elantably_images/image 3.png",
      ],

      stack: [
        "SQL",
        "DDL",
        "ERD/BRD",
      ],
    },


    {
      name:
        "Salary Data Analysis — San Francisco (2011–2014)",

      blurb:
        "Analyzed salary dataset using Python (pandas, matplotlib) to extract pay patterns and job title trends.",

      link:
        "https://colab.research.google.com/drive/1WzWmNY5oud8727f8dAwaYOjZmCL9G6yL?usp=sharing",

      images: [
        "/elantably_images/image 4.png",
        "/elantably_images/image 5.png",
      ],

      stack: [
        "Python",
        "pandas",
        "matplotlib",
      ],
    },


    {
      name:
        "🚢 Titanic Data Analysis & Survival Prediction",

      blurb: `Analyzed the Titanic dataset using Pandas, Matplotlib, and Seaborn to uncover survival patterns.

Key steps:
- Data Cleaning: handled missing values and dropped irrelevant columns.
- Exploratory Data Analysis (EDA): visualized age distribution, survival by gender and class, and correlation heatmaps.
- Feature Engineering: extracted passenger titles from names and created additional useful features.
- Predictive Modeling: built a Random Forest classifier to predict survival and analyzed feature importances.

🔹 Result: The model achieved solid accuracy and highlighted gender, class, and age as the strongest predictors of survival.`,

      video:
        "https://drive.google.com/file/d/1SnXp_FRX8gehLd2l0RCpKTms-zxMtnhD/view?usp=sharing",

      stack: [
        "Python",
        "pandas",
        "matplotlib",
        "seaborn",
        "scikit-learn",
      ],
    },


    {
      name:
        "🎬 IMDb Top 1000 Movies: Exploratory Data Analysis",

      blurb: `An exploratory data analysis project on the IMDb Top 1000 movies dataset using Python.

Key steps:
- Data Cleaning: Handled missing values and removed duplicates using the Pandas library.
- Analysis & Visualization: Created plots (Histogram, Boxplot) to understand the distribution of ratings.
- Used Word Clouds to visualize the most frequent words in movie titles and genres.
- Designed an interactive plot with Plotly to analyze the relationship between ratings and revenue over time.

🔹 Tools Used: Python, Pandas, Matplotlib, Seaborn, Plotly, WordCloud.`,

      video:
        "https://drive.google.com/file/d/1tv8SgmTOkmlZmsZu1Utqf86Py3WZk3WR/view?usp=sharing",

      stack: [
        "Python",
        "pandas",
        "matplotlib",
        "seaborn",
        "plotly",
        "wordcloud",
      ],
    },


    {
      name:
        "📺 Netflix Data Analysis",

      blurb: `Analyzed the Netflix movies and TV shows dataset using Python. Cleaned and processed the data to uncover insights such as content types, top-producing countries, and trends over time.

Key steps:
- Data Cleaning: Handled missing values and removed duplicates.
- Analysis & Visualization: Classified content (Movies vs. TV Shows).
- Analyzed the distribution of content by country and release year.
- Created interactive plots and Word Clouds for titles and genres.

🔹 Tools Used: Python, Pandas, Matplotlib, Seaborn, Plotly, WordCloud.`,

      video:
        "https://drive.google.com/file/d/1j7zn-9Bej_TlBp2gk-w_JE_KaGw90KfA/view?usp=sharing",

      stack: [
        "Python",
        "pandas",
        "matplotlib",
        "seaborn",
        "plotly",
        "wordcloud",
      ],
    },


    /* ---------- Graduation Project ---------- */

    {
      name:
        "🎓 Graduation Project — UK Railway Refund & Delay Analysis",

      blurb: `A team-based end-to-end Business Intelligence project analyzing UK railway journeys, ticket transactions, refund behavior, and operational delays.

The project included data cleaning, ETL, data modeling, and Power BI visualization to uncover refund patterns, identify loss-making routes, and evaluate operational performance.

🔹 Project Type: Team Project.
🔹 Tools: Power BI, Data Modeling, ETL, Data Cleaning, CSV.`,

      link:
        "https://github.com/Mohamed-saeid2005/DEPI_Dashboard_Graduation_Project",

      images: [
        "https://github.com/user-attachments/assets/cad4a208-7ec2-48f7-8917-e0d60f25a25d",
        "https://github.com/user-attachments/assets/d46466a4-0547-45e6-937d-29fe9f37cf58",
        "https://github.com/user-attachments/assets/599c6955-198a-45cd-9b74-ba64378d955c",
        "https://github.com/user-attachments/assets/5d891539-9d47-472f-abd2-cd2e9730a43d",
      ],

      stack: [
        "Power BI",
        "Data Modeling",
        "ETL",
        "Data Cleaning",
        "CSV",
      ],
    },

  ];


  /* ---------- Full Stack .NET Projects ---------- */

  const dotnetProjects = [];


  /* ---------- Visible Projects ---------- */

  const visibleProjects =
    projectCategory === "data"
      ? dataProjects
      : dotnetProjects;


  return (

    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100">


      {/* =====================================================
          Navbar
      ===================================================== */}

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/40 border-b">

        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          <a
            href="#home"
            className="font-semibold tracking-tight"
          >
            Elantably
          </a>


          <nav className="hidden md:flex gap-6 text-sm">

            {[
              ["About", "about"],
              ["Education & Experience", "edu-exp"],
              ["Full Stack .NET", "dotnet"],
              ["Services", "services"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Certifications", "certifications"],
              ["Client Feedback", "testimonials"],
              ["Contact", "contact"],
            ].map(([label, href]) => (

              <a
                key={href}
                href={`#${href}`}
                className="hover:opacity-80"
              >
                {label}
              </a>

            ))}

          </nav>


          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm shadow-sm hover:shadow transition"
          >

            <span>
              Hire me
            </span>

            <ArrowRight className="w-4 h-4" />

          </a>

        </div>

      </header>


      {/* =====================================================
          Hero
      ===================================================== */}

      <section
        id="home"
        className="relative overflow-hidden"
      >

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">


          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {name}
            </h1>


            <p className="mt-3 text-xl md:text-2xl font-medium text-muted-foreground">
              {title}
            </p>


            <div className="mt-6 flex flex-wrap gap-3">

              <Chip>
                <MapPin className="w-4 h-4 mr-2" />
                {location}
              </Chip>


              <Chip>
                <Calendar className="w-4 h-4 mr-2" />
                {dob}
              </Chip>


              <Chip>
                <Mail className="w-4 h-4 mr-2" />
                {email}
              </Chip>


              <Chip>
                <Phone className="w-4 h-4 mr-2" />
                {phone}
              </Chip>

            </div>


            {/* CV + LinkedIn */}

            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="/elantably_files/Mohamed-Elantably-Data-Analyst.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black rounded-xl shadow hover:scale-105 transition-transform"
              >

                Download CV

                <ArrowRight className="w-4 h-4" />

              </a>


              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-xl shadow hover:scale-105 transition-transform"
              >

                <Linkedin className="w-4 h-4" />

                LinkedIn

              </a>

            </div>

          </motion.div>


          {/* Profile Image */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="aspect-square rounded-3xl border bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-black p-2">

              <img
                src="/elantably_images/image 1.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          About
      ===================================================== */}

      <Section
        id="about"
        title="About"
        subtitle="Profile"
      >

        <Card>

          <h3 className="font-semibold text-lg">
            Full-Stack .NET Developer | Data Analyst | DEPI Fellow
          </h3>


          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-7">
            {aboutText}
          </p>


          <div className="mt-5 flex flex-wrap gap-2">

            {[
              "C#",
              ".NET Core",
              "Web API",
              "MVC",
              "SQL Server",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Excel",
              "Data Visualization",
            ].map((skill) => (

              <Chip key={skill}>
                {skill}
              </Chip>

            ))}

          </div>

        </Card>

      </Section>


      {/* =====================================================
          Education & Experience
      ===================================================== */}

      <Section
        id="edu-exp"
        title="Education & Experience"
      >

        <div className="grid md:grid-cols-2 gap-6">


          {/* Education */}

          <Card>

            <h3 className="font-semibold">
              🎓 Education
            </h3>


            <p className="mt-2 text-sm text-muted-foreground">

              Bachelor of Commerce – Business Administration

              <br />

              Kafr El Sheikh University, Egypt

              <br />

              2023 – 2027

              <br />

              Expected Graduation: 2027

              <br />

              GPA: Good

            </p>

          </Card>


          {/* Experience */}

          <Card>

            <h3 className="font-semibold">
              💼 Experience
            </h3>


            <ul className="mt-2 text-sm text-muted-foreground space-y-2 list-disc list-inside">

              <li>
                Data Analysis Intern – Digital Egypt Pioneers Initiative
                (Jun 2024 – Nov 2025)
              </li>

              <li>
                Collected, cleaned, and analyzed real-world datasets using
                Power BI and Excel.
              </li>

              <li>
                Built and delivered interactive dashboards to support
                data-driven decision making.
              </li>

              <li>
                Completed an intensive data analysis program under the
                Ministry of Communications.
              </li>

              <li>
                Collaborated in solving 20+ practical data challenges
                through team-based problem solving.
              </li>

              <li>
                Achieved 40% improvement in analysis efficiency by optimizing
                workflows.
              </li>

              <li>
                Strengthened skills in decision-making, teamwork, and
                attention to detail in remote settings.
              </li>

            </ul>

          </Card>

        </div>

      </Section>


      {/* =====================================================
          Full Stack .NET
      ===================================================== */}

      <Section
        id="dotnet"
        title="Full Stack .NET"
        subtitle="Current professional training"
      >

        <Card>

          <h3 className="font-semibold text-lg">
            Full Stack .NET
          </h3>


          <p className="mt-2 text-sm text-muted-foreground">
            Digital Egypt Pioneers Initiative (DEPI)
          </p>


          <p className="mt-1 text-sm text-muted-foreground">
            Started July 2026
          </p>


          <div className="mt-4 flex flex-wrap gap-2">

            <Chip>
              In Progress
            </Chip>


            <Chip>
              Expected Completion: December 2026
            </Chip>

          </div>

        </Card>

      </Section>


      {/* =====================================================
          Services
      ===================================================== */}

      <Section
        id="services"
        title="Services"
        subtitle="What I can help with"
      >

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((s, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.05,
              }}
            >

              <Card>

                <div className="flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <div className="mb-4">
                    {s.icon}
                  </div>


                  <h3 className="font-semibold text-lg">
                    {s.title}
                  </h3>


                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.desc}
                  </p>

                </div>

              </Card>

            </motion.div>

          ))}

        </div>

      </Section>


      {/* =====================================================
          Skills
      ===================================================== */}

      <Section
        id="skills"
        title="Skills"
      >

        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((sg, idx) => (

            <Card key={idx}>

              <h3 className="font-semibold text-lg">
                {sg.group}
              </h3>


              <div className="mt-4 flex flex-wrap gap-2">

                {sg.items.map((sk) => (

                  <Chip key={sk}>
                    {sk}
                  </Chip>

                ))}

              </div>

            </Card>

          ))}

        </div>

      </Section>


      {/* =====================================================
          Projects
      ===================================================== */}

      <Section
        id="projects"
        title="Projects"
        subtitle="Selected work and practical projects"
      >


        {/* Project Category Switcher */}

        <div className="flex flex-wrap justify-center gap-3 mb-8">

          <button
            type="button"
            onClick={() => setProjectCategory("data")}
            className={`px-5 py-3 rounded-xl font-medium shadow-sm transition-all ${
              projectCategory === "data"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black scale-105"
                : "border bg-white/70 dark:bg-zinc-900/50 hover:shadow-md"
            }`}
          >
            Data Analysis Projects
          </button>


          <button
            type="button"
            onClick={() => setProjectCategory("dotnet")}
            className={`px-5 py-3 rounded-xl font-medium shadow-sm transition-all ${
              projectCategory === "dotnet"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black scale-105"
                : "border bg-white/70 dark:bg-zinc-900/50 hover:shadow-md"
            }`}
          >
            Full Stack .NET Projects
          </button>

        </div>


        {/* Data Analysis Projects */}

        {projectCategory === "data" && (

          <div className="grid md:grid-cols-2 gap-6">

            {visibleProjects.map((p, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.05,
                }}
              >

                <Card>

                  <h3 className="font-semibold">
                    {p.name}
                  </h3>


                  <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line leading-6">
                    {p.blurb}
                  </p>


                  {/* View Project */}

                  {p.link && (

                    <div className="mt-4">

                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black rounded-xl shadow-md hover:scale-105 transition-transform font-medium"
                      >

                        View Project

                        <ArrowRight className="w-5 h-5" />

                      </a>

                    </div>

                  )}


                  {/* Images */}

                  {p.images && (

                    <div className="mt-4 grid grid-cols-2 gap-2">

                      {p.images.map((src, idx) => (

                        <img
                          key={idx}
                          src={src}
                          alt={`${p.name} screenshot ${idx + 1}`}
                          className="w-full h-40 md:h-44 object-cover rounded-lg border"
                        />

                      ))}

                    </div>

                  )}


                  {/* Video Link */}

                  {p.video && (

                    <div className="mt-5">

                      <a
                        href={p.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black rounded-xl shadow-md hover:scale-105 transition-transform font-medium"
                      >

                        View Video

                        <ArrowRight className="w-5 h-5" />

                      </a>

                    </div>

                  )}


                  {/* Technology Stack */}

                  <div className="mt-4 flex flex-wrap gap-2">

                    {p.stack.map((t) => (

                      <Chip key={t}>
                        {t}
                      </Chip>

                    ))}

                  </div>

                </Card>

              </motion.div>

            ))}

          </div>

        )}


        {/* Full Stack .NET Projects */}

        {projectCategory === "dotnet" && (

          <Card>

            <div className="text-center py-10">

              <Code2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />


              <h3 className="text-xl font-semibold">
                Full Stack .NET Projects
              </h3>


              <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                Full Stack .NET projects will be showcased here as they are
                completed, including web applications, APIs, MVC projects,
                and database-driven applications.
              </p>


              <div className="mt-5">

                <Chip>
                  Projects Coming Soon
                </Chip>

              </div>

            </div>

          </Card>

        )}

      </Section>


      {/* =====================================================
          Certifications
      ===================================================== */}

      <Section
        id="certifications"
        title="Certifications"
        subtitle="Professional certifications"
      >

        <Card>

          <h3 className="font-semibold text-lg">
            Data Analyst Specialist
          </h3>


          <p className="mt-2 text-sm text-muted-foreground">
            Digital Egypt Pioneers Initiative (DEPI)
          </p>


          <p className="mt-1 text-sm text-muted-foreground">
            June – December 2025
          </p>


          <div className="mt-4 flex flex-wrap gap-3 items-center">

            <Chip>
              Completed
            </Chip>


            <a
              href={dataAnalysisCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black rounded-xl shadow-md hover:scale-105 transition-transform font-medium"
            >

              View Certificate

              <ArrowRight className="w-5 h-5" />

            </a>

          </div>

        </Card>

      </Section>


      {/* =====================================================
          Client Feedback
      ===================================================== */}

      <Section
        id="testimonials"
        title="Client Feedback"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <Card>

            <p className="text-sm text-muted-foreground italic">
              (Empty — future client testimonials will be added here)
            </p>

          </Card>


          <Card>

            <p className="text-sm text-muted-foreground italic">
              (Empty — future client testimonials will be added here)
            </p>

          </Card>

        </div>

      </Section>


      {/* =====================================================
          Contact
      ===================================================== */}

      <Section
        id="contact"
        title="Let’s work together"
      >

        <div className="grid md:grid-cols-3 gap-6">


          {/* Email */}

          <Card>

            <div className="flex items-center gap-3">

              <Mail className="w-5 h-5" />

              <div>

                <p className="text-sm text-muted-foreground">
                  Email
                </p>


                <a
                  className="font-medium"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>

              </div>

            </div>

          </Card>


          {/* WhatsApp */}

          <Card>

            <div className="flex items-center gap-3">

              <Phone className="w-5 h-5" />

              <div>

                <p className="text-sm text-muted-foreground">
                  Phone / WhatsApp
                </p>


                <a
                  className="font-medium block"
                  href={`tel:${phone}`}
                >
                  {phone}
                </a>


                <a
                  className="text-blue-600 font-medium"
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </Card>


          {/* LinkedIn */}

          <Card>

            <div className="flex items-center gap-3">

              <Linkedin className="w-5 h-5" />

              <div>

                <p className="text-sm text-muted-foreground">
                  LinkedIn
                </p>


                <a
                  className="font-medium"
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>

              </div>

            </div>

          </Card>


          {/* Location */}

          <Card>

            <div className="flex items-center gap-3">

              <MapPin className="w-5 h-5" />

              <div>

                <p className="text-sm text-muted-foreground">
                  Location
                </p>


                <p className="font-medium">
                  {location}
                </p>

              </div>

            </div>

          </Card>

        </div>

      </Section>


      {/* =====================================================
          Footer
      ===================================================== */}

      <footer className="border-t py-10 text-sm text-muted-foreground">

        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">

          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>


          <div className="flex gap-4">

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}
