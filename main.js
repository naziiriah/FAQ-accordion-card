document.getElementById('arr1').addEventListener('mouseover', openArea)
document.getElementById('arr1').addEventListener('click', closeArea)
const array1 = document.getElementById('arr1')
const Read = document.getElementsByClassName('readBelow')[0]

function openArea(){
    
array1.style.transform = "rotate(45deg)"
    array1.style.webkitTransform = "rotate(45deg)"
    array1.style.transition = "0.2s"
    Read.style.display = 'block'
}
function closeArea(){
    array1.style.transform = "rotate(-135deg)"
    array1.style.webkitTransform = "rotate(-135deg)"
    array1.style.transition = "0.2s"
    Read.style.display = 'none'
}



document.getElementById('arr2').addEventListener('mouseover', openArea2)
document.getElementById('arr2').addEventListener('click', closeArea2)
const array2 = document.getElementById('arr2')
const Read2 = document.getElementsByClassName('readBelow')[1]

function openArea2(){
    
    array2.style.transform = "rotate(45deg)"
    array2.style.webkitTransform = "rotate(45deg)"
    array2.style.transition = "0.2s"
    Read2.style.display = 'block'
}
function closeArea2(){
    array2.style.transform = "rotate(-135deg)"
    array2.style.webkitTransform = "rotate(-135deg)"
    array2.style.transition = "0.2s"
    Read2.style.display = 'none'
}


document.getElementById('arr3').addEventListener('mouseover', openArea3)
document.getElementById('arr3').addEventListener('click', closeArea3)
const array3 = document.getElementById('arr3')
const Read3 = document.getElementsByClassName('readBelow')[2]

function openArea3(){
    
    array3.style.transform = "rotate(45deg)"
    array3.style.webkitTransform = "rotate(45deg)"
    array3.style.transition = "0.2s"
    Read3.style.display = 'block'
}
function closeArea3(){
    array3.style.transform = "rotate(-135deg)"
    array3.style.webkitTransform = "rotate(-135deg)"
    array3.style.transition = "0.2s"
    Read3.style.display = 'none'
}



document.getElementById('arr4').addEventListener('mouseover', openArea4)
document.getElementById('arr4').addEventListener('click', closeArea4)
const array4 = document.getElementById('arr4')
const Read4 = document.getElementsByClassName('readBelow')[3]

function openArea4(){
    
    array4.style.transform = "rotate(45deg)"
    array4.style.webkitTransform = "rotate(45deg)"
    array4.style.transition = "0.2s"
    Read4.style.display = 'block'
}
function closeArea4(){
    array4.style.transform = "rotate(-135deg)"
    array4.style.webkitTransform = "rotate(-135deg)"
    array4.style.transition = "0.2s"
    Read4.style.display = 'none'
}

//the final click event

document.getElementById('arr5').addEventListener('mouseover', openArea5)
document.getElementById('arr5').addEventListener('click', closeArea5)
const array5 = document.getElementById('arr5')
const Read5 = document.getElementsByClassName('readBelow')[4]

function openArea5(){
    
    array5.style.transform = "rotate(45deg)"
    array5.style.webkitTransform = "rotate(45deg)"
    array5.style.transition = "0.2s"
    Read5.style.display = 'block'
}
function closeArea5(){
    array5.style.transform = "rotate(-135deg)"
    array5.style.webkitTransform = "rotate(-135deg)"
    array5.style.transition = "0.2s"
    Read5.style.display = 'none'
}



