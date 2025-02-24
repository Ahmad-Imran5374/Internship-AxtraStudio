
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import Star from './RatingStar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    /* <Star maxRating={5} message={["Terrible","Bad","Okay","Good","Amazing"]} defaulRating={3}/>
    <Star maxRating={5} color='purple' size={80} message={["Terrible","Bad","Okay","Good","Amazing"]}/> */
);
