var Players=1
var Playercounter=0
var predictioncount=0
var playerprediction=[]
var playerresult=[]
var playerpoints=[]
var player1points=0
var player2points=0
var player3points=0
var player4points=0
var player5points=0
var player6points=0
function addplayer(){
    
    if(document.getElementById("name1").innerText==""){
        document.getElementById("name1").innerText=document.getElementById("playernameinput").value
        document.getElementById("playernameinput").value=""
    }else if(document.getElementById("name2").innerText==""){
        document.getElementById("name2").innerText=document.getElementById("playernameinput").value
        document.getElementById("playernameinput").value=""
    }else if(document.getElementById("name3").innerText==""){
        document.getElementById("name3").innerText=document.getElementById("playernameinput").value
        document.getElementById("playernameinput").value=""
    }else if(document.getElementById("name4").innerText==""){
        document.getElementById("name4").innerText=document.getElementById("playernameinput").value
        document.getElementById("playernameinput").value=""
    }else if(document.getElementById("name5").innerText==""){
        document.getElementById("name5").innerText=document.getElementById("playernameinput").value
        document.getElementById("playernameinput").value=""
    }else if(document.getElementById("name6").innerText==""){
        document.getElementById("name6").innerText=document.getElementById("playernameinput").value
        document.getElementById("playernameinput").value=""
    }else {
        console.log("you cant add more")
    }
    
}



function startgame(){
    document.getElementById("playername1.2").innerText =document.getElementById("name1").innerText;
    document.getElementById("playername2.2").innerText =document.getElementById("name2").innerText;
    document.getElementById("playername3.2").innerText =document.getElementById("name3").innerText;
    document.getElementById("playername4.2").innerText =document.getElementById("name4").innerText;
    document.getElementById("playername5.2").innerText =document.getElementById("name5").innerText;
    document.getElementById("playername6.2").innerText =document.getElementById("name6").innerText;
    

    document.getElementById("resultbutton").hidden=true
    if(document.getElementById("name1").innerText ===""){
        return
    }
    document.getElementById("startbox").hidden=true
    if(document.getElementById("name1").innerText !=""){
        document.getElementById("playername1").innerText =document.getElementById("name1").innerText;
        Players =1
    }else{
        var p1 =document.getElementsByClassName("p1")
        for(i=0; i<p1.length; i++){
            p1[i].hidden=true
        }

    }
    if(document.getElementById("name2").innerText !=""){
        document.getElementById("playername2").innerText =document.getElementById("name2").innerText;
        Players =2
    }else{
        var p2 =document.getElementsByClassName("p2")
        for(i=0; i<p2.length; i++){
            p2[i].hidden=true
        }
    }
    if(document.getElementById("name3").innerText !=""){
        document.getElementById("playername3").innerText =document.getElementById("name3").innerText;
        Players =3
    }else{
        var p3 =document.getElementsByClassName("p3")
        for(i=0; i<p3.length; i++){
            p3[i].hidden=true
        }
    }
    if(document.getElementById("name4").innerText !=""){
        document.getElementById("playername4").innerText =document.getElementById("name4").innerText;
        Players =4
    }else{
        var p4 =document.getElementsByClassName("p4")
        for(i=0; i<p4.length; i++){
            p4[i].hidden=true
        }
    }
    if(document.getElementById("name5").innerText !=""){
        document.getElementById("playername5").innerText =document.getElementById("name5").innerText;
        Players =5
    }else{
        var p5 =document.getElementsByClassName("p5")
        for(i=0; i<p5.length; i++){
            p5[i].hidden=true
        }
    }
    if(document.getElementById("name6").innerText !=""){
        document.getElementById("playername6").innerText =document.getElementById("name6").innerText;
        Players =6
    }else{
        var p6 =document.getElementsByClassName("p6")
        for(i=0; i<p6.length; i++){
            p6[i].hidden=true
        }
    }
    console.log(Players)
    document.getElementById("gamemode").hidden=false
    
}

function reset(){
    playerprediction=[" "," "," "," "," "," ",]
    playerresult=[" "," "," "," "," "," ",]
    predictionschow()
    resultschow()
    player1ponits.innerText =" "
    player2ponits.innerText =" "
    player3ponits.innerText =" "
    player4ponits.innerText =" "
    player5ponits.innerText =" "
    player6ponits.innerText =" "
    playerprediction=[]
    playerresult=[]
    document.getElementById("predictionbutton").hidden=false
    document.getElementById("resultbutton").hidden=true
    document.getElementById("resetbutton").hidden=true
}

