class View {
  constructor() {console.log("Criei um View")
  }
  mostrarUsuario(modelUsuario) {
    console.log(modelUsuario)
    let div = document.querySelector("#containerUser");
    let imgPerfil = document.querySelector("#imgPerfil");
    let nomePerfil = document.querySelector("#perfil");
    let listaRepositorios = document.querySelector("#tabelaGeral");
    listaRepositorios.innerHTML = " ";
    this._criaTabela();
    imgPerfil.src = modelUsuario._fotoPerfil;
    nomePerfil.innerHTML = `Perfil Github de ${modelUsuario._nomeUsuario}`;
      modelUsuario._nomesRepositorios.forEach(element=> {
        console.log(element.name)
        listaRepositorios.innerHTML += 
        `<tr class = "listadetr">
          <td class = "listadeTd" <a href = "https://github.com/${modelUsuario.login}/${element.name}">${element.name}</a></td>
          <td class = "listadeTd">${element.language}</td>
          <td class = "listaDeHttp"><a href = ${element.svn_url}>${element.svn_url}</a></td>
        </tr>`
      });
    div.classList.add("divDepoisView");
  }

  _criaTabela(){
    let listaRepositorios = document.querySelector("#tabelaGeral");
    let primeiraTr = document.createElement("tr");
    let primeiraTh = document.createElement("th");
    let segundaTh = document.createElement("th");
    let terceiraTh = document.createElement("th");
    listaRepositorios.appendChild(primeiraTr);
    primeiraTr.appendChild(primeiraTh);
    primeiraTr.appendChild(segundaTh);
    primeiraTr.appendChild(terceiraTh);
    primeiraTh.innerHTML = "Repositório";
    segundaTh.innerHTML = "Linguagem"; 
    terceiraTh.innerHTML = "Link do Repositório";
    primeiraTh.classList.add("th");
    segundaTh.classList.add("th");
    terceiraTh.classList.add("th");
  }
}