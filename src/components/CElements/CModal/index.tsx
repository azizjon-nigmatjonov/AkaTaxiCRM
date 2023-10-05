import { CloseIcon } from "../../IconGenerator/Svg";
import { Card, IconButton, Modal } from "@mui/material";

import cls from "./style.module.scss";
import { FC, ReactNode } from "react";
import AddButton from "../../Buttons/AddButton";
import { t } from "i18next";
import CancelButton from "../../Buttons/Cancel";

interface Props {
  title?: string;
  textSaveBtn?: string;
  textDeleteBtn?: string;
  minWidth?: string;
  minHeight?: string;
  padding?: string;
  children?: ReactNode;
  footerActive?: boolean;
  open: boolean;
  classes?: string;
  closable?: boolean;
  handleSave?: (val?: any) => void;
  handleClose?: (val?: any) => void;
}

const CModal: FC<Props> = ({
  title = '',
  textSaveBtn = "confirm",
  textDeleteBtn = "",
  minWidth = "350px",
  minHeight = "",
  padding = "20px",
  children,
  footerActive = true,
  open = false,
  classes = "",
  handleSave = () => {},
  handleClose = () => {},
  closable = false
}) => {
  return (
    <div id="modal">
      <Modal
        open={open}
        className={cls.modal}
        onClose={() => {if (closable) handleClose()}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={cls.card} style={{ padding }}>
          <div className={classes}>
            <div className={cls.header}>
              <div></div>
              <div className={cls.cardTitle}>{t(title)}</div>
              <div></div>
              <IconButton className={cls.closeButton} onClick={handleClose}>
                <CloseIcon className={cls.closeIcon} />
              </IconButton>
            </div>

            <div className={cls.body} style={{ minHeight, minWidth }}>
              {children}
            </div>

            {footerActive && (
              <div className={cls.footer}>
                {textSaveBtn && (
                  <AddButton text={textSaveBtn} onClick={handleSave} iconLeft={false} />
                )}
                {textDeleteBtn && (
                  <CancelButton text={textDeleteBtn} onClick={handleClose} />
                )}
              </div>
            )}
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default CModal;
