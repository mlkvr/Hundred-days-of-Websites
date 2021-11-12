let random_number1;
let random_number2;
let random_number3;
let money = 5000;

function start(){
    if(money > 0){
        money -= 1000;
        document.getElementById("money").innerHTML = money + "$";
    $(".kupasr1").last().removeClass("show").addClass("hide");
    $(".sineksr1").last().removeClass("show").addClass("hide");
    $(".kalpsr1").last().removeClass("show").addClass("hide");
    $(".kupasr2").last().removeClass("show").addClass("hide");
    $(".sineksr2").last().removeClass("show").addClass("hide");
    $(".kalpsr2").last().removeClass("show").addClass("hide");
    $(".kupasr3").last().removeClass("show").addClass("hide");
    $(".sineksr3").last().removeClass("show").addClass("hide");
    $(".kalpsr3").last().removeClass("show").addClass("hide");
    setTimeout(generateRandom,100);
    }

    //resetTags();
}
function generateRandom(){

    $(".kupa").addClass("rollinkupa");
    $(".kalp").addClass("rollinkalp");
    $(".sinek").addClass("rollinsinek");

    random_number1 = Math.floor(Math.random() * (4 - 1) + 1);
    random_number2 = Math.floor(Math.random() * (4 - 1) + 1);
    random_number3 = Math.floor(Math.random() * (4 - 1) + 1);

    if(random_number1 == 1){
        $(".kupasr1").last().removeClass("hide").addClass("show");
        $(".sineksr1").last().removeClass("show").addClass("hide");
        $(".kalpsr1").last().removeClass("show").addClass("hide");
    }else if(random_number1 == 2){
        $(".kupasr1").last().removeClass("show").addClass("hide");
        $(".sineksr1").last().removeClass("hide").addClass("show");
        $(".kalpsr1").last().removeClass("show").addClass("hide");
    }else if(random_number1 == 3){
        $(".kupasr1").last().removeClass("show").addClass("hide");
        $(".kalpsr1").last().removeClass("hide").addClass("show");
        $(".sineksr1").last().removeClass("show").addClass("hide");
    }

    if(random_number2 == 1){
        $(".kupasr2").last().removeClass("hide").addClass("show");
        $(".sineksr2").removeClass("show").addClass("hide");
         $(".kalpsr2").removeClass("show").addClass("hide");
    }else if(random_number2 == 2){
        $(".kupasr2").removeClass("show").addClass("hide");
        $(".sineksr2").last().removeClass("hide").addClass("show");
        $(".kalpsr2").removeClass("show").addClass("hide");
    }else if(random_number2 == 3){
        $(".kupasr2").removeClass("show").addClass("hide");
        $(".kalpsr2").last().removeClass("hide").addClass("show");
        $(".sineksr2").removeClass("show").addClass("hide");
    }

    if(random_number3 == 1){
        $(".kupasr3").last().removeClass("hide").addClass("show");
        $(".sineksr3").removeClass("show").addClass("hide");
        $(".kalpsr3").removeClass("show").addClass("hide");
    }else if(random_number3 == 2){
        $(".kalpsr3").removeClass("show").addClass("hide");
        $(".sineksr3").last().removeClass("hide").addClass("show");
        $(".kupasr3").removeClass("show").addClass("hide");
    }else if(random_number3 == 3){
        $(".kalpsr3").last().removeClass("hide").addClass("show");
        $(".sineksr3").removeClass("show").addClass("hide");
        $(".kupasr3").removeClass("show").addClass("hide");
    }

    if(random_number1 == random_number2 == random_number3){
        money += 3000;
        document.getElementById("money").innerHTML = money + "$";
    }

    setTimeout(resetTags, 3000);
}

function resetTags(){
    $(".kupa").removeClass("rollinkupa");
    $(".kalp").removeClass("rollinkalp");
    $(".sinek").removeClass("rollinsinek");
    
}