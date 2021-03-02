var mainList = document.getElementById('mainList')
var todoInput = document.getElementById('inp')

function addTodo() {
    var inputText = todoInput.value
    var text = document.createTextNode(inputText)
    var li = document.createElement('li')
    li.setAttribute('class', 'list')
    li.appendChild(text)
    console.log(li)
    mainList.appendChild(li)
    todoInput.value = ''

    var btnDiv = document.createElement('div')
    //=== Create Delete Button =====
    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'btn')
    deleteBtn.setAttribute('onClick', 'deletTodo(this)')
    var deleteBtnText = 'Delete Todo'
    var deleteText = document.createTextNode(deleteBtnText)
    deleteBtn.appendChild(deleteText)
    btnDiv.appendChild(deleteBtn)

    //=== Create Edit Button =====
    var editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'btn')
    editBtn.setAttribute('onClick', 'editTodo(this)')
    var editText = document.createTextNode('Edit Todo')
    editBtn.appendChild(editText)
    btnDiv.appendChild(editBtn)

    li.appendChild(btnDiv)
}

function deletTodo(e) {
    e.parentNode.parentNode.remove()
}

function editTodo(e) {
    var tumharaText = prompt('Apna Text likho')
    console.log(e.parentNode.parentNode.childNodes[0])
    var listText = e.parentNode.parentNode.firstChild
    listText.nodeValue = tumharaText
}

function deleteAll() {
    mainList.innerHTML = ''
}


//=========== Constructor Function =============


// var obj = {
//     name: 'Basit Ahmed',
//     age: 21,
//     result: 'pass',
// }

// var checkproperty = 'institute' in obj

// obj.institute = 'SAIMS'

// console.log(obj)



// function CreateStudentObject(name, age, inst) {
//     this.studentName = name
//     this.age = age
//     this.institute = inst
// }

// var student1 = new CreateStudentObject('Basit Ahmed', 12, "SAIMS")

// var arr = []

// function addStudent() {
//     var name = prompt('name')
//     var age = prompt('age')
//     var inst = prompt('inst')

//     var newStudent = new CreateStudentObject(name, age, inst)
//     arr.push(newStudent)
//     console.log(arr)
// }









