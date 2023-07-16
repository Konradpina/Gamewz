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
var laedingp=""

var totaltime=0
var roundtime=0


var news=["Press Start next Round","pleas start","dont you want to play?","i dont have all day","are you serious"]
var newsv=true
var newsc=0

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

    detarmngrid()
    document.getElementById("body").classList.add("body2")
    displaynames()
    document.getElementById("gamebox").hidden=false
    document.getElementById("infobar").hidden=false
    infobaraktive()
}
function detarmngrid(){
    grid=document.getElementById("gridap")
    var names=getnamearray()
    if(names.length==2){
        grid.classList.add("gridap2")
    }else if(names.length==3){
        grid.classList.add("gridap3")
    }else if(names.length==4){
        grid.classList.add("gridap4")
    }else if(names.length==5){
        grid.classList.add("gridap5")
    }else if(names.length==6){
        grid.classList.add("gridap6")
    }
}
function displaynames(){
    var fields = document.getElementsByClassName("playerbox")
    var nfields =document.getElementsByClassName("Name")
    var nfieldsap=document.getElementsByClassName("nameap")
    var fieldsap = document.getElementsByClassName("playercontain")
    
    
    var names=getnamearray()
    for(i=0;i<names.length;i++){
        nfieldsap[i].innerHTML=names[i]
        nfields[i].innerHTML=names[i]
        fields[i].hidden=false
        fieldsap[i].hidden=false
    }

    document.getElementById("allpointsbox").hidden=false
}

function infobaraktive(){
    document.getElementById("bginningplayer").innerHTML=`${getnamearray()[bplayer]} beginns`
    document.getElementById("roundnumber").innerHTML=`Round ${roundn} `
    document.getElementById("leadplayer").innerHTML=findethelead()
}

