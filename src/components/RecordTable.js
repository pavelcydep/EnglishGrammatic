import{
    recordApi,
    tbody
} from '../constants/constants';

const renderTable = () => {
    recordApi.getApi().then(json =>
       json.forEach(function (item) {
        const tr = tbody.insertRow();
        tr.insertCell().textContent = item.name;
        tr.insertCell().textContent =  item.scores ;
        tr.insertCell().textContent = item.time+`(чч: мм: сс)`;
       }) 
    )}
    export {
        renderTable
    }