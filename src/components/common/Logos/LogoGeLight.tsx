import React from 'react';
import LogoGeLightSrc from "../../../img/logo-ge-light.svg";
import style from "./LogoGeLight.module.css";

const Logo = () => {
    return (
        <div>
            <img src={LogoGeLightSrc} alt="" className={style["logo-GE-light"]} />
        </div>
    )
}

export default Logo;