function predictionschow(){
    player1guess.innerText =playerprediction[0]
    player2guess.innerText =playerprediction[1]
    player3guess.innerText =playerprediction[2]
    player4guess.innerText =playerprediction[3]
    player5guess.innerText =playerprediction[4]
    player6guess.innerText =playerprediction[5]
    document.getElementById("resultbutton").hidden=false
    
}
function resultschow(){
    player1made.innerText =playerresult[0]
    player2made.innerText =playerresult[1]
    player3made.innerText =playerresult[2]
    player4made.innerText =playerresult[3]
    player5made.innerText =playerresult[4]
    player6made.innerText =playerresult[5]
    document.getElementById("resultbutton").hidden=true
    

}
function points(){
    if(playerresult[0] === playerprediction[0]){
        player1ponits.innerText=20+10*playerresult[0]
        player1points= player1points+ 20+10*playerresult[0]
    }else if(playerresult[0]-playerprediction[0]>0){
        var wrongpoints= playerresult[0]-playerprediction[0]
        player1ponits.innerText= wrongpoints*-10
        player1points =player1points +wrongpoints*-10
    }else{
        var wrongpoints= playerresult[0]-playerprediction[0]
        player1ponits.innerText= wrongpoints*10
        player1points =player1points +wrongpoints*10
    }
    if(playerresult[1] === playerprediction[1]){
        player2ponits.innerText=20+10*playerresult[1]
        player2points= player2points+ 20+10*playerresult[1]
    }else if(playerresult[1]-playerprediction[1]>0){
        var wrongpoints= playerresult[1]-playerprediction[1]
        player2ponits.innerText= wrongpoints*-10
        player2points =player2points +wrongpoints*-10
    }else{
        var wrongpoints= playerresult[1]-playerprediction[1]
        player2ponits.innerText= wrongpoints*10
        player2points =player2points +wrongpoints*10
    }
    if(playerresult[2] === playerprediction[2]){
        player3ponits.innerText=20+10*playerresult[2]
        player3points= player3points+ 20+10*playerresult[2]
    }else if(playerresult[2]-playerprediction[2]>0){
        var wrongpoints= playerresult[2]-playerprediction[2]
        player3ponits.innerText= wrongpoints*-10
        player3points =player3points +wrongpoints*-10
    }else{
        var wrongpoints= playerresult[2]-playerprediction[2]
        player3ponits.innerText= wrongpoints*10
        player3points =player3points +wrongpoints*10
    }
    if(playerresult[3] === playerprediction[3]){
        player4ponits.innerText=20+10*playerresult[3]
        player4points= player4points+ 20+10*playerresult[3]
    }else if(playerresult[3]-playerprediction[3]>0){
        var wrongpoints= playerresult[3]-playerprediction[3]
        player4ponits.innerText= wrongpoints*-10
        player4points =player4points +wrongpoints*-10
    }else{
        var wrongpoints= playerresult[3]-playerprediction[3]
        player4ponits.innerText= wrongpoints*10
        player4points =player4points +wrongpoints*10
    }
    if(playerresult[4] === playerprediction[4]){
        player5ponits.innerText=20+10*playerresult[4]
        player5points= player5points+ 20+10*playerresult[4]
    }else if(playerresult[4]-playerprediction[4]>0){
        var wrongpoints= playerresult[4]-playerprediction[4]
        player5ponits.innerText= wrongpoints*-10
        player5points =player5points +wrongpoints*-10
    }else{
        var wrongpoints= playerresult[4]-playerprediction[4]
        player5ponits.innerText= wrongpoints*10
        player5points =player5points +wrongpoints*10
    }
    if(playerresult[5] === playerprediction[5]){
        player6ponits.innerText=20+10*playerresult[5]
        player6points= player6points+ 20+10*playerresult[5]
    }else if(playerresult[5]-playerprediction[5]>0){
        var wrongpoints= playerresult[5]-playerprediction[5]
        player6ponits.innerText= wrongpoints*-10
        player6points =player6points +wrongpoints*-10
    }else{
        var wrongpoints= playerresult[5]-playerprediction[5]
        player6ponits.innerText= wrongpoints*10
        player6points =player6points +wrongpoints*10
    }
    
    totalpoints()
}


function totalpoints(){
    document.getElementById("player1totalpoints").textContent=`${player1points}p`
    document.getElementById("player2totalpoints").textContent=`${player2points}p`
    document.getElementById("player3totalpoints").textContent=`${player3points}p`
    document.getElementById("player4totalpoints").textContent=`${player4points}p`
    document.getElementById("player5totalpoints").textContent=`${player5points}p`
    document.getElementById("player6totalpoints").textContent=`${player6points}p`
}
function prediction(){
    var playeercontainer =document.getElementsByName("playeercontainer")
    for(i=0; i<playeercontainer.length; i++){
        playeercontainer[i].hidden=true
    }
    document.getElementById("predictionbutton").hidden=true
    document.getElementById("geussbox").hidden=false
    playeercontainer[0].hidden=false
    
}


function changeprediction(number){
    var playeercontainer =document.getElementsByName("playeercontainer")
    if(predictioncount != Players-1){
        playerprediction.push(number)
        playeercontainer[predictioncount].hidden=true
        playeercontainer[predictioncount+1].hidden=false
        predictioncount++
    }else{
        playerprediction.push(number)
        console.log("yes")
        for(i=0; i<Players; i++){
            playeercontainer[i].hidden=false
        }
        document.getElementById("geussbox").hidden=true
        predictioncount=0
        predictionschow()
    }
    

}

function result(){
    var playeercontainer =document.getElementsByName("playeercontainer")
    for(i=0; i<playeercontainer.length; i++){
        playeercontainer[i].hidden=true
    }
    document.getElementById("resultbutton").hidden=true
    document.getElementById("resultbox").hidden=false
    playeercontainer[0].hidden=false
    
}

function changeresult(number){
    var playeercontainer =document.getElementsByName("playeercontainer")
    if(predictioncount != Players-1){
        playerresult.push(number)
        playeercontainer[predictioncount].hidden=true
        playeercontainer[predictioncount+1].hidden=false
        predictioncount++
    }else{
        playerresult.push(number)
        console.log("yes")
        for(i=0; i<Players; i++){
            playeercontainer[i].hidden=false
        }
        document.getElementById("resultbox").hidden=true
        predictioncount=0
        resultschow()
        points()
    }
}




