document.getElementById("send_4").onclick = exercise_4; //Переход по клику
function exercise_4(){ //Объявление функции
    let x = Number(document.getElementById("name_4").value); //Получение переменной по id
    let img = document.getElementById("exercise_image_4"); //Объявление переменной для картинки
    let y; //Объявление переменной для уравнения
    const a = 2.6; //Объявление константы
    const b = 5.1; //Объявление константы
    if (isNaN(x)){ //Объявление условия на проверку
        alert("Введите ещё раз корректное число"); //Вывод о несоответствии введенных данных
    } else { //Если все верно, тогда
        switch (x) { //Подключение функции переключения
            case 1: //Первый вариант при Х = 1
                y = a * (Math.cos(x) ** 2) - b * Math.sin(x ** 2); //Объявление уравнения
                document.getElementById("output_exercise_4").innerHTML =`Значение X ${x} 
                    \nЗначение Y ${y}`; //Вывод по id
                img.src = '../assets/exercise_4_1.png'; //Присваивание номера картинки
                break; //Остановка
            case 4: //Второй вариант при Х = 4
                y = b * Math.log(x) + x ** 3; //Объявление уравнения
                document.getElementById("output_exercise_4").innerHTML =`Значение X ${x} 
                    \nЗначение Y ${y}`; //Вывод по id
                img.src = '../assets/exercise_4_2.png'; //Присваивание номера картинки
                break; //Остановка
            case 5: //Третий вариант при Х = 5
                y = Math.sqrt((x ** 2) + a * b); //Объявление уравнения
                document.getElementById("output_exercise_4").innerHTML =`Значение X ${x} 
                    \nЗначение Y ${y}`; //Вывод по id
                img.src = '../assets/exercise_4_3.png'; //Присваивание номера картинки
                break; //Остановка
            default: //Если не прошел ни по одному кейсу
                document.getElementById("output_exercise_4").innerHTML = "Для введенного значения X невозможно найти Y"; //Вывод по id
        }
    }
}