import React from "react";
import styles from "./FormsControls.module.scss";
import {Field} from "redux-form";

interface FormProps {
    input: string[];
    meta: {
        touched: boolean;
        error: string;
    };
    children: JSX.Element;
}

const FormControl = ({ input, meta: { touched, error }, children }: FormProps) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder: string, name: string, validators: any, component: any, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
);