function prediction1(){
    changeprediction(1)
}
function prediction2(){
    changeprediction(2)
}
function prediction3(){
    changeprediction(3)
}
function prediction4(){
    changeprediction(4)
}
function prediction5(){
    changeprediction(5)
}
function prediction6(){
    changeprediction(6)
}
function prediction7(){
    changeprediction(7)
}
function prediction8(){
    changeprediction(8)
}
function prediction9(){
    changeprediction(9)
}
function prediction10(){
    changeprediction(10)
}
function prediction11(){
    changeprediction(11)
}
function prediction12(){
    changeprediction(12)
}
function prediction13(){
    changeprediction(13)
}
function prediction14(){
    changeprediction(14)
}
function prediction15(){
    changeprediction(15)
}
function prediction16(){
    changeprediction(16)
}
function prediction17(){
    changeprediction(17)
}
function prediction18(){
    changeprediction(18)
}
function prediction19(){
    changeprediction(19)
}
function prediction0(){
    changeprediction(0)
}

function result1(){
    changeresult(1)
}
function result2(){
    changeresult(2)
}
function result3(){
    changeresult(3)
}
function result4(){
    changeresult(4)
}
function result5(){
    changeresult(5)
}
function result6(){
    changeresult(6)
}
function result7(){
    changeresult(7)
}
function result8(){
    changeresult(8)
}
function result9(){
    changeresult(9)
}
function result10(){
    changeresult(10)
}
function result11(){
    changeresult(11)
}
function result12(){
    changeresult(12)
}
function result13(){
    changeresult(13)
}
function result14(){
    changeresult(14)
}
function result15(){
    changeresult(15)
}
function result16(){
    changeresult(16)
}
function result17(){
    changeresult(17)
}
function result18(){
    changeresult(18)
}
function result19(){
    changeresult(19)
}
function result0(){
    changeresult(0)
}


function nextround(){
    player1nextround()
    player2nextround()
    player3nextround()
    player4nextround()
    player5nextround()
    player6nextround()

    reset()
    
}


