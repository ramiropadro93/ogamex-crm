interface FinalProfitProps {
  nombresJugadores: string[];
  recursosRobados: { [key: string]: number[] };
  escombrosReciclados: { [key: string]: number[] };
  cantidad: { [key: string]: number[] };
  shipsCosts: any[];
}

const FinalProfit = ({
  nombresJugadores,
  recursosRobados,
  escombrosReciclados,
  cantidad,
  shipsCosts,
}: FinalProfitProps) => {
  const calcularCostoNave = (tipo: string, cantidad: number) => {
    const nave = shipsCosts.find((ship) => ship.tipo === tipo);
    return nave
      ? {
          metal: nave.metal * cantidad,
          cristal: nave.cristal * cantidad,
          deuterio: nave.deuterio * cantidad,
        }
      : { metal: 0, cristal: 0, deuterio: 0 };
  };

  const calcularRenta = (index: number) => {
    const metalRobado =
      (recursosRobados.metal[index] || 0) +
      (escombrosReciclados.metal[index] || 0);
    const cristalRobado =
      (recursosRobados.cristal[index] || 0) +
      (escombrosReciclados.cristal[index] || 0);
    const deuterioRobado = recursosRobados.deuterio[index] || 0;

    const perdidas = Object.keys(cantidad).reduce(
      (total, tipo) => {
        const cantidadNaves = cantidad[tipo][index] || 0;
        const costoNave = calcularCostoNave(tipo, cantidadNaves);
        total.metal += costoNave.metal;
        total.cristal += costoNave.cristal;
        total.deuterio += costoNave.deuterio;
        return total;
      },
      { metal: 0, cristal: 0, deuterio: 0 }
    );

    const metalTotal = metalRobado - perdidas.metal;
    const cristalTotal = cristalRobado - perdidas.cristal;
    const deuterioTotal = deuterioRobado - perdidas.deuterio;
    return {
      metal: metalTotal,
      cristal: cristalTotal,
      deuterio: deuterioTotal,
    };
  };

  const calcularRentaNetaPromedio = () => {
    const totales = nombresJugadores.reduce(
      (acc, _, index) => {
        const renta = calcularRenta(index);
        acc.metal += renta.metal;
        acc.cristal += renta.cristal;
        acc.deuterio += renta.deuterio;
        return acc;
      },
      { metal: 0, cristal: 0, deuterio: 0 }
    );

    const cantidadJugadores = nombresJugadores.length;

    return {
      metal: cantidadJugadores > 0 ? totales.metal / cantidadJugadores : 0,
      cristal: cantidadJugadores > 0 ? totales.cristal / cantidadJugadores : 0,
      deuterio:
        cantidadJugadores > 0 ? totales.deuterio / cantidadJugadores : 0,
    };
  };

  const rentaNetaPromedio = calcularRentaNetaPromedio();

  return (
    <>
      <h2 className="text-xl font-bold mb-4 uppercase mt-10">
        Renta Neta Promedio
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 w-1/3">
                Metal Promedio
              </th>
              <th className="border border-gray-300 p-2 w-1/3">
                Cristal Promedio
              </th>
              <th className="border border-gray-300 p-2 w-1/3">
                Deuterio Promedio
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                {rentaNetaPromedio.metal.toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2">
                {rentaNetaPromedio.cristal.toLocaleString()}
              </td>
              <td className="border border-gray-300 p-2">
                {rentaNetaPromedio.deuterio.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FinalProfit;
