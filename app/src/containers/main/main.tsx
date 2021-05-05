import React, { useContext, useState } from "react";
import useStyles from "./mainStyles";

import TextEditor from "../../components/textEditor/textEditor";
import { ThemeContext } from "../../store/themeContext/themeContext";

export interface Props {
  data: any;
  setData: any;
}

export default function Main(props: Props) {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([props.data], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <div className={classes.Main}>
      <TextEditor setData={props.setData} />
      <button onClick={downloadTxtFile}>Download</button>
    </div>
  );
}
