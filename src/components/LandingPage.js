import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';

import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({

}))

export default function LandingPage() {
  const classes = useStyles();

  const defaultOpations = {
    loop : true , 
    autoplay : true ,  
    animationData : animationData, 
    rendererSettings : { 
      preserveAspectRatio : 'xMidYMid slice' 
    } 
  };

  return <Lottie options={defaultOpations} height={"100%"} width={"100%"} />
}