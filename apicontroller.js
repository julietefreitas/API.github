class Controller{
  constructor(){
    console.log("Controller foi criada");
  }
  static adicionaNovoPerfil(perfilNovo) {
    let novoPerfil = new Model();
    novoPerfil.requisicaoNovoPerfil(perfilNovo);
    let userName = document.querySelector("#username");
    userName.value = "";

    if (verifica == 1){ 
      console.log(verifica)
      let visualizarUsuario = new View();
      visualizarUsuario.mostrarUsuario(novoPerfil);
    }    
    
  }
}
var verifica = 1;
let botao = document.querySelector("#botaoEnviar") 
botao.addEventListener("click",() => {
  //let userPerfil = new Controller (); // poderia fazer criando uma nova instância de Controller
  var userName = document.querySelector("#username").value;
  Controller.adicionaNovoPerfil(userName);

})