var x=0;
function Increment(){
    x=x+1;
    document.getElementById("count-el").innerText= x;
}
function save()
{
    document.getElementById("enteries").textContent += x + " - ";
    document.getElementById("count-el").textContent=0;
    x=0;
}