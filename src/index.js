import "./index.css"; 

import { 
    buttonAgain,
    form,
    question,
    taskApi,
    list,
    
    
} from './constants/constants';
import{
    renderTable
} from './components/RecordTable';

import{
    shuffle,
    sendForm,
    addClicks,
    removeClics,
    stepClicks,
    clearedStorage
} from './components/utils/utils'

buttonAgain.addEventListener("click",clearedStorage);

const checkAnswers = (a, b) => {
    return a.map((item, idx) => item === b[idx]);
}

const renderCard = (
    questionsRus,
    buttonTextVariant1,
    buttonTextVariant2,
    buttonTextVariant3,
    questionsEng,
    imageLink
    ) => {
    const placeCard = document.createElement('li');
    const image= document.createElement('div');
    const testContainer= document.createElement('div');
    const vopros= document.createElement('div');
    const voprosText= document.createElement('div');
   const otvetProverka = document.createElement('div');
   image.setAttribute('style', `background-image:url(${imageLink})`);


    const otvetVariant= document.createElement('div');
    const text1= document.createElement('p');
    const text2= document.createElement('p');
    const text3= document.createElement('p');

   const otvet= document.createElement('div');
   const text4 = document.createElement('button');
   const text5 = document.createElement('button');
   const text6 = document.createElement('button');

  const buttonProverka= document.createElement('button');
  buttonProverka.textContent="проверить"
    //Классы
    //placeCard.classList.add('place-card');
    image.classList.add('image');
    testContainer.classList.add('test-container');
    vopros.classList.add('vopros');
    voprosText.classList.add('vopros');
    otvetVariant.classList.add("otvet-variant");

    text1.classList.add("display-none","btn","btn-margin","btn-primary");
    text2.classList.add("display-none","btn","btn-margin","btn-primary");
    text3.classList.add("display-none","btn","btn-margin","btn-primary");


    text4.classList.add("btn","btn-margin","btn-warning");
    text5.classList.add("btn","btn-margin","btn-warning");
    text6.classList.add("btn","btn-margin","btn-warning");
    buttonProverka.classList.add("btn","btn-success");
    otvet.classList.add('otvet');
    otvetProverka.classList.add("otvet-proverka");

    placeCard.appendChild(image);
    placeCard.appendChild(testContainer);
    testContainer.appendChild(vopros);
    testContainer.appendChild(voprosText);

    testContainer.appendChild(otvetVariant);
    otvetVariant.appendChild(text1);
    otvetVariant.appendChild(text2);
    otvetVariant.appendChild(text3);

    testContainer.appendChild(otvet);
    otvet.appendChild(text4);
    otvet.appendChild(text5);
    otvet.appendChild(text6);

    testContainer.appendChild(otvetProverka);
    otvetProverka.appendChild(buttonProverka);

    voprosText.textContent =questionsRus;
               text4.textContent =buttonTextVariant1;
               text5.textContent = buttonTextVariant2;
               text6.textContent = buttonTextVariant3;

                const pushed1 = () => {
                    let res = question.answers.push(buttonTextVariant1);
                    text1.textContent = buttonTextVariant1;
                    text4.classList.add("display-none")
                    text1.classList.remove("display-none");
                    otvetVariant.appendChild(text1);
                    return res;
                }
                const pushed2 = () => {
                    let res = question.answers.push(buttonTextVariant2);
                    text2.textContent = buttonTextVariant2;
                    text5.classList.add("display-none");
                    text2.classList.remove("display-none");
                    otvetVariant.appendChild(text2);
                    return res;
                }

                const pushed3 = () => {
                    let res = question.answers.push(buttonTextVariant3);
                    text3.textContent = buttonTextVariant3;
                    text6.classList.add("display-none");
                    text3.classList.remove("display-none");
                    otvetVariant.appendChild(text3);
                    return res;
                }



               text4.addEventListener("click", pushed1);
               text5.addEventListener("click", pushed2);
               text6.addEventListener("click", pushed3);

                const proverka= () => {
                    let res = checkAnswers(question.answers, questionsEng);

                    if (question.answers.length !== 3) {
                        buttonProverka.setAttribute("disabled", "disabled");
                        alert('Составьте предложение полностью')
                    }
                    if (question.answers.length === 3) {
                        if ((res[0] && res[1] && res[2]) === false) {
                            removeClics();
                        } else {
                            addClicks();
                        }
                        if (res[0] === false) {

                            text1.classList.add('btn-danger');
                        } else {

                            text1.classList.add('btn-success');
                        };

                        if (res[1] === false) {
                            text2.classList.add('btn-danger');
                        } else {
                            text2.classList.add('btn-success')
                        };
                        if (res[2] === false) {
                            text3.classList.add('btn-danger')
                        } else {
                            text3.classList.add('btn-success')
                        };
                        text1.classList.remove('btn-warning');
                        text2.classList.remove('btn-warning');
                        text3.classList.remove('btn-warning');

                        stepClicks();
                    }

                }

                buttonProverka.addEventListener("click", proverka);
return placeCard;
            }
const shewCards=()=>{
taskApi.getApi()
.then(json =>
    shuffle(json).forEach(function (item) {
       
     card(item.questionsRus,
        item.buttonTextVariant[0],
        item.buttonTextVariant[1],
        item.buttonTextVariant[2],
        item.questionsEng,
        item.imageLink);
   
    }))
  }
  shewCards();
  function card(
    questionsRus,
  buttonTextVariant1,
  buttonTextVariant2,
  buttonTextVariant3,
  questionsEng,
  imageLink
  ){
const placeCard = renderCard(
    questionsRus,
  buttonTextVariant1,
  buttonTextVariant2,
  buttonTextVariant3,
  questionsEng,
  imageLink);
  list.appendChild(placeCard);}
form.addEventListener('submit', sendForm);
renderTable();

