import { useState } from "react";
import Display from "./Display";
import Tecla from "./Tecla.jsx";

function Calculadora() {

    const [display, setDisplay] = useState("prueba");
    const [valorAnterior, setValorAnterior] = useState(0);
    const [operacion, setOperacion] = useState("");

    function borrarDisplay() {

    }

    function pulsar(input) {
        if(!isNaN(parseInt(input)) || input === ",") {

        }
        setDisplay(display + input)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 border border-primary">
                        <Display display={display}/>
                        <div className="row">
                            <div className="col-3"><Tecla valor="AC" pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="+/-"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="%"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="/"  pulsar={pulsar}/></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Tecla valor="7"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="8"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="9"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="X"  pulsar={pulsar}/></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Tecla valor="4"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="5"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="6"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="-"  pulsar={pulsar}/></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Tecla valor="1"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="2"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="3"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="+"  pulsar={pulsar}/></div>
                        </div>
                        <div className="row">
                            <div className="col-6"><Tecla valor="0"  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor=","  pulsar={pulsar}/></div>
                            <div className="col-3"><Tecla valor="="  pulsar={pulsar}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculadora;