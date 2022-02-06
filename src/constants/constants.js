import Api from '../components/Api';
const question={answers:[]}
const taskApi = new Api('https://617e6ebc2ff7e600174bd7c2.mockapi.io/english');
const recordApi = new Api('https://617e6ebc2ff7e600174bd7c2.mockapi.io/record');
const buttonAgain =document.querySelector('.button-again');
const carusel= document.getElementById('carousel');
const result = document.querySelector('.result');
const antiResult = document.querySelector('.anti-result');
const formName = document.querySelector('.formName');
const form = document.forms.user; 
const elem = form.elements.name; 
const table = document.querySelector('.table'),
tbody = table.tBodies[0];
let list = carusel.querySelector('ul');
export {
    buttonAgain,
    carusel,
    result,
    antiResult,
    formName,
    form,
    elem,
    question,
    taskApi,
    recordApi,
    list,
    table,
    tbody
};