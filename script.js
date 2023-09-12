//Atribuição do DOM
    const dgNumero = document.querySelector('#card-number')
    const dgNome = document.querySelector('#card-name')
    const dgMes = document.querySelector('#dgMes')
    const dgAno = document.querySelector('#dgAno')
    const dgCvc = document.querySelector('#dgCvc')
    const numero = document.querySelector('.exNumero')
    const nome = document.querySelector('#exNome')
    const mes = document.querySelector('#mes')
    const ano = document.querySelector('#ano')
    const cvc = document.querySelector('#cvc')
    const pNumero = document.querySelector('#p-numero')
    const pNome = document.querySelector('#p-nome')
    const pData = document.querySelector('#p-data')
    const pCvc = document.querySelector('#p-cvc')
    const submit = document.querySelector('#submit')
    const array = [dgNumero,dgNome,dgMes,dgAno,dgCvc]

//Funções para modelar os padrões de entrada
   
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
                alerta = 'Preencha os campos vazios'
            }
        }   
      return alerta;
    }
    

// Eventos de entrada de input
   
    dgNumero.addEventListener('input', () =>{
        padrao(dgNumero)
        exibir(numero,dgNumero)
        alerta(dgNumero,pNumero,numero,'0000 0000 0000 0000')  

    })

    dgNome.addEventListener('input',()=>{
        dgNome.value = dgNome.value.replace(/[0-9]/g,'')
        dgNome.value = dgNome.value.toUpperCase()
        exibir(nome,dgNome)
        alerta(dgNome,pNome,nome,'seu nome aqui')  
        
    })

    dgMes.addEventListener('input',()=>{
        if (dgMes.value > 12) {
            dgMes.value = 12
        }
        exibir(mes,dgMes)
        alerta(dgMes,pData,mes,'00')  
        
    })

    
    dgMes.addEventListener('blur',()=>{
        zeroE(dgMes,mes)
    })


    dgAno.addEventListener('input',()=>{
        exibir(ano,dgAno)
        alerta(dgAno,pData,ano,'00') 
    })

    dgAno.addEventListener('blur',()=>{
        zeroE(dgAno,ano)
    })

    dgCvc.addEventListener('input',()=>{
        exibir(cvc,dgCvc)
        alerta(dgCvc,pCvc,cvc,'000') 
        
    })

    submit.addEventListener('click',(e)=>{
        const verificar = verificarEnvio()
        if (verificar) {
            e.preventDefault()
            alert(verificar)

       }else{
           
            window.location.href = "http://www.devmedia.com.br/guia/javascript/34372";
            console.log('passei do prevent');
       }
    
    })
