let olderPersonName = prompt("Digite o nome da pessoa mais velha")
let olderPersonAge = prompt("Digite a idade da pessoa mais velha")
let youngerPersonName = prompt ("Digite o nome da pessoa mais nova")
let yougerPersonAge = prompt("Digite a idade da pessoa mais nova")

let ageDiference = olderPersonAge - yougerPersonAge

alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + yougerPersonAge + "\nIdade: " + yougerPersonAge +
    "\n\nDiferença de idade: " + ageDiference
)