export class Negociacao {
    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime()); //imutabilidade, atributo privado
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congelar o objeto após a criação, não podem alterar, shalow
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime()); //referencia da data baseada na negociacao,
    }

    get quantidade(){
        return this._quantidade; //metodo get para retornar a quantidade, imutabilidade atributo privado
    }

    get valor(){
        return this._valor;
    }

}
