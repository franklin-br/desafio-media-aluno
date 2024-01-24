
let students = [

    {
        name: "Joao",
        firstNote: 10,
        secondNote: 10,
    },
    {
        name: "Ana",
        firstNote: 1.5,
        secondNote: 2.2,
    },
    {
        name: "Maria",
        firstNote: 7.5,
        secondNote: 7.8,
    },
    {
        name: "Pedro",
        firstNote: 1.4,
        secondNote: 2.4,
    },
]



let noteOne = students[0].firstNote
let noteTwo = students[0].secondNote
/*let average */



function addAverage (noteOne, noteTwo) {
    const average = (noteOne + noteTwo) / 2
    return average
}



for (study = 0; study <= 3; study++) {
  average = addAverage(students[study].firstNote, students[study].secondNote);
    if ( average < 7) {
        alert(`Aluno(a)  ${ students[study].name}, Sua média foi: ${average} 
        Não foi dessa vez, tente Novamente.`)
    } else {
        alert(`Aluno(a)  ${ students[study].name}, Sua média foi: ${average} 
        Parabéns! você foi aprovado(a)`)
    }
}
