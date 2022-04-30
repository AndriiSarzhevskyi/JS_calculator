import {createClock} from 'Create/createclock.js';
import {createDropMenu} from 'Create/createdropmenu.js';

export function createHeader(){
    let header = document.createElement('header');
    let h1 = document.createElement('h1');
    h1.innerHTML = "Lab by Sarzhevskiy Andrii KN-319A";
    document.body.appendChild(header);
    createClock(header);
    header.appendChild(h1);
    createDropMenu(header);
}