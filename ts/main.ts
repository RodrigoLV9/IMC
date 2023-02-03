const resultado = document.getElementById("resultado");
const button = document.getElementById("button");
const estatura = document.getElementById("estatura") as HTMLInputElement;
const peso = document.getElementById("peso") as HTMLInputElement;
const select=document.getElementById("select") as HTMLSelectElement;
const textEstatura=document.getElementById("text-estatura") as HTMLDivElement;
const textPeso=document.getElementById("text-peso") as HTMLDivElement;

select.addEventListener("change", function() {
    if (select.value === "sistema ingles") {
    textEstatura.textContent = "Altura (pulg)";
    textPeso.textContent= "Peso (lb)";
    }else{
        textEstatura.textContent = "Altura (m)";
        textPeso.textContent= "Peso (kg)";
    }
});
function calcular(weight: number, tall: number) {
    const imc = weight / (tall * tall);
    return imc;
}
button?.addEventListener("click", () => {
    const valor_estatura:number = parseFloat(estatura.value);
    const valor_peso:number = parseFloat(peso.value);
    if(select.value==="sistema ingles"){
        const pulg:number=valor_estatura / 39.3701;
        const libra:number=valor_peso / 2.20462;
        const imc:number=calcular(libra,pulg);
        if (resultado) {
            resultado.textContent = imc.toString();
        }
        
    }else if (select.value==="sistema metrico"){
        const imc:number=calcular(valor_peso,valor_estatura)
        if (resultado) {
            resultado.textContent = imc.toString();
        }
    }
    
});
