var colors = generaterandomcolor(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = colors[ran()];
var colordisplay = document.getElementById("colordisplay");
var head = document.getElementById("head");
colordisplay.textContent = pickedcolor;
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
reset.addEventListener("click",function()
                      {
    colors = generaterandomcolor(6);
    pickedcolor = colors[ran()];
    colordisplay.textContent = pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background = colors[i];
    }
    head.style.background = "aqua";
    
})
for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click",function()
        {
            var clickedcolor = this.style.background;
            if(clickedcolor === pickedcolor)
        {
                message.textContent = "correct!!";
                changecolor(pickedcolor);
                head.style.background = pickedcolor;
            reset.textContent = "play again?";
                
        }
            else
                {
                this.style.background = "#232323";
                    message.textContent = "incorrect!!";
                    
                }
                                    });
    }
function changecolor(color)
{
    for(var i=0;i<squares.length;i++)
        {
            squares[i].style.background = color;
        }
}
function random()
{
    var c1 = Math.floor(Math.random()*255);
    var c2 = Math.floor(Math.random()*255);
    var c3 = Math.floor(Math.random()*255);
    
    return "rgb(" + c1+", " +c2+", " +c3+")";
}
function generaterandomcolor(num)
{
    arr=[];
    for(var i=0;i<num;i++)
        {
            arr.push(random());
        }
    return arr;
}
function ran()
{
    var c4 = Math.floor(Math.random()*6);
    return c4;
}