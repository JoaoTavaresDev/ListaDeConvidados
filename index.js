//codigo js

//document.getElemnteByClass(lista)
//document.getElemnteById(#button)
//document.querrySelector(#app ul)

var convidados = JSON.parse(localStorage.getItem("convidados")) || [];

var elLista = document.getElementById("lista");
var elNome = document.getElementById("nome");
var elIdade = document.getElementById("idade");
var elBotao = document.getElementById("botao");
var elFiltro = document.getElementById("dropdown");
listarConvidados();

elBotao.onclick = function () {
  var nome = elNome.value;
  var idade = elIdade.value;
  if (elNome.value != "" && elIdade.value != "") {
    convidados.push({ nome: nome, idade: idade });
    elNome.value = "";
    elIdade.value = "";

    salvarConvidados();
    listarConvidados();
  }
};

elFiltro.onchange = function () {
  var select = document.getElementById("dropdown");
  var value = select.options[select.selectedIndex].value;
  if (value == "Maiores") {
    for (const convidado of convidados) {
      document.getElementById(convidado.nome).style.display = "flex";
    }
    for (const convidado of convidados) {
      if (convidado.idade < 18) {
        document.getElementById(convidado.nome).style.display = "none";
      }
    }
  }
  if (value == "Menores") {
    for (const convidado of convidados) {
      document.getElementById(convidado.nome).style.display = "flex";
    }
    for (const convidado of convidados) {
      if (convidado.idade >= 18) {
        document.getElementById(convidado.nome).style.display = "none";
      }
    }
  }
  if (value == "Todos") {
    for (const convidado of convidados) {
      document.getElementById(convidado.nome).style.display = "flex";
    }
  }
};

function salvarConvidados() {
  localStorage.setItem("convidados", JSON.stringify(convidados));
}

function listarConvidados() {
  elLista.innerHTML = "";

  for (const convidado of convidados) {
    var elConvidado = document.createElement("li");
    elConvidado.setAttribute("id", convidado.nome);
    var elNome = document.createTextNode(convidado.nome);
    var elIdade = document.createTextNode(",  idade:" + convidado.idade);

    var elExcluir = document.createElement("a");
    elExcluir.setAttribute("href", "#");
    elExcluir.setAttribute("class", "link-excluir");
    elExcluir.onclick = function () {
      convidados = convidados.filter(function (item) {
        return item.nome != convidado.nome;
      });

      salvarConvidados();
      listarConvidados();
    };

    var elExcluirTexto = document.createTextNode("Excluir");

    elConvidado.appendChild(elNome);
    elConvidado.appendChild(elIdade);
    elExcluir.appendChild(elExcluirTexto);
    elConvidado.appendChild(elExcluir);
    elLista.appendChild(elConvidado);
  }
}

var adicionarConvidado = function () {};
