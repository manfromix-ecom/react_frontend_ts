import React from 'react';
import LogoGeLightSrc from '../../../img/logo-ge-light.svg';
import style from './LogoGeLight.module.scss';

export const LogoGeLight: React.FunctionComponent = () => {
    return (
        <div className={style.logo_wrapper}>
            <img src={LogoGeLightSrc} alt="GlobalEdit Logo" className={style.logo} />
        </div>
    )
};
