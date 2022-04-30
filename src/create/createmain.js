export function createMain(){
    let main = document.createElement('main');
    document.body.appendChild(main);
    let container = document.createElement('div');
    container.className = "container";
    main.appendChild(container);
    createMainContent(container)
}



export function createMainContent(container){
    let maincontent = document.createElement('div');
    maincontent.className = "calculator_div";
    container.appendChild(maincontent);

    let result = document.createElement('input');
    result.setAttribute("placeholder","Calculator");
    result.className = "result";
    result.id = "result";
    maincontent.appendChild(result);

    let btndiv = document.createElement('div');
    btndiv.className = "btndiv";
    maincontent.appendChild(btndiv);

    let numbers = document.createElement('div');
    numbers.className = "flex_column";
    btndiv.appendChild(numbers);

    let numbersdiv = document.createElement('div');
    numbersdiv.className = "numbersdiv";
    numbers.appendChild(numbersdiv);

    const btnc = document.createElement('button');
    btnc.innerHTML = "C";
    btnc.value = "C";
    btnc.className = "numberbutton orange";
    numbersdiv.appendChild(btnc);

    const btndel = document.createElement('button');
    btndel.innerHTML = "Del";
    btndel.value = "Del";
    btndel.className = "numberbutton orange";
    numbersdiv.appendChild(btndel);

    const btnpercent = document.createElement('button');
    btnpercent.innerHTML = "%";
    btnpercent.value = "%";
    btnpercent.className = "numberbutton orange";
    numbersdiv.appendChild(btnpercent);

    const btndivide = document.createElement('button');
    btndivide.innerHTML = "&#247";
    btndivide.value = "/";
    btndivide.className = "numberbutton orange";
    numbersdiv.appendChild(btndivide);

    let numbersdiv1 = document.createElement('div');
    numbersdiv1.className = "numbersdiv";
    numbers.appendChild(numbersdiv1);

    const btn7 = document.createElement('button');
    btn7.innerHTML = "7";
    btn7.value = "7";
    btn7.className = "numberbutton";
    numbersdiv1.appendChild(btn7);

    const btn8 = document.createElement('button');
    btn8.innerHTML = "8";
    btn8.value = "8";
    btn8.className = "numberbutton";
    numbersdiv1.appendChild(btn8);

    const btn9 = document.createElement('button');
    btn9.innerHTML = "9";
    btn9.value = "9";
    btn9.className = "numberbutton";
    numbersdiv1.appendChild(btn9);

    const btnmultiply = document.createElement('button');
    btnmultiply.innerHTML = "&times";
    btnmultiply.value = "*";
    btnmultiply.className = "numberbutton orange";
    numbersdiv1.appendChild(btnmultiply);

    const numbersdiv3 = document.createElement('div');
    numbersdiv3.className = "numbersdiv";
    numbers.appendChild(numbersdiv3);

    const btn4 = document.createElement('button');
    btn4.innerHTML = "4";
    btn4.value = "4";
    btn4.className = "numberbutton";
    numbersdiv3.appendChild(btn4);

    const btn5 = document.createElement('button');
    btn5.innerHTML = "5";
    btn5.value = "5";
    btn5.className = "numberbutton";
    numbersdiv3.appendChild(btn5);

    const btn6 = document.createElement('button');
    btn6.innerHTML = "6";
    btn6.value = "6";
    btn6.className = "numberbutton";
    numbersdiv3.appendChild(btn6);

    const btnminus = document.createElement('button');
    btnminus.innerHTML = "-";
    btnminus.value = "-";
    btnminus.className = "numberbutton orange";
    numbersdiv3.appendChild(btnminus);

    const numbersdiv4 = document.createElement('div');
    numbersdiv4.className = "numbersdiv";
    numbers.appendChild(numbersdiv4);

    const btn1 = document.createElement('button');
    btn1.innerHTML = "1";
    btn1.value = "1";
    btn1.className = "numberbutton";
    numbersdiv4.appendChild(btn1);

    const btn2 = document.createElement('button');
    btn2.innerHTML = "2";
    btn2.value = "2";
    btn2.className = "numberbutton";
    numbersdiv4.appendChild(btn2);

    const btn3 = document.createElement('button');
    btn3.innerHTML = "3";
    btn3.value = "3";
    btn3.className = "numberbutton";
    numbersdiv4.appendChild(btn3);

    const btnplus = document.createElement('button');
    btnplus.innerHTML = "+";
    btnplus.value = "+";
    btnplus.className = "numberbutton orange";
    numbersdiv4.appendChild(btnplus);

    const numbersdiv5 = document.createElement('div');
    numbersdiv5.className = "numbersdiv";
    numbers.appendChild(numbersdiv5);

    const btne = document.createElement('button');
    btne.innerHTML = "e";
    btne.value = "3.14";
    btne.className = "numberbutton";
    numbersdiv5.appendChild(btne);

    const btn0 = document.createElement('button');
    btn0.innerHTML = "0";
    btn0.value = "0";
    btn0.className = "numberbutton";
    numbersdiv5.appendChild(btn0);

    const btntochka = document.createElement('button');
    btntochka.innerHTML = ",";
    btntochka.value = ".";
    btntochka.className = "numberbutton";
    numbersdiv5.appendChild(btntochka);

    const btnequals = document.createElement('button');
    btnequals.innerHTML = "=";
    btnequals.value = "=";
    btnequals.className = "numberbutton orange_backgr";
    numbersdiv5.appendChild(btnequals);
}

