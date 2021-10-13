var count = 0;          //for making show winner button visible-hide
var cnt = 0;            //for counting n winner
var count_user1 = -1;   //for user-user move
var count_user2 = -1;   //for user-"X"uter move
var last = -1;
var user1 = "";
var user2 = "Computer"; 
var toss = -1;          //coin toss
var flag = true;        //checking the 1st card input
var game_type = -1;     // which one user-user or user-"X"uter
var a = ["_","_","_","_","_","_","_","_","_"];
var winner = [];

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

function getRandom(a){
    return Math.floor(Math.random()*a);
}

function Toss(){
    if(toss == -1 && flag == false){
        toss = getRandom(2);
        if(toss == 0)
            alert(user1 + " has won the toss");
        else
            alert(user2 + " has won the toss");
        count_user1 = toss;
        count_user2 = toss;
        if(game_type == 1 && count_user2 == 1){
            userComputer();
            count_user2 += 1;
        }
        console.log("toss" + toss);
        document.getElementById("tss").disabled=true;
        if(toss == 0)
            document.getElementById("tss").value = user1 + " won the toss";
        else
        document.getElementById("tss").value = user2 + " won the toss";
        document.getElementById("newG").disabled = true;
    }
}

function userClick(n){
    var s = "s";
    if(game_type == 0 && toss != -1){
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
    }
    else if(game_type == 1 && toss != -1){
        if(count_user2%2 == 0){
            s += n;
            console.log("s2 " + s);
            document.getElementById(s).value = "_O_";
            document.getElementById(s).disabled = true;
            a[n] = "O";
            var w = winning();
            if(w == 2){
                alert("Match Draw");
                document.getElementById("newG").disabled = false;
                winner.push("No One");
                addData();
                cnt += 1;
                return ;
            }
            else if(w == 0){
                alert(user1 + " win the game");
                document.getElementById("newG").disabled = false;
                winner.push(user1);
                addData();
                cnt += 1;
                return;
            }
            userComputer();
            count_user2 +=2;
            console.log(a);
        }
    }
    else{
        alert("Please do toss first");
    }
    var w = winning();
    if(w >= 0 && w <=2){
        for(var i=0;i<=8;i++){
            s = "s";
            if(a[i] == '_'){
                s += i;
                document.getElementById(s).disabled = true;
            }
        }
        if(w==0){
            alert(user1 + " win the game");
            winner.push(user1);
        }
        else if(w==1){
            alert(user2 + " win the game");
            winner.push(user2);
        }
        else{
            alert("Match Draw");
            winner.push("No One");
        }
        addData();
        cnt += 1;
    }
    console.log(w);
    if(w != -1){
        var btn = document.getElementById("newG");
        btn.disabled = false;
    }
}

function newGame(){
    a = ["_","_","_","_","_","_","_","_","_"];
    toss = -1;
    document.getElementById("tss").disabled = false;
    for(var i=0;i<9;i++){
        var s = "s";
        s += i;
        document.getElementById(s).disabled = false;
        document.getElementById(s).value = "___";
        document.getElementById(s).className = "btn btn-outline-dark";
    }
    document.getElementById("tss").value = "Toss for first play";
}

