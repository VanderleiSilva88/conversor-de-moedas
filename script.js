/* const convertBtn = document.querySelector('.btn');
const currencySelect = document.querySelector('.currency-select');





convertBtn.addEventListener('click', convert);
currencySelect.addEventListener('change', changeCurrency);




function convert() {
    const input = document.querySelector('.input-real').value;
    const result = document.querySelector('.result');
    const currencyValueToConvert = document.querySelector('.currency-value')
    const currencyValueToConverted = document.querySelector('.currency-value-to-convert')



    const dolarToday = 5.6693999
    const euroToday = 6.4189999
    const poundToday = 7.5380001
    const bitcoinToday = 22860.5000000


    const convert = input / dolarToday

    if (currencySelect.value == 'dolar') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(convert)

    }
    if (currencySelect.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(convert / euroToday)
    }

    if (currencySelect.value == 'btc') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(convert / bitcoinToday)
    }

    if (currencySelect.value == 'gbt') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(convert / poundToday)
    }


    currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(input)



    currencyValueToConvert.style.color = 'red'
    currencyValueToConverted.style.color = 'green'


}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')



    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dolar Americano'
        currencyImage.src = './img/dolar.png'


    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './img/euro.png'

    }
    if (currencySelect.value == 'btc') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './img/bitcoin.png'
    }


    if (currencySelect.value == 'gbt') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImage.src = './img/gbt.png'
    }

    convert()

}

*/

const convertBtn = document.querySelector('.btn');
const currencySelect = document.querySelector('.currency-select');

convertBtn.addEventListener('click', convert);
currencySelect.addEventListener('change', changeCurrency);

function convert() {
    const input = document.querySelector('.input-real').value;
    const result = document.querySelector('.result');
    const currencyValueToConvert = document.querySelector('.currency-value');
    const currencyValueToConverted = document.querySelector('.currency-value-to-convert');
    
    // Verificar se há valor no input
    if (!input || input <= 0) {
        return;
    }
    
    const dolarToday = 5.6693999;
    const euroToday = 6.4189999;
    const poundToday = 7.5380001;
    const bitcoinToday = 22860.5000000;
    
    if (currencySelect.value == 'dolar') {
        const convertedValue = input / dolarToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(convertedValue);
    }
    
    if (currencySelect.value == 'euro') {
        const convertedValue = input / euroToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(convertedValue);
    }
    
    if (currencySelect.value == 'btc') {
        const convertedValue = input / bitcoinToday;
        // Bitcoin não é uma moeda oficial, então vamos formatar manualmente
        currencyValueToConvert.innerHTML = '₿ ' + convertedValue.toFixed(8);
    }
    
    if (currencySelect.value == 'gbp') { // Corrigido de 'gbt' para 'gbp'
        const convertedValue = input / poundToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(convertedValue);
    }
    
    currencyValueToConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(input);
    
    currencyValueToConvert.style.color = 'red';
    currencyValueToConverted.style.color = 'green';
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');
    
    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImage.src = './img/dolar.png';
    }
    
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImage.src = './img/euro.png';
    }
    
    if (currencySelect.value == 'btc') {
        currencyName.innerHTML = 'Bitcoin';
        currencyImage.src = './img/bitcoin.png';
    }
    
    if (currencySelect.value == 'gbp') { // Corrigido de 'gbt' para 'gbp'
        currencyName.innerHTML = 'Libra Esterlina';
        currencyImage.src = './img/libra.png'; // Ajuste o nome do arquivo se necessário
    }
    
    // Só converte se houver valor no input
    const inputValue = document.querySelector('.input-real').value;
    if (inputValue && inputValue > 0) {
        convert();
    }
}
