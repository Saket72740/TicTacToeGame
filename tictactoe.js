var count = 0;
var count_user1 = -1;   //for user-user move
var count_user2 = -1;   //for user-computer move
var last = -1;
var user1 = "";
var user2 = "Computer"; 
var toss = -1;          //coin toss
var flag = true;        //checking the 1st card input
var game_type = -1;     // which one user-user or user-computer
var arr = [11,12,13,21,22,23,31,32,33];
var a = ["_","_","_","_","_","_","_","_","_"];

function getRandom(){
    return Math.floor(Math.random()*2);
}

function Toss(){
    if(toss == -1 && flag == false){
        toss = getRandom();
        if(toss == 0)
            alert(user1 + " has won the toss");
        else
            alert(user2 + " has won the toss");
        count_user1 = toss;
        count_user2 = toss;
        console.log("toss" + toss);
        document.getElementById("tss").disabled=true;
        if(toss == 0)
            document.getElementById("tss").innerHTML = user1 + " won the toss";
        else
        document.getElementById("tss").innerHTML = user2 + " won the toss";
    }
}

function changeName(){
    var n = document.getElementById("game");
    if(n.options[n.selectedIndex].value == 1){
        user1 = document.getElementById("usr1").value;
        if(user1 == ""){
            location.reload();
        }
        user2 = document.getElementById("usr2").value;
        if(user2 == ""){
            location.reload();
        }
        game_type = 0;
    }else if(n.options[n.selectedIndex].value == 2){
        user1 = document.getElementById("usr1").value;
        if(user1 == ""){
            location.reload();
        }
        game_type = 1;
    }
    else{
        alert("Please Select Game Type");
        return false;
    }
    flag = false;
    console.log(user1 + " " + user2 + " " + game_type);
    document.getElementById("user1").innerHTML = "<b>" + user1 + "<b>";
    document.getElementById("user2").innerHTML = "<b>" + user2 + "</b>";
    document.getElementById("user1_1").innerHTML = user1;
    document.getElementById("user2_2").innerHTML = user2;
}

function user(){
    var n = document.getElementById("game");
    if(n.options[n.selectedIndex].value == 1){
        document.getElementById("usr").style.visibility="visible";
        document.getElementById("Usr").style.visibility="visible";
    }
    else if(n.options[n.selectedIndex].value == 2){
        document.getElementById("usr").style.visibility="visible";
        document.getElementById("Usr").style.visibility="hidden";
    }
    else{
        document.getElementById("usr").style.visibility="hidden";
        document.getElementById("Usr").style.visibility="hidden";
        return false;
    }
    if(flag == false && l!=n.options[n.selectedIndex].value){
        alert("This page is reloading for new game-type");
        location.reload();
    }
    l = n.options[n.selectedIndex].value;
}

function showMoves(){
    count += 1;
    if(count%2 != 0){
        document.getElementById("card_body").style.visibility = "visible";
        document.getElementById("btn2").innerHTML = "Hide Moves";
    }
    else{
        document.getElementById("card_body").style.visibility = "collapse";
        document.getElementById("btn2").innerHTML = "Show Moves";
    }
}

function userClick(n){
    var s = "s";
    if(game_type == 0){
        if((count_user1)%2 == 1){
            s += n;
            console.log("s1" + s);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            a[n] = "X";
            count_user1 +=1;
            document.getElementById(s).toggleClass="btn-success";
        }
        else if((count_user1)%2 == 0){
            s += n;
            console.log("s2 " + s);
            document.getElementById(s).value = "_O_";
            document.getElementById(s).disabled = true;
            a[n] = "O";
            count_user1 +=1;
        }
        else{
            alert("Please enter the information first to start the game");
            return false;
        }
        console.log(a);
        winning();
    }
    else if(game_type == 1){
        var n = document.getElementById().value;

    }
}

function userComputer(){
    if(count_user2%2 == 1){
        computerMove();
    }
    else{
        var n = document.getElementById
    }
}

