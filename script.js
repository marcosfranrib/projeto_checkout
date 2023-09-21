
//Atribuição do DOM
    const form = document.querySelector('#container-cadastro')
    const confirma = document.querySelector('#confirma-cadastro')
    const display = document.querySelector('#display-input')
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
 
// Eventos de entrada de input
   
    dgNumero.addEventListener('input', () =>{
        padrao(dgNumero)
        exibir(numero,dgNumero)
        alerta(dgNumero,pNumero,numero,'0000 0000 0000 0000')  

    })

    dgNome.addEventListener('input',()=>{
        formatarString(dgNome)
        exibir(nome,dgNome)
        alerta(dgNome,pNome,nome,'seu nome aqui')  
        
    })

    dgMes.addEventListener('input',()=>{
        if (dgMes.value > 12) {
            dgMes.value = 12
        }
        antiLetra(dgMes)
        exibir(mes,dgMes)
        alerta(dgMes,pData,mes,'00')  
        
    })

    
    dgMes.addEventListener('blur',()=>{
        zeroE(dgMes,mes)
    })


    dgAno.addEventListener('input',()=>{
        antiLetra(dgAno)
        exibir(ano,dgAno)
        alerta(dgAno,pData,ano,'00') 
    })

    dgAno.addEventListener('blur',()=>{
        zeroE(dgAno,ano)
    })

    dgCvc.addEventListener('input',()=>{
        antiLetra(dgCvc)
        exibir(cvc,dgCvc)
        alerta(dgCvc,pCvc,cvc,'000') 
        
    })

    submit.addEventListener('click',(e)=>{
       const verificar = verificarEnvio()
       if (verificar) {
            e.preventDefault()
            alert(verificar)

       }else{
            e.preventDefault()
            display.style.display = 'none'
            confirma.style.display = 'flex'
            submit.innerHTML = 'CONTINUAR'
       }
    })
