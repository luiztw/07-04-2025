import React, { useState } from 'react';

const Calculadora = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [operacao, setOperacao] = useState('soma');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    let res = 0;

    switch (operacao) {
      case 'soma':
        res = num1 + num2;
        break;
      case 'subtracao':
        res = num1 - num2;
        break;
      case 'multiplicacao':
        res = num1 * num2;
        break;
      case 'divisao':
        if (num2 === 0) {
          alert('Não é possível dividir por zero.');
          return;
        }
        res = num1 / num2;
        break;
      default:
        alert('Operação inválida.');
        return;
    }

    setResultado(res);
  };

  const limpar = () => {
    setValor1('');
    setValor2('');
    setResultado('');
  };

  return (
    <div style={styles.container}>
      <h2>Calculadora Simples</h2>
      <input
        type="number"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
        placeholder="Digite o primeiro valor"
        style={styles.input}
      />
      <input
        type="number"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
        placeholder="Digite o segundo valor"
        style={styles.input}
      />
      <select
        value={operacao}
        onChange={(e) => setOperacao(e.target.value)}
        style={styles.input}
      >
        <option value="soma">Soma</option>
        <option value="subtracao">Subtração</option>
        <option value="multiplicacao">Multiplicação</option>
        <option value="divisao">Divisão</option>
      </select>
      <button onClick={calcular} style={styles.button}>Calcular</button>
      <button onClick={limpar} style={styles.button}>Limpar</button>

      <p style={styles.resultado}>Resultado: {resultado}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
    margin: '0 auto',
    color: 'black',
  },
  input: {
    width: '80%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    color: 'white',
    cursor: 'pointer',
  },
  resultado: {
    marginTop: '20px',
    fontSize: '18px',
    color: 'black',
  },
};

export default Calculadora;
