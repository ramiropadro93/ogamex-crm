interface PlayerProps {
  numeroJugadores: number;
  handleNumeroJugadoresChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  nombresJugadores: string[];
  setNombresJugadores: React.Dispatch<React.SetStateAction<string[]>>;
}

const PlayerSelect = ({
  numeroJugadores,
  handleNumeroJugadoresChange,
  nombresJugadores,
  setNombresJugadores,
}: PlayerProps) => {
  const handleNombreChange = (index: number, value: string) => {
    const nuevosNombres = [...nombresJugadores];
    nuevosNombres[index] = value;
    setNombresJugadores(nuevosNombres);
  };

  return (
    <>
      <div className="mb-4">
        <label className="block mb-2">Número de jugadores:</label>
        <select
          value={numeroJugadores}
          onChange={handleNumeroJugadoresChange}
          className="border p-2 rounded"
        >
          {Array.from({ length: 4 }, (_, i) => i + 2).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        {nombresJugadores.map((nombre, index) => (
          <div key={index} className="mb-2">
            <label className="block mb-1">
              Nombre del jugador {index + 1}:
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => handleNombreChange(index, e.target.value)}
              className="border p-2 rounded-md w-1/4"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PlayerSelect;
