var salvar = new Array();

class Cadastro{
  constructor(nome,cpf, sexo, email, telefone, nascimento, cidade, estado ){
    this.nome = nome;
    this.cpf = cpf;
    this.sexo = sexo;
    this.email = email;
    this.telefone = telefone;
    this.nascimento = nascimento;
    this.cidade = cidade;
    this.estado = estado;
  }

  mensagem()
    {
    alert("Cadastro Efetuado!"+"\n"+"\n"+this.nome+"\n"+this.cpf+"\n"+this.sexo+"\n"+this.email+"\n"+this.telefone+"\n"+this.nascimento+"\n"+this.cidade+"\n"+this.estado);
    }

}

function carregar(){
  var carrega = document.getElementById('load');
  var tamanho = salvar.length;
  var texto = "";
  if(tamanho !=0){
    texto="";
    for(i=0;i<tamanho;i++)
    {
     texto = texto+ '<li onclick="mostrar(' + salvar[i].cpf + ')">' + salvar[i].nome+"</li>";
     }
  } 				
  else{
    texto = "Nenhum cadastro até o momento";
  }

  carrega.innerHTML = texto;
}

function mostrar(cpf){
  alert(cpf);
}

function limpar(){
  document.querySelector('#nome').value= '';
  document.querySelector('#cpf').value= '';
  document.querySelector('#sexo').selectedIndex = 0;
  document.querySelector('#email').value= '';
  document.querySelector('#telefone').value= '';
  document.querySelector('#nascimento').selectedIndex = 0;
  document.querySelector('#cidade').value = '';
  document.querySelector('#estado').selectedIndex = 0;

}

document.querySelector('#btnsalvar').onclick = function(evt){

  var nome = document.querySelector('#nome').value;
  var cpf = document.querySelector('#cpf').value;
  var sexo = document.querySelector('#sexo').value;
  var email = document.querySelector('#email').value;
  var telefone = document.querySelector('#telefone').value;
  var nascimento = document.querySelector('#nascimento').value;
  var cidade = document.querySelector('#cidade').value;
  var estado = document.querySelector('#estado').value;
  var usuario = new Cadastro(nome,cpf,sexo,email,telefone,nascimento,cidade,estado);
  salvar.push(usuario);
  usuario.mensagem();
  carregar();	

  limpar();

}

document.querySelector('.cadastro').style.display = 'none'

document.querySelector('#add').onclick = function(evt){
  document.querySelector('.cadastro').style.display = 'block'
  document.querySelector('.home').style.display = 'none'
}

document.querySelector('#voltar').onclick = function(evt){
  document.querySelector('.cadastro').style.display = 'none'
  document.querySelector('.home').style.display = 'block'
}