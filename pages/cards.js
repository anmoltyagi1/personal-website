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
          width={100}
          height={100}
          className={styles.cardImage}
          objectFit="cover"
        />
        <h2 className={styles.cardTitle} color="black">
          {props.title}
        </h2>
        <p className={styles.cardDesc}>{props.desc}</p>
        <button className={styles.cardButton}>View Demo</button>
      </div>
    </div>
  );
};

export default Cards;
