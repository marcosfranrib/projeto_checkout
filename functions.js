
function exibir(valor1,valor2){     
    valor1.innerText = valor2.value;
}

function padrao(num) {
    const regex = /(\d{4})(?=\d)/g;
    num.value = num.value.replace(/[^0-9]/g, '')
    num.value = num.value.replace(regex,'$1 ')
    num.value = num.value.trim()
}

function alerta(input,alert,exib,content) {
    if(input.value == ''){
        input.style.borderColor = 'red'
        exib.innerHTML = content
        alert.style.display = 'block'

    } else{
        input.style.borderColor = '#DEE3E8'
        exib.innerHTML = input.value;
        alert.style.display = 'none'

    }
}

function antiLetra(input) {
    input.value = input.value.replace(/\D/g,'')
    
}

function formatarString(input) {
    input.value = input.value.replace(/\d/g,'')
    input.value = input.value.toUpperCase()
    
}

function zeroE(input,exib) {
    if (input.value <= 9 && input.value >= 1 && input.value.length <= 1) {
        input.value = `0${input.value}`
        exib.innerHTML = input.value

    } else if(input.value <= 0){
        input.value = ''
        exib.innerHTML = '00'
    }
}

function verificarEnvio() {
    let alerta = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].value == '') {
            array[i].style.borderColor = 'red'
            alerta = 'PREENCHA OS CAMPOS VAZIOS'
        }
    } 

    if (dgNumero.value.length < 19) {
        dgNumero.style.borderColor = 'red'
        alerta = 'NUMERO DO CARTÃO INCOMPLETO'
    }  

  return alerta;
}

function intervalo(){
    setTimeout(() => {
    display.style.display = 'none'
    confirma.style.display = 'flex'
    submit.style.display = 'none'
    continuar.style.display = 'block'

}, 1000);}

