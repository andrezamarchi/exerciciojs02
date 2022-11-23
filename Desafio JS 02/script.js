/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
    {
        name: 'Amélia',
        note1: 8,
        note2: 9,
    },
    {
        name: 'Charles',
        note1: 6,
        note2: 7,
    },
    {
        name: 'Lucas',
        note1: 6,
        note2: 8,
    },
    {
        name: 'Helena',
        note1: 8,
        note2: 10,
    },
]

function average (note1, note2){
    return (note1 + note2) / 2
}

function averageCalc(student, nota){
    return `O Aluno(a) ${student.name} obteve a média de ${nota}.` 
}

for(let student of students){
    let nota = average(student.note1, student.note2)
    let averageMessege = averageCalc(student, nota)
   
    if(nota >= 7){
      alert(`${averageMessege}\nVocê foi aprovado(a)`)
        
    }else{
        alert(`${averageMessege}\nVocê foi reprovado(a).`)
    }
}

