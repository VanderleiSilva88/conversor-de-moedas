const convertBtn = document.querySelector('.btn');
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
        currencyImage.src = './img/dólar.png'


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
        currencyImage.src = './img/libra.png'
    }

    convert()

}




