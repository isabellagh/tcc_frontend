


// const classroomsURL = "http://localhost:3000/api/v1/classrooms"

// document.addEventListener('DOMContentLoaded', () => {
//   getClassrooms()
// })

// function getClassrooms() {
//     fetch(classroomsURL)
//     .then(response => response.json())
//     .then(classrooms => {                 
//       classroomsURL.data.forEach(classroom => {
//           renderClassroomTable(classroom)
//       })
//     })    
// }


// renderClassroomTable() {
//     return `
//     <span class="classroomCard" id="${this.id}>
//       <div id="classroomCard" class="card-group" style="width: 18rem;">
//         <div id="classroomInputs" class="card mb-4 shadow-sm">
//           <img src="https://playtolearnpreschool.us/wp-content/uploads/2015/07/IMG_4277-1024x732.jpg" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${this.room_name}</h5>
//               <h5 class="card-title">Teacher: ${this.teacher_name}</h5>
//               <p class="card-text">Age group: ${this.age}</p>
//                 <div class="d-flex justify-content-between align-items-center">
//                 <div id="buttonsList" class="btn-group">
//               <ul>
//                 <button id="view-button" type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                 <button value=${this.id} id="edit-classroom-button" type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                 <button value=${this.id} id="delete-classroom-button" type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
//               <ul/>
//                 </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     <span/>`
//     document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();
// }


// document.addEventListener('DOMContentLoaded', () => {
//     getClassrooms()
//       const createClassroomForm = document.querySelector("#create-classroom-form")  
//       createClassroomForm.addEventListener("submit", (e) => classroomFormHandler(e))
// })


// function classroomFormHandler(e) {     
//     e.preventDefault()
//     console.log(e);            
//     const roomNameInput = document.querySelector('#input-room-name').value
//     const classroomAgeInput = document.querySelector('#classroom-input-age').value
//     const teacherNameInput = document.querySelector('#input-teacher-name').value
//     classroomPostFetch(roomNameInput, classroomAgeInput, teacherNameInput)
//   }



//   function classroomPostFetch(room_name, age, teacher_name, full) {
    
//     const bodyData = {classroom: {room_name, age, teacher_name, full}}
    
//     fetch(classroomsURL, {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())
//     .then(classroom => {
      
//       const newClassroom = new Classroom(classroom.data)
      
//         document.querySelector('#classroom-classroom-container').innerHTML += newClassroom.renderClassroomTable();  
//     })
//   }

