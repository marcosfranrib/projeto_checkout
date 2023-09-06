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
    let checkbox = document.querySelector('#check')


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

// Eventos de entrada de input
   
    dgNumero.addEventListener('input', () =>{
        console.log(dgNumero.value.length);
        if (dgNumero.value == '') {
            checkbox.checked = true
            
        }else{
            checkbox.checked = false
            numero.innerHTML = dgNumero.value;
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


    
