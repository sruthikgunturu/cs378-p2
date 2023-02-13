function updateOrder(sign, food, sub){
    let num = document.getElementById(food);
    let curr_val = parseInt(num.value);
    let check = 1;
    if(sign == "minus"){
        curr_val = curr_val - 1;
        if(curr_val < 0){
            curr_val = 0;
            check = 0;
        }
    }else if(sign == "pos"){
        curr_val = curr_val + 1;
    }
    num.value = curr_val;
    updateSub(food, sub, sign, check);

}

function updateSub(food, sub, sign, check){
    let sub_num = document.getElementById(sub);
    let sub_num_val = parseInt(sub_num.value);
    let change_val;
    if(food == "order_num_m"){
        change_val = 5;
    }else if(food == "order_num_p" || food == "order_num_t"){
        change_val = 8;
    }else if(food == "order_num_e"){
        change_val = 10;
    }
    if(sign == "minus" && check != 0){
        sub_num_val = sub_num_val - change_val;
    }else if(sign == "pos") {
        sub_num_val = sub_num_val + change_val;
    }
    sub_num.value = sub_num_val;
}

function updateAll(){
    let diff_food = document.querySelectorAll(".order_num");
    for(let i = 0; i < diff_food.length; i++){
        let order_name = diff_food[i];
        order_name.value = 0;
    }
    let sub = document.getElementById("subtotals_num");
    sub.value = 0;
}

function orderPop(){
    let sub = document.getElementById("subtotals_num");
    if(sub.value == 0){
        alert("No items in cart");
    }else{
    let string = "Order placed!\n";
    let diff_food = document.querySelectorAll(".order_num");
    for(let i = 0; i < diff_food.length; i++){
        let val = diff_food[i].value;
        if(val != 0){
            string = string + " " + val + " " + diff_food[i].name;
        }
    }

    alert(string);
    updateAll();
    }
}
