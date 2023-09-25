function main() {
    let vitorias = 120;
    let derrotas = 30;

    let rank = saldoDeRanqueadas(vitorias, derrotas);
    nivelJogador(rank);
}

function saldoDeRanqueadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function nivelJogador(rank) {
    if (rank <= 10) {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Ferro');
    }
    else if (rank >= 11 && rank <= 20) {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Bronze');
    }
    else if (rank >= 21 && rank <= 50) {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Prata');
    }
    else if (rank >= 51 && rank <= 80) {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Ouro');
    }
    else if (rank >= 81 && rank <= 90) {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Diamante');
    }
    else if (rank >= 91 && rank <= 100) {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Lendário');
    }
    else {
        console.log('O Herói tem saldo de', rank, 'e está no nível de Imortal');
    }
}
main()