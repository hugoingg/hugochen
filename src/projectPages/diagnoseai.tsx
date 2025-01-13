import dai1 from "../media/diagnoseai-pics/dai1.png";

function DiagnoseAI() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>DiagnoseAI</h1>
        <i>
          <h5>Streamlit, Tensorflow, Skicit-learn, NumPy</h5>
        </i>
        <p>May 2024 - Present </p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This is a personal project that I did during my summer break in
          university. I started by training 3 classifier AI models using
          Scikit-learn in Python, one to diagnose each disease: diabetes,
          Parkinson's, and breast cancer. The models achieved a high accuracy
          without complex pre-processing as the training data sets were already
          clean and had plenty data points. The training data were sourced from
          the internet. I proceeded to prototype a web application to deploy the
          models online using Streamlit.
        </p>
        <div className="projects-Pages-content">
          <p>
            Possible improvements for this project includes building a more
            sophisticated UI customized using Flask or Django. Another example
            would be to enhance the model's accuracy. I attempted this by
            rebuilding the breast cancer model using deep learning with PyTorch
            and Tensorflow, and succeeded, though the new model has not been
            added to the web app. I am also planning to add a feature to print
            medical report based on the conducted diagnosis. As of now, I am
            putting this project on hold as I have other respoonsibilites in
            university. The repository for this project is available publicly{" "}
            <a href="https://github.com/hugoingg/diagnose-AI.">here,</a> while
            the deployed prototype can be accessed{" "}
            <a href="https://diagnose--ai.streamlit.app/">here.</a>
          </p>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={dai1}></img>
        </div>
      </div>
    </div>
  );
}

export default DiagnoseAI;
