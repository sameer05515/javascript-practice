const task3Element = document.getElementById('task-3');


function noParam(){
    alert('I am from Motihari');
}

function hello(name){
    alert(`Hello ${name} bhai!!!`);
}

function concat(str1, str2, str3){
    alert(`${str1}-${str2}-${str3}`)
}


noParam();
hello('Premendra');
concat('Premendra','Kumar','Gupta')

task3Element.addEventListener('click', noParam);