function bginninglayer(){
    bplayer++
    if (bplayer >getnamearray().length-1){
        bplayer=0
    }
    return 
}
function startnextround(){
    document.getElementById("music1").hidden=true
    if(firstround){
        beginnprediction()
        firstround=false
        var playerboxs=document.getElementsByClassName("playerbox")
        var playernames=getnamearray()
        ttimeround = setInterval(timeround, 1000)    
        for(i=0;i<playernames.length;i++){
            playerboxs[i].classList.remove("startgame4")
           
        }
        return
    }
    roundn++
    addpoints()
    addroundap()
    clearall()
    bginninglayer()
    player= bplayer

    infobaraktive()
    beginnprediction()
    roundtime=0

}
function beginnprediction(){
    showbtns()
    document.getElementById("anbox").classList.remove("anboxin")
    document.getElementById("anbox").classList.add("anboxout")
    document.getElementById("btnbox").classList.remove("startgame3")
    document.getElementById("btnbox").classList.remove("goin2")
    document.getElementById("btnbox").classList.add("goout2")
    document.getElementById("Keyboard").classList.add("goin2")
    predictioninput=true

    var keys=document.getElementsByClassName("btnk")
            for(i=0;i<keys.length;i++){
                keys[i].classList.remove("btnk2")
            }


    const timeoutbeginning=setTimeout(startstartan, 2000); 
    function startstartan(){
        document.getElementsByClassName("playerbox")[player].classList.add("activeplayer")
    }
    
    

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
    var stabdp=laedingp
    document.getElementById("btnbox").classList.remove("goout2")
    document.getElementById("Keyboard").classList.remove("goin2")
    document.getElementById("Keyboard").classList.add("goout2")
    document.getElementById("btnbox").classList.add("goin2")
    document.getElementById("music1").hidden=false
    nonumber=0
    if(madetoal!=roundn){
        alert("there's something wrong this round")
    }
    madetoal=0

    var stabdp=laedingp
    laedingp=findethelead()
    if(laedingp!=stabdp){

    }
    calculatepoints()
    newnews() 
    document.getElementById("anbox").classList.remove("anboxout")
    document.getElementById("anbox").classList.add("anboxin")
   
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
    var pointsap=document.getElementsByClassName("pointsap")
    document.getElementById("leadplayer").classList.add("changeinfobar")
    const myTimeout4= setTimeout(pointschange1, 1000);
    function pointschange1() {
        for(i=0;i<playernames.length;i++){
            
    
            points[i].classList.add("pointsref")
            pointsap[i].classList.add("pointsref")
            
        }
    }
    const myTimeout6= setTimeout(pointschange3, 1200);
    function pointschange3() {
        for(i=0;i<playernames.length;i++){
            points[i].innerHTML=Number(points[i].innerHTML)+Number(reslt[i].innerHTML)
            pointsap[i].innerHTML=points[i].innerHTML   
    
           
        }
        infobaraktive()
       
    }
    
    
    const myTimeout5= setTimeout(pointschange2, 3000);
    function pointschange2() {
        for(i=0;i<playernames.length;i++){
             
    
            points[i].classList.remove("pointsref")
            pointsap[i].classList.remove("pointsref")
        }
        document.getElementById("leadplayer").classList.remove("changeinfobar")
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
   
    var reslt=document.getElementsByClassName("reslt")
    var playernames=getnamearray()
    var aab=document.getElementsByClassName("aab");
    var points=document.getElementsByClassName("points")

    for(i=0;i<playernames.length;i++){
        
        aab[i].classList.add("aktiveaktivebox")
    }
    const myTimeout2 = setTimeout(eraseerase2, 1400);
    function eraseerase2() {
        for(i=0;i<playernames.length;i++){
        pred[i].innerHTML="&nbsp"
        made[i].innerHTML="&nbsp"
        reslt[i].innerHTML="&nbsp"
        }
      }
    const myTimeout = setTimeout(eraseerase, 4000);
    function eraseerase() {
        for(i=0;i<playernames.length;i++){
            points[i].classList.remove("pointsref")
            aab[i].classList.remove("aktiveaktivebox")
        }
      }
    
}

function resetreslts(){
    startmade()
    document.getElementById("btnbox").classList.remove("goin2")
    document.getElementById("btnbox").classList.add("goout2")
    document.getElementById("Keyboard").classList.add("goin2")

    var aab=document.getElementsByClassName("aab");
    var reslt=document.getElementsByClassName("reslt")
    var made=document.getElementsByClassName("made")
    var playernames=getnamearray()
   
    
    for(i=0;i<playernames.length;i++){
        
        aab[i].classList.add("aktiveaktivebox2")
    }
    
    const myTimeout3 = setTimeout(eraseerase3, 1400);
    function eraseerase3() {
        for(i=0;i<playernames.length;i++){
            
        made[i].innerHTML="&nbsp"
        reslt[i].innerHTML="&nbsp"
        }
      }
    const myTimeout = setTimeout(eraseerase, 4000);
    function eraseerase() {
        for(i=0;i<playernames.length;i++){
            aab[i].classList.remove("aktiveaktivebox2")
        }
      }
}

function addroundap(){
    var playernames=getnamearray()
    var made=document.getElementsByClassName("made")
    var prd=document.getElementsByClassName("prd")
    var reslt=document.getElementsByClassName("reslt")
    var resltap=document.getElementsByClassName("resltap")

    var madeap=document.getElementsByClassName("madeap")
    var prdap=document.getElementsByClassName("prdap")
    var pointbox=document.getElementsByClassName("pointbox")
    var a=0
    for(i=0;a<playernames.length;i++){
        if(madeap[i].innerHTML==""&&prdap[i].innerHTML==""&&resltap[i].innerHTML==""){
            madeap[i].innerHTML=made[a].innerHTML
            prdap[i].innerHTML=prd[a].innerHTML
            resltap[i].innerHTML=reslt[a].innerHTML
            pointbox[i].hidden=false
            a++
        }
    }
    var b=0
    for(i=0;b=1;i++){
        if(document.getElementsByClassName("roundap")[i].hidden==true){
            document.getElementsByClassName("roundap")[i].hidden=false;
            b=1
            return
        }
    }
}

function findethelead(){
    var players=getnamearray()
    var points=document.getElementsByClassName("points")
    var reslt=document.getElementsByClassName("reslt")
    var pointsn=[]
    var leaders=[]
    for(i=0;i<players.length;i++){
        if(reslt[i].innerHTML=="&nbsp;"){
            pointsn.push(Number(points[i].innerHTML))
        }else{
            pointsn.push(Number(points[i].innerHTML)+Number(reslt[i].innerHTML))
        }
    }
    var hpoint=Math.max(...pointsn)
    for(i=0;i<players.length;i++){
        if(hpoint===pointsn[i]){
            leaders.push(i)
        }
    }
    if(leaders.length==1){
        msg=`${players[leaders[0]]} leads`
        return msg
    }else if(leaders.length==2){
        msg=`${players[leaders[0]]} and ${players[leaders[1]]} lead`
        return msg
    }else{
        msg=``
        return msg
    }
}

function newnews(){
    news=[];
    var newslp= findethelead()
   
    news.push(`Next round will be ${roundn+1}`)

    news.push(`you play ${sectotime(totaltime)}`)
    if(newslp!=""){
        news.push(newslp)
    }
    news.push(`time per set${sectotime(roundtime/roundn)}`)

    document.getElementById("news1").innerText=news[0]
    document.getElementById("news2").innerText=news[1]
    newsc=2
   
}

timenews =setInterval(repnews, 5000)  


function repnews(){
    
    if(newsv){
        document.getElementById("news2").innerText=news[newsc]
        newsc++
        newsv=false
    }else{
        document.getElementById("news1").innerText=news[newsc]
        newsc++
        newsv=true
    }
    if(newsc==news.length){
        newsc=0
    }
    return
}

function timeround(){
    totaltime++
    roundtime++
}

function sectotime(sec){
    var sec= Math.floor(sec)
    var min=0
    var seconds=0
    var houers=0
    var days=0
    if(isNaN(sec)){
        return
    }else{
        for(i=0;i==0;){
        
            if(sec>=86400){
                sec= sec-86400
                days++
            }else if(sec>=3600){
                sec= sec-3600
                houers++
            }else if(sec>=60){
                    sec=sec-60
                    min++
            }else if(sec>=1){
                sec=sec-1
                seconds++
                
            }else if(sec===0){
                var msg=""
                if(days!=0){
                    if(days==1){
                        msg=msg+` ${days} Day`
                    }else{
                        msg=msg+` ${days} Days`
                    }
                    
                }
                if(houers!=0){
                    if(houers==1){
                        msg=msg+` ${houers} Houer`
                    }else{
                        msg=msg+` ${houers} Houers`
                    }
                    
                }
                if(min!=0){
                    if(min==1){
                        msg=msg+` ${min} Minute`
                    }else{
                        msg=msg+` ${min} Minutes`
                    }
                }
                if(seconds!=0&&min==0&&houers==0){
                    if(seconds==1){
                        msg=msg+` ${seconds} Second`
                    }else{
                        msg=msg+` ${seconds} Seconds`
                    }
                }else if(seconds!=0){
                    if(seconds==1){
                        msg=msg+` and ${seconds} Second`
                    }else{
                        msg=msg+` and ${seconds} Seconds`
                    }
                }
                return msg
            }
        }
    }
    
    
    
}