class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //atribuindo ao $ a funcao de executar o querySelector ainda respondendo a document e nao ao contexto do $

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault(); //nao permite que o navegador atualize após o submit do form

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

    }
}
