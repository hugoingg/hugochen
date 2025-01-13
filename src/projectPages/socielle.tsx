import s1 from "../media/socielle-pics/s1.png";

function Socielle() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>Socielle</h1>
        <i>
          <h5>React, Typescript</h5>
        </i>
        <p>May - June 2024</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This was my first free-lance project for a growing restaurant startup
          in my hometown called Socielle. As this was my first time working with
          a client, specifically one that is not from technology nor design
          background, I was caught by some surprises. A major one was their
          preference in the website's interface. I also had to work with very
          limited media assets. In the end, I designed it according to their
          preference, and deployed it using Github pages.
        </p>
        <div className="projects-Pages-content">
          <p>
            The website was created using React with a Typescript base language
            and Vite. It has minimal back-end properties and can be found{" "}
            <a href="https://hugoingg.github.io/socielle/">here.</a> The views
            are styled using simple CSS. Improvements to the website includes a
            booking system that is linked to the business's Whatsapp through
            API, as it is the only way to reserve tables on the restaurant.
            Another one is to have the website constantly updated with seasonal
            menu, promotional offers, etc. Unfortunately, there was no one in
            the business that could take up this role, thus the website is
            static and currently outdated.
          </p>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={s1}></img>
        </div>
      </div>
    </div>
  );
}

export default Socielle;
