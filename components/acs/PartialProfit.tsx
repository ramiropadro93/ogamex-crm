interface ProfitProps {
	nombresJugadores: string[];
	recursosRobados: { [key: string]: number[] };
	escombrosReciclados: { [key: string]: number[] };
	cantidad: { [key: string]: number[] };
	shipsCosts: any[];
  }
  
  const PartialProfit = ({
	nombresJugadores,
	recursosRobados,
	escombrosReciclados,
	cantidad,
	shipsCosts
  }: ProfitProps) => {
	const calcularCostoNave = (tipo: string, cantidad: number) => {
	  const nave = shipsCosts.find(ship => ship.tipo === tipo);
	  return nave ? {
		metal: nave.metal * cantidad,
		cristal: nave.cristal * cantidad,
		deuterio: nave.deuterio * cantidad
	  } : { metal: 0, cristal: 0, deuterio: 0 };
	};
  
	const calcularRenta = (index: number) => {
	  const metalObtenido = (recursosRobados.metal[index] || 0) + (escombrosReciclados.metal[index] || 0);
	  const cristalObtenido = (recursosRobados.cristal[index] || 0) + (escombrosReciclados.cristal[index] || 0);
	  const deuterioObtenido = (recursosRobados.deuterio[index] || 0);
  
	  // Calcular el total de las pérdidas en metal, cristal y deuterio
	  const perdidas = Object.keys(cantidad).reduce((total, tipo) => {
		const cantidadNaves = cantidad[tipo][index] || 0;
		const costoNave = calcularCostoNave(tipo, cantidadNaves);
		total.metal += costoNave.metal;
		total.cristal += costoNave.cristal;
		total.deuterio += costoNave.deuterio;
		return total;
	  }, { metal: 0, cristal: 0, deuterio: 0 });
  
	  const metalTotal = metalObtenido - perdidas.metal;
	  const cristalTotal = cristalObtenido - perdidas.cristal;
	  const deuterioTotal = deuterioObtenido - perdidas.deuterio;
	  
	  return {
		metal: metalTotal,
		cristal: cristalTotal,
		deuterio: deuterioTotal
	  };
	};
  
	return (
	  <>
		<h2 className="text-xl font-bold mb-4 uppercase mt-10">Renta</h2>
		<div className="overflow-x-auto">
		  <table className="table-auto w-full border-collapse border border-gray-300">
			<thead>
			  <tr>
				<th className="border border-gray-300 p-2 w-1/4">Jugador</th>
				<th className="border border-gray-300 p-2 w-1/4">Metal</th>
				<th className="border border-gray-300 p-2 w-1/4">Cristal</th>
				<th className="border border-gray-300 p-2 w-1/4">Deuterio</th>
			  </tr>
			</thead>
			<tbody>
			  {nombresJugadores.map((nombre, index) => {
				const renta = calcularRenta(index);
				return (
				  <tr key={index}>
					<td className="border border-gray-300 p-2">{nombre}</td>
					<td className="border border-gray-300 p-2">
					  {renta.metal.toLocaleString()}
					</td>
					<td className="border border-gray-300 p-2">
					  {renta.cristal.toLocaleString()}
					</td>
					<td className="border border-gray-300 p-2">
					  {renta.deuterio.toLocaleString()}
					</td>
				  </tr>
				);
			  })}
			</tbody>
		  </table>
		</div>
	  </>
	);
  };
  
  export default PartialProfit;
  