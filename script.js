window.addEventListener("load",start);


function start(){
    //Carregando a página com os valores iniciais
    var value_red = document.querySelector("#range_red_output");
    var value_green = document.querySelector("#range_green_output");
    var value_blue = document.querySelector("#range_blue_output");
    var RGB_color = document.querySelector("#RGB_color");
    
    value_red.textContent = "0";
    value_green.textContent = "0";
    value_blue.textContent = "0";
    RGB_color.textContent = "RGB(0 , 0 , 0)" ;

    quadrado_RGB.style.background = "black";

}

//Recebendo o input do movimento da barra e atribuindo o valor da função color
var range_red = document.querySelector("#range_red");
var range_green = document.querySelector("#range_green");
var range_blue = document.querySelector("#range_blue");

range_red.addEventListener("input", color);
range_green.addEventListener("input", color);
range_blue.addEventListener("input", color);

    
function color(event){
     //console.log(event.path[0].id) informa qual range foi mexido (red. green ou blue)
     //Declarando as variáveis de output para mostrar no display
     var value_R = document.querySelector("#range_red_output");
     var value_G = document.querySelector("#range_green_output");
     var value_B = document.querySelector("#range_blue_output");
     var RGB_color = document.querySelector("#RGB_color");


    if (event.path[0].id === "range_red"){
        //Se o range red for mexido
        value_R.textContent = event.target.value;

        value_R = event.target.value;
        value_G = value_G.value;
        value_B = value_B.value;

    }   else { if (event.path[0].id === "range_green"){
                //Se o range green for mexido
                value_G.textContent = event.target.value;

                value_R = value_R.value;
                value_G = event.target.value;
                value_B = value_B.value;

                } else {
                    //Se o range blue for mexido
                    value_B.textContent = event.target.value;

                    value_R = value_R.value;
                    value_G = value_G.value;
                    value_B = event.target.value;
                }
            } 

            //Combinação de cores RGB final
            RGB_color.textContent = "RGB(" + value_R + " , " + value_G + " , " + value_B + ")" ;
    
    //Combinação de cores RGB final
    var quadrado_RGB = document.getElementById("quadrado_RGB");
    quadrado_RGB.style.background = "rgb("+ value_R +","+ value_G +","+ value_B +")";

}
