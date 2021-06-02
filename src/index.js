const classroomsURL = "http://localhost:3000/api/v1/classrooms"
const childrenURL = "http://localhost:3000/api/v1/children"

document.addEventListener('DOMContentLoaded', () => {
  getChildren()
  getClassrooms()
    // fetch and load children
    const createClassroomForm = document.querySelector("#create-classroom-form")  //query the form  
    createClassroomForm.addEventListener("submit", (e) => classroomFormHandler(e))
    
    const createChildForm = document.querySelector("#create-child-form")  //query the form  
    createChildForm.addEventListener("submit", (e) => createFormHandler(e))
})

document.addEventListener("click", function(e) {
  const classroomCard = document.getElementById(`${e.target.dataset.id}`)

  if(e.target.matches("#delete-classroom-button")) {
    e.preventDefault()
    deleteClassroom(e.target.dataset.id)
    classroomCard.remove(classroomCard)
    // alert("The classroom was deleted");
  }
})

document.addEventListener("click", function(e) {
  const childCard = document.getElementById(`${e.target.dataset.id}`)

  if(e.target.matches("#delete-child-button")) {
    e.preventDefault()
    deleteChild(e.target.dataset.id)
    childCard.remove(childCard)
    // alert("The child was deleted");
  }
}) 
   
     // CLASSROOM CALLBACKS //  

function getClassrooms() {  //creating a new child
  const classroomList = document.getElementById('select-classroom')

  fetch(classroomsURL)
  .then(response => response.json())
  .then(classrooms => {                 //getting my classroom array
    classrooms.data.forEach(classroom => {  // iterate over the response ans show the data
      // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      const newClassroom = new Classroom(classroom)  
      const classroomListItem = document.createElement('option')

      classroomListItem.innerHTML = classroom.attributes.room_name
      classroomListItem.value = classroom.id
      classroomList.append(classroomListItem)
        //creates a new instance of a Classroom class. classroom object and the attributes
        document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();
    })
  })
}

function classroomFormHandler(e) {     // handles the inputs
  e.preventDefault()
  console.log(e);            
  const roomNameInput = document.querySelector('#input-room-name').value
  const classroomAgeInput = document.querySelector('#classroom-input-age').value
  const teacherNameInput = document.querySelector('#input-teacher-name').value
  // const full = (document.querySelector('#full').value)
  classroomPostFetch(roomNameInput, classroomAgeInput, teacherNameInput)
}

function classroomPostFetch(room_name, age, teacher_name, full) {
  // build body outside of fetch
  const bodyData = {classroom: {room_name, age, teacher_name, full}}  // the keys sent back (need to be the same as in the schema)
  
  fetch(classroomsURL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData) // all attributes
  })
  .then(response => response.json())
  .then(classroom => {
    const newClassroom = new Classroom(classroom.data)

      document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();  
  })
}

function deleteClassroom(id) {
  fetch(`http://localhost:3000/api/v1/classrooms/${id}`, {
    method: "DELETE" 
  })
  .then(response => response.json())
  .then(response => console.log(response))
}


        // CHILD CALLBACKS //

function getChildren() {  //creating a new child
  fetch(childrenURL)
  .then(response => response.json())
  .then(children => {                 //getting my children array
    children.data.forEach(child => {  // iterate over the response ans show the data
        // double check how your data is nested in the console so you can successfully access the attributes of each individual object
      // debugger
      const newChild = new Child(child)  
      //creates a new instance of a Child class. child object and the attributes
        document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();
      })
  })
}

function createFormHandler(e) {     // handles the inputs
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const avatarInput = document.querySelector('#input-avatar').value
  const ageInput = document.querySelector('#input-age').value
     
  console.log(nameInput)
  const classroomId = parseInt(document.querySelector('#select-classroom').value)
  console.log(classroomId)
  postFetch(nameInput, avatarInput, ageInput, classroomId)

}


function postFetch(name, avatar, age, classroom_id) {
    // build body outside of fetch
  const bodyData = {child: {name, avatar, age, classroom_id}}  // the keys sent back (need to be the same as in the schema)  
  fetch(childrenURL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData) // all attributes
  })
  .then(response => response.json())
  .then(child => {
    const newChild = new Child(child.data)
    //   // render json response
      document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();
  })
}

function deleteChild(id) {
  fetch(`http://localhost:3000/api/v1/children/${id}`, {
    method: "DELETE" 
  })
  .then(response => response.json())
  .then(response => console.log(response))
}
  
    
  
    
  
    
