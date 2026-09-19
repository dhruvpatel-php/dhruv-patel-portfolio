import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Rai University,Ahmedabad</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Earned a Bachelor of Technology in Computer Science & Engineering.
              Built strong computer science foundations in data structures,
              algorithms, object-oriented programming, and relational database systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Fruxinfo Pvt. Ltd.</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Developed ERP and e-commerce platforms using PHP, MySQL, and REST
              APIs. Built inventory management, reporting, authentication, and
              role-based access-control modules while optimizing database queries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>INNsight Interactive</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Engineered backend modules and enterprise web applications with
              PHP, CodeIgniter 3, and MySQL. Designed reusable REST APIs,
              authentication workflows, secure document handling, and auto-suggestion services.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal Projects & Freelancing</h4>
                <h5>Independent Development</h5>
              </div>

              <h3>2022</h3>
            </div>

            <p>
              Continued building and maintaining web-based projects while strengthening
              my skills in PHP, CodeIgniter, MySQL, REST APIs, and backend development.
              Worked independently on personal projects and freelance tasks, focusing on
              practical software development and problem-solving.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science & AI</h4>
                <h5>DataMites | Training</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completed comprehensive Python Data Science & ML training. Built
              end-to-end ML deployment pipelines, predictive models, NLP sentiment
              classifiers, and time-series forecasts. Actively seeking a Data Science Internship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;




