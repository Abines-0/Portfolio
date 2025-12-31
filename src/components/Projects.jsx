export default function Projects() {
  const projectList = [
    { title: "Interactive Story Generator", desc: "Developed an AI-powered full-stack app for interactive, theme-based storytelling. Built async FastAPI REST APIs with OpenAI integration and PostgreSQL. Created a dynamic React.js frontend for real-time story navigation and user interaction.", link: "https://github.com/Abines-0/interactive-story-generator.git" },
    { title: "Student Performance Prediction Web App", desc: "Developed and deployed an end-to-end machine learning pipeline to predict students math scores based on demographic and academic attributes, accessible via a Flask-based web application hosted on Render.", link: "https://student-performance-2anx.onrender.com" },
    { title: "Stock Prediction Portal", desc: "A full-stack web application that allows users to register, log in, and predict stock prices using a deep learning model (LSTM) trained on historical financial data. Built with React, Django REST Framework, and TensorFlow.", link: "https://github.com/Abines-0/stock-prediction-portal.git" },
  ];

  return (
    <section className="container py-5" id="projects">
      <h2 className="fw-bold mb-4">Projects</h2>
      <div className="row g-4">
        {projectList.map((p, i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{p.title}</h5>
                <p className="card-text text-muted">{p.desc}</p>
                <a href={p.link} target="_blank" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}