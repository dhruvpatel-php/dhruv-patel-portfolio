
import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };


  useEffect(() => {
    const isMobile = window.innerWidth <= 900;

    if (isMobile) {
      containerRef.current.forEach((container) => {
        if (!container) return;

        container.classList.remove("what-noTouch");

        const clickHandler = () => handleClick(container);

        container.addEventListener("click", clickHandler);

        // Store handler so cleanup removes the SAME function
        (container as any)._whatClickHandler = clickHandler;
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (!container) return;

        const clickHandler = (container as any)._whatClickHandler;

        if (clickHandler) {
          container.removeEventListener("click", clickHandler);
          delete (container as any)._whatClickHandler;
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* DATA SCIENCE */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DATA SCIENCE & AI/ML</h3>

              <h4>Description</h4>

              <p>
                Working with data to explore patterns, build predictive models,
                and solve practical problems using Python, data analysis, and
                machine learning techniques.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Pandas & NumPy</div>
                <div className="what-tags">Scikit-Learn</div>
                <div className="what-tags">Data Preprocessing</div>
                <div className="what-tags">Feature Engineering</div>
                <div className="what-tags">EDA & Visualization</div>
                <div className="what-tags">Regression</div>
                <div className="what-tags">Classification</div>
                <div className="what-tags">Clustering</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">Time Series</div>
                <div className="what-tags">Matplotlib & Seaborn</div>
                <div className="what-tags">Jupyter Notebook</div>
                <div className="what-tags">Google Colab</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* SOFTWARE ENGINEERING */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>SOFTWARE ENGINEERING & BACKEND</h3>

              <h4>Description</h4>

              <p>
                Building web applications and backend solutions with a focus on
                APIs, databases, authentication, business logic, and
                maintainable software.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">PHP</div>
                <div className="what-tags">CodeIgniter</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">MVC & OOP</div>
                <div className="what-tags">Laravel</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">Git & GitHub</div>
                <div className="what-tags">Bootstrap</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  const isActive = container.classList.contains("what-content-active");

  if (!container.parentElement) return;

  const cards = Array.from(
    container.parentElement.querySelectorAll(".what-content")
  ) as HTMLDivElement[];

  cards.forEach((card) => {
    card.classList.remove("what-content-active");
    card.classList.remove("what-sibling");
  });

  if (!isActive) {
    container.classList.add("what-content-active");

    cards.forEach((card) => {
      if (card !== container) {
        card.classList.add("what-sibling");
      }
    });
  }
}


