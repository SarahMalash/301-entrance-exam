`use strict`

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById('currentDate').innerHTML = date;

var objArr = [];
function toDoList (todayAction, theDate){
    this.todayAction = todayAction;
    this.theDate = theDate;
    
    objArr.push(this);
}



var addForm = document.getElementById('toDo');
addForm.addEventListener('submit',function(event) {
    event.preventDefault();
    var obj1= new toDoList((event.target.question1.value), (event.target.date1.value));
});
function showTask(event){
toDoList(document.getElementById('question1').innerHTML,document.getElementById('date1').innerHTML)
}

toDoList.prototype.render = function(){
    var ul1= document.getElementById('ul1');
    for (i = 0; i< objArr.length; i++){
var li1 = document.createElement('li');
ul1.appendChild(li1);
li1.textContent = `${objArr[i]}`;


    }
}







render();


function LocalStorage (){
    var convertString = JSON.stringify(objArr);
    objArr.setItem(obj1);
}

function getLocal(){
    var getString = objArr.getItem(objArr);
}


// var objArr = [];
// function toDoList (todayAction, theDate){
//         this.todayAction = todayAction;
//         this.theDate = theDate;
//         objArr.push[this];
// }

