import React from 'react';
import front from "../assets/front.png"
import back from "../assets/back.png"

const HeaderImg = () => {


    return (
        <div style={{backgroundImage: `url(${back})`, backgroundSize: "100%", backgroundPositionY: "center",}}>
            <img src={front} alt="" style={{width: "100%", maxWidth: "500px"}} />
        </div>
    );
};

export default HeaderImg;