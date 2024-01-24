/*
let students = [
    {
        name: 'Luiz',
        firstTestGrade: 5,
        secondTestScore: 5,
    },

    {
        name: 'Clara',
        firstTestGrade: 10,
        secondTestScore: 4,
    },

    {
        name: 'Maria',
        firstTestGrade: 9,
        secondTestScore: 8,
    },

    {
        name: 'Tiago',
        firstTestGrade: 10,
        secondTestScore: 8,
    }
]

let firstNote = students[0].firstTestGrade
let secondNote = students[0].secondTestScore
let tot

function calc (firstNote, secondNote) {
    const tot = (firstNote + secondNote) / 2
    return tot
}
/*const average = calc(4,6)///
////////////////////////////////////////////////////////////////////
/*
for (students = 0 <= 3; students++) {
  average = addAverage(students[student].firstNote, students[student].secondNota);
    if ( average < 7) {
        alert('esta reprovado' )
    } else {
        alert('esta aprovado')
    }
}
///////////////////////////////////////////////////////////////////*/
/*
for (i = 0; i <= 3; i++) {
    tot = calc(students[i].firstTestGrade, students[i].secondTestScore);
    if (tot < 7) {
        console.log('Aluno(a) ' + students[i].name + ' foi reprovado! Média: ' + tot);
    } else {
        console.log('Aluno(a) ' + students[i].name + ' foi aprovado! Média: ' + tot);
    }
}
*/
//////////////////////////////////////////////////


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

/*
function studants(){
  const media = Number(("first_nota" + "second_nota" )) / 2
}

let myMedia = studants(first_nota, second_nota)
alert(myMedia)
*/
/*
  average = (Number("first_nota") + Number("second_nota") ) / 2

const result = average >= 6
    average = average.toFixed(2)

switch(studants) {
  case "aprovado":
  alert("congratulations, " +studants[0]+  " your score was: " + average)
  break
  case"Reprovado":
  alert(studants+ "your grade was below average, study more! : " + average)
}

*/

/*

if (result) {
    
    alert("congratulations, " +studants[0]+  " your score was: " + average )
} else {
    alert( studants+ "your grade was below average, study more! : " + average)
} 
alert("here" + result)
/*
alert("average")

let studant = prompt("whats yor name?")
let n1 = prompt("first here? ")
let n2 = prompt("second here? ")
let n3 = prompt("tree here? ")

let average = (Number(n1) + Number(n2) + Number(n3) ) / 3

let result = average >= 6
    average = average.toFixed(2)

if (result) {
    
    alert("congratulations, " +studant+  " your score was: " + average )
} else {
    alert( studant+ "your grade was below average, study more! : " + average)
} 
*/
/*
while (average >= 7) {
  options = Number(
    prompt(`
  Por gentileza, informe um item do menu:
    1. Cadastrar novo usuário
    2. Lista nome dos usuários cadastrados
    3. Lista informações dos usuários
    4. Sair do programa`)
  );

  switch (average) {
    case 1:
      let name = prompt("enter your name here: ");
      let nota1 = prompt("enter your first note here:  ");
      let nota2 = prompt("enter your second note here: ");
     

      patients.push({
        name: name,
        note1: Number,
        note2: Number,
    
      });

      alert(`Paciente ${name} cadastrado com sucesso!`);
      break;

    case 2:
      let patientsNames = [];
      if (patients.length == 0) {
        alert("Não existe pacientes cadastrados!");
      } else {
        for (let patient of patients) {
          patientsNames.push(patient.name);
        }
        alert(`
          Pacientes cadastrados:
            ${patientsNames}`);
      }
      break;

    case 3:
      let patientsInfo = [];
      for (let patient of patients) {
        patientsInfo.push(`
        Paciente ${patient.name}, idade: ${patient.age}, peso: ${patient.weight}, altura: ${patient.height}`);
      }

      alert(`
        Informação dos usuários cadastrados: 
          ${patientsInfo}`);
      break;

    case 4:
      alert("Programa finalizado!")
      break;
      
    default:
      alert("Opção inválida. Escolha novamente");
      break;
  }
}
*/