const person = {
  name: "Dmitriy",
  age: 27,
  isProgrammer: true,
  languages: ["ru", "en"],
  "complex key": "Complex value",
  ["key_" + (1 + 3)]: "Computed Key",
  greet() {
    console.log("greet from person");
  },
  info() {
    console.info("Информация про человека по имени:", this.name);
  },
};

/*
console.log(person.name);
const ageKey = "age";
console.log(person["age"]);
console.log(person[ageKey]);
console.log(person["complex key"]);

person.age++;
person.languages.push("de");
person.greet();

delete person["key_4"];

console.log(person);
*/
//пример деструктуризации:
const { name, age: personAge = 10, languages } = person;
// Создались переменные с именами идентичными именам свойств
// свойство age запишется в переменную personAge (сами так захотели и сделали)
// после знака равно указано значение по умолчанию, на случай если не определено значение свойства
console.log(name, personAge, languages);

/*
// Цикл выводит пары ключ-значение
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    //проверка своего собственного свойства, т.е. свойства не находящегося в прототипе
    console.log("key:", key);
    console.log("value:", person[key]);
  }
}
*/

/*

//Object - глобальный объект с набором полезных свойств и методов
//key(person) - метод возвращает имена свойст объекта в скобках в виде массива
//forEach - метод массива - делает итерацию (проходит по массиву)
// в нашем случае forEach вызывает колбэк функцию кажду итерацию


Object.keys(person).forEach((key) => {
  console.log("key:", key);
  console.log("value:", person[key]);
});
*/

const logger = {
  keys() {
    console.log("Object Keys: ", Object.keys(this));
  },
  keysAndValue() {
    //"key" : value
    Object.keys(this).forEach((key) => {
      console.log("key:", key, "value:", this[key]);
    });
  },
  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("----- Start -----");
    }
    Object.keys(this).forEach((key, index, array) => {
      //добавили параметры к forEach чтобы исключить последние -------
      console.log(`${key}: ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("----------");
      }
    });
    if (bottom) {
      console.log("----- End -----");
    }
  },
};
/*
logger.keys(person);
//метод bind помещает на место this объект в скобках
//таким образом можем применить метод одного объекта (в нашем случае метод keys объекта logger) к другому объекту
const bound = logger.keys.bind(person);
bound();
//logger.keys.call(person) //тоже самое. НО! bind создает функцию для нового объекта, потом можно ее вызвать, а call только вызывает

logger.keysAndValue();
logger.keysAndValue.call(person);

//Стрелочные функции создают свой собственный контекст. При работе с объектами они предпочтительнее
*/
//Внимание! 1-й параметр - это объект откуда вызываем метод withParams
//Остальные - это параметры метода withParams
logger.withParams.call(person, true, true, true);
//
//тоже самое что и колл только параметры вызываемой функции передаются в виде массива
logger.withParams.apply(person, [true, true, true]);
