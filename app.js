import declarationGFO from './declarationGFO.js';
import poa from './poa.js';
import declaration13 from './declaration13.js';

const input = {
    companyName: document.querySelector('#companyName'),
    eik: document.querySelector('#eik'),
    egn: document.querySelector('#managerEgn'),
    manager: document.querySelector('#manager')
};

const buttons = {
    genButton: document.querySelector('#genButton'),
    clearButton: document.querySelector('#clearButton')
}

buttons.genButton.addEventListener('click', generateDocuments);
buttons.clearButton.addEventListener('click', clearInput);

const textarea = {
    declaration: document.querySelector('#declaration'),
    poa: document.querySelector('#poa'),
    declaration13: document.querySelector('#declaration13')
};

function generateDocuments() {
    const company = input.companyName.value;
    const eik = input.eik.value;
    const egn = input.egn.value;
    const manager = input.manager.value;

    if (eik.length != 9) {
        alert("ЕИК Трябва да съдъръжа 9 цифри");
    } else if (egn.length !== 10) {
        alert("ЕГН Трябва да съдъръжа 10 цифри");
    } else {
        textarea.declaration.textContent = declarationGFO(company, eik, egn, manager);
        textarea.poa.textContent = poa(company, eik, egn, manager);
        textarea.declaration13.textContent = declaration13(company, eik, egn, manager);
    }

}

function clearInput() {
    textarea.declaration.textContent = '';
    textarea.poa.textContent = '';
    textarea.declaration13.textContent = '';
    input.companyName.value = '';
    input.eik.value = '';
    input.egn.value = '';
    input.manager.value = '';
}


