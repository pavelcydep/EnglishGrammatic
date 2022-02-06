let time1 = new Date();
let time2 = 0;
let time3 = 0;
let time4 = 0;
let time5 = 0;
let time6 = 0;
let pause = 0;
const myClock =()=>
{
 time2 = new Date();
time3 = new Date();
const strings = '';
if (pause > 0)
{
     time5 = time2*1 + time2.getTimezoneOffset()*60000 - time1 - time4;
    time2 = new Date(time4);
}
else
{
    time2.setTime(time3 - time1 - time5 + time2.getTimezoneOffset()*60000);
    time4 = time2;
}
time6 = new Date(time3 - time1 + time2.getTimezoneOffset()*60000);

}
const pauseClock=()=>
{
    pause = (pause > 0 ? 0 : 1);
     let timeSpent =  time2.toLocaleTimeString();
     localStorage.setItem('timeSpent',timeSpent );
    
}
export {
    myClock,
    pauseClock

}