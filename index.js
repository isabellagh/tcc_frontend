const classroomsURL = "http://localhost:3000/api/v1/classrooms"
const childrenURL = "http://localhost:3000/api/v1/children"

document.addEventListener('DOMContentLoaded', () => {
  // fetch(childrenURL)
  // .then(response => response.json()) // capture the 'response' and then parse the 'response' into JSON
  // .then(children => {               // get access to that json data
  //     console.log(children);
    getchildren()
    // })
  })

  function getchildren() {
      fetch(childrenURL)
      .then(response => response.json())
      .then(children => {                 //getting my children array
        children.data.forEach(child => {
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