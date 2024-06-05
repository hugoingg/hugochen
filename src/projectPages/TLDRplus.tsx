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
          TLDR+ I started this own project during my summer break from
          university. It came to my realization that my SUTD student Microsoft
          account came with a Microsoft Azure subscription credit, and that I
          can use it to deploy a program online. I started to wonder what
          functionality would I want a Telegram bot to have. Then it came to my
          mind how often someone sends me an article link, whether it be for a
          school assignment reference or just informative sake. Most of the
          time, the article itself is not so short so that I can read it in less
          than 5 minutes. Not to mention, to find all the informations I need
          from the article, and the process of launching on to a browser when
          clicking on the link. Modern softwares and AI may give me the
          information I need, but the process of visiting an AI chat or openning
          another software itself is not so little of a hastle. In the end, I
          wanted to create a Telegram bot that can summarize and strain
          important information from an online article, with just the URL. This
          way, I would not even need to leave Telegram to know that the article
          is about, who wrote the article, or even when it was published.
        </p>
        <div className="projects-Pages-content">
          <p>
            I then proceeded to write a Python script that takes an article URL
            as an input and returns the summary, author(s) and publish date.
            This was fairly simple with the help of the validators library, that
            helped me verify that the prompt was a URL and not just a text, and
            the Natural Language Tool Kit (NLTK) library, that helped me to do
            all the summarizing and information straining. Having succeeded with
            the Python script, I then modify it to work on a Telegram bot. I
            added in the Telegram library and wrapped everything on the previous
            script in one function. After the Python-Telegram script is done, I
            deployed it to Azure Functions. This was the most tedious part of
            the process, as I encountered many errors that I have not seen
            before. One of the biggest roadblocks was that the program could not
            be deployed because it could not run when it did not receive an
            input, but at the same time it would not receive an input as it is
            still undeployed. After many considerations, I tried wrapping the
            entire main function under a try syntax, and made multiple error
            handlers using except syntax. This structure tells Azure that the
            script will work without input, but it will keep trying to catch
            one. The deployment finally succeeded with this adjustment. I then
            proceeded to do a webhook with my Azure function URL and the
            Telegram bot API, and the TLDR+ bot was finished.
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
