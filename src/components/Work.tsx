import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Project {
  num: string;
  name: string;
  category: string;
  tools: string[];
  overview: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    num: "01",
    name: "Car Selling Price Prediction",
    category: "Machine Learning | Regression",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Flask",
      "Streamlit",
    ],
    overview:
      "Built a machine learning workflow to analyze vehicle attributes and predict used-car selling prices. Applied data preprocessing, exploratory analysis, feature preparation, model training, and evaluation.",
    image: "/images/car_price_ml.jpg",
    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "02",
    name: "Loan Approval Prediction",
    category: "Machine Learning | Classification",
    tools: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Data Preprocessing",
      "ML Pipelines",
    ],
    overview:
      "Developed a classification workflow for loan approval prediction, including data cleaning, categorical feature handling, preprocessing, feature transformation, model training, and evaluation.",
    image: "/images/loan_pipeline.jpg",
    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "03",
    name: "Movie Reviews Sentiment",
    category: "NLP | Text Classification",
    tools: [
      "Python",
      "NLTK",
      "TF-IDF",
      "Scikit-Learn",
      "NLP",
      "Classification",
    ],
    overview:
      "Built an NLP classification workflow to analyze movie review sentiment. Applied text preprocessing, tokenization, TF-IDF vectorization, and machine learning classification to identify positive and negative sentiment.",
    image: "/images/movie_sentiment.jpg",
    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "04",
    name: "AirPassengers Forecasting",
    category: "Time Series Analysis",
    tools: [
      "Python",
      "Pandas",
      "Statsmodels",
      "ARIMA",
      "Matplotlib",
    ],
    overview:
      "Analyzed historical passenger data to understand trends, seasonality, and stationarity before applying ARIMA-based time-series forecasting.",
    image: "/images/air_passengers.jpg",
    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "05",
    name: "HR Analytics Attrition",
    category: "Data Analysis | Classification",
    tools: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Decision Tree",
      "EDA",
    ],
    overview:
      "Explored employee data to identify patterns associated with attrition and built a Decision Tree classification model to predict employee turnover.",
    image: "/images/hr_attrition.jpg",
    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "06",
    name: "Advertising Sales Prediction",
    category: "EDA | Linear Regression",
    tools: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Linear Regression",
      "Matplotlib",
    ],
    overview:
      "Performed exploratory data analysis to understand the relationship between advertising expenditure and sales, then applied linear regression to build a predictive model.",
    image: "/images/sales_advertising.jpg",
    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "07",

    name: "ERP Management System",

    category: "ERP | Backend Development",

    tools: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST APIs",
      "JavaScript",
    ],

    overview:
      "Developed an enterprise ERP system with modules for inventory, billing, reporting, and role-based access control, implementing database-driven workflows and backend business logic.",

    image: "/images/ERP.png",

    link: "https://github.com/dhruvpatel-php",
  },
  {
    num: "08",

    name: "Warehouse Management & E-Invoicing System",

    category: "Warehouse | Inventory Management",

    tools: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "REST APIs",
      "JavaScript",
    ],

    overview:
      "Developed warehouse and inventory workflows for stock tracking and e-invoicing, integrating database operations and real-time business processes for efficient inventory management.",

    image: "/images/Warehouse.png",

    link: "https://github.com/dhruvpatel-php",
  },
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const workFlex = document.querySelector(".work-flex") as HTMLElement | null;
      const workContainer = document.querySelector(".work-container") as HTMLElement | null;
      const boxes = document.getElementsByClassName("work-box");

      if (!workFlex || !workContainer || boxes.length === 0) return 0;

      const lastBox = boxes[boxes.length - 1] as HTMLElement;
      const totalWidth = workFlex.offsetLeft + lastBox.offsetLeft + lastBox.offsetWidth;
      const visibleWidth = workContainer.offsetWidth;

      // Ensure last project box scrolls fully into view with generous right clearance
      const distance = totalWidth - visibleWidth + 100;

      return Math.max(0, distance);
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.num}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <div className="work-detail-section">
                  <div className="work-detail-item">
                    <h5>Key Focus</h5>
                    <p>{project.overview}</p>
                  </div>

                  <div className="work-detail-item">
                    <h5>Tools & Techniques</h5>

                    <div className="work-tool-tags">
                      {project.tools.map((tool, index) => (
                        <span className="work-tool-tag" key={index}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;


