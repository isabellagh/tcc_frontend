class App {
//     attachEventListeners() {
//         // debugger
//     //   document.querySelector('#classroom-classroom-container').addEventListener('click', e => {
//       document.querySelector('#classroom-edit-id').addEventListener('submit', e => {
//         e.preventDefault();
//         // debugger
//         const id = parseInt(e.target.dataset.id);
//         const classroom = Classroom.findById(id);
//         const roomName = e.target.querySelector('input').value;
//         const teacherName = e.target.querySelector('input').value;

//         const bodyJSON = { roomName, teacherName }
//         fetch(`http://localhost:3000/api/v1/classrooms/${classroom.id}`, {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json"},
//           body: JSON.stringify({classroom: classroom})
//         })
//           .then(response => response.json())
//           .then(response => console.log("updated response", response));

//     });
//   }
}