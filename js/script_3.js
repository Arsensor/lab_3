document.getElementById("send_3").onclick = exercise_3; //Переход по клику
function exercise_3(){ //Объявление функции
    let x = Number(document.getElementById("name_3").value); //Получение переменной по id
    let img = document.getElementById("exercise_image_3"); //Объявление переменной для картинки
    let y; //Объявление переменной для уравнения
    const a = 2.6; //Объявление константы
    const b = 5.1; //Объявление константы
    if (isNaN(x)){ //Объявление условия на проверку
        alert("Введите ещё раз корректное число"); //Вывод о несоответствии введенных данных
    } else { //Если все верно, тогда
        if (x <= 1){ //Объявление условия на проверку
            y = a * (Math.cos(x) ** 2) - b * Math.sin(x ** 2); //Объявление уравнения
            img.src = '../assets/exercise_3_1.png'; //Присваивание номера картинки
            document.getElementById("output_exercise_3").innerHTML = `Значение X ${x}
                \nЗначение Y ${y}`; //Вывод по id
            return; 
        } else if ((x > 1) && (x <= 4)){ //Объявление условия на проверку
            y = b * Math.log(x) + x ** 3; //Объявление уравнения
            img.src = '../assets/exercise_3_2.png';//Присваивание номера картинки
            document.getElementById("output_exercise_3").innerHTML = `Значение X ${x}
                \nЗначение Y ${y}`; //Вывод по id
            return;
        } else { //Если не прошел по предыдущим условиям, тогда
            y = Math.sqrt((x ** 2) + a * b); //Объявление уравнения
            img.src = '../assets/exercise_3_3.png';//Присваивание номера картинки
            document.getElementById("output_exercise_3").innerHTML = `Значение X ${x}
                \nЗначение Y ${y}`; //Вывод по id
            return; 
        }
        }
}