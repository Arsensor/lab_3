document.getElementById("send_3").onclick = exercise_3;
function exercise_3(){
    let x = Number(document.getElementById("name_3").value); 
    let img = document.getElementById("exercise_image_3");
    let y;
    const a = 2.6;
    const b = 5.1;
    if (isNaN(x)){
        alert("Введите ещё раз корректное число");
    } else {
        if (x <= 1){
            y = a * (Math.cos(x) ** 2) - b * Math.sin(x ** 2);
            img.src = '../assets/exercise_3_1.png';
            document.getElementById("output_exercise_3").innerHTML = `Значение X ${x}
                \nЗначение Y ${y}`;
            return;
        } else if ((x > 1) && (x <= 4)){
            y = b * Math.log(x) + x ** 3;
            img.src = '../assets/exercise_3_2.png';
            document.getElementById("output_exercise_3").innerHTML = `Значение X ${x}
                \nЗначение Y ${y}`;
            return;
        } else {
            y = Math.sqrt((x ** 2) + a * b);
            img.src = '../assets/exercise_3_3.png';
            document.getElementById("output_exercise_3").innerHTML = `Значение X ${x}
                \nЗначение Y ${y}`;
            return;
        }
        }
}