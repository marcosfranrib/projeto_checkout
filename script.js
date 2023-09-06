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
   
// Funções que exibem no cartão o valor digitado no input

    function exibir(valor1,valor2){     
        //Função modelo para exibição do valor
        valor1.innerHTML = valor2.value;

    }

    function padrao(num) {
        const regex = /(\d{4})(?=\d)/g;
        num.value = num.value.replace(regex,'$1 ')
        num.value = num.value.trim()
        
    }

    dgNumero.addEventListener('keyup',()=>{
        
        numero.innerHTML = dgNumero.value;
        if(numero.innerHTML == ''){
            numero.innerHTML = '0000 0000 0000 0000'
        }

        padrao(dgNumero)
        exibir(numero,dgNumero)
        
    })


    dgNome.addEventListener('keyup',()=>{
        exibir(nome,dgNome)

    })

    dgMes.addEventListener('keyup',()=>{
        exibir(mes,dgMes)
    })

    dgAno.addEventListener('keyup',()=>{
        exibir(ano,dgAno)
    })

    dgCvc.addEventListener('keyup',()=>{
        exibir(cvc,dgCvc)
    })


    
