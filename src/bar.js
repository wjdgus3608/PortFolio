import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import React, { Component } from 'react';

function bar({num}) {
    return (<Progress percent={num}/>)
}

export default bar