import { useState } from "react";
import './Display.css'

function Display(props) {

    let displayContent = props.display;

    return (
        <div className="displayGeneral border border-primary">
            {displayContent}
        </div>
    )
}

export default Display;