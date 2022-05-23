import Head from "next/head";
import Image from "next/image";
import react from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../public/a.png";

const Cards = (props) => {
  return (
    <div className={styles.projectCards}>
      <div className={styles.cardBody}>
        <Image
          src={props.Image}
          className={styles.cardImage}
          objectFit="cover"
        />
        <h2 className={styles.cardTitle} color="black">
          {props.title}
        </h2>
        <p className={styles.cardDesc}>{props.desc}</p>
        <a href={"/projects/" + props.Id} className={styles.cardButton}>
          View Demo{" "}
        </a>
      </div>
    </div>
  );
};

export default Cards;
