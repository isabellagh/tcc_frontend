const classroomsURL = "http://localhost:3000/api/v1/classrooms"
const childrenURL = "http://localhost:3000/api/v1/children"

document.addEventListener('DOMContentLoaded', () => {
  getChildren()
  getClassrooms()
    
    const createClassroomForm = document.querySelector("#create-classroom-form")    
    createClassroomForm.addEventListener("submit", (e) => classroomFormHandler(e))
    
    const createChildForm = document.querySelector("#create-child-form")    
    createChildForm.addEventListener("submit", (e) => createFormHandler(e))
})

document.addEventListener("click", function(e) {
  const classroomCard = document.getElementById(`${e.target.dataset.id}`)

  if(e.target.matches("#delete-classroom-button")) {
    e.preventDefault()
    deleteClassroom(e.target.dataset.id)
    classroomCard.remove(classroomCard)
    // classroomCard.reset()
  }
})

document.addEventListener("click", function(e) {
  const childCard = document.getElementById(`${e.target.dataset.id}`)

  if(e.target.matches("#delete-child-button")) {
    e.preventDefault()
    deleteChild(e.target.dataset.id)
    childCard.remove(childCard)
    // childCard.reset()
  }
}) 
   
     // CLASSROOM FETCH //  

function getClassrooms() {  
  const classroomList = document.getElementById('select-classroom')

  fetch(classroomsURL)
  .then(response => response.json())
  .then(classrooms => {                 
    classrooms.data.forEach(classroom => {  

      const newClassroom = new Classroom(classroom)  
      const classroomListItem = document.createElement('option')

      classroomListItem.innerHTML = classroom.attributes.room_name
      classroomListItem.value = classroom.id
      classroomList.append(classroomListItem)

      document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();
    })
  })
}

function classroomFormHandler(e) {     
  e.preventDefault()
  console.log(e);            
  const roomNameInput = document.querySelector('#input-room-name').value
  const classroomAgeInput = document.querySelector('#classroom-input-age').value
  const teacherNameInput = document.querySelector('#input-teacher-name').value
  // const full = (document.querySelector('#full').value)
  classroomPostFetch(roomNameInput, classroomAgeInput, teacherNameInput)
}

function classroomPostFetch(room_name, age, teacher_name, full) {
  
  const bodyData = {classroom: {room_name, age, teacher_name, full}}  // the keys sent back (need to be the same as in the schema)
  
  fetch(classroomsURL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData) 
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


        // CHILD Fetch //

function getChildren() {  
  fetch(childrenURL)
  .then(response => response.json())
  .then(children => {   
    
   
    children.data.sort((child, child2) => {
      return child.attributes.name.length - child2.attributes.name.length
       
    })

    children.data.forEach(child => {  

      const newChild = new Child(child)  
      
        document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();
      })
  })
}

function createFormHandler(e) {     
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
  const bodyData = {child: {name, avatar, age, classroom_id}}    
  fetch(childrenURL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData) 
  })
  .then(response => response.json())
  .then(child => {
    const newChild = new Child(child.data)
    
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
  
    
  
    
  
    
