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

    // const deleteClassroomBtn = document.getElementById("classroom-classroom-container")
    // deleteClassroomBtn.addEventListener("click", deleteClassroom)
  })

  document.addEventListener("click", function(e) {
    const classroomCard = document.querySelector('#classroomInputs')

    if(e.target.matches("#delete-classroom-button")) {
      e.preventDefault()
      deleteClassroom(e.target.value)
      classroomCard.remove(classroomCard)
      // console.log(e.target.value)
      // alert("The classroom was deleted");
    }
    if(e.target.matches("#edit-classroom-button")){
      e.preventDefault()
      updateClassroom() 
    }
  })

  // function eraseClassroom() {
  //   const classroomCard = document.getElementById('classroomInputs')
  //   classroomCard.remove(classroomCard)

  // }

  document.addEventListener("click", function(e) {
    const childCard = document.getElementById('childInputs')
    //"div:last-child"
    if(e.target.matches("#delete-child-button")) {
      e.preventDefault()
      deleteChild(e.target.value)
      childCard.remove(childCard)
        // console.log(e.target.value)
        // alert("The classroom was deleted");
    }
    // if(e.target.matches("#edit-child-button")){
    //   e.preventDefault()    
    // }
  }) 

    

    

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

  function updateChild(child) {
    fetch(`http://localhost:3000/api/v1/children/${child.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({child: child})
    })
    .then(response => response.json())
    .then(response => console.log("updated response", response))
  }
  
  function deleteChild(id) {
    fetch(`http://localhost:3000/api/v1/children/${id}`, {
      method: "DELETE" 
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }
  

  function getClassrooms() {  //creating a new child
    const classroomList = document.getElementById('select-classroom')

    fetch(classroomsURL)
    .then(response => response.json())
    .then(classrooms => {                 //getting my classroom array
      // console.log(classrooms)
      classrooms.data.forEach(classroom => {  // iterate over the response ans show the data
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
        // debugger
        const newClassroom = new Classroom(classroom)  
        const classroomListItem = document.createElement('option')

        classroomListItem.innerHTML = classroom.attributes.room_name
        classroomListItem.value = classroom.id
        classroomList.append(classroomListItem)

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


  function createFormHandler(e) {     // handles the inputs
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const avatarInput = document.querySelector('#input-avatar').value
    const ageInput = document.querySelector('#input-age').value
        // debugger
    console.log(nameInput)
    const classroomId = parseInt(document.querySelector('#select-classroom').value)
    console.log(classroomId)
    postFetch(nameInput, avatarInput, ageInput, classroomId)

  }

  function postFetch(name, avatar, age, classroom_id) {
    // build body outside of fetch
    const bodyData = {child: {name, avatar, age, classroom_id}}  // the keys sent back (need to be the same as in the schema)
    // debugger
    
    fetch(childrenURL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData) // all attributes
    })
    .then(response => response.json())
    .then(child => {
    //   // debugger
    //   // console.log(child);
      const newChild = new Child(child.data)
    //   // render json response
      document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();
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