function player1nextround(){
    document.getElementById("player1guess20").innerText=document.getElementById("player1guess19").innerText
    document.getElementById("player1made20").innerText=document.getElementById("player1made19").innerText
    document.getElementById("player1ponits20").innerText=document.getElementById("player1ponits19").innerText

    document.getElementById("player1guess19").innerText=document.getElementById("player1guess18").innerText
    document.getElementById("player1made19").innerText=document.getElementById("player1made18").innerText
    document.getElementById("player1ponits19").innerText=document.getElementById("player1ponits18").innerText

    document.getElementById("player1guess18").innerText=document.getElementById("player1guess17").innerText
    document.getElementById("player1made18").innerText=document.getElementById("player1made17").innerText
    document.getElementById("player1ponits18").innerText=document.getElementById("player1ponits17").innerText

    document.getElementById("player1guess17").innerText=document.getElementById("player1guess16").innerText
    document.getElementById("player1made17").innerText=document.getElementById("player1made16").innerText
    document.getElementById("player1ponits17").innerText=document.getElementById("player1ponits16").innerText

    document.getElementById("player1guess16").innerText=document.getElementById("player1guess15").innerText
    document.getElementById("player1made16").innerText=document.getElementById("player1made15").innerText
    document.getElementById("player1ponits16").innerText=document.getElementById("player1ponits15").innerText

    document.getElementById("player1guess15").innerText=document.getElementById("player1guess14").innerText
    document.getElementById("player1made15").innerText=document.getElementById("player1made14").innerText
    document.getElementById("player1ponits15").innerText=document.getElementById("player1ponits14").innerText

    document.getElementById("player1guess14").innerText=document.getElementById("player1guess13").innerText
    document.getElementById("player1made14").innerText=document.getElementById("player1made13").innerText
    document.getElementById("player1ponits14").innerText=document.getElementById("player1ponits13").innerText

    document.getElementById("player1guess13").innerText=document.getElementById("player1guess12").innerText
    document.getElementById("player1made13").innerText=document.getElementById("player1made12").innerText
    document.getElementById("player1ponits13").innerText=document.getElementById("player1ponits12").innerText

    document.getElementById("player1guess12").innerText=document.getElementById("player1guess11").innerText
    document.getElementById("player1made12").innerText=document.getElementById("player1made11").innerText
    document.getElementById("player1ponits12").innerText=document.getElementById("player1ponits11").innerText

    document.getElementById("player1guess11").innerText=document.getElementById("player1guess10").innerText
    document.getElementById("player1made11").innerText=document.getElementById("player1made10").innerText
    document.getElementById("player1ponits11").innerText=document.getElementById("player1ponits10").innerText

    document.getElementById("player1guess10").innerText=document.getElementById("player1guess9").innerText
    document.getElementById("player1made10").innerText=document.getElementById("player1made9").innerText
    document.getElementById("player1ponits10").innerText=document.getElementById("player1ponits9").innerText

    document.getElementById("player1guess9").innerText=document.getElementById("player1guess8").innerText
    document.getElementById("player1made9").innerText=document.getElementById("player1made8").innerText
    document.getElementById("player1ponits9").innerText=document.getElementById("player1ponits8").innerText

    document.getElementById("player1guess8").innerText=document.getElementById("player1guess7").innerText
    document.getElementById("player1made8").innerText=document.getElementById("player1made7").innerText
    document.getElementById("player1ponits8").innerText=document.getElementById("player1ponits7").innerText

    document.getElementById("player1guess7").innerText=document.getElementById("player1guess6").innerText
    document.getElementById("player1made7").innerText=document.getElementById("player1made6").innerText
    document.getElementById("player1ponits7").innerText=document.getElementById("player1ponits6").innerText

    document.getElementById("player1guess6").innerText=document.getElementById("player1guess5").innerText
    document.getElementById("player1made6").innerText=document.getElementById("player1made5").innerText
    document.getElementById("player1ponits6").innerText=document.getElementById("player1ponits5").innerText
    document.getElementById("player1guess5").innerText=document.getElementById("player1guess4").innerText
    document.getElementById("player1made5").innerText=document.getElementById("player1made4").innerText
    document.getElementById("player1ponits5").innerText=document.getElementById("player1ponits4").innerText
    document.getElementById("player1guess4").innerText=document.getElementById("player1guess3").innerText
    document.getElementById("player1made4").innerText=document.getElementById("player1made3").innerText
    document.getElementById("player1ponits4").innerText=document.getElementById("player1ponits3").innerText
    document.getElementById("player1guess3").innerText=document.getElementById("player1guess2").innerText
    document.getElementById("player1made3").innerText=document.getElementById("player1made2").innerText
    document.getElementById("player1ponits3").innerText=document.getElementById("player1ponits2").innerText
    document.getElementById("player1guess2").innerText=document.getElementById("player1guess1").innerText
    document.getElementById("player1made2").innerText=document.getElementById("player1made1").innerText
    document.getElementById("player1ponits2").innerText=document.getElementById("player1ponits1").innerText
    document.getElementById("player1guess1").innerText=document.getElementById("player1guess").innerText
    document.getElementById("player1made1").innerText=document.getElementById("player1made").innerText
    document.getElementById("player1ponits1").innerText=document.getElementById("player1ponits").innerText

    
}
function player2nextround(){
    document.getElementById("player2guess20").innerText=document.getElementById("player2guess19").innerText
    document.getElementById("player2made20").innerText=document.getElementById("player2made19").innerText
    document.getElementById("player2ponits20").innerText=document.getElementById("player2ponits19").innerText

    document.getElementById("player2guess19").innerText=document.getElementById("player2guess18").innerText
    document.getElementById("player2made19").innerText=document.getElementById("player2made18").innerText
    document.getElementById("player2ponits19").innerText=document.getElementById("player2ponits18").innerText

    document.getElementById("player2guess18").innerText=document.getElementById("player2guess17").innerText
    document.getElementById("player2made18").innerText=document.getElementById("player2made17").innerText
    document.getElementById("player2ponits18").innerText=document.getElementById("player2ponits17").innerText

    document.getElementById("player2guess17").innerText=document.getElementById("player2guess16").innerText
    document.getElementById("player2made17").innerText=document.getElementById("player2made16").innerText
    document.getElementById("player2ponits17").innerText=document.getElementById("player2ponits16").innerText

    document.getElementById("player2guess16").innerText=document.getElementById("player2guess15").innerText
    document.getElementById("player2made16").innerText=document.getElementById("player2made15").innerText
    document.getElementById("player2ponits16").innerText=document.getElementById("player2ponits15").innerText

    document.getElementById("player2guess15").innerText=document.getElementById("player2guess14").innerText
    document.getElementById("player2made15").innerText=document.getElementById("player2made14").innerText
    document.getElementById("player2ponits15").innerText=document.getElementById("player2ponits14").innerText

    document.getElementById("player2guess14").innerText=document.getElementById("player2guess13").innerText
    document.getElementById("player2made14").innerText=document.getElementById("player2made13").innerText
    document.getElementById("player2ponits14").innerText=document.getElementById("player2ponits13").innerText

    document.getElementById("player2guess13").innerText=document.getElementById("player2guess12").innerText
    document.getElementById("player2made13").innerText=document.getElementById("player2made12").innerText
    document.getElementById("player2ponits13").innerText=document.getElementById("player2ponits12").innerText

    document.getElementById("player2guess12").innerText=document.getElementById("player2guess11").innerText
    document.getElementById("player2made12").innerText=document.getElementById("player2made11").innerText
    document.getElementById("player2ponits12").innerText=document.getElementById("player2ponits11").innerText

    document.getElementById("player2guess11").innerText=document.getElementById("player2guess10").innerText
    document.getElementById("player2made11").innerText=document.getElementById("player2made10").innerText
    document.getElementById("player2ponits11").innerText=document.getElementById("player2ponits10").innerText

    document.getElementById("player2guess10").innerText=document.getElementById("player2guess9").innerText
    document.getElementById("player2made10").innerText=document.getElementById("player2made9").innerText
    document.getElementById("player2ponits10").innerText=document.getElementById("player2ponits9").innerText

    document.getElementById("player2guess9").innerText=document.getElementById("player2guess8").innerText
    document.getElementById("player2made9").innerText=document.getElementById("player2made8").innerText
    document.getElementById("player2ponits9").innerText=document.getElementById("player2ponits8").innerText

    document.getElementById("player2guess8").innerText=document.getElementById("player2guess7").innerText
    document.getElementById("player2made8").innerText=document.getElementById("player2made7").innerText
    document.getElementById("player2ponits8").innerText=document.getElementById("player2ponits7").innerText

    document.getElementById("player2guess7").innerText=document.getElementById("player2guess6").innerText
    document.getElementById("player2made7").innerText=document.getElementById("player2made6").innerText
    document.getElementById("player2ponits7").innerText=document.getElementById("player2ponits6").innerText

    document.getElementById("player2guess6").innerText=document.getElementById("player2guess5").innerText
    document.getElementById("player2made6").innerText=document.getElementById("player2made5").innerText
    document.getElementById("player2ponits6").innerText=document.getElementById("player2ponits5").innerText
    document.getElementById("player2guess5").innerText=document.getElementById("player2guess4").innerText
    document.getElementById("player2made5").innerText=document.getElementById("player2made4").innerText
    document.getElementById("player2ponits5").innerText=document.getElementById("player2ponits4").innerText
    document.getElementById("player2guess4").innerText=document.getElementById("player2guess3").innerText
    document.getElementById("player2made4").innerText=document.getElementById("player2made3").innerText
    document.getElementById("player2ponits4").innerText=document.getElementById("player2ponits3").innerText
    document.getElementById("player2guess3").innerText=document.getElementById("player2guess2").innerText
    document.getElementById("player2made3").innerText=document.getElementById("player2made2").innerText
    document.getElementById("player2ponits3").innerText=document.getElementById("player2ponits2").innerText
    document.getElementById("player2guess2").innerText=document.getElementById("player2guess1").innerText
    document.getElementById("player2made2").innerText=document.getElementById("player2made1").innerText
    document.getElementById("player2ponits2").innerText=document.getElementById("player2ponits1").innerText
    document.getElementById("player2guess1").innerText=document.getElementById("player2guess").innerText
    document.getElementById("player2made1").innerText=document.getElementById("player2made").innerText
    document.getElementById("player2ponits1").innerText=document.getElementById("player2ponits").innerText

    
}

