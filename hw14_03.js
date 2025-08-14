/* 3.
Напишите функцию, которая принимает массив и функуию-компаратор, и возвращает самое большое значение в массиве. Вызовите эту функцию, передав ей массив строк, полученный во второйзадаче и функцию, написанную в первой задаче.
*/

function largestValueInArray(array, func) {
    if (typeof(func) === "function"){
        return func(array);
    } else {
        return "Error";
    }
}


function comparator(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        let stringResult = arr[0];
        for (let element of arr) {
            if( typeof(element) === "string" && element.length >= stringResult.length) {
                stringResult = element;
            }
        }
        return stringResult;
    } else {
        return "Ошибка данных. Нет результата с самой длинной строкой"
    }
}

function createArray() {

    let userInput = prompt("Введите строки, разделяя их знаком ; (Пример ввода: Tom;Maxim;Bob;Jack;Ekaterina)")

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

const createdArrFromUser = createArray();
console.log(createdArrFromUser);

let largestString = largestValueInArray(createdArrFromUser, comparator);
console.log(largestString);

