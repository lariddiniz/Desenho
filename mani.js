//Pega o ID canvas do HTML
let canvas = document.getElementById("canvas");
//Pegamos o contexto do desenho, esse é o método que retorna um desenho, usar o parametro 2d significa que o objeto que será redenrizado será bidimensional
let contexto = canvas.getContext("2d");
//Varaivel que vamos usar para identificar se estamos desenhando
let desenhando = false;


canvas.addEventListener("mousedown", function(event){
    //vamos usar o metodo addEventListener para ouvir nosso mouse, ele irá identificar quando clicarmos
    desenhando = true; //o desenhando se torna verdade
    contexto.beginPath();
    //a variavel contexto recebe o metodo beginPath(), esse metodo significa que um novo caminho será criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    //nessa função vamos dizer como o contexto irá funcionar, o clientX vai fornecer cordenadas horizontais enquanto o canvas.offsetLeft vai retornar a medida em pixel, a mesma coisa acontece com o Y de forma vertical
});

canvas.addEventListener("mousemove", function(event){
    //essa função identifica quando movemos o mouse
    if(desenhando){
        //esse if vai identificar se estamos clicando enquanto movemos o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        //ele vai identificar toda a linha que estamos tracando enquanto clicamos e movemos o mouse
        contexto.stroke();
        //ele traça a linha
    }
});

canvas.addEventListener("mouseup", function(event){
    // essa função identifica quando não estamos mais clicando no mouse
    desenhando= false;
})



