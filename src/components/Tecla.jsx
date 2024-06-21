import Button from 'react-bootstrap/Button';

function Tecla(props) {

    let pulsarTecla = props.pulsar;
    let valor = props.valor;

    return (
        <>
           <Button variant="light border border-dark col-10 m-2" onClick={() => pulsarTecla(valor)}>{valor}</Button>{' '}
        </>
    )
}

export default Tecla;