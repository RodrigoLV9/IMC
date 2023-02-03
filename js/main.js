"use strict";
const resultado = document.getElementById("resultado");
const button = document.getElementById("button");
const estatura = document.getElementById("estatura");
const peso = document.getElementById("peso");
const select = document.getElementById("select");
const textEstatura = document.getElementById("text-estatura");
const textPeso = document.getElementById("text-peso");
select.addEventListener("change", function () {
    if (select.value === "sistema ingles") {
        textEstatura.textContent = "Altura (pulg)";
        textPeso.textContent = "Peso (lb)";
    }
    else {
        textEstatura.textContent = "Altura (m)";
        textPeso.textContent = "Peso (kg)";
    }
});
function calcular(weight, tall) {
    const imc = weight / (tall * tall);
    return imc;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    const valor_estatura = parseFloat(estatura.value);
    const valor_peso = parseFloat(peso.value);
    if (select.value === "sistema ingles") {
        const pulg = valor_estatura / 39.3701;
        const libra = valor_peso / 2.20462;
        const imc = calcular(libra, pulg);
        if (resultado) {
            resultado.textContent = imc.toString();
        }
    }
    else if (select.value === "sistema metrico") {
        const imc = calcular(valor_peso, valor_estatura);
        if (resultado) {
            resultado.textContent = imc.toString();
        }
    }
});
