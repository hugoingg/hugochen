import cai1 from "../media/completerai-pics/cai1.png";

function CompleterAI() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>CompleterAI</h1>
        <p>September 2024 - Present</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This project is a collaboration work between me and my senior. It aims
          to create a browser extension that may help users draft social media
          responses, such as replies in X.com or email exchange in workplaces.
          We used OpenAI API to perform calls on Large Language Models (LLM) to
          generate our auto-completion. As of now, we specifically use GPT
          4o-mini. As for the DOM manipulation to apply the suggestion on to the
          input field, we used Typescript.
        </p>
        <div className="project-Pages-content">
          <p>
            CompleterAI's main feature is that it can read contexts of which the
            user is replying to. For instance, when the user is writing to reply
            a Tweet, the DOM manipulator will extract the Tweet content and
            incorporate it on to the LLM call as part of the prompt. Thus, the
            auto-completion suggestion is relevant to the user's context. To
            accomodate for this feature, we design our DOM manipulator to work
            differently for various use cases.
          </p>
        </div>
        <div className="projects-Pages-content">
          <p>
            This project is still on going and it is not yet deployed. It also
            has many rooms for improvements. One of which is to create more
            rooms for its usage, that is, more websites that it can run on.
          </p>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={cai1}></img>
        </div>
      </div>
    </div>
  );
}

export default CompleterAI;
