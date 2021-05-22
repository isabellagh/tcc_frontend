const classroomsURL = "http://localhost:3000/api/v1/classrooms"
const childrenURL = "http://localhost:3000/api/v1/children"

document.addEventListener('DOMContentLoaded', () => {
  getChildren()
  // function init(){
    // fetch and load children
    // getchildren()
    
    const createChildForm = document.querySelector("#create-child-form")  //query the form  
    createChildForm.addEventListener("submit", (e) => createFormHandler(e))

    const loginForm = document.querySelector("#login-form")  //query the form  
    loginForm.addEventListener("submit", (e) => loginFormHandler(e))
})
      // debugger
      // createFormHandler(e)
  //   })
  // }

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

  // function renderChildInfo(child) {
  //   const childMarkup = `
  //   <div data-id=${child.id}>
  //     <img src=${child.attributes.avatar} height="200" width="250">
  //     <h3>${child.attributes.name}</h3>
  //     <p>${child.attributes.classroom.room_name}</p>
  //     <button data-id=${child.id}>edit</button>
  //   </div>
  //   <br><br>`;

  //   document.querySelector('#child-child-container').innerHTML += childMarkup
  // }

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
    // fetch('http://localhost:3000/api/v1/profile', {
    //   method: 'GET',
    //   headers: { Authorization: `Bearer ${localStorage.getItem('jwt_token')}`}
    // })
    // .then(response => response.json())
    // .then(json => {
    //   alert(`Welcome back ${json.user.data.attributes.name}`)
    // })
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
    const bodyData = {child: {name, age, avatar, classroom_id}}  // the keys sent back (need to be the same as in the schema)
    // debugger
    
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
      // debugger
      // console.log(child);
      // const childData = child.data
      const newChild = new Child(child.data)
      // render json response
      // renderChildInfo(childData)
          document.querySelector('#child-child-container').innerHTML += newChild.renderChildInfo();

    })
  }

// init()