function player3nextround(){
    document.getElementById("player3guess20").innerText=document.getElementById("player3guess19").innerText
    document.getElementById("player3made20").innerText=document.getElementById("player3made19").innerText
    document.getElementById("player3ponits20").innerText=document.getElementById("player3ponits19").innerText

    document.getElementById("player3guess19").innerText=document.getElementById("player3guess18").innerText
    document.getElementById("player3made19").innerText=document.getElementById("player3made18").innerText
    document.getElementById("player3ponits19").innerText=document.getElementById("player3ponits18").innerText

    document.getElementById("player3guess18").innerText=document.getElementById("player3guess17").innerText
    document.getElementById("player3made18").innerText=document.getElementById("player3made17").innerText
    document.getElementById("player3ponits18").innerText=document.getElementById("player3ponits17").innerText

    document.getElementById("player3guess17").innerText=document.getElementById("player3guess16").innerText
    document.getElementById("player3made17").innerText=document.getElementById("player3made16").innerText
    document.getElementById("player3ponits17").innerText=document.getElementById("player3ponits16").innerText

    document.getElementById("player3guess16").innerText=document.getElementById("player3guess15").innerText
    document.getElementById("player3made16").innerText=document.getElementById("player3made15").innerText
    document.getElementById("player3ponits16").innerText=document.getElementById("player3ponits15").innerText

    document.getElementById("player3guess15").innerText=document.getElementById("player3guess14").innerText
    document.getElementById("player3made15").innerText=document.getElementById("player3made14").innerText
    document.getElementById("player3ponits15").innerText=document.getElementById("player3ponits14").innerText

    document.getElementById("player3guess14").innerText=document.getElementById("player3guess13").innerText
    document.getElementById("player3made14").innerText=document.getElementById("player3made13").innerText
    document.getElementById("player3ponits14").innerText=document.getElementById("player3ponits13").innerText

    document.getElementById("player3guess13").innerText=document.getElementById("player3guess12").innerText
    document.getElementById("player3made13").innerText=document.getElementById("player3made12").innerText
    document.getElementById("player3ponits13").innerText=document.getElementById("player3ponits12").innerText

    document.getElementById("player3guess12").innerText=document.getElementById("player3guess11").innerText
    document.getElementById("player3made12").innerText=document.getElementById("player3made11").innerText
    document.getElementById("player3ponits12").innerText=document.getElementById("player3ponits11").innerText

    document.getElementById("player3guess11").innerText=document.getElementById("player3guess10").innerText
    document.getElementById("player3made11").innerText=document.getElementById("player3made10").innerText
    document.getElementById("player3ponits11").innerText=document.getElementById("player3ponits10").innerText

    document.getElementById("player3guess10").innerText=document.getElementById("player3guess9").innerText
    document.getElementById("player3made10").innerText=document.getElementById("player3made9").innerText
    document.getElementById("player3ponits10").innerText=document.getElementById("player3ponits9").innerText

    document.getElementById("player3guess9").innerText=document.getElementById("player3guess8").innerText
    document.getElementById("player3made9").innerText=document.getElementById("player3made8").innerText
    document.getElementById("player3ponits9").innerText=document.getElementById("player3ponits8").innerText

    document.getElementById("player3guess8").innerText=document.getElementById("player3guess7").innerText
    document.getElementById("player3made8").innerText=document.getElementById("player3made7").innerText
    document.getElementById("player3ponits8").innerText=document.getElementById("player3ponits7").innerText

    document.getElementById("player3guess7").innerText=document.getElementById("player3guess6").innerText
    document.getElementById("player3made7").innerText=document.getElementById("player3made6").innerText
    document.getElementById("player3ponits7").innerText=document.getElementById("player3ponits6").innerText

    document.getElementById("player3guess6").innerText=document.getElementById("player3guess5").innerText
    document.getElementById("player3made6").innerText=document.getElementById("player3made5").innerText
    document.getElementById("player3ponits6").innerText=document.getElementById("player3ponits5").innerText
    document.getElementById("player3guess5").innerText=document.getElementById("player3guess4").innerText
    document.getElementById("player3made5").innerText=document.getElementById("player3made4").innerText
    document.getElementById("player3ponits5").innerText=document.getElementById("player3ponits4").innerText
    document.getElementById("player3guess4").innerText=document.getElementById("player3guess3").innerText
    document.getElementById("player3made4").innerText=document.getElementById("player3made3").innerText
    document.getElementById("player3ponits4").innerText=document.getElementById("player3ponits3").innerText
    document.getElementById("player3guess3").innerText=document.getElementById("player3guess2").innerText
    document.getElementById("player3made3").innerText=document.getElementById("player3made2").innerText
    document.getElementById("player3ponits3").innerText=document.getElementById("player3ponits2").innerText
    document.getElementById("player3guess2").innerText=document.getElementById("player3guess1").innerText
    document.getElementById("player3made2").innerText=document.getElementById("player3made1").innerText
    document.getElementById("player3ponits2").innerText=document.getElementById("player3ponits1").innerText
    document.getElementById("player3guess1").innerText=document.getElementById("player3guess").innerText
    document.getElementById("player3made1").innerText=document.getElementById("player3made").innerText
    document.getElementById("player3ponits1").innerText=document.getElementById("player3ponits").innerText

    
}

