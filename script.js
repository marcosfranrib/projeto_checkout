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
        valor1.innerHTML = valor2.value;
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

    function envio() {
        let alerta;
        for (let i = 0; i < array.length; i++) {
            if (array[i].value == '') {
                array[i].style.borderColor = 'red'
                alerta = 'Preencha os campos vazios'
            }
        }   
      return alerta
    }
    
// Eventos de entrada de input
   
    dgNumero.addEventListener('input', () =>{
        padrao(dgNumero)
        exibir(numero,dgNumero)
        alerta(dgNumero,pNumero,numero,'0000 0000 0000 0000')  

    })
  
    dgNome.addEventListener('input',()=>{
        exibir(nome,dgNome)
        alerta(dgNome,pNome,nome,'SEU NOME AQUI')  
        
    })

    dgMes.addEventListener('input',()=>{
        exibir(mes,dgMes)
        alerta(dgMes,pData,mes,'00')  
        
    })

    dgAno.addEventListener('input',()=>{
        exibir(ano,dgAno)
        alerta(dgAno,pData,ano,'00') 
    })

    dgCvc.addEventListener('input',()=>{
        exibir(cvc,dgCvc)
        alerta(dgCvc,pCvc,cvc,'000') 
        
    })

    submit.addEventListener('click',(e)=>{
        if (envio()) {
            e.preventDefault()
            alert(envio())

       } else{
            this.submit()
       }
    
    })


    
