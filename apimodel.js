class Model {
  constructor() {console.log("Buscando novo perfil");
    this._login= "";
    this._fotoPerfil = "";
    this._nomeUsuario = "";
    this._nomesRepositorios = [];
  }
  requisicaoNovoPerfil (perfilNovo){
    let request = new XMLHttpRequest();
    request.addEventListener ("load" , () =>{
    try {
      if (request.status == 200) {
        console.log("Encontrei...vou mostrar")
        this._atualizaDados(this._processaDados(request.responseText));
        this.getBuscarRepositorios(this._processaDados(request.responseText).repos_url); 
        verifica = 1;
      }else {
        throw new Error("Usuário não encontrado!");
      }
    }  
    catch(err) {
      console.log(err);
      verifica = 0;
      setTimeout(()  => {
        window.location.href = `https://github.com/${perfilNovo}`
      },1000);
    }  
  });
  request.open("GET", `https://api.github.com/users/${perfilNovo}`,false);
  request.send();

  }

  _processaDados(dados) {
    console.log("processando dados que recebi da request")
    return JSON.parse(dados);
  }

  _atualizaDados(dados) {
    console.log("estou processando e atualizando os dados..")
      this._login = dados.login;
      this._fotoPerfil= dados.avatar_url;
      this._nomeUsuario = dados.name;
  }
  getBuscarRepositorios(listadeRepositorios) {
    console.log(listadeRepositorios)
    let pedido = new XMLHttpRequest();
    pedido.addEventListener("load", () => {
        if (pedido.status == 200) {
          let resposta = JSON.parse(pedido.responseText);
          resposta.forEach(element => {
            this._nomesRepositorios.push(element) 
          });
        } 
    });
    pedido.open("GET", `${listadeRepositorios}`,false); 
    pedido.send();
  }

  get login(){
    return this._login
  }
  get fotoPerfil() {
    return this._fotoPerfil;
  }
  get nomeUsuario() {
    return this._nomeUsuario;
  }
  get nomesRepositorios() {
    return this._nomesRepositorios;
  }

}