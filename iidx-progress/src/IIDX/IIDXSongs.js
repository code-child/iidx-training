import React from 'react';

const songs = (props) => {
    return (
    <>
    <p onClick={props.click}>Song name: {props.name} by {props.author} </p>
    <p>{props.children}</p>
    </>
    )
};

export default songs;

// export default function IIDXSongs() {
//     return (
//         <>
//             <h5>IIDX Training</h5>
//         </>
//     )
// }