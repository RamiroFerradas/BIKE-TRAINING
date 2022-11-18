import React from "react";
import NavBar from "../NavBar/NavBar";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <NavBar />
      <div className={s.body}>
        <span className={s.loader}></span>
      </div>
    </>
  );
}
