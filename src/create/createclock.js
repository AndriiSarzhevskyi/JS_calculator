export function createClock(header){
    let clock = document.createElement('div');
    clock.className = "clock";
    let ul = document.createElement('ul');
    let hours = document.createElement('li');
    hours.setAttribute("id","hours");
    let separator1 = document.createElement('li');
    separator1.setAttribute("id","separator");
    let separator2 = document.createElement('li');
    separator2.setAttribute("id","separator");
    let minutes = document.createElement('li');
    minutes.setAttribute("id","minutes");
    let seconds = document.createElement('li');
    seconds.setAttribute("id","seconds");
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    separator1.innerHTML = ":";
    separator2.innerHTML = ":";
    header.appendChild(clock);
    clock.appendChild(ul);
    ul.appendChild(hours);
    ul.appendChild(separator1);
    ul.appendChild(minutes);
    ul.appendChild(separator2);
    ul.appendChild(seconds);
}