import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./navbarStyles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Fade } from "@material-ui/core";
import {
  UploadFileComponent,
  LoginComponent,
  ListFilesComponent,
  LoadFilesComponent,
} from "fairdrive-connect";
export interface Props {
  file: any;
}

function Navbar(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);
  const classes = useStyles({ ...props, ...theme });
  const [password, setPassword] = useState(null);
  const [files, setFiles] = useState(null);
  const [file, setFile] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openFilesList, setOpenFilesList] = useState(false);
  const [openSaveFile, setOpenSaveFile] = useState(false);
  const [uploadRes, setUploadRes] = useState(false);

  const openModal = () => {
    setOpenLogin(true);
  };
  const handleClose = () => {
    setOpenLogin(false);
  };

  const openSaveFileModal = () => {
    setOpenSaveFile(true);
  };
  const handleCloseSaveFileModal = () => {
    setOpenSaveFile(false);
  };

  const openFileListModal = () => {
    setOpenFilesList(true);
  };
  const handleCloseFileListModal = () => {
    setOpenFilesList(false);
  };

  useEffect(() => {
    if (password) {
      handleClose();
    }
    if (files && !openSaveFile && !openLogin) {
      openFileListModal();
    }
    if (uploadRes === true) {
      handleCloseSaveFileModal();
    }
  }, [password, files, file, uploadRes]);
  return (
    <div className={classes.Navbar}>
      <div className={classes.button} onClick={openModal}>
        <div className={classes.buttontext}>Connect with fairdrive</div>
      </div>

      {password && (
        <div className={classes.button} onClick={openSaveFileModal}>
          <div className={classes.buttontext}>Save file</div>
        </div>
      )}
      {password && (
        <LoadFilesComponent
          password={password}
          setFiles={setFiles}
        ></LoadFilesComponent>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openLogin}
        className={classes.modal}
        onClose={handleClose}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLogin}>
          <LoginComponent
            setUserPassword={setPassword}
            podName={"Fairdrive"}
          ></LoginComponent>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openFilesList}
        className={classes.modal}
        onClose={handleCloseFileListModal}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openFilesList}>
          <ListFilesComponent
            password={password}
            files={files}
            setFile={setFile}
          ></ListFilesComponent>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSaveFile}
        className={classes.modal}
        onClose={handleCloseSaveFileModal}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSaveFile}>
          <UploadFileComponent
            file={props.file}
            setUploadRes={setUploadRes}
          ></UploadFileComponent>
        </Fade>
      </Modal>
    </div>
  );
}

export default React.memo(Navbar);
