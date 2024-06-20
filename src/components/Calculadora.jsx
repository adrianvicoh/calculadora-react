import { useState } from "react";
import Display from "./Display";
import Tecla from "./Tecla.jsx";

let operators = ["+", "-", "/", "X"]

function Calculadora() {

    const [display, setDisplay] = useState("");
    const [valorAnterior, setValorAnterior] = useState(0);
    const [operacion, setOperacion] = useState("");

    let isOperating = false;

    function borrarDisplay() {
        setDisplay("");
    }

    function calcular() {
        let newOperation
        if (operacion === "+") {
            newOperation = valorAnterior + parseFloat(display)
            setDisplay(newOperation)
            setValorAnterior(0)
        } else if (operacion === "-") {
            newOperation = valorAnterior - parseFloat(display)
            setDisplay(newOperation)
            setValorAnterior(0)
        } else if (operacion === "X") {
            newOperation = valorAnterior * parseFloat(display)
            setDisplay(newOperation)
            setValorAnterior(0)
        } else if (operacion === "/") {
            if (parseFloat(display) === 0) {
                setDisplay("ERROR")
                setValorAnterior(0)
            } else {
                newOperation = valorAnterior * parseFloat(display)
                setDisplay(newOperation)
                setValorAnterior(0)
            }
        }
    }

    function pulsar(input) {
        if (!isNaN(parseInt(input)) || input === ",") {
            if(isOperating) {
                borrarDisplay()
                setDisplay(input)
                isOperating = false
            }
            setDisplay(display + input);
        } else if (operators.includes(input)) {
            isOperating = true;
            setValorAnterior(parseFloat(display))
            setOperacion(input);
        } else if (input === "=") {
            calcular();
        } else {
            borrarDisplay();
        }

    }

    return (
        <>
            <div className="container-sm">
                <div className="row">
                    <div className="col-12 border border-primary">
                        <Display display={display} />
                        <div className="row">
                            <div className="col-3"><Tecla valor="AC" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="+/-" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="%" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="/" pulsar={pulsar} /></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Tecla valor="7" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="8" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="9" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="X" pulsar={pulsar} /></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Tecla valor="4" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="5" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="6" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="-" pulsar={pulsar} /></div>
                        </div>
                        <div className="row">
                            <div className="col-3"><Tecla valor="1" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="2" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="3" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="+" pulsar={pulsar} /></div>
                        </div>
                        <div className="row">
                            <div className="col-6"><Tecla valor="0" pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="," pulsar={pulsar} /></div>
                            <div className="col-3"><Tecla valor="=" pulsar={pulsar} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculadora;