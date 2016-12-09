var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody'); //buscando tbody
//adicionando um evento ao formulário quando for submetido
document.querySelector('.form').addEventListener('submit', function(event){

    event.preventDefault(); //impedindo que o navegador regarregue a pagina

    //criando um elemnto tr
    var tr = document.createElement('tr');

    //varrendo o array campos
    campos.forEach(function(campo){
        var td = document.createElement('td'); //criando um elemento td
        td.textContent = campo.value; //adcionando o valor a td
        tr.appendChild(td); //adicionando td como filho da tr

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    //limpando o formulário
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus(); //adicionando focus no campo de data
});
