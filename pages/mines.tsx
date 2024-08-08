// pages/mines.tsx

import Head from 'next/head';

const Mines = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Minas - OgameX CRM</title>
        <meta name="description" content="Página de minas del CRM de OgameX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          Página de Minas
        </h1>
      </main>
    </div>
  );
};

export default Mines;
