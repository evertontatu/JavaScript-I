import {NegociacaoController} from './controllers/NegociacaoController';
import {} from './polyfill/fetch';

let negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoControler);
document.querySelector('[type=button]').onsubmit = negociacaoController.apaga.bind(negociacaoControler);
