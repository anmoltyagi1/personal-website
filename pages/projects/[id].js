
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import styles from "/styles/Home.module.css";
import Head from "next/head";
import Navbar from "/components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import react from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
// import VideoPlayer from "react-video-js-player";
// import { facevid } from "/public/videos/faceMaskVid.mp4";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  console.log(projectData.title);
  const link = projectData.video;
  const GitHubLink = projectData.github;
  console.log(GitHubLink);
  return (
    <div className="App">
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <hr />

      <div className={styles.projectsContainer}>
        <div className={styles.projectTitle}>
          {" "}
          <h1 color="black"> {projectData.title} </h1>
        </div>

        <div className={styles.video}>
          <ReactPlayer
            className={styles.video}
            url={"https://www.youtube.com/watch?" + link}
          />
        </div>

        <div className={styles.github}>
          <h4>
            <a href={projectData.github}> GitHub Repository </a>
          </h4>
        </div>

        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
        <footer className={styles.footer}>
          <hr />

          <a href="https://github.com/anmoltyagi1">
            <FaGithub size="2em" color="black" />
          </a>

          <a href="https://www.linkedin.com/in/anmoltyagi1/">
            <FaLinkedin size="2em" color="black" />
          </a>
        </footer>
      </div>
    </div>
  );
}
