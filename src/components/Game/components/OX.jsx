import React from "react";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export default function OX() {

    function play() {
        var audio = new Audio('assets/music/correct.mp3');
        audio.play();

        // var audio = new Audio('assets/music/wrong.mp3');
        // audio.play();
    }

    return (
        <div>
            <audio src='assets/music/correct.mp3' autoPlay></audio>
            <SentimentSatisfiedOutlinedIcon color="success" sx={{ fontSize: 100}} />
        </div>
        // <div>
        //     <SentimentDissatisfiedOutlinedIcon color="warning" sx={{ fontSize: 100 }} />
        // </div>
    );
}