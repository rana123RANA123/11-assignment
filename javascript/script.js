document.getElementById("clearall").onclick = function(){
    document.calc.txt.value =''
}
document.getElementById("divide").onclick = function(){
    document.calc.txt.value +='/'
}
document.getElementById("multiply").onclick = function(){
    document.calc.txt.value +='*'
}
document.getElementById("seven").onclick = function(){
    document.calc.txt.value +='7'
}
document.getElementById("eight").onclick = function(){
    document.calc.txt.value +='8'
}
document.getElementById("nine").onclick = function(){
    document.calc.txt.value +='9'
}
document.getElementById("minus").onclick = function(){
    document.calc.txt.value +='-'
}
document.getElementById("four").onclick = function(){
    document.calc.txt.value +='4'
}
document.getElementById("five").onclick = function(){
    document.calc.txt.value +='5'
}
document.getElementById("six").onclick = function(){
    document.calc.txt.value +='6'
}
document.getElementById("plus").onclick = function(){
    document.calc.txt.value +='+'
}
document.getElementById("three").onclick = function(){
    document.calc.txt.value +='3'
}
document.getElementById("two").onclick = function(){
    document.calc.txt.value +='2'
}
document.getElementById("one").onclick = function(){
    document.calc.txt.value +='1'
}
document.getElementById("zero").onclick = function(){
    document.calc.txt.value +='0'
}
document.getElementById("twozero").onclick = function(){
    document.calc.txt.value +='00'
}
document.getElementById("dot").onclick = function(){
    document.calc.txt.value +='.'
}
document.getElementById("equal").onclick = function(){
   document.calc.txt.value = eval(calc.txt.value)

}
