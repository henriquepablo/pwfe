const special = document.querySelector('#special');

const number = document.querySelector('#number');

const upperCase = document.querySelector('#upperCase');

const mensagem = document.querySelector('.mensagem');

const options = [
    
    ['!', '@', '#', '$', '%', '&', '*'], 
    
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
];

const answer = document.querySelector('#answer');

const gerar = document.querySelector('.gerar').addEventListener('click', () => {

    verificaOpcoes();
});


const btn = document.querySelector('.butt').addEventListener('click', () => {
    clean();
});

const clean = () => {
    answer.innerText = '';
}

const verificaOpcoes = () => {
    if(!special.checked && !number.checked && !upperCase.checked) {
        mensagem.classList.add('hidden');

        setTimeout(() => {
            mensagem.classList.remove('hidden');
        }, 4000);

        return mensagem.innerText = 'Selecione ao menos uma opção';     
    }

    const pswLenght = Number(document.querySelector('#pswLeght').value);

    const pswQuantity = Number(document.querySelector('#pswQtd').value);

    if(!pswLenght || !pswQuantity) {

        mensagem.classList.add('hidden');

        setTimeout(() => {
            mensagem.classList.remove('hidden');
        }, 4000);

        return mensagem.innerText = 'Informe o tamanho da senha e a quantidade';  
    }

    if(special.checked && !number.checked && !upperCase.checked) generatorSpecials(pswLenght, pswQuantity);

    else if(number.checked && !special.checked && !upperCase.checked) generatorNumber(pswLenght, pswQuantity);

    else if(upperCase.checked && !special.checked && !number.checked) generatorLeters(pswLenght, pswQuantity);

    else if(special.checked && number.checked && !upperCase.checked) generatorSpeAndNumb(pswLenght, pswQuantity);

    else if(special.checked && !number.checked && upperCase.checked) generatorSpeAndLett(pswLenght, pswQuantity);

    else if(number.checked && upperCase.checked && !special.checked) generatorNumbAndLett(pswLenght, pswQuantity);

    else generatorSpeNumbAndLett(pswLenght, pswQuantity);
}

const generatorSpecials = (pswL, pswQ) => {
    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
                
            k === pswL - 1 ? answer.innerHTML += `${options[0][Math.floor(Math.random() * (options[0].length))]} <br>` : 
            answer.innerHTML += `${options[0][Math.floor(Math.random() * (options[0].length))]}`;            
        }
    }
}

const generatorNumber = (pswL, pswQ) => {
    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
                
            k === pswL - 1 ? answer.innerHTML += `${options[1][Math.floor(Math.random() * (options[1].length))]} <br>` : 
            answer.innerHTML += `${options[1][Math.floor(Math.random() * (options[1].length))]}`;            
        }
    }
}

const generatorLeters = (pswL, pswQ) => {
    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
                
            k === pswL - 1 ? answer.innerHTML += `${options[2][Math.floor(Math.random() * (options[2].length))]} <br>` : 
            answer.innerHTML += `${options[2][Math.floor(Math.random() * (options[2].length))]}`;            
        }
    }
}

const generatorSpeAndNumb = async (pswL, pswQ) => {

    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
            const rand = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
            
            k === pswL - 1 ? answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]} <br>` : 
            answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]}`;            
        }
    }
}

const generatorSpeAndLett = (pswL, pswQ) => {

    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
            let rand = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
            
            while(rand === 1) rand = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
            
            k === pswL - 1 ? answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]} <br>` : 
            answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]}`;            
        }
    }
}

const generatorNumbAndLett = (pswL, pswQ) => {
    
    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
            let rand = Math.floor(Math.random() * (2 - 1 + 1) ) + 1;
            
            while(rand === 0) rand = Math.floor(Math.random() * (2 - 1 + 1) ) + 1;
            
            console.log(rand);

            k === pswL - 1 ? answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]} <br>` : 
            answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]}`;            
        }
    }
}

const generatorSpeNumbAndLett = (pswL, pswQ) => {
    for(let i = 0; i < pswQ; i++) {
        for(let k = 0; k < pswL; k++) {
            let rand = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;

            k === pswL - 1 ? answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]} <br>` : 
            answer.innerHTML += `${options[rand][Math.floor(Math.random() * (options[rand].length))]}`;            
        }
    }
}