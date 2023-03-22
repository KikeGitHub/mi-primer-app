import React from "react";

export default function AdiosMundo(props){
    console.log(props);
    return (
        <>
            <h1>Adios Mundo</h1>
            <h2>Nombre = {props.name} {props.apellido} y tengo {props.edad} años</h2>
        </>
    );
}