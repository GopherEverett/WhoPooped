import React from 'react';
import { Button } from 'react-bootstrap';



const PoopButton = (props) => {
    return (
        <div className="buttonCon">
            <Button
                variant="info"
                className="poopbutton"
                onClick={() => {
                    props.handlePoop(props.dog._id, props.idx, props.dog)
                }}>
                <span
                    className="poopEmoji"
                    role="img"
                    aria-label="poop"
                >💩</span>
            </Button>
        </div>
    );
}

export default PoopButton;