import { useState } from "react";

function Display(props) {

    let displayContent = props.display;

    return (
        <div className="border border-primary">
            {displayContent}
        </div>
    )
}

export default Display;