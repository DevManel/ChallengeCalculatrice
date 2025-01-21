import React, {useState, useEffect} from "react";
import Buttons from './Buttons.jsx';
import Result from './Result.jsx';

const Calculator = () => {
    //Etats pour les entrées de nmb, result et compte
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [operationCount, setOperationCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    //Fonction addition
    const add = () => {
        if (!num1 || !num2){
            setErrorMessage('Veuillez saisir deux nombres.');
            return;
        }
        const sum = parseFloat(num1) + parseFloat(num2);
        setResult(sum);
        setOperationCount(operationCount + 1);
        setErrorMessage('');
    };

    // Fonction multiplication
    const multiply = () => {
        if (!num1 || !num2){
            setErrorMessage('Veuillez saisir deux nombres.');
            return;
        }
        const product = parseFloat(num1) * parseFloat(num2);
        setResult(product);
        setOperationCount(operationCount + 1);
        setErrorMessage('');
    };

    // Fonction reset
    const reset = () => {
        setNum1('');
        setNum2('');
        setResult(null);
        setErrorMessage('');
    };

    // Utilisation de useEffect pour alerter après 10 opérations
  useEffect(() => {
    if (operationCount >= 10) {
      alert('Vous avez effectué 10 calculs !');
    }
  }, [operationCount]);

  return (
    <div className="calculator">
      <h2>Calculatrice</h2>
      
      {/* Affichage du message d'erreur */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div>
        <label>Num1 :</label>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Saisir un nombre"
        />
      </div>

      <div>
        <label>Num2 :</label>
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Saisir un autre nombre"
        />
      </div>

      {/* Boutons */}
      <Buttons 
        onAdd={add} 
        onMultiply={multiply} 
        onReset={reset} 
      />

      {/* Résultat */}
      <Result result={result} operationCount={operationCount} />
    </div>
  );
};

export default Calculator;