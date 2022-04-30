import {createPage} from 'Create/createpage.js';
import {calc} from 'Util/calculator.js';
import {myFunction} from 'Create/createdropmenu.js';
import './styles/styles.css';

window.onload = function(){
    createPage();
    setInterval(function() {
        let seconds = new Date().getSeconds();
        document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;
    
        let minutes = new Date().getMinutes();
        document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
    
        let hours = new Date().getHours();
        document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
      }, 1000);      
    let i = 0;

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function () {
            calc(this.value)
        })
    })

    document.addEventListener('keydown', event => {
        if ((event.key).match(/=|Backspace|Enter/)) calc(event.key)
    })
    document.querySelectorAll(".dropbtn").forEach( button => {
        button.addEventListener('click', function(){
          myFunction();
        })
    })
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

const nofantasy = { a: { b: { c: 1 } } };
console.log(nofantasy?.a?.b?.c);