function player4nextround(){
    document.getElementById("player4guess20").innerText=document.getElementById("player4guess19").innerText
    document.getElementById("player4made20").innerText=document.getElementById("player4made19").innerText
    document.getElementById("player4ponits20").innerText=document.getElementById("player4ponits19").innerText

    document.getElementById("player4guess19").innerText=document.getElementById("player4guess18").innerText
    document.getElementById("player4made19").innerText=document.getElementById("player4made18").innerText
    document.getElementById("player4ponits19").innerText=document.getElementById("player4ponits18").innerText

    document.getElementById("player4guess18").innerText=document.getElementById("player4guess17").innerText
    document.getElementById("player4made18").innerText=document.getElementById("player4made17").innerText
    document.getElementById("player4ponits18").innerText=document.getElementById("player4ponits17").innerText

    document.getElementById("player4guess17").innerText=document.getElementById("player4guess16").innerText
    document.getElementById("player4made17").innerText=document.getElementById("player4made16").innerText
    document.getElementById("player4ponits17").innerText=document.getElementById("player4ponits16").innerText

    document.getElementById("player4guess16").innerText=document.getElementById("player4guess15").innerText
    document.getElementById("player4made16").innerText=document.getElementById("player4made15").innerText
    document.getElementById("player4ponits16").innerText=document.getElementById("player4ponits15").innerText

    document.getElementById("player4guess15").innerText=document.getElementById("player4guess14").innerText
    document.getElementById("player4made15").innerText=document.getElementById("player4made14").innerText
    document.getElementById("player4ponits15").innerText=document.getElementById("player4ponits14").innerText

    document.getElementById("player4guess14").innerText=document.getElementById("player4guess13").innerText
    document.getElementById("player4made14").innerText=document.getElementById("player4made13").innerText
    document.getElementById("player4ponits14").innerText=document.getElementById("player4ponits13").innerText

    document.getElementById("player4guess13").innerText=document.getElementById("player4guess12").innerText
    document.getElementById("player4made13").innerText=document.getElementById("player4made12").innerText
    document.getElementById("player4ponits13").innerText=document.getElementById("player4ponits12").innerText

    document.getElementById("player4guess12").innerText=document.getElementById("player4guess11").innerText
    document.getElementById("player4made12").innerText=document.getElementById("player4made11").innerText
    document.getElementById("player4ponits12").innerText=document.getElementById("player4ponits11").innerText

    document.getElementById("player4guess11").innerText=document.getElementById("player4guess10").innerText
    document.getElementById("player4made11").innerText=document.getElementById("player4made10").innerText
    document.getElementById("player4ponits11").innerText=document.getElementById("player4ponits10").innerText

    document.getElementById("player4guess10").innerText=document.getElementById("player4guess9").innerText
    document.getElementById("player4made10").innerText=document.getElementById("player4made9").innerText
    document.getElementById("player4ponits10").innerText=document.getElementById("player4ponits9").innerText

    document.getElementById("player4guess9").innerText=document.getElementById("player4guess8").innerText
    document.getElementById("player4made9").innerText=document.getElementById("player4made8").innerText
    document.getElementById("player4ponits9").innerText=document.getElementById("player4ponits8").innerText

    document.getElementById("player4guess8").innerText=document.getElementById("player4guess7").innerText
    document.getElementById("player4made8").innerText=document.getElementById("player4made7").innerText
    document.getElementById("player4ponits8").innerText=document.getElementById("player4ponits7").innerText

    document.getElementById("player4guess7").innerText=document.getElementById("player4guess6").innerText
    document.getElementById("player4made7").innerText=document.getElementById("player4made6").innerText
    document.getElementById("player4ponits7").innerText=document.getElementById("player4ponits6").innerText

    document.getElementById("player4guess6").innerText=document.getElementById("player4guess5").innerText
    document.getElementById("player4made6").innerText=document.getElementById("player4made5").innerText
    document.getElementById("player4ponits6").innerText=document.getElementById("player4ponits5").innerText
    document.getElementById("player4guess5").innerText=document.getElementById("player4guess4").innerText
    document.getElementById("player4made5").innerText=document.getElementById("player4made4").innerText
    document.getElementById("player4ponits5").innerText=document.getElementById("player4ponits4").innerText
    document.getElementById("player4guess4").innerText=document.getElementById("player4guess3").innerText
    document.getElementById("player4made4").innerText=document.getElementById("player4made3").innerText
    document.getElementById("player4ponits4").innerText=document.getElementById("player4ponits3").innerText
    document.getElementById("player4guess3").innerText=document.getElementById("player4guess2").innerText
    document.getElementById("player4made3").innerText=document.getElementById("player4made2").innerText
    document.getElementById("player4ponits3").innerText=document.getElementById("player4ponits2").innerText
    document.getElementById("player4guess2").innerText=document.getElementById("player4guess1").innerText
    document.getElementById("player4made2").innerText=document.getElementById("player4made1").innerText
    document.getElementById("player4ponits2").innerText=document.getElementById("player4ponits1").innerText
    document.getElementById("player4guess1").innerText=document.getElementById("player4guess").innerText
    document.getElementById("player4made1").innerText=document.getElementById("player4made").innerText
    document.getElementById("player4ponits1").innerText=document.getElementById("player4ponits").innerText

    
}
function player5nextround(){
    document.getElementById("player5guess20").innerText=document.getElementById("player5guess19").innerText
    document.getElementById("player5made20").innerText=document.getElementById("player5made19").innerText
    document.getElementById("player5ponits20").innerText=document.getElementById("player5ponits19").innerText

    document.getElementById("player5guess19").innerText=document.getElementById("player5guess18").innerText
    document.getElementById("player5made19").innerText=document.getElementById("player5made18").innerText
    document.getElementById("player5ponits19").innerText=document.getElementById("player5ponits18").innerText

    document.getElementById("player5guess18").innerText=document.getElementById("player5guess17").innerText
    document.getElementById("player5made18").innerText=document.getElementById("player5made17").innerText
    document.getElementById("player5ponits18").innerText=document.getElementById("player5ponits17").innerText

    document.getElementById("player5guess17").innerText=document.getElementById("player5guess16").innerText
    document.getElementById("player5made17").innerText=document.getElementById("player5made16").innerText
    document.getElementById("player5ponits17").innerText=document.getElementById("player5ponits16").innerText

    document.getElementById("player5guess16").innerText=document.getElementById("player5guess15").innerText
    document.getElementById("player5made16").innerText=document.getElementById("player5made15").innerText
    document.getElementById("player5ponits16").innerText=document.getElementById("player5ponits15").innerText

    document.getElementById("player5guess15").innerText=document.getElementById("player5guess14").innerText
    document.getElementById("player5made15").innerText=document.getElementById("player5made14").innerText
    document.getElementById("player5ponits15").innerText=document.getElementById("player5ponits14").innerText

    document.getElementById("player5guess14").innerText=document.getElementById("player5guess13").innerText
    document.getElementById("player5made14").innerText=document.getElementById("player5made13").innerText
    document.getElementById("player5ponits14").innerText=document.getElementById("player5ponits13").innerText

    document.getElementById("player5guess13").innerText=document.getElementById("player5guess12").innerText
    document.getElementById("player5made13").innerText=document.getElementById("player5made12").innerText
    document.getElementById("player5ponits13").innerText=document.getElementById("player5ponits12").innerText

    document.getElementById("player5guess12").innerText=document.getElementById("player5guess11").innerText
    document.getElementById("player5made12").innerText=document.getElementById("player5made11").innerText
    document.getElementById("player5ponits12").innerText=document.getElementById("player5ponits11").innerText

    document.getElementById("player5guess11").innerText=document.getElementById("player5guess10").innerText
    document.getElementById("player5made11").innerText=document.getElementById("player5made10").innerText
    document.getElementById("player5ponits11").innerText=document.getElementById("player5ponits10").innerText

    document.getElementById("player5guess10").innerText=document.getElementById("player5guess9").innerText
    document.getElementById("player5made10").innerText=document.getElementById("player5made9").innerText
    document.getElementById("player5ponits10").innerText=document.getElementById("player5ponits9").innerText

    document.getElementById("player5guess9").innerText=document.getElementById("player5guess8").innerText
    document.getElementById("player5made9").innerText=document.getElementById("player5made8").innerText
    document.getElementById("player5ponits9").innerText=document.getElementById("player5ponits8").innerText

    document.getElementById("player5guess8").innerText=document.getElementById("player5guess7").innerText
    document.getElementById("player5made8").innerText=document.getElementById("player5made7").innerText
    document.getElementById("player5ponits8").innerText=document.getElementById("player5ponits7").innerText

    document.getElementById("player5guess7").innerText=document.getElementById("player5guess6").innerText
    document.getElementById("player5made7").innerText=document.getElementById("player5made6").innerText
    document.getElementById("player5ponits7").innerText=document.getElementById("player5ponits6").innerText

    document.getElementById("player5guess6").innerText=document.getElementById("player5guess5").innerText
    document.getElementById("player5made6").innerText=document.getElementById("player5made5").innerText
    document.getElementById("player5ponits6").innerText=document.getElementById("player5ponits5").innerText
    document.getElementById("player5guess5").innerText=document.getElementById("player5guess4").innerText
    document.getElementById("player5made5").innerText=document.getElementById("player5made4").innerText
    document.getElementById("player5ponits5").innerText=document.getElementById("player5ponits4").innerText
    document.getElementById("player5guess4").innerText=document.getElementById("player5guess3").innerText
    document.getElementById("player5made4").innerText=document.getElementById("player5made3").innerText
    document.getElementById("player5ponits4").innerText=document.getElementById("player5ponits3").innerText
    document.getElementById("player5guess3").innerText=document.getElementById("player5guess2").innerText
    document.getElementById("player5made3").innerText=document.getElementById("player5made2").innerText
    document.getElementById("player5ponits3").innerText=document.getElementById("player5ponits2").innerText
    document.getElementById("player5guess2").innerText=document.getElementById("player5guess1").innerText
    document.getElementById("player5made2").innerText=document.getElementById("player5made1").innerText
    document.getElementById("player5ponits2").innerText=document.getElementById("player5ponits1").innerText
    document.getElementById("player5guess1").innerText=document.getElementById("player5guess").innerText
    document.getElementById("player5made1").innerText=document.getElementById("player5made").innerText
    document.getElementById("player5ponits1").innerText=document.getElementById("player5ponits").innerText

    
}
function player6nextround(){
    document.getElementById("player6guess20").innerText=document.getElementById("player6guess19").innerText
    document.getElementById("player6made20").innerText=document.getElementById("player6made19").innerText
    document.getElementById("player6ponits20").innerText=document.getElementById("player6ponits19").innerText

    document.getElementById("player6guess19").innerText=document.getElementById("player6guess18").innerText
    document.getElementById("player6made19").innerText=document.getElementById("player6made18").innerText
    document.getElementById("player6ponits19").innerText=document.getElementById("player6ponits18").innerText

    document.getElementById("player6guess18").innerText=document.getElementById("player6guess17").innerText
    document.getElementById("player6made18").innerText=document.getElementById("player6made17").innerText
    document.getElementById("player6ponits18").innerText=document.getElementById("player6ponits17").innerText

    document.getElementById("player6guess17").innerText=document.getElementById("player6guess16").innerText
    document.getElementById("player6made17").innerText=document.getElementById("player6made16").innerText
    document.getElementById("player6ponits17").innerText=document.getElementById("player6ponits16").innerText

    document.getElementById("player6guess16").innerText=document.getElementById("player6guess15").innerText
    document.getElementById("player6made16").innerText=document.getElementById("player6made15").innerText
    document.getElementById("player6ponits16").innerText=document.getElementById("player6ponits15").innerText

    document.getElementById("player6guess15").innerText=document.getElementById("player6guess14").innerText
    document.getElementById("player6made15").innerText=document.getElementById("player6made14").innerText
    document.getElementById("player6ponits15").innerText=document.getElementById("player6ponits14").innerText

    document.getElementById("player6guess14").innerText=document.getElementById("player6guess13").innerText
    document.getElementById("player6made14").innerText=document.getElementById("player6made13").innerText
    document.getElementById("player6ponits14").innerText=document.getElementById("player6ponits13").innerText

    document.getElementById("player6guess13").innerText=document.getElementById("player6guess12").innerText
    document.getElementById("player6made13").innerText=document.getElementById("player6made12").innerText
    document.getElementById("player6ponits13").innerText=document.getElementById("player6ponits12").innerText

    document.getElementById("player6guess12").innerText=document.getElementById("player6guess11").innerText
    document.getElementById("player6made12").innerText=document.getElementById("player6made11").innerText
    document.getElementById("player6ponits12").innerText=document.getElementById("player6ponits11").innerText

    document.getElementById("player6guess11").innerText=document.getElementById("player6guess10").innerText
    document.getElementById("player6made11").innerText=document.getElementById("player6made10").innerText
    document.getElementById("player6ponits11").innerText=document.getElementById("player6ponits10").innerText

    document.getElementById("player6guess10").innerText=document.getElementById("player6guess9").innerText
    document.getElementById("player6made10").innerText=document.getElementById("player6made9").innerText
    document.getElementById("player6ponits10").innerText=document.getElementById("player6ponits9").innerText

    document.getElementById("player6guess9").innerText=document.getElementById("player6guess8").innerText
    document.getElementById("player6made9").innerText=document.getElementById("player6made8").innerText
    document.getElementById("player6ponits9").innerText=document.getElementById("player6ponits8").innerText

    document.getElementById("player6guess8").innerText=document.getElementById("player6guess7").innerText
    document.getElementById("player6made8").innerText=document.getElementById("player6made7").innerText
    document.getElementById("player6ponits8").innerText=document.getElementById("player6ponits7").innerText

    document.getElementById("player6guess7").innerText=document.getElementById("player6guess6").innerText
    document.getElementById("player6made7").innerText=document.getElementById("player6made6").innerText
    document.getElementById("player6ponits7").innerText=document.getElementById("player6ponits6").innerText

    document.getElementById("player6guess6").innerText=document.getElementById("player6guess5").innerText
    document.getElementById("player6made6").innerText=document.getElementById("player6made5").innerText
    document.getElementById("player6ponits6").innerText=document.getElementById("player6ponits5").innerText
    document.getElementById("player6guess5").innerText=document.getElementById("player6guess4").innerText
    document.getElementById("player6made5").innerText=document.getElementById("player6made4").innerText
    document.getElementById("player6ponits5").innerText=document.getElementById("player6ponits4").innerText
    document.getElementById("player6guess4").innerText=document.getElementById("player6guess3").innerText
    document.getElementById("player6made4").innerText=document.getElementById("player6made3").innerText
    document.getElementById("player6ponits4").innerText=document.getElementById("player6ponits3").innerText
    document.getElementById("player6guess3").innerText=document.getElementById("player6guess2").innerText
    document.getElementById("player6made3").innerText=document.getElementById("player6made2").innerText
    document.getElementById("player6ponits3").innerText=document.getElementById("player6ponits2").innerText
    document.getElementById("player6guess2").innerText=document.getElementById("player6guess1").innerText
    document.getElementById("player6made2").innerText=document.getElementById("player6made1").innerText
    document.getElementById("player6ponits2").innerText=document.getElementById("player6ponits1").innerText
    document.getElementById("player6guess1").innerText=document.getElementById("player6guess").innerText
    document.getElementById("player6made1").innerText=document.getElementById("player6made").innerText
    document.getElementById("player6ponits1").innerText=document.getElementById("player6ponits").innerText

    
}