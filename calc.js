function botao (num)
{
    var salvo = document.calc.visor.value;
    document.calc.visor.value = salvo + num;
}

function reset ()
{
    //codigo para limpar o visor
    document.calc.visor.value = "";

}

function calcule ()
{
    // codigo para calcular o visor
    // pegar o valor do visor em uma variavel
    //fazer o calculo eval
    // pegar o resultado e colocar no visor  alert
    var salvo = document.calc.visor.value;
    resultado = eval (document.calc.visor.value)
    alert( resultado);
}