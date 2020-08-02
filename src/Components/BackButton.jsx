import React from 'react';
import { useHistory } from 'react-router-dom';
import './BackButton.css';
 
export const BackButton = () => {
    const history = useHistory();
    return <img id='backButton' src='/back.png' alt='Click to go back' onClick={() => history.goBack()} />
}