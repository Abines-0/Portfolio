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
            Aspiring Full Stack Developer eager to work on end-to-end web development, from user interfaces to server-side logic, and contribute to building high-quality, user-centric applications in a fast-paced organization.
          </p>

          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">
              <strong>Email:</strong> 
              <a href="mailto:abineshan356@gmail.com">
                abineshan356@gmail.com
              </a>
            </li>

            <li className="list-group-item">
              <strong>Mobile:</strong>
              <a href="tel:+91-73051-52548">
                +91 7305152548
              </a>
            </li>
            
            <li className="list-group-item">
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/abinez0/" className="ms-2" target="_blank">
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
            <li>Frontend Development - HTML5, CSS3, JavaScript (ES6+), React.js</li>
            <li>Backend Development - Node.js, Express.js, Python, Flask, Django, FastAPI</li>
            <li>ML & Data Science - NumPy, Pandas, Scikit-learn, Matplotlib, TensorFlow / PyTorch</li>
            <li>Developer Tools & Platforms: Git & GitHub , Postman , VS Code, PyCharm, Chrome DevTools, Jupyter Notebook, Google Colab, Linux</li>

          </ul>
        </div>
        <div className="col-md-6">
          <h5>Education</h5>
          <p className="text-muted">B.E Electronics and Communication Engineering (2021 - 2025)</p>
        </div>
      </div>
    </section>
    </section>
  );
}