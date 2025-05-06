import React, { useState } from "react";
import './Massa.css';

const Massa = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [massa, setMassa] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const calcularMassa = () => {
        if (!peso || !altura) {
            alert("Preencha todos os campos");
            return;
        }

        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (pesoNum <= 0 || alturaNum <= 0) {
            alert("Peso e altura devem ser maiores que zero.");
            return;
        }

        const valorMassa = pesoNum / (alturaNum * alturaNum);
        setMassa(valorMassa.toFixed(2));

        let resultado = "";

        if (valorMassa < 16) resultado = "Magreza grave";
        else if (valorMassa < 17) resultado = "Magreza moderada";
        else if (valorMassa < 18.5) resultado = "Magreza leve";
        else if (valorMassa < 25) resultado = "Saudável";
        else if (valorMassa < 30) resultado = "Sobrepeso";
        else if (valorMassa < 35) resultado = "Obesidade Grau I";
        else if (valorMassa < 40) resultado = "Obesidade Grau II (severa)";
        else resultado = "Obesidade Grau III (mórbida)";

        setClassificacao(resultado);
    };

    const limpar = () => {
        setPeso("");
        setAltura("");
        setMassa("");
        setClassificacao("");
    };

    return (
        <div className="massa-container">
            <h1>Calculadora de Massa Corporal</h1>

            <label>
                Peso (kg):
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    min="0"
                    step="0.1"
                />
            </label>

            <label>
                Altura (m):
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    min="0"
                    step="0.01"
                />
            </label>

            <button onClick={calcularMassa}>Calcular</button>
            <button onClick={limpar}>Limpar</button>

            {massa && (
                <div className="massa-resultado">
                    <h2>Resultado</h2>
                    <p><strong>Massa:</strong> {massa}</p>
                    <p><strong>Classificação:</strong> {classificacao}</p>
                </div>
            )}
        </div>
    );
};

export default Massa;
