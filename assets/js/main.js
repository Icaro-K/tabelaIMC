const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');



function getValue() {
    const pesoValue = document.querySelector('.peso');
    const alturaValue = document.querySelector('.altura');
    const peso = pesoValue.value;
    const altura = alturaValue.value;
    console.log('Peso:', peso);
    console.log('Altura:', altura);

    return peso / (altura * altura);

}


function getResult(imc) {
    if (imc < 18.5) {
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)} (Abaixo do peso)</p>`
        resultado.style.backgroundColor = '#92f7f1';
    } else if (imc >= 18.5 && imc < 25){
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)} (Peso normal)</p>`
        resultado.style.backgroundColor = '#20f53c';
    }else if (imc >= 25 && imc < 30){
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)} (Sobrepeso)</p>`
        resultado.style.backgroundColor = '#e7ed40';
    }else if (imc >= 30 && imc < 35){
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)} (Obesidade grau 1)</p>`
        resultado.style.backgroundColor = '#ed9761';
    }else if (imc >= 35 && imc < 40){
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)} (Obesidade grau 2)</p>`
        resultado.style.backgroundColor = '#eb5a50';
    }else if (imc > 40){
        resultado.innerHTML = `<p>O seu IMC é de: ${imc.toFixed(2)} (Obesidade grau 3)</p>`
        resultado.style.backgroundColor = '#fc1100';
    } else {
        resultado.innerHTML = `<p>Ocorreu algum erro.</p>`
        resultado.style.backgroundColor = '#787474';
    }
}





form.addEventListener('submit', function (event) {
    event.preventDefault();
    const imc = getValue();
    console.log(imc);
    getResult(imc);
});



