let nome = 'Larinha';
let xp = 8063;

if (xp <= 1000) {
    console.log('O Herói de nome', nome, 'está no nível de Ferro com XP', xp);
} else if (xp >= 1001 && xp <= 2000) {
    console.log('O Herói de nome', nome, 'está no nível de Bronze com XP', xp);
} else if (xp >= 2001 && xp <= 5000) {
    console.log('O Herói de nome', nome, 'está no nível de Prata com XP', xp);
} else if (xp >= 5001 && xp <= 7000) {
    console.log('O Herói de nome', nome, 'está no nível de Ouro com XP', xp);
} else if (xp >= 7001 && xp <= 8000) {
    console.log('O Herói de nome', nome, 'está no nível de Platina com XP de', xp);
} else if (xp >= 8001 && xp <= 9000) {
    console.log('O Herói de nome', nome, 'está no nível de Ascendente com XP', xp);
} else if (xp >= 9001 && xp <= 10000) {
    console.log('O Herói de nome', nome, 'está no nível de Imortal com XP', xp);
} else if (xp >= 10001) {
    console.log('O Herói de nome', nome, 'está no nível de Radiante com XP', xp);
} else {
    console.log('O Herói de nome', nome, 'está em um nível não definido com XP', xp);
}



