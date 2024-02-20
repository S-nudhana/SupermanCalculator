function calculate(){
    var B1 = document.getElementById("B1").value;
    var B2 = document.getElementById("B2").value;
    var P1 = document.getElementById("P1").value;
    var P2 = document.getElementById("P2").value;
    var K1 = document.getElementById("K1").value;
    var K2 = document.getElementById("K2").value;
    
    var count = 0;
    if(B1 == "") count++;
    if(B2 == "") count++;
    if(P1 == "") count++;
    if(P2 == "") count++;
    if(K1 == "") count++;
    if(K2 == "") count++;

    if(count > 1){
        alert("Please fill the number");
        return;
    }else{
        if(B1 == ""){
            document.getElementById("B1").value = (B2 * P2 * K1)/(K2 * P1);
            document.getElementById("B1").style.color = "red";
        }else if(B2 == ""){
            document.getElementById("B2").value = (B1 * P1 * K2)/(K1 * P2);
            document.getElementById("B2").style.color = "red";
        }else if(P1 == ""){
            document.getElementById("P1").value = (B2 * P2 * K1)/(K2 * B1);
            document.getElementById("P1").style.color = "red";
        }else if(P2 == ""){
            document.getElementById("P2").value = (B1 * P1 * K2)/(B2 * K1);
            document.getElementById("P2").style.color = "red";
        }else if(K1 == ""){
            document.getElementById("K1").value = (B1 * P1 * K2)/(B2 * P2);
            document.getElementById("K1").style.color = "red";
        }else if(K2 == ""){
            document.getElementById("K2").value = (B2 * P2 * K1)/(B1 * P1);
            document.getElementById("K2").style.color = "red";
        }
    }
}

function clear_input(){
    resetElement("B1");
    resetElement("B2");
    resetElement("P1");
    resetElement("P2");
    resetElement("K1");
    resetElement("K2");
}

function resetElement(id){
    var element = document.getElementById(id);
    element.value = "";
    element.style.color = "black";
}

function Kelvin(){
    document.getElementById("ndegree1").innerHTML = "K1";
    document.getElementById("ndegree2").innerHTML = "K2";
    document.getElementById("degree1").innerHTML = "(Kelvin)";
    document.getElementById("degree2").innerHTML = "(Kelvin)";
}

function Celcius(){
    document.getElementById("ndegree1").innerHTML = "C1 = ";
    document.getElementById("ndegree2").innerHTML = "C2 = ";
    document.getElementById("degree1").innerHTML = "(Celcius)";
    document.getElementById("degree2").innerHTML = "(Celcius)";
}
function Farenheit(){
    document.getElementById("ndegree1").innerHTML = "F1 = ";
    document.getElementById("ndegree2").innerHTML = "F2 = ";
    document.getElementById("degree1").innerHTML = "(Farenheit)";
    document.getElementById("degree2").innerHTML = "(Farenheit)";
}