import ProtectedRoute from '@/components/auth/ProtectedRoute';
import MinesCalculator from '@/components/mines/MinesCalculator';

const Mines = () => {
  return (
    <>
      <ProtectedRoute>
        <MinesCalculator />
      </ProtectedRoute>
    </>
  );
};

export default Mines;
