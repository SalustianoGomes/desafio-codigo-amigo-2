function calcular(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let ranking = "";

    if (saldo <= 10) {
        ranking = "Ferro";
    } else if (saldo <= 20) {
        ranking = "bronze";
    } else if (saldo <= 50) {
        ranking = "prata";
    } else if (saldo <= 80) {
        ranking = "ouro";
    } else if (saldo <= 90) {
        ranking = "diamante";
    } else if (saldo <= 100) {
        ranking = "lendario";
    } else {
        ranking = "imortal";
    }
    
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${ranking}`);
}

calcular(45, 3);
