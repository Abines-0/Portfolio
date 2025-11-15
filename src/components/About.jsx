import profilePic from "../assets/profile.jpg"; // Add your image in /src/assets/

export default function About(){
  return (
    <section className="container py-5" id="about">
      <h2 className="fw-bold mb-4">About Me</h2>

      <div className="row align-items-center g-4">
        <div className="col-md-4 text-center">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle shadow"
            style={{ width: "220px", height: "220px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-8">
          <p className="lead">
            Enthusiastic full-stack developer skilled in React.js, Python, Django, SQL, and machine learning. Passionate about creating efficient interfaces and intelligent, data-driven applications. Looking for an entry-level position to apply and expand my technical skills.
          </p>

          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">
              
              <strong>Email:</strong> <a href="mailto:abineshan356@gmail.com">abineshan356@gmail.com</a>
            </li>
            <li className="list-group-item">
              <strong>Mobile:</strong> +91 7305152548 
            </li>
            <li className="list-group-item">
              <strong>LinkedIn:</strong>
              <a href="www.linkedin.com/in/abinez0" className="ms-2" target="_blank">
                linkedin.com/in/abinez0
              </a>
            </li>
          </ul>
        </div>
      </div>
    <section className="container py-5" id="about">
      <div className="row mt-4">
        <div className="col-md-6">
          <h5>Skills</h5>
          <ul>
            <li>Frontend: HTML, CSS, Bootstrap, JavaScript, React.js</li>
            <li>Backend: Python, Flask, Django, Django REST Framework, REST API</li>
            <li>Database: SQL (MySQL/PostgreSQL)</li>
            <li>Machine Learning: Data Preprocessing, Feature Engineering, Model Training and Evaluation</li>
            <li>Tools & Platforms: Git, GitHub, Postman, VS Code, Chrome DevTools, Jupyter Notebook, Google Colab</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Education</h5>
          <p className="text-muted">B.E Electronics and Communication Engineering at Sree Sastha Institute of Engineering and Technology, Chennai</p>
        </div>
      </div>
    </section>
    </section>
  );
}