document.getElementById("send_4").onclick = exercise_4;
function exercise_4(){
    let x = Number(document.getElementById("name_4").value); 
    let img = document.getElementById("exercise_image_4");
    let y;
    const a = 2.6;
    const b = 5.1;
    if (isNaN(x)){
        alert("Введите ещё раз корректное число");
    } else {
        switch (x) {
            case 1:
                y = a * (Math.cos(x) ** 2) - b * Math.sin(x ** 2);
                document.getElementById("output_exercise_4").innerHTML =`Значение X ${x} 
                    \nЗначение Y ${y}`;
                img.src = '../assets/exercise_4_1.png';
                break;
            case 4:
                y = b * Math.log(x) + x ** 3;
                document.getElementById("output_exercise_4").innerHTML =`Значение X ${x} 
                    \nЗначение Y ${y}`;
                img.src = '../assets/exercise_4_2.png';
                break;
            case 5:
                y = Math.sqrt((x ** 2) + a * b);
                document.getElementById("output_exercise_4").innerHTML =`Значение X ${x} 
                    \nЗначение Y ${y}`;
                img.src = '../assets/exercise_4_3.png';
                break;
            default:
                document.getElementById("output_exercise_4").innerHTML = "Для введенного значения X невозможно найти Y";
        }
    }
}