import { useState } from "react";
import Display from "./Display";
import Tecla from "./Tecla.jsx";
import './Calculadora.css'

let operators = ["+", "-", "/", "X"]

function Calculadora() {

    const [display, setDisplay] = useState("");
    const [valorAnterior, setValorAnterior] = useState(0);
    const [operacion, setOperacion] = useState("");
    const [isOperating, setIsOperating] = useState(false);

    function borrarDisplay() {
        setDisplay("")
    }

    function calcular() {
        let newOperation = 0;   
        if (operacion === "+") {
            newOperation = valorAnterior + parseFloat(display)
            setDisplay(newOperation)
            setValorAnterior(newOperation)
        } else if (operacion === "-") {
            newOperation = valorAnterior - parseFloat(display)
            setDisplay(newOperation)
            setValorAnterior(newOperation)
        } else if (operacion === "X") {
            newOperation = valorAnterior * parseFloat(display)
            setDisplay(newOperation)
            setValorAnterior(newOperation)
        } else if (operacion === "/") {
            if (parseFloat(display) === 0) {
                setDisplay("ERROR")
            } else {
                newOperation = valorAnterior / parseFloat(display)
                setDisplay(newOperation)
                setValorAnterior(newOperation)
            }
        }
        setOperacion("");
    }

    function pulsar(input) {
        if (!isNaN(parseInt(input)) || input === ",") {
            if (isOperating) {
                borrarDisplay();
                setIsOperating(false);
            }
            setDisplay(display + input);
        } else if (operators.includes(input)) {
            setIsOperating(true)
            setValorAnterior(parseFloat(display))
            borrarDisplay();
            setOperacion(input);
        } else if (input === "=") {
            calcular();
            setOperacion(input)
        } else {
            borrarDisplay();
        }
    }

    return (
        <>
            <div className="calcGeneral">
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