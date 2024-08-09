import ProtectedRoute from '@/components/auth/ProtectedRoute';
import MinesCalculator from '@/components/mines/MinesCalculator';
import MinesFuture from '@/components/mines/MinesFuture';

const Mines = () => {
  return (
    <>
      <ProtectedRoute>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Guía calculadora de minas
          </h1>
          <MinesFuture />
        </div>
      </ProtectedRoute>
    </>
  );
};

export default Mines;
