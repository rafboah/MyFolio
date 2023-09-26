import React from "react";
import InfoCard from "./infocard";
import styles from './myskills.module.css';

const skills = [
    {
        icon:'fa-brands fa-html5',
        title:'HTML5'
    },
    {
        icon:'fa-brands fa-css3-alt',
        title:'CSS'
    },
    {
        icon:'fa-brands fa-bootstrap',
        title:'Boostrap'
    },
    {
        icon:'fa-brands fa-square-js',
        title:'JavaScript'
    },
    {
        icon:'fa-brands fa-react',
        title:'React'
    },
    {
        icon:'fa-brands fa-java',
        title:'Java'
    },
    {
        icon:'fa-brands fa-python',
        title:'Python'
    },
    {
        icon:'fa-brands fa-github',
        title:'Git/Github'
    }
]

const MySkills = () => {

    return(
        <div className={styles.myskills} id="myskills">
            <div className={styles.heading}>
                <h1>My<span>Skills</span></h1>
            </div>
            <div className={styles.skills}>
                {skills.map(
                    (skill,index) => <InfoCard key={index} item={skill} 
                    iconClass={styles.icon} titleClass={styles.title} infoClass={styles.info}/>)
                }
            </div>
        </div>
    );
}

export default MySkills;