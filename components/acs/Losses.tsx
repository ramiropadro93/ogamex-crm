interface LossesProps {
  nombresJugadores: string[];
  shipsCosts: any[];
  cantidad: { [key: string]: number[] };
  setCantidad: React.Dispatch<
    React.SetStateAction<{ [key: string]: number[] }>
  >;
}

const Losses = ({
  nombresJugadores,
  shipsCosts,
  cantidad,
  setCantidad,
}: LossesProps) => {
	
  const handleCantidadChange = (ship: string, index: number, value: string) => {
    const nuevasCantidades = { ...cantidad };
    const numericValue = parseInt(value.replace(/,/g, ''), 10) || 0;
    nuevasCantidades[ship][index] = numericValue;
    setCantidad(nuevasCantidades);
  };

  const calcularCosto = (ship: any, index: number) => {
    return {
      metal: ship.metal * cantidad[ship.tipo][index],
      cristal: ship.cristal * cantidad[ship.tipo][index],
      deuterio: ship.deuterio * cantidad[ship.tipo][index],
    };
  };

  const calcularTotales = (index: number) => {
    return shipsCosts.reduce(
      (acc, ship) => {
        acc.metal += ship.metal * cantidad[ship.tipo][index];
        acc.cristal += ship.cristal * cantidad[ship.tipo][index];
        acc.deuterio += ship.deuterio * cantidad[ship.tipo][index];
        return acc;
      },
      { metal: 0, cristal: 0, deuterio: 0 }
    );
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 uppercase mt-10">Pérdidas</h2>
      <div>
        {nombresJugadores.map((nombre, index) => (
          <div key={index} className="mb-16">
            <hr className="border-2 border-black mb-10" />
            <h3 className="text-lg font-bold mb-2">Pérdidas de {nombre}</h3>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2 w-1/6">Tipo</th>
                    <th className="border border-gray-300 p-2 w-1/6">
                      Cantidad
                    </th>
                    <th className="border border-gray-300 p-2 w-1/6">Metal</th>
                    <th className="border border-gray-300 p-2 w-1/6">
                      Cristal
                    </th>
                    <th className="border border-gray-300 p-2 w-1/6">
                      Deuterio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shipsCosts.map((ship) => (
                    <tr key={ship.tipo}>
                      <td className="border border-gray-300 p-2">
                        {ship.tipo}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="number"
                          min={0}
                          value={cantidad[ship.tipo][index]}
                          onChange={(e) =>
                            handleCantidadChange(
                              ship.tipo,
                              index,
                              e.target.value
                            )
                          }
                          className="border p-2 rounded w-full"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calcularCosto(ship, index).metal.toLocaleString()}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calcularCosto(ship, index).cristal.toLocaleString()}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {calcularCosto(ship, index).deuterio.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="border border-gray-300 p-2 font-bold">
                      Total {nombre}
                    </td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2">
                      {calcularTotales(index).metal.toLocaleString()}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {calcularTotales(index).cristal.toLocaleString()}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {calcularTotales(index).deuterio.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Losses;
