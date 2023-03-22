import  React from "react";

export default function HolaMundo(props){
    return(
        <div>
            <h2>Hola Mundo <h1>{props.userInfo.desc}</h1></h2>
        </div>
    );
}