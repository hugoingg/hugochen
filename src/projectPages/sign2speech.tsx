import s2s1 from "../media/sliders/sliders2.png";

function Sign2Speech() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>Sign to Text</h1>
        <i>
          <h5>OpenCV, MediaPipe, Tensorflow, NumPy</h5>
        </i>
        <p>June - July 2024</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This was one of the personal projects I did during my university
          summer break. My aim in this project was to build an AI model that can
          convert sign language to speech using computer vision. However, up to
          this point, I only made the software convert from sign language to
          text. I used MediaPipe and OpenCV to track movements caught on camera,
          and store them as pictures for training the converter AI model. I then
          proceeded to train the Long Short Term Memory (LSTM) model using the
          collected data, using Tensorflow. The model was trained to understand
          3 phrases: "hello", "i love you", and "thank you".
        </p>
        <div className="projects-Pages-content">
          <p>
            As the final layer of the LSTM has a Softmax activation function,
            the classifier works by computing 3 probability values and finding
            the maximum one to be the output classification. I then programmed
            these 3 values to be visualized on the OpenCV screen, using NumPy
            and pyplot form matplotlib (the color bars behind each phrase
            represents the likelihood of that phrase being signed). In the
            future, I plan to incorporate a reader that can convert the text
            generated into speech. I also plan to add more grammar for the AI to
            process.
          </p>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={s2s1}></img>
        </div>
      </div>
    </div>
  );
}

export default Sign2Speech;
