import photo1 from "../media/mm-pics/mm1.jpg";
import photo2 from "../media/mm-pics/mm2.jpg";
import photo3 from "../media/mm-pics/mm3.jpg";
import photo4 from "../media/mm-pics/mm4.jpg";
import video from "../media/mm-pics/mmvideo.mp4";

function Mastermind() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>MASTERMIND</h1>
        <p>November 2024</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This game was a school assignment project that I did with my group.
          The challenge was to make a game using only Python and its standard
          libraries. We have decided to make the game based of the classic
          Mastermind game, something that we have never yet encountered
          digitally.
        </p>
        <div className="projects-Pages-content">
          <p>
            Me and one of my friend were in charge of the logic and pseudocode
            of the game. It is relatively simple. After receiving input, we
            first check for red hints, which mean "right color right place". We
            do this by iterating through the randomly generated answer and the
            received input attempt as arrays, simultaneously. When both our
            iterators stand on the same color, it shows that the color exist on
            both arrays on the same index, which means it deserves a red hint.
            Once this condition is met, we would pop the color from both arrays,
            reducing their sizes. After we check for red hints, we continue to
            do the same for white hints, that mean "right color wrong place".
            This checking is much simpler than the previous one. We iterate only
            through the input answer, and for each one, we compare the number of
            times a color appears on both the input answer and the key answer
            arrays. We then take the smallest number of each comparison as the
            result, and return equal number of white hints to that result. The
            winning condition is met once our program reduces the input array to
            have no element, which means that every element was popped during
            the red hints check, meaning that the input answer have "all the
            right color in the right places" which means it matches the key
            answer. When this is true, the game ends with the player winning. On
            the other hand, once the player had given 8 attempts and did not
            win, they will lose as the maximum number of attempt that we set was
            8.
          </p>
        </div>
        <div className="project-Pages-Photos-Container">
          <video src={video} controls></video>
          <img src={photo1}></img>
          <img src={photo2}></img>
          <img src={photo3}></img>
          <img src={photo4}></img>
        </div>
      </div>
    </div>
  );
}

export default Mastermind;
