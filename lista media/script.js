

const estudantes = [
    { nome: 'João', nota1: 8, nota2: 6 },
    { nome: 'Maria', nota1: 7, nota2: 7 },
    { nome: 'Pedro', nota1: 5, nota2: 4 },
    { nome: 'Ana', nota1: 10, nota2: 9 },
];

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

const mediaMinima = 7;

estudantes.forEach(estudante => {
    const media = calcularMedia(estudante.nota1, estudante.nota2);
    if (media >= mediaMinima) {
        console.log(`${estudante.nome} foi aprovado(a) com média ${media}`);
    } else {
        console.log(`${estudante.nome} não foi aprovado(a) com média ${media}`);
    }
});

