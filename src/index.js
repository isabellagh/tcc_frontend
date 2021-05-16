const api = new ApiService
console.log("api", api)
ApiService.getAllClassrooms()

// click on the button "add a child" in the classrooms table

const tBody = document.querySelector("tbody")

let newClassroomForm = document.getElementById("new-Classroom-form")
newClassroomForm.addEventListener("submit", function(event) {
  event.preventDefault()
  api.createNewClassroom(event.target)
  .then(response => {
    let currentClassroom = new Classroom(response)
    currentClassroom.addClassroomToDom()
  })
})

document.addEventListener("click", function(event) {
  if(event.target.matches(".classrom-h2")) {
    event.preventDefault()
    console.log(event.target)
  }
})

let newChildForm = document.getElementById("new-child-form")
newChildForm.addEventListener("submit", function(event) {
  event.preventDefault()
  createNewChild(event.target)
})

const childrenURL = "http://localhost:3000/api/v1/children"
function createNewChild(child_info) {

  fetch()
}



// let newClassroomForm = document.getElementById("new-classroom-form")
// newClassroomForm.addEventListener("submit", function(event) {
//   event.preventDefault()
//   api.createNewClassroom(event.target)
//   .then(response => {
//     let currentClassroom = new Classroom(response)
//     currentClassroom.addClassroomToDom()
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
//   fetch(childrenURL)
//   .then(response => response.json()) // capture the 'response' and then parse the 'response' into JSON
//   .then(children => {               // get access to that json data
//       console.log(children);
    getchildren()

    const createChildForm = document.querySelector('#create-child-form')

    createChildForm.addEventListener("submit", (e) => createFormHandler(e))

  })

  function getchildren() {
      fetch(childrenURL)
      .then(response => response.json())
      .then(children => {
        children.data.forEach(child => {
          // debugger
          let newChild = new Child(child)
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            document.querySelector('#child-container').innerHTML += newChild.renderChildInfo()
          })
      })
  }

  function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const ageInput = document.querySelector('#input-age').value
    const avatarInput = document.querySelector('#input-avatar').value
    const classroomInput = document.querySelector('#classrooms').value
    postChild(nameInput, ageInput, avatarInput, classroomInput)
}


  function postChild(name, age, avatar, classroom_id) {
    // confirm these values are coming through properly
    // build body object
    const bodyData = {name, age, avatar, classroom_id}
  
    fetch(childrenURL, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(child => {
      console.log(child);
      const childData = child.data
      // render JSON response
      let newChild = new Child(childData, childData.attributes)

      document.querySelector('#child-container'). innerHTML += newChild.renderChildInfo()
    })
  }

  

  