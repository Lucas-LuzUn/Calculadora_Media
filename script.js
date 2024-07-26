function calcular() 
{
    // Obtém os valores dos campos de entrada
    var np1 = document.getElementById('np1').value;
    var np2 = document.getElementById('np2').value;
    var pim = document.getElementById('pim').value;
    
    // Calcula a média
    var media = (parseFloat(np1) + parseFloat(np2) + parseFloat(pim)) / 3;

    // Limita o número de casas decimais a 2
    var mediaLimitada = media.toFixed(2);

    // Atualiza o conteúdo do elemento span com a média calculada
    document.getElementById('media').innerHTML = mediaLimitada;
}

function limpar()
{
    document.getElementById('np1').value = "";
    document.getElementById('np2').value = "";
    document.getElementById('pim').value = "";
    resultado.innerHTML = "";
}