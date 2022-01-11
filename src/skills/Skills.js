import React from 'react';
import style from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/skill";

export const Skills = () => {
    return (
        <div className={style.skillBlock}>
            <div className={`${stylesContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'fedmfkdmfdklfmdlsgd dkmgklmfgskld mfeslfkmds'}/>
                    <Skill title={'React'} description={'fedmfkdmfdklfmdlsgd dkmgklmfgskld mfeslfkmds'}/>
                    <Skill title={'CSS'} description={'fedmfkdmfdklfmdlsgd dkmgklmfgskld mfeslfkmds'}/>
                </div>
            </div>

        </div>
    );
};

