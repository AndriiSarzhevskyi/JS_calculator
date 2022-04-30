import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

export function calc(value) {
    const output = document.getElementById("result");
    console.log(output.value);
    console.log(value);

    console.log("calc");
    if (value.match(/=|Enter/)) {
        console.log("=");
        try {
            console.log("= try");
            output.value = math.evaluate(output.value);
        } catch {
            console.log("= catch");
            let oldValue = output.value
            let newValue = 'недопустимое выражение'
            output.value = newValue
            setTimeout(() => {
                output.value = oldValue
            }, 1500)
        }
    } else if (value === 'C') {
        console.log("C");
        output.value = ''

    } else if (value.match(/Del|Backspace/)) {
        console.log("CE");
        output.value = output.value.substring(0, output.value.length - 1)

    } else {
        console.log("else");
        output.value +=value; 

    }
}
