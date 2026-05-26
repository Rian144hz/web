const container = document.querySelector(".grid-container");

fetch("http://localhost:3000/alunos")
  .then(resposta => resposta.json())
  .then(dadosAlunos => {
    dadosAlunos.map(aluno => {
      container.innerHTML += `
        <div class="card">
            <img src="${aluno.foto}" alt="${aluno.nome}">
            <h2> ${aluno.nome} </h2>
            <div> Turma: ${aluno.turma}</div>
            <div> CR: ${aluno.cr}</div>
        </div>
      `;
    });
  })
  .catch(error => console.error("Erro ao buscar alunos:", error));