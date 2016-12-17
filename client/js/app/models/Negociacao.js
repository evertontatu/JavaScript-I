class Negociacao {
    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime()); //imutabilidade
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //referencia da data baseada na negociacao, nao altera os dados após
    }

    get quantidade(){
        return this._quantidade; //metodo get para retornar a quantidade
    }

    get valor(){
        return this._valor;
    }

}
