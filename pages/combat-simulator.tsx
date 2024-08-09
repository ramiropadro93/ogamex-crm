import { useState } from 'react';
import { NextPage } from 'next';
import parse, {
  domToReact,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Función de transformación para modificar el HTML
const transformHtml = (node: Element, index: number) => {
  if ((node.type as any) == 'img') return null;
  return node;
};

const BattleIncome: NextPage = () => {
  const [htmlInput, setHtmlInput] = useState<string>('');
  const [parsedData, setParsedData] = useState<any>(null);

  const handleHtmlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlInput(event.target.value);
  };

  const parseHtml = () => {
    // Parsear HTML y aplicar transformaciones
    const parsed = parse(htmlInput, {
      transform: transformHtml as any,
    });

    setParsedData(parsed);
  };

  return (
    <ProtectedRoute>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Calculadora de Renta de Batalla
      </h1>
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
    </ProtectedRoute>
  );
};

export default BattleIncome;
