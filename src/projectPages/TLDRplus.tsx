import photo1 from "../media/tldrplus-pics/tldr1.jpg";
import photo2 from "../media/tldrplus-pics/tldr2.jpg";
import photo3 from "../media/tldrplus-pics/tldr3.jpg";
import photo4 from "../media/tldrplus-pics/tldr4.jpg";

function TldrPlus() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>TLDR+</h1>
        <p>May 2024</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          TLDR+ I started this personal project during my summer break from
          university. I started by wondering what functionality would I want a
          Telegram bot to have. Then it came to my mind how often someone sends
          me an article link, whether it be for a school assignment reference or
          just informative sake. Most of the time, the article itself is not so
          short so that I can read it in less than 5 minutes. Furthermore, to
          find all the informations I need from the article, and the process of
          launching on to a browser when clicking the link. AI may give me the
          information I need, but the process of visiting the an AI chat itself
          is not so little of a hastle. Thus, I wanted to create a Telegram bot
          that can summarize and strain important information from an online
          article, with just the URL. This way, I would not even need to leave
          Telegram to know that the article is about, who wrote the article, or
          even when it was published.
        </p>
        <div className="projects-Pages-content">
          <p>
            I wrote a Python script that takes an article URL as an input and
            returns the summary, author(s) and publish date. This was done using
            the validators and Natural Language Tool Kit (NLTK) libraries, that
            helped me verify that the prompt was a URL and not just a text, and
            with all the summarizing and information straining. I proceeded to
            implement it on a Telegram bot, using the Telegram library.
            Afterwards, I deployed it to Azure Functions, then made a webhook
            with my Azure function URL and the Telegram bot API, and the TLDR+
            bot was finished. You may find him @TLDRplus_bot on Telegram.
            However, since I was only relying on a free subscription account
            given by SUTD, my credit has, as of June 12th 2024, ran out, and
            therefore the TLDR+ bot has been down ever since.
          </p>
        </div>
        <div className="project-Pages-Photos-Container">
          <img src={photo1}></img>
          <img src={photo2}></img>
          <img src={photo3}></img>
          <img src={photo4}></img>
        </div>
      </div>
    </div>
  );
}

export default TldrPlus;
