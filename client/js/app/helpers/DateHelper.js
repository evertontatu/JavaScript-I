class DateHelper{

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){ //metodo static que pertencem a definicao da classe, evita ter que instanciar uma classe
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`; //template string para concatenar com a expressão `${variavel} texto corrido ${outra variavel}`
    }

    static textoParaData(texto){

        if (!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');  //se o texto fornecido nao segue o padrao ano-mes-dia então exime mensagem de erro
        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
    }

}
