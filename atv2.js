class Aluno{
    constructor(nome, matricula ,nota, nota2, notaTrabalho){
      this.nome = nome
      this.matricula = matricula
      this.nota = nota
      this.nota2 = nota2
      this.notaTrabalho = notaTrabalho
  }
    imprimir_dados(){
      return this.nome + " " + this.matricula + " " + this.nota + " " + this.nota2 + " " + this.notaTrabalho
    }
  
    media(){
      return ((this.nota*0.25) + (this.nota2*0.25) + (this.notaTrabalho*0.2))
    }
    final(){
      if (aluno.media() < 6){
        return "O Aluno precisa de"+ (6-aluno.media()).toFixed(2)+"para passar.";
      }
      else{
      return "O Aluno precisa de "+ 0 +" para passar.";
      }
    }
}
  const aluno = new Aluno("Luiz Carlos","0000000",7,9,7)
    console.log(aluno.imprimir_dados())
    console.log(aluno.media())
    console.log(aluno.final())