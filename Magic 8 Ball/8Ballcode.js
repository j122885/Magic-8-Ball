var a = "Yes";
var b = "No" ;
var c = "Maybe";
var d = "Probably";


function myFunction() {

                        switch( Math.floor((Math.random() * 4) + 1) ) {
                            case 1: 
                                document.getElementById("response").innerHTML =  a;
                                break;
                            
                            case 2:
                                    document.getElementById("response").innerHTML =  b;
                                break;

                            case 3:
                                    document.getElementById("response").innerHTML =  c;
                                break;
                            case 4:
                                    document.getElementById("response").innerHTML =  d;
                                break;

                        }
                        

}

function imgShake() {   
    
    var element= document.getElementById("images");
    element.classList.add ("images");
    setTimeout(Removeclass, 3000);
     

}

function Removeclass() {

    var element= document.getElementById("images");
    element.classList.remove ("images");

}