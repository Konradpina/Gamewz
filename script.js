var nameinput=false
var namenumber=0
var predictioninput=false
var madeinput=false
var firstround=true


var nonumber=0
var roundn=1
var bplayer=0
var player=0
var countp=0
var madetoal=0

function startnames(){
    document.getElementById("startbox").classList.add("goout")
    document.getElementById("namebox").classList.add("goin")
    nameinput=true
    var ipfields =document.getElementsByClassName("namei")
    for(i=0;i<ipfields.length;i++){
        ipfields[i].value=""
    }
}
function startbutton(){
    if(namenumber<2){
        alert("pleas enter a Name")
        
        return
    }
    start()
}

addEventListener("keydown",(event) => nameip())

function nameip(){
    
    if(nameinput){
        if(namenumber>=6){
            start()
            start=true
            return
        }
        document.getElementsByClassName("namei")[namenumber].focus()
    }
}

addEventListener("keypress", function(event) {
    if (event.key === "Enter" && nameinput) {
        var namet=document.getElementsByClassName("namei")[namenumber].value.split("")
        for(i=0;i<namet.length-1;i++){
            if(namet[i]!=" "){
                namenumber++
                nameip()
                return
            }
            
        }
        if(namenumber<3){
            alert("pleas enter a Name")
            
            return
        }
        start()
    }
    
  })


function getnamearray(){
    var names=document.getElementsByClassName("namei")
    var output=[]
    for(i=0;i<names.length;i++){
        if(names[i].value!=""&&names[i].value!=" "){
            output.push(names[i].value)
        }
        
    }
    return output
}
   

function start(){
    nameinput=false
    document.getElementById("namebox").classList.remove("goin")
    document.getElementById("namebox").classList.add("goout")

    displaynames()
    document.getElementById("gamebox").hidden=false
    document.getElementById("infobar").hidden=false
    infobaraktive()
}

function displaynames(){
    var fields = document.getElementsByClassName("playerbox")
    var nfields =document.getElementsByClassName("Name")
    // var nfieldsap=document.getElementsByClassName("nameap")
    
    var names=getnamearray()
    for(i=0;i<names.length;i++){
        // nfieldsap[i].innerHTML=names[i]
        nfields[i].innerHTML=names[i]
        fields[i].hidden=false
        // nfieldsap[i].hidden=true
    }
}

function infobaraktive(){
    document.getElementById("bginningplayer").innerHTML=`${getnamearray()[bplayer]} beginns`
    document.getElementById("roundnumber").innerHTML=`Round ${roundn} `

}

function bginninglayer(){
    bplayer++
    if (bplayer >getnamearray().length-1){
        bplayer=0
    }
    return 
}
function startnextround(){
    
    if(firstround){
        beginnprediction()
        firstround=false
        return
    }
    roundn++
    addpoints()
    clearall()
    bginninglayer()
    player= bplayer

    infobaraktive()
    beginnprediction()
   

}
function beginnprediction(){
    showbtns()
    document.getElementById("btnbox").classList.remove("startgame3")
    document.getElementById("btnbox").classList.remove("goin2")
    document.getElementById("btnbox").classList.add("goout2")
    document.getElementById("Keyboard").classList.add("goin2")
    predictioninput=true

    var keys=document.getElementsByClassName("btnk")
            for(i=0;i<keys.length;i++){
                keys[i].classList.remove("btnk2")
            }

    document.getElementsByClassName("playerbox")[player].classList.add("activeplayer")

}

function num(number){
    if(predictioninput){
        nonumber=nonumber+number
        document.getElementsByClassName("prd")[player].innerHTML=number

                player++
            if (player >getnamearray().length-1){
                player=0
            }
        var playerboxs =document.getElementsByClassName("playerbox")
        for(i=0;i<playerboxs.length;i++){
            document.getElementsByClassName("playerbox")[i].classList.remove("activeplayer")
        }
        document.getElementsByClassName("playerbox")[player].classList.add("activeplayer")
        
        countp++
        if(countp==getnamearray().length-1){
            document.getElementsByClassName("btnk")[roundn-nonumber].classList.add("nonumber")
        }
        if(countp==getnamearray().length){
            var keys=document.getElementsByClassName("btnk")
            for(i=0;i<keys.length;i++){
                keys[i].classList.remove("nonumber")
            }
            for(i=0;i<playerboxs.length;i++){
                document.getElementsByClassName("playerbox")[i].classList.remove("activeplayer")
            }
            startmade()
            countp=0
        }
        
            return
    }else if(madeinput){
        madetoal=madetoal+number
        document.getElementsByClassName("made")[player].innerHTML=number

                player++
            if (player >getnamearray().length-1){
                player=0
            }
        var playerboxs =document.getElementsByClassName("playerbox")
        for(i=0;i<playerboxs.length;i++){
            document.getElementsByClassName("playerbox")[i].classList.remove("activeplayer2")
        }
        document.getElementsByClassName("playerbox")[player].classList.add("activeplayer2")
        
            countp++
        if(countp==getnamearray().length){
            endmade()
            countp=0
            for(i=0;i<playerboxs.length;i++){
                document.getElementsByClassName("playerbox")[i].classList.remove("activeplayer2")
            }
        }
        calculatepoints()
    }
}

