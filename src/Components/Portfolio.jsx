/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/java_unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Maternal Health App",
    description:
      "Collaboration to improve maternal care and reduce preventable maternal deaths in which women can get information regarding antenatal/Prenatal care or at the time of pregnancy.",
    url: "https://github.com/Mwakai/Health-Team9",
  },
  {
    title: "Ticketing System",
    description:
      "Created a customer care system with tickets and live support",
    url: "https://github.com/Mwakai/customercare",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Github Codespace workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/Mwakai/mwakaiPortfolio",
  },
  {
    title: "Gym Management System",
    description:
      "Created a gym management system with a dashboard for the admin and a website for the clients.",
    url: "https://github.com/Mwakai/gym-management",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
