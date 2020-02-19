import React, {  } from 'react';
import Axios from 'axios';

const PoopButton = (props) => {

    const handlePoop = () => {
        const date = Date.now()
        Axios.put(`/api/dog/${props.dog._id}`, {
            latestpoop: date
        }).then(res => {
            console.log(res.data)
        })
        
    }
    return (
        <div className="buttonCon">
            <div className="poopbutton" onClick={handlePoop}><span className="poopEmoji" role="img" aria-label="poop">💩</span></div>
        </div>
    );
}

export default PoopButton;