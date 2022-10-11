// let informacoesAlunos = [
//   ["José da Silva", 7, 8.5],
//   ["Raphaela Ferraz", 8, 9.5],
//   ["Victor Marques", 10, 10]
// ]


// for (let i = 0; i < informacoesAlunos.length; i++) {
//   let multiplicacaoPrimeiraNota = informacoesAlunos[i][1] * 0.6;
//   let multiplicacaoSegundaNota = informacoesAlunos[i][2] * 0.4;
//   let notaFinal = multiplicacaoPrimeiraNota + multiplicacaoSegundaNota;

//   alert("Nome do aluno: " + informacoesAlunos[i][0] + "\nNota 1: " + informacoesAlunos[i][1] + "\nNota 2: " + informacoesAlunos[i][2])

//   alert(`Nome do aluno: ${informacoesAlunos[i][0]} \nNota final: ${notaFinal}`);
// }




let Alunos = [
  ["José da Silva", 7, 8.5],
  ["Muriel", 3, 4.5],
  ["Rapunzel", 6, 9.5]
]


for (let i = 0; i < Alunos.length; i++) {
  let nota1 = Alunos[i][1] * 0.6;
  let nota2 = Alunos[i][2] * 0.4; 
  let notaFinal = nota1 + nota2;

  alert(
    "Nome do aluno: " + Alunos[i][0] + "\nNota 1: " + Alunos[i][1] + "\nNota2: " + Alunos[i][2]
  )

  alert(
    "Nome do aluno: " + Alunos[i][0] + "\nNota final: " + notaFinal
  )
}


