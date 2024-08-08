import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">
            OgameX CRM
          </Link>
        </div>
        {/* Menu Options */}
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
            Inicio
          </Link>
          <Link href="/recursos" className="text-gray-300 hover:text-white transition duration-300">
            Recursos
          </Link>
          <Link href="/mines" className="text-gray-300 hover:text-white transition duration-300">
            Minas
          </Link>
          <Link href="/acs" className="text-gray-300 hover:text-white transition duration-300">
            Repartidor SAC
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
