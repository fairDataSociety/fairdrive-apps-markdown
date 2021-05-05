import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./navbar";

const useStyles = makeStyles(() =>
  createStyles({
    Navbar: {
      width: "100%",
      display: "flex",
      left: 0,
      top: 0,
      background:"#CED0DD",
      border: "1px solid #16181D",
    },
    modal:{
      marginTop:"100px",
      marginLeft:"calc(50% - 27.5rem)"
    },
    button: {
      // from bodyBold in Fairdrive:
      fontFamily: 'Work Sans',
      fontWeight: 'bold',
      fontSize: '13px',
      letterSpacing: '0',
      textAlign: 'center',
      boxSizing: 'border-box',
      padding: "20px 42px",
      borderRadius: "4px",
      cursor: 'pointer',
      border: "1px solid #16181D",
      background:"#88898E",
      "&:hover": {
        color: "#EEF0FF"
      },
    },
    // TODO How to do psuedo elements here
    // .button:active{
    //   backgroundColor: "#efd96f",
    // },
    buttontext: {
      // from bodyBold in Fairdrive:
      // fontFamily: 'Work Sans',
      fontWeight: 'bold',
      fontSize: '16px',
      letterSpacing: '0',
      lineHeight: '19px',
      // custom
      fontFamily: 'IBM Plex Mono',
      cursor: 'pointer',
      textTransform: 'capitalize',
      color: '#16181D',
    },
  })
);

export default useStyles;
