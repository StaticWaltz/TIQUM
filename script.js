//Нужно написать функцию, которая проверяет,
// являются ли две строки анаграммами,
// причем регистр букв не имеет значения.
// Учитываются лишь символы;
// пробелы или знаки препинания в расчет не берутся.

const buildCharObject = (str) => {
    return str.toLowerCase().split('').reduce((acc, elem) =>{
        acc[elem] = (acc[elem] || 0) + 1;
        return acc
    }, {})
}

const anagramm = (strA, strB) =>{
    const aCharObj = buildCharObject(strA);
    const bCharObj = buildCharObject(strB);

    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
        return false
    }
    for (let char in aCharObj){
        if (aCharObj[char] !== bCharObj[char]){
            return false
        }
    }
    return true
}

const anagramm2 = (strA, strB) => {
    let a = strA.toLowerCase();
    let b = strB.toLowerCase();
    a = a.split("").sort();
    b = b.split("").sort();

    return a.join("") === b.join("");
}

//Ну здесь 2 решения, второе простое - основанное на сортировке, первое - интересное
//я написал функцию - преобразующую строку в объект - в которой ключ - это буква, а значение
// это колличество раз когда буква встречается. Затем перебрал и сравнил.


//Нужно написать функцию,
// принимающую строку в качестве аргумента
// и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

const findVowels = (str) =>{
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

//Решение классное, потому что без регулярок - нужно заводить массив гласных, потом перебирать слова
// и проверять наличие, затем считать колличество глассных в счетчике. В то время как в регулярке -
// мы указываем символы, флаг глобал и отключаем регистр
// и сопостовляем через match и выводим колличество сопоставлений.



//Напишите асинхронную функцию,
// которая принимает массив промисов
// и возвращает массив результатов вызова этих промисов.

const promiseAll = (promises) => {
    if (!promises.length) return Promise.resolve([]);
    return new Promise((resolve, reject)=>{
        let result = [];
        promises.forEach((elem, index)=>{
            elem.then((res)=>{
                result[index] = res
            })
                .then(()=>{
                    if (--promises.length === 0) {
                        resolve(result);
                    }
                })
                .catch(reject)
        })
    })
}

//Из за того что пушу в массив выполненые промисы в микротасках - результат гарантированно вернет уже
//выполненные промиссы.


// Напишите функцию, которая принимает первым параметром объект,
// вторым - массив по которому нужно пройти, чтобы получить значение.
// Если какое-то из свойств не найдено - функция возвращает undefined.

function optionalChaining (obj, chain) {
    if (!obj) {
        return undefined
    }
    if (chain.length == 1) {
        return obj[chain[0]]
    }
    return optionalChaining(obj[chain[0]], chain.slice(1));
}


// Задача по проходу в объект по заданному пути -
// решил писать рекурсию вместо цикла - потому что так очевиднее.



//Есть строка с большим кол-вом слов через запятую
// (например: "кошка,собака,лошадь,корова,кошка...").
// Известно, что в строке встречаются повторяющиеся слова.
// Нужно написать функцию на JS. На вход передаются строка с дублями,
// а на выходе мы получаем строку без дублей.


const deleteDouble = (str) =>{
    const set = new Set(str.split(','));
    const result = Array.from(set).join(',');
    return result;
}

const deleteDouble2 = (str) => {
    const res = str.split(',').reduce((acc, elem)=>{
        if (!acc.includes(elem)){
            acc.push(elem)
        }
        return acc;

    }, [])
    return res.join(',')
}

// 2 решения одно через сущность Set второе через метод reduce