function endmade(){
    document.getElementById("btnbox").classList.remove("goout2")
    document.getElementById("Keyboard").classList.remove("goin2")
    document.getElementById("Keyboard").classList.add("goout2")
    document.getElementById("btnbox").classList.add("goin2")
    nonumber=0
    if(madetoal!=roundn){
        alert("there's something wrong this round")
    }
    madetoal=0
    
}

function calculatepoints(){
        var pred=document.getElementsByClassName("prd")
        var made=document.getElementsByClassName("made")
        var reslt=document.getElementsByClassName("reslt")
        var playernames=getnamearray()
    for(i=0;i<=playernames.length;i++){
        if(pred[i].innerHTML!="&nbsp"&&made[i].innerHTML!="&nbsp"){
            if(Number(pred[i].innerHTML)==Number(made[i].innerHTML)){
                reslt[i].innerHTML=20+10*Number(pred[i].innerHTML)
            }else if(Number(pred[i].innerHTML)<Number(made[i].innerHTML)){
                reslt[i].innerHTML=-10*(Number(made[i].innerHTML)-Number(pred[i].innerHTML))
            }else if(Number(pred[i].innerHTML)>Number(made[i].innerHTML)){
                reslt[i].innerHTML=-10*(Number(pred[i].innerHTML)-Number(made[i].innerHTML))
            }
        }
    }
    
}

function showbtns(){
    var btns= document.getElementsByClassName("btnk")
    for(i=0;i<roundn+1;i++){
        btns[i].hidden=false
    }
}

function startmade(){
    document.getElementsByClassName("playerbox")[player].classList.add("activeplayer2")
    var keys=document.getElementsByClassName("btnk")
            for(i=0;i<keys.length;i++){
                keys[i].classList.add("btnk2")
            }
    madeinput=true
    predictioninput=false
}
function addpoints(){
    var playernames=getnamearray()
    var reslt=document.getElementsByClassName("reslt")
    var points=document.getElementsByClassName("points")
    for(i=0;i<playernames.length;i++){
        points[i].innerHTML=Number(points[i].innerHTML)+Number(reslt[i].innerHTML)
    }
}

function resetround(){
    firstround=true
    clearall()
    startnextround()
}
function clearall(){
    var pred=document.getElementsByClassName("prd")
    var made=document.getElementsByClassName("made")
    var playerboxs=document.getElementsByClassName("playerbox")
    var reslt=document.getElementsByClassName("reslt")
    var playernames=getnamearray()
    
    for(i=0;i<playernames.length;i++){
        pred[i].innerHTML="&nbsp"
        made[i].innerHTML="&nbsp"
        reslt[i].innerHTML="&nbsp"
        playerboxs[i].classList.add("erase")
    }
    const myTimeout = setTimeout(eraseerase, 2000);
    function eraseerase() {
        for(i=0;i<playernames.length;i++){
            playerboxs[i].classList.remove("erase")
        }
      }
    
}

function resetreslts(){
    startmade()
    document.getElementById("btnbox").classList.remove("goin2")
    document.getElementById("btnbox").classList.add("goout2")
    document.getElementById("Keyboard").classList.add("goin2")

   
    var made=document.getElementsByClassName("made")
    var playerboxs=document.getElementsByClassName("playerbox")
    var playernames=getnamearray()
    
    for(i=0;i<playernames.length;i++){
        made[i].innerHTML="&nbsp"
        playerboxs[i].classList.add("erase")
    }
    const myTimeout = setTimeout(eraseerase, 2000);
    function eraseerase() {
        for(i=0;i<playernames.length;i++){
            playerboxs[i].classList.remove("erase")
        }
      }
}