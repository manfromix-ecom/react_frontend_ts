import React, {useState} from 'react';
import modalStyle from '../../common/Modals/Modal.module.scss';
import {ResetFormContainer} from "../../../containers/ResetFormContainer";
import {useModal} from "../../common/Modals/useModal";
import {Modal} from "../../common/Modals/Modal";
import classNames from "classnames";

export const ResetModule: React.FunctionComponent = () => {
    const [isEmailSent, setModalView] = useState(false);

    const setEmailSentView = () => {
        setModalView(true);
    };

    const {isModalShown, toggleModal} = useModal();
    const openModal = () => {
        toggleModal(true);
        setModalView(false);
    }
    const closeModal = () => toggleModal(false);

    let title: string;
    let text: string;
    let footer: JSX.Element | null;
    let form: JSX.Element | null;
    if (isEmailSent) {
        title = 'Email Sent';
        text = 'Thank you, instructions to reset your password have been e-mailed to the address you provided!';
        footer = null;
        form = null;
    } else {
        title = 'Password Reset';
        text = 'Please enter the email address associated with your globaledit account to reset your password.';
        footer = <>
            <div>
                <button className={modalStyle.button} form="reset_password_form">Submit</button>
            </div>
            <div>
                <button type='button' onClick={closeModal}
                        className={classNames(modalStyle.button,modalStyle.cancel)}>Cancel</button>
            </div>
        </>;
        form = <ResetFormContainer handleEmailSending={setEmailSentView} />;
    }

    return (
        <>
            <button type='button' onClick={openModal} className={modalStyle.button_link}>
                    Forgot password?</button>
            <Modal
                isShowing={isModalShown}
                title={title}
                text={text}
                footer={footer}
                closeModal={closeModal}
            >
                {form}
            </Modal>
        </>
    )
};
