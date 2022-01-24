import React from 'react';
import style from './Works.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import {Work} from "./work/work";

export const Works = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${stylesContainer.container} ${style.worksContainer}`}>
                <h2>Мои работы</h2>
                <div className={style.works}>
                    <Work/>
                    <Work/>

                </div>
            </div>

        </div>
    );
};

