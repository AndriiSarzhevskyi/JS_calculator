export function createDropMenu(header){
    let dropdown = document.createElement('div');
    dropdown.className = "dropdown";
    let dropbtn = document.createElement('button');
    dropbtn.className = "dropbtn";
    //dropbtn.setAttribute("onclick","myFunction()");
    dropbtn.innerHTML = "Menu";
    let i = document.createElement('i');
    i.className = "fa fa-caret-down";
    let menu = document.createElement('div');
    menu.className = "dropdown-content";
    menu.setAttribute("id","myDropdown");
    let a1 = document.createElement('a');
    let a2 = document.createElement('a');
    a1.innerHTML = "Lab2";
    a1.href = "file:///E:/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/JS/Lab2/index.html";
    a2.innerHTML = "Lab3";
    a2.href = "file:///E:/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/JS/Lab3/index.html";
    header.appendChild(dropdown);
    dropdown.appendChild(dropbtn);
    dropbtn.appendChild(i);
    dropdown.appendChild(menu);
    menu.appendChild(a1);
    menu.appendChild(a2);
}

export function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


