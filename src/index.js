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

    const loginForm = document.querySelector("#login-form")  //query the form  
    loginForm.addEventListener("submit", (e) => loginFormHandler(e))
})
      // debugger

  function getChildren() {  //creating a new child
      fetch(childrenURL)
      .then(response => response.json())
      .then(children => {                 //getting my children array
        children.data.forEach(child => {  // iterate over the response ans show the data
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          // debugger
          const newChild = new Child(child)  
          // debugger   //creates a new instance of a Child class. child object and the attributes

            // // // renderChildInfo(child)
          document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();

          })
      })
  }

  function getClassrooms() {  //creating a new child
    fetch(classroomsURL)
    .then(response => response.json())
    .then(classrooms => {                 //getting my classroom array
      // console.log(classrooms)
      classrooms.data.forEach(classroom => {  // iterate over the response ans show the data
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        // debugger
        const newClassroom = new Classroom(classroom)  
        // debugger   //creates a new instance of a Classroom class. classroom object and the attributes

          // // // renderClassroomTable(classroom)
        document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();

        })
    })
}

function updateClassroom(classroom) {
  fetch(`http://localhost:3000/api/v1/classrooms/${classroom.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({classroom: classroom})
  })
  .then(response => response.json())
  .then(response => console.log("updated response", response))
}

function deleteClassroom(id) {
  fetch(`http://localhost:3000/api/v1/classrooms/${id}`, {
    method: "DELETE" 
  })
  .then(response => response.json())
  .then(response => console.log(response))
}


  function loginFormHandler(e) {
    e.preventDefault()
    const emailInput = e.target.querySelector("#login-email").value
    const pwInput = e.target.querySelector("#login-password").value
    loginFetch(emailInput, pwInput)
  }

  function loginFetch(email, password) {
    const bodyData = {user: { email, password }} //destructuring

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('jwt_token', json.jwt)
      renderUserProfile()
    })
  }

  function renderUserProfile() {
    console.log(localStorage.getItem('jwt_token'));
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
    })
    .then(response => response.json())
    .then(json => {
      alert(`Welcome back ${json.user.data.attributes.name}`)
    })
  }

  function createFormHandler(e) {     // handles the inputs
    e.preventDefault() 
    console.log(e);           
    const nameInput = document.querySelector('#input-name').value
    const ageInput = document.querySelector('#input-age').value
    const avatarInput = document.querySelector('#input-avatar').value
    const classroomId = parseInt(document.querySelector('#classrooms').value)
    postFetch(nameInput, ageInput, avatarInput, classroomId)
  }

  function postFetch(name, age, avatar, classroom_id) {
    // build body outside of fetch
    const bodyData = {child: {name, age, avatar, classroom_id}}  // the keys sent back (need to be the same as in the schema)
    // debugger
    
    fetch(childrenURL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData) // all attributes
    })
    .then(response => response.json())
    .then(child => {
      // debugger
      // console.log(child);
      const newChild = new Child(child.data)
      // render json response
      // renderChildInfo(childData)
          document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();

    })


    function classroomFormHandler(e) {     // handles the inputs
      e.preventDefault()
      console.log(e);            
      const roomNameInput = document.querySelector('#input-room-name').value
      const ageInput = document.querySelector('#input-age').value
      const teacherNameInput = document.querySelector('#input-teacher-name').value
      const full = (document.querySelector('#full').value)
      classroomPostFetch(roomNameInput, ageInput, teacherNameInput, full)
    }
  
    function classroomPostFetch(room_name, age, teacher_name, full) {
      // build body outside of fetch
      const bodyData = {classroom: {room_name, age, teacher_name, full}}  // the keys sent back (need to be the same as in the schema)
      // debugger
      
      fetch(classroomsURL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData) // all attributes
      })
      .then(response => response.json())
      .then(classroom => {
        // debugger
        // console.log(classroom);
        const newClassroom = new Classroom(classroom.data)
        // render json response
            document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();  
      })
    }
  }

