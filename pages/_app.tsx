import Navbar from '@/components/Navbar';
import { AppProps } from 'next/app';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default App;
