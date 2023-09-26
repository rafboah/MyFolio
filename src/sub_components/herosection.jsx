import React from 'react';
import styles from './herosection.module.css';

const ScrollToContact = () => {
    window.scrollTo(0,1400);
    
} 

const Herosection = () => {
    return(
        <div className={styles.herosection} id='herosection'>
           <div className={styles.description}>
                <p>Hello, Welcome</p>
                <h2>I'm Raphael Boakye</h2>
                <p>
                Detail-oriented Computer Science major with a strong 
                foundation in programming, data analysis, and software 
                development, complemented by a minor in Biology. 
                I am proficient in multiple programming languages and 
                frameworks.
                </p>
                <button onClick={ScrollToContact}>Contact me</button>
           </div>
           <div className={styles.headshot}>
                <img src="../my_headshot.png" alt="My Profile"/>
            </div> 
        </div>
    );
}

export default Herosection;