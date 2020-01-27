import React, { useState } from "react";
import style from "./Modal.module.scss";
import ReactDOM from "react-dom";

interface ModalProps {
    isShowing: boolean;
    title: string;
    text: string;
    footer: JSX.Element | null;
    closeModal: any;
    children: JSX.Element | null;
}

export const useModal = (isInitialShown = false) => {
  const [isModalShown, setModalView] = useState(isInitialShown);

  function toggleModal(open=!isModalShown) {
    setModalView(open);
  }
  return {
    isModalShown,
    toggleModal
  }
};

export const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
    let {isShowing,title,text,footer,closeModal,children} = props;

    return isShowing ? ReactDOM.createPortal(
        <div className={style.wrapper}>
            <div className={style.header}>
                <span className={style.header_text}>{title}</span>
                <button onClick={closeModal} className={style.close_modal}><span>&times;</span></button>
            </div>
            <div className={style.body}>
                <p>{text}</p>
                {children}
            </div>
            {footer &&
            <div className={style.footer}>
                {footer}
            </div>
            }
        </div>
        , document.body
    ) : null;
};
