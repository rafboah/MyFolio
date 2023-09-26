import React from 'react';
import InfoCard from './infocard';
import styles from './myservices.module.css';

const services = [
    {
        icon:'fa-solid fa-code',
        title:'Frontend Development',
        info:'I develop the frontend of web applications using HTML, CSS, Bootstrap, JavaScript, and React'
    },
    {
        icon:'fa-solid fa-terminal',
        title:'Backend Development',
        info:'I develop server-side logic and manage databases and APIs with Java, Python, Django, or Flask'
    },
    {
        icon:'fa-solid fa-network-wired',
        title:'API Development',
        info:'I have experience in managing and developing RESTful APIs with either FastAPI or with Flask'
    }
]

const MyServices = () => {

    return(
        <div className={styles.myservices} id='myservices'>
            <div className={styles.heading}>
                <h1>My<span>Services</span></h1>
            </div>
            <div className={styles.service}>
                {services.map(
                    (service,index) => <InfoCard 
                    key={index} item={service} iconClass={styles.icon}
                    titleClass={styles.title} infoClass={styles.info}/>)
                }
            </div>
        </div>
    );
}

export default MyServices;