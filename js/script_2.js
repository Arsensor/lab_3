document.getElementById("send_2").onclick = exercise_2;
function exercise_2(){
    var number_1 = document.getElementById("name_a_2").value; 
    var number_2 = document.getElementById("name_b_2").value;
    if (isNaN(x)){
        alert("Введите ещё раз корректное число");
    } else { 
        if (number_1 < number_2){
            document.getElementById("output_exercise_2").innerHTML = "Первое число меньше";
            return;
        } else{
            document.getElementById("output_exercise_2").innerHTML = "Второе число меньше";
            return;
        }
    }
}