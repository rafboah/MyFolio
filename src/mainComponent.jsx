import React from 'react';
import NavBar from './sub_components/navbar';
import Herosection from './sub_components/herosection';
import MySkills from './sub_components/myskills';
import MyServices from './sub_components/myservices';
import MyProjects from './sub_components/myprojects';
import MyContact from './sub_components/mycontact';

const MainComponent = () => {
    return(
        <>
        <NavBar/>
        <Herosection/>
        <MySkills/>
        <MyServices/>
        <MyProjects/>
        <MyContact/>
        </>
    );
}

export default MainComponent;