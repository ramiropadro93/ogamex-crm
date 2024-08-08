import { useState } from 'react';
import { NextPage } from 'next';
import parse from 'html-react-parser';

const CombatSimulator: NextPage = () => {
  const [htmlInput, setHtmlInput] = useState<string>('');
  const [parsedData, setParsedData] = useState<any>(null);

  const handleHtmlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlInput(event.target.value);
  };

  const parseHtml = () => {
    // Aquí puedes utilizar la lógica necesaria para extraer datos del HTML
    // Ejemplo con html-react-parser:
    const parsed = parse(htmlInput);

    // Aquí se debería implementar la lógica para procesar el HTML parseado
    // y extraer los datos necesarios. Este ejemplo solo muestra el HTML parseado
    setParsedData(parsed);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Renta de Batalla</h1>
      <textarea
        value={htmlInput}
        onChange={handleHtmlChange}
        placeholder="Ingrese el HTML aquí..."
        rows={10}
        className="w-full border p-2 mb-4"
      />
      <button
        onClick={parseHtml}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Procesar HTML
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Datos Procesados</h2>
        <div>{parsedData}</div>
      </div>
    </div>
  );
};

export default CombatSimulator;
