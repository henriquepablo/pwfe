const btnRow = document.querySelector('.btnRow');

let countRow = 2;

let countColu = 1;

btnRow.addEventListener('click', () => {
    
    const tbody = document.querySelector('.tbody');

    const tr = document.createElement('tr');

    const th = document.createElement('th');

    const textTh = document.createTextNode(countRow);

    const td = document.createElement('td');

    const input = document.createElement('input');

    input.setAttribute('placeholder', 'nome');

    input.setAttribute('class', 'form-control');

    th.appendChild(textTh);

    tbody.appendChild(tr);

    tr.appendChild(th);

    td.appendChild(input);

    tr.appendChild(td);

    console.log(countRow);

    countRow++;

    if(countRow === 11) btnRow.remove();
});

const btnColu = document.querySelector('.btnColu');

btnColu.addEventListener('click', () => {
    const thMedia = document.querySelector('.thMedia');

    const th = document.createElement('th');

    th.setAttribute('scope', 'col');

    const thText = document.createTextNode(`Nota ${countColu}`);

    th.appendChild(thText);

    document.querySelector('.trHead').insertBefore(th, thMedia);

    const td = document.createElement('td');

    const input = document.createElement('input');

    input.setAttribute('class', 'form-control');

    td.appendChild(input);

    document.querySelector('.trbody').insertBefore(td, document.querySelector('.tes'));

    countColu++;

    if(countColu === 7) btnColu.remove();

});