import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import profilePic from "../profile.png";
import styled from "styled-components";
import Nav from "../components/Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// const StyledProfile = styled(profilePic)`
//   width: 200px;
//   height: 10px;
//   margin: 10px;
// `;

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className={styles.container}>
        <Head>
          <title>Anmol Tyagi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Image
            className={styles.profile}
            src={profilePic}
            width={300}
            height={300}
          />
          {/* <StyledImage src={profilePic} /> */}
          <h1 className={styles.title}>Hi I'm Anmol 👋 </h1>

          <p className={styles.description}>
            I am a{" "}
            <code className={styles.code}>
              {" "}
              student, engineer, and innovator{" "}
            </code>
          </p>

          <div className={styles.grid}>
            <a href="/about" className={styles.card}>
              <h2>About Me </h2>
              <p>Learn more about who I am</p>
            </a>

            <a href="/about" className={styles.card}>
              <h2>Projects </h2>
              <p>Check out some of my work</p>
            </a>

            <a href="/about" className={styles.card}>
              <h2>Blog </h2>
              <p>Read some stuff</p>
            </a>
          </div>
        </main>
      </div>

      <header></header>
      <div className={styles.separator}></div>
      <footer></footer>

      <div className={styles.section2}>
        <h1>
          Get in Touch with Me
          {/* <div className={styles.spancontainer}>
            <span className={styles.one}></span>
            <span className={styles.two}></span>
            <span className={styles.three}></span>
            <span className={styles.four}></span>
          </div> */}
        </h1>
        <div className={styles.container2}>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
        </div>

        <p>
          Let's connect. I'm always ready to work on a project, down to
          Leetcode, or even talk about cool stuff all the time. Email me, or
          even feel free to connect with me on LinkedIn. Lorem ipsum is
          placeholder text commonly used in the graphic, print, and publishing
          industries for previewing layouts and visual mockups
        </p>

        <a href="mailto:a26tyagi@uwaterloo.ca">
          <button className={styles.bn30}>Contact Me</button>
          <button className={styles.bn30}> Resume</button>
        </a>

        <footer className={styles.footer}>
          <hr />

          <a href="https://github.com/anmoltyagi1">
            <FaGithub size="2em" color="black" />
          </a>

          <a href="mailto:a26tyagi@uwaterloo.ca">
            <FaLinkedin size="2em" color="black" />
          </a>
        </footer>
      </div>
    </div>
  );
}
// href="https://www.linkedin.com/in/anmoltyagi1/"
