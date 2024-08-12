import { useState } from 'react';

const EmpireProduction = () => {
  const [numberPlanets, setNumberPlanets] = useState<number>(0);

  const [planets, setPlanets] = useState([
    {
      id: 1,
      coordinates: '',
      position: 0,
      metalMineLevel: 0,
      crystalMineLevel: 0,
      deuteriumMineLevel: 0,
      metalProduction: 0,
      crystalProduction: 0,
      deuteriumProduction: 0,
    },
  ]);

  const handleInputChange = (id: number, key: string, value: any) => {
    const newPlanets = planets.map((planet) => {
      if (planet.id === id) {
        return {
          ...planet,
          [key]: value,
        };
      }
      return planet;
    });
	setPlanets(newPlanets);
  };

  return (
    <>
      <div>
        <h1>Producción Imperial</h1>
        <p>
          Calcula la producción de tus planetas y te dice cuál es el siguiente
          nivel de mina que debes construir para optimizar la producción.
        </p>

        <input
          type="number"
          placeholder="Cantidad de planetas"
          onBlur={(e: any) => setNumberPlanets(e.target.value)}
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Coordenadas</th>
              <th>Nivel Mina Metal</th>
              <th>Nivel Mina Cristal</th>
              <th>Nivel Mina Deuterio</th>
              <th>Producción Metal</th>
              <th>Producción Cristal</th>
              <th>Producción Deuterio</th>
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={planet.id}>
                <td>
                  <input
                    type="text"
                    value={planet.coordinates}
                    onChange={(e) =>
                      handleInputChange(
                        planet.id,
                        'coordinates',
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={planet.metalMineLevel}
                    onChange={(e) =>
                      handleInputChange(
                        planet.id,
                        'metalMineLevel',
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={planet.crystalMineLevel}
                    onChange={(e) =>
                      handleInputChange(
                        planet.id,
                        'crystalMineLevel',
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={planet.deuteriumMineLevel}
                    onChange={(e) =>
                      handleInputChange(
                        planet.id,
                        'deuteriumMineLevel',
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>{planet.metalProduction.toLocaleString('es-ES')}</td>
                <td>{planet.crystalProduction.toLocaleString('es-ES')}</td>
                <td>{planet.deuteriumProduction.toLocaleString('es-ES')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmpireProduction;
