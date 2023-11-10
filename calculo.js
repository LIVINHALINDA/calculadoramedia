function calcular() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;
    const elementoMedia = document.getElementById("media");
    const status = document.getElementById("status");

    elementoMedia.textContent = media.toFixed(2);

    if (media < 60) {
        status.textContent = "Sinto muito, você não atingiu a média e está reprovado :(";
    } else if (media >= 60) {
        status.textContent = "Parabéns por seu desempenho, você atingiu a média e está aprovado!!!";
    } else {

    }
    document.getElementById("calcular").addEventListener("click", calcular);

}




