import React from "react";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div>
      <span className={s.loader}></span>
    </div>
  );
}
