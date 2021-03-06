import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
}

export default Button;
