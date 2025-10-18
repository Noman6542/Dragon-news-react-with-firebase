import React, { Suspense } from 'react';
import Categores from '../Components/Categores';

const LeftAside = () => {
  return (
    <div>
     <Suspense fallback={<p>Data is loading.......</p>}>
      <Categores></Categores>
     </Suspense>
    </div>
  );
};

export default LeftAside;