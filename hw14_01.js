/* 1.
Создайте функуцию comparator(a,b), которая принимает 2 строки и возвращает 1 - если первое строка длиннее, -1 если вторая строка длиннее, 0 если равны.
Используйте синтаксис function declaration, вызовите эту фкнкцию и напечатайте резултьаь. Напишите эту эе функцию используя Function ee и Arrow Function
*/

// Function Declaration
function comparator(a, b){
    if (typeof(a)==="string" && typeof(b)==="string" && a.length > b.length){
        return 1;
    } else if (typeof(a)==="string" && typeof(b)==="string" && a.length < b.length){
        return -1;
    } else if (typeof(a)==="string" && typeof(b)==="string" && a.length === b.length) {
        return 0;  
    } else console.log("Ошибка данных! Нужно передать две строки");
}

console.log(comparator("wer","tz"));
console.log(comparator("wer", "tzzui"));
console.log(comparator("wer", "tzu"));
console.log(comparator(1,null));

// Function Expression
console.log("--------Function Expression-------");
const funcComparator2 = comparator;
const res1 = funcComparator2("yx","vbnm");
console.log(res1);

// Arrow Function
console.log("-----------Arrow Function----------");
const arrowFuncComporator3 = (a,b) => comparator(a,b);
const res2 = arrowFuncComporator3("fghjkk", "cvb");
console.log(res2);