function winning(){
    if((a[0] == "O" && a[4] == "O" && a[8] == "O") || (a[0] == "X" && a[4] == "X" && a[8] == "X")){
        if(a[0] == "O"){
            document.getElementById("s0").className = "btn btn-success";
            document.getElementById("s4").className = "btn btn-success";
            document.getElementById("s8").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s0").className = "btn btn-danger";
            document.getElementById("s4").className = "btn btn-danger";
            document.getElementById("s8").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[1] == "O" && a[4] == "O" && a[7] == "O") || (a[1] == "X" && a[4] == "X" && a[7] == "X")){
        if(a[1] == "O"){
            document.getElementById("s1").className = "btn btn-success";
            document.getElementById("s4").className = "btn btn-success";
            document.getElementById("s7").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s1").className = "btn btn-danger";
            document.getElementById("s4").className = "btn btn-danger";
            document.getElementById("s7").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[2] == "O" && a[4] == "O" && a[6] == "O") || (a[2] == "X" && a[4] == "X" && a[6] == "X")){
        if(a[2] == "O"){
            document.getElementById("s2").className = "btn btn-success";
            document.getElementById("s4").className = "btn btn-success";
            document.getElementById("s6").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s2").className = "btn btn-danger";
            document.getElementById("s4").className = "btn btn-danger";
            document.getElementById("s6").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[3] == "O" && a[4] == "O" && a[5] == "O") || (a[3] == "X" && a[4] == "X" && a[5] == "X")){
        if(a[3] == "O"){
            document.getElementById("s3").className = "btn btn-success";
            document.getElementById("s4").className = "btn btn-success";
            document.getElementById("s5").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s3").className = "btn btn-danger";
            document.getElementById("s4").className = "btn btn-danger";
            document.getElementById("s5").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[0] == "O" && a[3] == "O" && a[6] == "O") || (a[0] == "X" && a[3] == "X" && a[6] == "X")){
        if(a[0] == "O"){
            document.getElementById("s0").className = "btn btn-success";
            document.getElementById("s3").className = "btn btn-success";
            document.getElementById("s6").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s0").className = "btn btn-danger";
            document.getElementById("s3").className = "btn btn-danger";
            document.getElementById("s6").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[1] == "O" && a[4] == "O" && a[7] == "O") || (a[1] == "X" && a[4] == "X" && a[7] == "X")){
        if(a[1] == "O"){
            document.getElementById("s1").className = "btn btn-success";
            document.getElementById("s4").className = "btn btn-success";
            document.getElementById("s7").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s1").className = "btn btn-danger";
            document.getElementById("s4").className = "btn btn-danger";
            document.getElementById("s7").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[2] == "O" && a[5] == "O" && a[8] == "O") || (a[2] == "X" && a[5] == "X" && a[8] == "X")){
        if(a[2] == "O"){
            document.getElementById("s2").className = "btn btn-success";
            document.getElementById("s5").className = "btn btn-success";
            document.getElementById("s8").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s2").className = "btn btn-danger";
            document.getElementById("s5").className = "btn btn-danger";
            document.getElementById("s8").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[0] == "O" && a[1] == "O" && a[2] == "O") || (a[0] == "X" && a[1] == "X" && a[2] == "X")){
        if(a[0] == "O"){
            document.getElementById("s0").className = "btn btn-success";
            document.getElementById("s1").className = "btn btn-success";
            document.getElementById("s2").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s0").className = "btn btn-danger";
            document.getElementById("s1").className = "btn btn-danger";
            document.getElementById("s2").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[3] == "O" && a[4] == "O" && a[5] == "O") || (a[3] == "X" && a[4] == "X" && a[5] == "X")){
        if(a[3] == "O"){
            document.getElementById("s3").className = "btn btn-success";
            document.getElementById("s4").className = "btn btn-success";
            document.getElementById("s5").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s3").className = "btn btn-danger";
            document.getElementById("s4").className = "btn btn-danger";
            document.getElementById("s5").className = "btn btn-danger";
            return 1;
        }
    }
    else if((a[6] == "O" && a[7] == "O" && a[8] == "O") || (a[6] == "X" && a[7] == "X" && a[8] == "X")){
        if(a[6] == "O"){
            document.getElementById("s6").className = "btn btn-success";
            document.getElementById("s7").className = "btn btn-success";
            document.getElementById("s8").className = "btn btn-success";
            return 0;
        }
        else{
            document.getElementById("s6").className = "btn btn-danger";
            document.getElementById("s7").className = "btn btn-danger";
            document.getElementById("s8").className = "btn btn-danger";
            return 1;
        }
    }
    else
        return -1;

}