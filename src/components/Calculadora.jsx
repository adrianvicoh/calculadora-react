import { useState } from "react";
import Display from "./Display";

function Calculadora() {

    const [display, setDisplay] = useState("");
    const [valorAnterior, setValorAnterior] = useState(0);
    const [operacion, setOperacion] = useState("");

    function borrarDisplay() {

    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 border border-primary">
                        <Display />
                        <p>Calculadora</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculadora;