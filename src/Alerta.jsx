// Um componente pode receber "props" (dados enviados pelo componente pai)
function Alerta(props) {
    // Aqui usamos props.texto, enviada pelo componente App
    return (
        <div className={`text-center ${props.NOVA
            }`} role="alert">
            {props.mytexto}
        </div>
    );
}

export default Alerta