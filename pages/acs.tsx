import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PlayerSelect from '@/components/acs/PlayerSelect';
import Losses from '@/components/acs/Losses';
import Plunder from '@/components/acs/Plunder';
import Debris from '@/components/acs/Debris';
import PartialProfit from '@/components/acs/PartialProfit';
import FinalProfit from '@/components/acs/FinalProfit';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const Acs = () => {
  const [numeroJugadores, setNumeroJugadores] = useState<number>(2);
  const [nombresJugadores, setNombresJugadores] = useState<string[]>(['', '']);
  const [cantidad, setCantidad] = useState<{ [key: string]: number[] }>({});
  const [recursosRobados, setRecursosRobados] = useState<any>({
    metal: Array(numeroJugadores).fill(0),
    cristal: Array(numeroJugadores).fill(0),
    deuterio: Array(numeroJugadores).fill(0),
  });
  const [escombrosReciclados, setEscombrosReciclados] = useState<any>({
    metal: Array(numeroJugadores).fill(0),
    cristal: Array(numeroJugadores).fill(0),
  });

  const [shipsCosts, setShipsCosts] = useState<any[]>([]);
  const [finalProfit, setFinalProfit] = useState<{
    metal: number;
    cristal: number;
    deuterio: number;
  }>({
    metal: 0,
    cristal: 0,
    deuterio: 0,
  });
  const [partialProfit, setPartialProfit] = useState<{
    metal: number;
    cristal: number;
    deuterio: number;
  }>({
    metal: 0,
    cristal: 0,
    deuterio: 0,
  });

  useEffect(() => {
    const loadShipsCosts = async () => {
      const costs = await import('../data/shipsCosts.json');
      setShipsCosts(costs.default);

      // Actualizar el estado cantidad con la nueva estructura
      setCantidad(
        costs.default.reduce((acc: any, ship: any) => {
          acc[ship.tipo] = Array(numeroJugadores).fill(0);
          return acc;
        }, {} as { [key: string]: number[] })
      );
    };
    loadShipsCosts();
  }, [numeroJugadores]);

  const handleNumeroJugadoresChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const num = parseInt(event.target.value, 10);
    setNumeroJugadores(num);
    setNombresJugadores(Array(num).fill(''));

    setCantidad(
      shipsCosts.reduce((acc, ship) => {
        acc[ship.tipo] = Array(num).fill(0);
        return acc;
      }, {} as { [key: string]: number[] })
    );

    setRecursosRobados({
      metal: Array(num).fill(0),
      cristal: Array(num).fill(0),
      deuterio: Array(num).fill(0),
    });

    setEscombrosReciclados({
      metal: Array(num).fill(0),
      cristal: Array(num).fill(0),
    });
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Calculadora de Repartidor SAC
        </h1>

        <PlayerSelect
          numeroJugadores={numeroJugadores}
          handleNumeroJugadoresChange={handleNumeroJugadoresChange}
          nombresJugadores={nombresJugadores}
          setNombresJugadores={setNombresJugadores}
        />

        {nombresJugadores.length > 0 &&
          nombresJugadores[0] !== '' &&
          nombresJugadores[1] !== '' && (
            <>
              <Losses
                nombresJugadores={nombresJugadores}
                shipsCosts={shipsCosts}
                cantidad={cantidad}
                setCantidad={setCantidad}
              />
              <div className="flex flex-row gap-20">
                <Plunder
                  nombresJugadores={nombresJugadores}
                  recursosRobados={recursosRobados}
                  setRecursosRobados={setRecursosRobados}
                />
                <Debris
                  nombresJugadores={nombresJugadores}
                  escombrosReciclados={escombrosReciclados}
                  setEscombrosReciclados={setEscombrosReciclados}
                />
              </div>
              <PartialProfit
                nombresJugadores={nombresJugadores}
                recursosRobados={recursosRobados}
                escombrosReciclados={escombrosReciclados}
                cantidad={cantidad}
                shipsCosts={shipsCosts}
              />
              <FinalProfit
                nombresJugadores={nombresJugadores}
                recursosRobados={recursosRobados}
                escombrosReciclados={escombrosReciclados}
                cantidad={cantidad}
                shipsCosts={shipsCosts}
              />
            </>
          )}
      </div>
    </ProtectedRoute>
  );
};

export default Acs;
