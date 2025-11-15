import resumeUrl from "../assets/AbineshanResume.pdf"

export default function Hero() {
  return (
    <section className="text-center p-5 bg-light" id="home">
      <h1 className="display-3 fw-bold">Hi, I'm Abineshan</h1>
      <p className="lead">Software Developer | Web Developer</p>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <a href={resumeUrl} download className="btn btn-success btn-lg">
          Download Resume
        </a>
        <a href="#projects" className="btn btn-primary btn-lg">
          View My Work
        </a>
      </div>
    </section>
  );
}