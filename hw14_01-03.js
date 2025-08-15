/*
1. Создайте фуеуцию comparator(a,b), которая принимает 2 строки и возвращает 1 - если первое строка длиннее, -1 если вторая строка длиннее, 0 если равны.
Используйте синтаксис function declaration, вызовите эту фкнкцию и напечатайте резултьаь. Напишите эту эе функцию используя Function Expression и Arrow Function
2. Создайте функцию, которая используя prompt позволяет пользователю ввести строки и формирует массив из этих строк. Если пользователь в форме нажал отказаться это означает конец ввода. Пустые строки не должны попадать в итоговый массив. В качестве результата фугкция долюна вернуть сформированный массив строк.
3. Напишите функцию, которая принимает массив и функуию-компаратор, и возвращает самое большое значение в массиве. Вызовите эту функцию, передав ей массив строк, полученный во второйзадаче и функцию, написанную в первой задаче.
*/

console.log(comparator("Tim", "Anna"));
console.log(comparator("Anna", "Tim"));
console.log(comparator("Tim", "Tim"));
console.log(comparator(null, 1));

const array = createArray();
console.log(array);

let longestStrElement = maxElement(array,comparator);
console.log(longestStrElement);
  

function comparator(str1, str2) {
    if (typeof (str1) !== "string" || typeof (str2) !== "string") {
        return "error"
    }
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else return 0;
}

function createArray() {
    const arrayUser = [];
    let inputUser;
    while (true) {
        inputUser = prompt("введите очередную строку: ");
        if (inputUser === null) {
            break;
        }
        if (inputUser.trim() !== "") {
            arrayUser.push(inputUser);
        }
    }
    return arrayUser;
}

function maxElement(array,comparator) {
    if (!Array.isArray(array) || array.length===0 || typeof(comparator)!== "function") {
         return "некорректные данные";
    } 

    let resultElement = array[0];
    for(let everyElement of array){
        if (comparator(everyElement, resultElement) > 0){
            resultElement = everyElement;
        }
    }
    return resultElement;
}





