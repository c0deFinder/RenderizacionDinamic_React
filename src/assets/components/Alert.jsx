export default function Alert({ tipo, mensaje }) {
    return (
        <div className={`alert alert-${tipo}`} >
            {mensaje}
        </div>
    )
}