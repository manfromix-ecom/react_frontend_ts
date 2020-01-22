import React from 'react';
import LogoGeLightSrc from '../../../img/logo-ge-light.svg';
import style from './LogoGeLight.module.scss';

export const LogoGeLight = () => {
    return (
        <div className={style['logo-wrapper']}>
            <img src={LogoGeLightSrc} alt="GlobalEdit Logo" className={style['logo']} />
        </div>
    )
};
