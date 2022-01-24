import React from 'react';
import styles from './work.module.css'

export const Work = () => {
    return (
        <div className={styles.work}>
            <div className={styles.workVn}>
                картинка
                <div >
                    <button className={styles.button}>Watch</button>
                </div>

            </div>
            <div className={styles.opisan}>
                <span>Название</span>
                <span>Описание</span>
            </div>
        </div>
    );
};

