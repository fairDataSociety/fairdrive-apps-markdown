import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../store/store";
import { ThemeContext } from "../store/themeContext/themeContext";

import Main from "./main/main";
import useStyles from "./main/mainStyles";
import Navbar from "./navbar/navbar";
export interface Props {}
export default function MainWrapper(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  useEffect(() => {
    const file = new Blob([data], { type: "text/plain;charset=utf-8" });
    setFile(file);
  }, [data, setData]);
  useEffect(() => {
    setData(fileContent);
  }, [fileContent, setFileContent]);
  return (
    <div className="Main">
      <Navbar file={file} setFileContent={setFileContent}></Navbar>
      <Main setData={setData} data={data} />
    </div>
  );
}
