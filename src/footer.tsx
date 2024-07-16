import "./styles/footer.css";

function PageFooter() {
  return (
    <footer>
      <div className="footerr">
        <div className="footer-container">
          <div className="social-icons">
            <a href="https://www.instagram.com/hugochen._?igsh=MTMxaG1hanpxNnVmbA== ">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/hugoingg">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hugo-chen-4bb104297/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://mailto:l.hugochen@gmail.com">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <a href="/hugochen/">Home</a>
              </li>
              <li>
                <a href="/hugochen/projects">Projects</a>
              </li>
              <li>
                <a href="/hugochen/background">Experiences</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerEndLine">
        <p>
          Copyright &copy;2024; Made by{" "}
          <span className="designer">Hugo Chen</span>
        </p>
      </div>
    </footer>
  );
}

export default PageFooter;
