import React from "react";
import styles from './myprojects.module.css';
import InfoCard from "./infocard";

const projects = [
    {
        title: 'Organica',
        info: 'Frontend template for an ecommerce website that can be cloned to fit your own need',
        link: <a href="https://github.com/rafboah/Organic-Food-Ecommerce-Website" target="_blank" rel="noopener noreferrer">See more&#9205;</a>
    },
    {
        title: 'Synthesia Connection',
        info: 'Facilitates seamless integration with the Synthesia API, empowering users to create virtual human videos',
        link: <a href="https://github.com/rafboah/Synthesia_Connection" target="_blank" rel="noopener noreferrer">See more&#9205;</a>
    },
    {
        title: 'SmartCal',
        info: 'GUI calculator capable of performing basic arithmetic, calculating GPA and converting between several units',
        link: <a href="https://github.com/rafboah/SmartCal" target="_blank" rel="noopener noreferrer">See more&#9205;</a>
    }
]

const MyProjects = () => {

    return (
        <div className={styles.myprojects} id="myprojects">
            <div className={styles.heading}>
                <h1>My<span>Projects</span></h1>
            </div>
            <div className={styles.project}>
                {
                    projects.map((project, index) => <InfoCard
                        key={index} item={project} iconClass={styles.icon}
                        titleClass={styles.title} infoClass={styles.info}
                        linkClass={styles.link} />)
                }
            </div>
        </div>
    );
}

export default MyProjects;