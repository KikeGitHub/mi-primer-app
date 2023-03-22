import React from "react";

export default function AdiosMundo(props){
    console.log(props);
    return (
        <>
            <h1>Adios Mundo</h1>
            <h2>Nombre = {props.userInfo.name} {props.userInfo.apellido} y tengo {props.userInfo.edad} años</h2>
            <button onClick={()=> props.saludarFn(props.userInfo.name)}>Clic</button>
        </>
    );
}