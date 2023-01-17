import React from "react";
import avatar1 from '../assets/imgs/avatar1.jpg';
import avatar2 from '../assets/imgs/avatar2.jpg';
import avatar3 from '../assets/imgs/avatar3.jpg';

export function Avatar1() {
    return <img src={avatar1} className="avatar" alt="Avatar1"/>;
}

export function Avatar2() {
    return <img src={avatar2} className="avatar" alt="Avatar2"/>;
}

export function Avatar3() {
    return <img src={avatar3} className="avatar" alt="Avatar3"/>;
}