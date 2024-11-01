document.getElementById("send_1").onclick = exercise_1;
function exercise_1(){
    var number_1 = document.getElementById("name_a_1").value;
    var number_2 = document.getElementById("name_b_1").value; 
    var number_3 = document.getElementById("name_c_1").value;
    if (isNaN(x)){
        alert("Введите ещё раз корректное число");
    } else { 
        if ((number_1 < number_2) && (number_2 < number_3)){
            document.getElementById("output_exercise_1").innerHTML = "TRUE";
            return;
        } else{
            document.getElementById("output_exercise_1").innerHTML = "FALSE";
            return;
        }
    }
}