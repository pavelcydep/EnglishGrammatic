import {
    buttonAgain,
    carusel,
    result,
    antiResult,
    formName,
    form,
    elem,
    question,
    recordApi,
    list,
    table,
    
} from '../../constants/constants';


import {
    myClock,
    pauseClock
} from '../Stopwatch';

/* конфигурация */
let width = 300; 
let count = 1; 
let position = 0; 

const shuffle=(arr)=>{
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
const nextVopros=()=> {
    if(document !== null){
        let listElems = document.querySelectorAll('li');
        let i = 1;
        for(let li of carusel.querySelectorAll('li')) {
          li.style.position = 'relative';
          li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
          i++;
        }
    position -= width * count;

position = Math.max(position, -width * (listElems.length - count));
list.style.marginLeft = position + 'px';
question.answers=[];}
}


const addClicks = () => {
    let currentValue = localStorage.getItem('myClicks1') ? parseInt(localStorage.getItem('myClicks1')) : 0;
    let newValuePlus = currentValue + 1;
    let nameValue = localStorage.getItem('userName');
    result.textContent = nameValue+', ваш результат:' + newValuePlus + ' правильных ответа';
    localStorage.setItem('myClicks1', newValuePlus);
}

const removeClics = () => {
    let currentValue = localStorage.getItem('myClicks2') ? parseInt(localStorage.getItem('myClicks2')) : 0;
    let newValueMinus = currentValue + 1;
    let nameValue = localStorage.getItem('userName');
    antiResult.textContent = nameValue+ ', ваш результат:' + newValueMinus + 'неправильных ответов';
    localStorage.setItem('myClicks2', newValueMinus);
}



    const stepClicks = () => {
        let currentValue = localStorage.getItem('test') ? parseInt(localStorage.getItem('test')) : 0;
        let newValue = currentValue + 1;
        localStorage.setItem('test', newValue);
        if (newValue >= 10) {
            pauseClock();
            carusel.classList.add('display-none');
            carusel.classList.remove('carousel');
            result.classList.remove('display-none');
            buttonAgain.classList.remove('display-none');
            postApi();
            table.classList.remove('display-none');
        } else {
            setTimeout(nextVopros, 2000);
        }
    }
const clearedStorage = () => {
        localStorage.clear();
        location.reload();
       
    }
    const postApi=()=>{
        let user = {
            name: localStorage.getItem('userName'),
            scores:localStorage.getItem('myClicks1') ? parseInt(localStorage.getItem('myClicks1')) : 0,
            time: localStorage.getItem('timeSpent')
          };
          recordApi.postApi(user);
         }
         const sendForm=(evt)=> {
            evt.preventDefault();
            let userName= elem.value;
            localStorage.setItem('userName',userName );
            myClock();
            formName.classList.add('display-none');
            carusel.classList.add('carousel');
            form.reset();
        }


  export {
    shuffle,
    nextVopros,
    addClicks,
    removeClics,
    stepClicks,
    clearedStorage,
    sendForm
} 