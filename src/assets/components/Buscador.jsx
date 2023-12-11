export default function Buscador ({handleBuscador}) {
    return (
        <div>
            <input className="buscador" type="text" placeholder="Buscar" onChange={handleBuscador} />
        </div>
    )
} 