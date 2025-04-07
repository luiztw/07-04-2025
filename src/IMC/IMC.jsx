import React, { useState } from 'react';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(2));

    let classificacao = '';
    if (imc < 16) {
      classificacao = 'Magreza leve';
    } else if (imc >= 16 && imc < 17) {
      classificacao = 'Magreza moderada';
    } else if (imc >= 17 && imc < 18.5) {
      classificacao = 'Magreza leve';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Saudável';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      classificacao = 'Obesidade Grau 1';
    } else if (imc >= 35 && imc < 40) {
      classificacao = 'Obesidade Grau 2 (severa)';
    } else if (imc >= 40) {
      classificacao = 'Obesidade Grau 3 (mórbida)';
    }

    setClassificacao(classificacao);
  };

  const limparCampos = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setClassificacao('');
  };

  return (
    <div style={styles.container}>
      <h2>Calculadora IMC</h2>
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Digite seu peso (kg)"
        style={styles.input}
      />
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Digite sua altura (m)"
        style={styles.input}
      />
      <button onClick={calcularIMC} style={styles.button}>Calcular</button>
      <button onClick={limparCampos} style={styles.button}>Limpar</button>

      {resultado && (
        <div>
          <p style={styles.resultado}>IMC: {resultado}</p>
          <p style={styles.classificacao}>{classificacao}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
        color:'black',
      backgroundColor: 'white',
      padding: '20px',
      width: '300px',
      textAlign: 'center',
      margin: '0 auto',
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
    },
    classificacao: {
      fontSize: '16px',
      marginTop: '10px',
    },
  };
  
export default CalculadoraIMC;
