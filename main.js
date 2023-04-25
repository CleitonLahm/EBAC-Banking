const form = document.querySelector("#form-deposito")

function validaNome(nomeCompleto) {
  const nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
  let formEValido = false;
  e.preventDefault();

  const nomeBeneficiario = document.querySelector("#nome-beneficiario");
  const numeroContaBeneficiario = document.querySelector("#numero-conta");
  const valorDeposito = document.querySelector("#valor-deposito");
  const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;
  
  formEValido = validaNome(nomeBeneficiario.value)
  if (formEValido) {
    alert (mensagemSucesso);

    valorDeposito.value = "";
    nomeBeneficiario.value = "";
    numeroContaBeneficiario.value = "";


  } else{
    alert("O nome não está completo");
  }
})

console.log(form)