import React from "react";
import styles from './mycontact.module.css';

const social_icons = [
    {
        name:'fa-brands fa-linkedin',
        link:'https://www.linkedin.com/in/raphael-boakye-45a359202/'
    },
    {
        name:'fa-brands fa-facebook',
        link:'https://www.facebook.com/Ralph.khartel'
    },
    {
        name:'fa-brands fa-instagram',
        link:'https://www.instagram.com/_raphyee/'
    },
    {
        name:'fa-brands fa-github',
        link:'https://github.com/rafboah'
    },
    {
        name:'fa-solid fa-envelope',
        link:'mailto:rafboah@gmail.com' 
    }   
]

const Socials = ({icons}) => {

    return(
        <a href={icons.link} target="_blank" rel="noopener noreferrer">
            <i class={icons.name}></i>
        </a>
    );
}

const MyContact = () => {

    return(
        <div className={styles.mycontact} id="mycontact">
            <div className={styles.heading}>
                <h1>My<span>Contact</span></h1>
            </div>
            <div className={styles.contact}>
                <p className={styles.address}>
                    <span>Address: </span> 640 Dr Mary McLeod Bethune Blvd, Daytona Beach, Florida, United States
                </p>
                <p className={styles.email}>
                <span>Email: </span><a href="mailto:rafboah@gmail.com" rel="noopener noreferrer">rafboah@gmail.com</a> | <a href="mailto:raphael.boakye@students.cookman.edu" rel="noopener noreferrer">raphael.boakye@students.cookman.edu</a>
                </p>
                <p className={styles.phone}>
                    <span>Phone: </span> (386) 310-9162
                </p>
            </div>
            <div className={styles.social_media}>
                {
                    social_icons.map(
                        (icon,index) => <Socials key={index} icons={icon}/>
                    )
                }
            </div>
            <div className={styles.copyright}>
                <p>MyFolio &#169; 2023. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default MyContact;