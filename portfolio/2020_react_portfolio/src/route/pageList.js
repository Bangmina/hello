import React from 'react';
import {  About, Home, Skill, WorkStory } from '../pages';

 const pageList = [
    {
      path: '/about',
      component: <About />
    },
    {
      path: '/skill',
      component: <Skill />
    }, 
    {
      path: '/workstory',
      component: <WorkStory />
    }, 
    {
      path: '/',
      component: <Home />
    }, 
  ];

  export default pageList;