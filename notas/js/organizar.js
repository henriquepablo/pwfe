import { verificaCampos } from "./calculo.js";

const btnOganizarDados = document.querySelector('.btnO');

btnOganizarDados.addEventListener('click', () => {

    const qtdAlunos = document.querySelectorAll('.trbody');

    if(verificaCampos(qtdAlunos) === true) return alert('Algum campo está vázio');

    adicionarDados(qtdAlunos);
    
});

const adicionarDados = (Alunos) => {
    const alunos = [];
    
    const alunosAux = [];
    
    const alunosOrganizado = [];

    for (let i = 0; i < Alunos.length; i++) {
        alunos.push(Alunos[i].children);
    }

    for(let i = 0; i < alunos.length; i++) {   
        alunosAux.push(alunos[i][1].children.item(0).value);
    }

    alunosAux.sort();

    console.log(alunosAux);
    
    let count = 0;
    
    for (let i = 0; i < alunos.length; i++) {
        

        while(alunosAux[i] !== alunos[count][1].children.item(0).value) {
            
            count++;
        }

        alunosOrganizado.push(alunos[count]);
        alunosOrganizado[i][0].value = i + 1;
        
        count = 0;
    }

    // for (let i = 0; i < Alunos.length; i++) {
    //     for (let j = 1; j < Alunos[i].children.length; j++) {
    //         Alunos[i].children.item(j).children.item(0).value = alunosOrganizado[i][j].children.item(0).value;
    //         console.log(alunosOrganizado[i][j].children);
    //     }
    // }


    // for(let i = 0; i < alunosOrganizado.length; i++) {
    //     for (let j = 1; j < alunosOrganizado[i].length; j++) {
    //         console.log(alunosOrganizado[1][1].children.item(0).value);
    //     }
    // }

    // console.log(Alunos[0].children.item(1).children.item(0).value = alunosOrganizado[0][1].children.item(0).value);

    // console.log(Alunos[0].children.item(2).children.item(0).value = alunosOrganizado[0][2].children.item(0).value);

    // console.log(Alunos[1].children.item(1).children.item(0).value = `${alunosOrganizado[1][1].children.item(0).value}`);
    
    // console.log(Alunos[1].children.item(1).children.item(0).value);

    // console.log(alunosOrganizado[1][1].children.item(0).value);

    // for (let value of Alunos) {
    //     value.children.item(1).children.item(0).value;
    // }

    // for(let i = 0; i < alunosOrganizado.length; i++) {
    //     for (let j = 1; j < alunosOrganizado[i].length; j++) {
    //         const dados = alunosOrganizado[i][j].children.item(0);
    //         console.log(dados);
    //     }
    // }

    // for(let i = 0; i < Alunos.length; i++) {
    //     for(let j = 1; j < Alunos[i].children.length; j++) {
            
    //         // console.log(Alunos[i].children.item(j).children.item(0).innerText = alunosOrganizado[i][j].children.item(0).value);
            
    //         console.log(alunosOrganizado[i][j].children.item(0).value = alunosOrganizado[i][j].children.item(0));
    //     }
    // }

    // console.log(alunosOrganizado[1][1].children.item(0).value);

    // console.log(Alunos[0].children.item(1).children.item(0).value = alunosOrganizado[0][1].children.item(0).value);

} 
