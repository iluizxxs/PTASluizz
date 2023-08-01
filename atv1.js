class Pessoa{
    constructor(nome,data_Nascimento,altura){
        this.nome = nome;
        this.data_Nascimento = data_Nascimento;
        this.altura = altura
    }

    //mostra dados
mostrar_dados(){
    return this.nome + "" + this.data_Nascimento + "" + this.altura
}

//calcula idade
calcula_idade(){
    let nascido = this.data_Nascimento.split("/")[2];
    return (2023 - nascido)
}
}


const pessoa = new Pessoa("Luiz Carlos","10/05/2006", 1.86)
console.log(pessoa.calcula_idade())
console.log(pessoa.mostrar_dados())