import React from "react";
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

export const Modal = (props: ModalProps) => {
    let {isShowing,title,text,footer,closeModal,children} = props;

    return isShowing ? ReactDOM.createPortal(
        <div className={style.wrapper}>
            <div className={style.header}>
                <span className={style.header_text}>{title}</span>
                <button onClick={closeModal} className={style.close_modal}><span>&times;</span></button>
                {/*<Link to="/login" className={style.close_modal}><span>&times;</span></Link>*/}
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