function userComputer(){
    var s = "s";
    for(var i=0;i<=2;i++){
        if(a[0+i] == "X" && a[3+i] == "X" && a[6+i] == "_"){
            a[6+i] = "X";
            s += (6+i);
            console.log("s = " + s);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
        else if(a[0+i] == "X" && a[3+i] == "_" && a[6+i] == "X"){
            a[3+i] = "X";
            s += (3+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return
        }
        else if(a[0+i] == "_" && a[3+i] == "X" && a[6+i] == "X"){
            a[0+i] = "X";
            s += i;
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
    }
    for(var i=0;i<=2;i++){
        if(a[0+i] == "O" && a[3+i] == "O" && a[6+i] == "_"){
            a[6+i] = "X";
            s += (6+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
        else if(a[0+i] == "O" && a[3+i] == "_" && a[6+i] == "O"){
            a[3+i] = "X";
            s += (3+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
        else if(a[0+i] == "_" && a[3+i] == "O" && a[6+i] == "O"){
            a[0+i] = "X";
            s += i;
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
    }
    for(var i=0;i<=6;i+=3){
        if(a[0+i] == "X" && a[1+i] == "X" && a[2+i] == "_"){
            a[2+i] = "X";
            s += (2+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
        else if(a[0+i] == "X" && a[1+i] == "_" && a[2+i] == "X"){
            a[1+i] = "X";
            s += (1+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return
        }
        else if(a[0+i] == "_" && a[1+i] == "X" && a[2+i] == "X"){
            a[0+i] = "X";
            s += i;
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
    }
    for(var i=0;i<=6;i+=3){
        if(a[0+i] == "O" && a[1+i] == "O" && a[2+i] == "_"){
            a[2+i] = "X";
            s += (2+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
        else if(a[0+i] == "O" && a[1+i] == "_" && a[2+i] == "O"){
            a[1+i] = "X";
            s += (1+i);
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
        else if(a[0+i] == "_" && a[1+i] == "O" && a[2+i] == "O"){
            a[0+i] = "X";
            s += i;
            document.getElementById(s).value = "_X_";
            document.getElementById(s).disabled = true;
            return;
        }
    }
    if(a[0] == "X" && a[4] == "X" && a[8] == "_"){
        a[8] = "X";
        s += 8;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[0] == "X" && a[4] == "_" && a[8] == "X"){
        a[4] = "X";
        s += 4;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return
    }
    else if(a[0] == "_" && a[4] == "X" && a[8] == "X"){
        a[0] = "X";
        s += 0;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[0] == "O" && a[4] == "O" && a[8] == "_"){
        a[8] = "X";
        s += 8;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[0] == "O" && a[4] == "_" && a[8] == "O"){
        a[4] = "X";
        s += 4;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[0] == "_" && a[4] == "O" && a[8] == "O"){
        a[0] = "X";
        s += 0;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[2] == "X" && a[4] == "X" && a[6] == "_"){
        a[6] = "X";
        s += 6;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[2] == "X" && a[4] == "_" && a[6] == "X"){
        a[4] = "X";
        s += 4;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return
    }
    else if(a[2] == "_" && a[4] == "X" && a[6] == "X"){
        a[2] = "X";
        s += 2;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[2] == "O" && a[4] == "O" && a[6] == "_"){
        a[6] = "X";
        s += 6;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else if(a[2] == "O" && a[4] == "_" && a[6] == "O"){
        a[4] = "X";
        s += 4;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return
    }
    else if(a[2] == "_" && a[4] == "O" && a[6] == "O"){
        a[2] = "X";
        s += 2;
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
    else{
        var n = getRandom(9);
        while(a[n] != "_")
            n = getRandom(9);
        s += n;
        a[n] = "X";
        console.log("s in r = " + s);
        document.getElementById(s).value = "_X_";
        document.getElementById(s).disabled = true;
        return;
    }
}

function winning(){
    var flag1 = true;
    for(var i=0;i<=8;i++){
        if(a[i] == "_"){
            flag1 = false;
            break;
        }
    }
    if(flag1 == true){
        return 2;
    }
    if((a[0] == "O" && a[4] == "O" && a[8] == "O") || (a[0] == "X" && a[4] == "X" && a[8] == "X")){
        if(a[0] == "O"){
            color("Os0s4s8");
            return 0;
        }
        else{
            color("Xs0s4s8");
            return 1;
        }
    }
    else if((a[1] == "O" && a[4] == "O" && a[7] == "O") || (a[1] == "X" && a[4] == "X" && a[7] == "X")){
        if(a[1] == "O"){
            color("Os1s4s7");
            return 0;
        }
        else{
            color("Xs1s4s7");
            return 1;
        }
    }
    else if((a[2] == "O" && a[4] == "O" && a[6] == "O") || (a[2] == "X" && a[4] == "X" && a[6] == "X")){
        if(a[2] == "O"){
            color("Os2s4s6");
            return 0;
        }
        else{
            color("Xs2s4s6");
            return 1;
        }
    }
    else if((a[3] == "O" && a[4] == "O" && a[5] == "O") || (a[3] == "X" && a[4] == "X" && a[5] == "X")){
        if(a[3] == "O"){
            color("Os3s4s5");
            return 0;
        }
        else{
            color("Xs3s4s5");
            return 1;
        }
    }
    else if((a[0] == "O" && a[3] == "O" && a[6] == "O") || (a[0] == "X" && a[3] == "X" && a[6] == "X")){
        if(a[0] == "O"){
            color("Os0s3s6");
            return 0;
        }
        else{
            color("Xs0s3s6");
            return 1;
        }
    }
    else if((a[2] == "O" && a[5] == "O" && a[8] == "O") || (a[2] == "X" && a[5] == "X" && a[8] == "X")){
        if(a[2] == "O"){
            color("Os2s5s8");
            return 0;
        }
        else{
            color("Xs2s5s8");
            return 1;
        }
    }
    else if((a[0] == "O" && a[1] == "O" && a[2] == "O") || (a[0] == "X" && a[1] == "X" && a[2] == "X")){
        if(a[0] == "O"){
            color("Os0s1s2");
            return 0;
        }
        else{
            color("Xs0s1s2");
            return 1;
        }
    }
    else if((a[6] == "O" && a[7] == "O" && a[8] == "O") || (a[6] == "X" && a[7] == "X" && a[8] == "X")){
        if(a[6] == "O"){
            color("Os6s7s8");
            return 0;
        }
        else{
            color("Xs6s7s8");
            return 1;
        }
    }
    else
        return -1;

}

function color(a){
    if(a.charAt(0) == "O"){
        var c = a.substring(1,3);
        document.getElementById(c).className = "btn btn-success";
        c = a.substring(3,5);
        document.getElementById(c).className = "btn btn-success";
        c = a.substring(5,7);
        document.getElementById(c).className = "btn btn-success";
    }
    else{
        var c = a.substring(1,3);
        document.getElementById(c).className = "btn btn-danger";
        c = a.substring(3,5);
        document.getElementById(c).className = "btn btn-danger";
        c = a.substring(5,7);
        document.getElementById(c).className = "btn btn-danger";
    }
}

function showMoves(){
    count += 1;
    if(count%2 != 0){
        document.getElementById("card_body").style.visibility = "visible";
        document.getElementById("btn2").innerHTML = "Hide Winners";
    }
    else{
        document.getElementById("card_body").style.visibility = "collapse";
        document.getElementById("btn2").innerHTML = "Show Winners";
    }
}

function addData(){
    var table = document.getElementById("mytable");
    var row = table.insertRow(cnt+1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = cnt+1;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = user1;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = user2;
    var cell4 = row.insertCell(3);
    cell4.innerHTML = winner[cnt];
}