const result = document.querySelector('#resultado');

document.querySelector('body').addEventListener('click', 
    (e) => {
        const el = e.target;

        if(el.classList.contains('number')) result.innerText += el.value;

        if(el.classList.contains('operator')) result.innerText += el.value;

        if(el.value === 'x') result.innerText += '*';

        if(el.classList.contains('vir')) result.innerText += '.';

        if(el.classList.contains('del')) result.innerText = '';

        if(el.classList.contains('equal')) calculation();
});

const calculation = () => {
    
    if(!result.innerText) {
        result.innerText = 'Informe um valor a ser calculado';

        return setTimeout(() => {
            result.innerText = '';
        }, 3000);
    }

    for(let i = 0; i < result.innerText.length; i++) {
        if(result.innerText[i] === '/' && result.innerText[i + 1] === '0') {
            
            result.innerText = 'Não é possível dividir por 0';

            return setTimeout(() => {
                result.innerText = '';
            }, 3000);
        }
    }

    result.innerText = eval(`${result.innerText}`);

}