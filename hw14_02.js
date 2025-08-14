/* 2.
Создайте функцию, которая используя prompt позволяет пользователю ввести строки и формирует массив из этих строк. Если пользователь в форме нажал отказаться это означает конец ввода. Пустые строки не должны попадать в итоговый массив. В качестве результата фугкция долюна вернуть сформированный массив строк.
*/

function createArray() {

    let userInput = prompt("Введите строки, разделяя их знаком ; (Пример ввода: Tom;Max;Bob;Jack)")

    if (userInput !== null && userInput.trim() !== "") {

        let arrayUser = userInput.split(";");
        console.log(arrayUser);

        let arrayStrings = [];
        for (let element of arrayUser) {
            element = element.replace(/["',]/g, "");
            arrayStrings.push(element.trim());
        }
        console.log(arrayStrings);
        return arrayStrings;

    } else {
        console.log("Ошибка ввода!");
        return [];
    }
}

let res1 = createArray();
console.log(res1);



