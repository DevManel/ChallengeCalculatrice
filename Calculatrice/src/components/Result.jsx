// src/components/Result.jsx
import React from 'react';

const Result = ({ result, operationCount }) => {
  return (
    <div>
      {result !== null && <h3>Résultat : {result}</h3>}
      <p>Nombre d'opérations effectuées : {operationCount}</p>
    </div>
  );
};

export default Result;
