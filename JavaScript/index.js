console.log("Hello world", 10+3, "10"+3)
// document.write("this is document write")
console.error("This is an error");
console.warn("This is a warning")

var num1 = 10
var num2 = 5
console.log(num1+num2)

var str1 = "This is a string"
var marks = {
    A : 10,
    B: 9,
    C : 4
}
console.log(marks)

var arr = [2,5,"hey",1,4]
// console.log(arr[2])

function avg(a, b){
    return (a+b)/2
}

var c1 = avg(10, 5)
var c2 = avg(5.5, 3.6)

// console.log(c1, c2)
for(var i=0; i<arr.length; i++){
    // console.log(arr[i])
}

let myStr = "goodgoodgood"
// console.log(myStr.indexOf("good"))
// console.log(myStr.lastIndexOf("good"))

let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())

let ele = document.getElementById("click")
// console.log(ele)
let ele2 = document.getElementsByClassName("container")
// console.log(ele2)
ele.style.background= "yellow"
ele2[1].style.background = "pink"
// console.log(ele2[1].innerHTML)
// console.log(ele2[1].innerText)

tn = document.getElementsByTagName('div')
// console.log(tn)
let created = document.createElement('p');
created.innerText = "this is a created para"
tn[0].appendChild(created)
let ans = tn[0].innerText
// console.log(ans);

let sel = document.querySelector(".container");
// console.log(sel);
let selec = document.querySelectorAll(".container");
// console.log(selec);
let sel2 = document.querySelector('#click');
// console.log(sel2);

// function clicked(){
//     console.log("Clicked");
// }

const clicked = ()=>{
    console.log("clicked")
}

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('click', function(){
//     console.log("Clicked on first Container");
//     document.querySelectorAll('.container')[1].innerHTML = "<b>First Container was clicked</b>"
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on first Container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Moused out first Container");
// })

// document.querySelectorAll('.container')[1].addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>This container was clicked</b>";
// })

// document.querySelectorAll('.container')[1].addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
// })

obj = {name:'A', age:'5', inside:{iname:"iA", iage:"i5"}}
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);

parsed = JSON.parse(`{"name":"A","age":"5","inside":{"iname":"iA","iage":"i5"}}`)
console.log(parsed);
console.log(typeof parsed)