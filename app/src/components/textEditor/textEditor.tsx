import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./textEditorStyles";
import MDEditor from "@uiw/react-md-editor";

export interface Props {
  setData: any;
}

function TextEditor(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const [value, setValue] = React.useState("**Hello world!!!**");
  const classes = useStyles({ ...props, ...theme });

  useEffect(() => {
    props.setData(value);
  }, [setValue, value]);
  return (
    <div className={classes.container}>
      <MDEditor className={classes.editor} value={value} onChange={setValue} />
    </div>
  );
}

export default React.memo(TextEditor);
