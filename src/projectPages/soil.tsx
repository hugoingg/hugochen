import video1 from "../media/soil-pics/soil1.mp4";

function Soil() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>Soil :)</h1>
        <p>October - December 2024</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This was a Design Thinking Project, an assignment by SUTD. I did this
          project in a group of 4 people. We aim to create a linear regression
          AI model to predict the amount of Carbon emission produced due rice
          cultivation in Thailand. We started by collecting data from the
          internet that can be our features and targets to train the model.
          Afterwards, we cleaned the data of unnecessary columns, and checked
          the linearity of each features against the target. We initially used 4
          features: rice yield in a year, Nitrogen, Phosphorus and Potassium
          fertilizers used, and 1 target: the amount of Carbon emission due rice
          cultivation. After mutliple model testings, we found that the optimal
          model does not need to use Phosphorus fertilizer as its feature, and
          that it is more fitting touse the log of base 10 values of the other
          two fertilizers.
        </p>
        <div className="projects-Pages-content">
          <p>
            We proceeded to optimize the performance of our model using
            hyperparameter tuning and data pre-processing with Scikit-learn.
            After the model is finished, I built a simple web application to
            implement the model using Flask, and deployed it on Vocareum.
          </p>
        </div>
        <div className="project-Pages-Photos-Container">
          <video src={video1} controls></video>
        </div>
      </div>
    </div>
  );
}

export default Soil;
