import React from 'react';
import LogoGeLightSrc from "../../../img/logo-ge-light.svg";
import style from "./LogoGeLight.module.css";

export const LogoGeLight = () => {
    return (
        <div>
            <img src={LogoGeLightSrc} alt="" className={style["logo-GE-light"]} />
        </div>
    )
};
