btn.addEventListener('click', calc)

function calc() {
    value1 = Number(input1.value)
    value2 = Number(input2.value)

    if (act.value == '+') {
        res = value1 + value2
    }
    if (act.value == '-') {
        res = value1 - value2
    }
    if (act.value == '*') {
        res = value1 * value2
    }
    if (act.value == '/') {
        res = value1 / value2
    }

    result.innerHTML = res
}
