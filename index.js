const classroomsURL = "http://localhost:3000/api/v1/classrooms"
const childrenURL = "http://localhost:3000/api/v1/children"

document.addEventListener('DOMContentLoaded', () => {
    getchildren()

    const createChildForm = document.querySelector("#create-child-form")  //query the form

    createChildForm.addEventListener("submit", (e) => createFormHandler(e))
  })

  function getchildren() {
      fetch(childrenURL)
      .then(response => response.json())
      .then(children => {                 //getting my children array
        children.data.forEach(child => {  // iterate over the response ans show the data
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            const childMarkup = `
              <div data-id=${child.id}>
                <img src=${child.attributes.avatar} height="200" width="250">
                <h3>${child.attributes.name}</h3>
                <p>${child.attributes.classroom.room_name}</p>
                <button data-id=${child.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#child-container').innerHTML += childMarkup
          })
      })
  }

  function createFormHandler(e) {     // handles the inputs
    e.preventDefault()            
    const nameInput = document.querySelector('#input-name').value
    const ageInput = document.querySelector('#input-age').value
    const avatarInput = document.querySelector('#input-avatar').value
    const classroomId = parseInt(document.querySelector('#classrooms').value)
    postFetch(nameInput, ageInput, avatarInput, classroomId)
  }

  function postFetch(name, age, avatar, classroom_id) {
    // build body outside of fetch
    const bodyData = {name, age, avatar, classroom_id}
    
    fetch(childrenURL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData) // all attributes
        // name: name,
        // age: age,
        // avatar: avatar,
        // classroom_id: classroom_id  
    })
    .then(response => response.json())
    .then(child => {
      const childData = child.data.attributes
      // render json response
      const childMarkup = `
              <div data-id=${child.id}>
                <img src=${childData.avatar} height="200" width="250">
                <h3>${childData.name}</h3>
                <p>${childData.classroom.room_name}</p>
                <button data-id=${childData.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#child-container').innerHTML += childMarkup 
    })
  }