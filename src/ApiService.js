// class ApiService {
//     constructor() {
//         this.baseURL = "http://localhost:3000";
//         this.classroomURL = "http://localhost:3000/classrooms";
//         this.childrenURL = "http://localhost:3000/children";
//         this.teacherURL = "http://localhost:3000/teachers";
//     }

//     getAllClassrooms() {
//         return fetch(this.baseURL + "/classrooms")
//         .then(response => response.json)
//     }

//     getAllChildren() {
//         return fetch(this.baseURL + "/children")
//         .then(response => response.json)
//     }

//     updateChild(child) {
//         return fetch(this.baseURL + "/children" + child.id, {
//             method: "PATCH",
//             headers: { "content-type": "application/json",
//             accepts: "application/json"
//             },
//             body: JSON.stringify({child: child})
//         })
//         .then(response => response.json())
//     }

//     deleteChild(id) {
//         return fetch(`${this.baseURL}/children${id}`, {
//             method: "DELETE",
//         })
//         .then(response => response.json())
//     }

//     createNewChild(child) {
//         return fetch(this.baseURL + "/children", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "Application/json",
//             },
//             body: JSON.stringify({
//                 child: child
//             })
//         })
//         .then(response => response.json())
//     }

    






//     createNewClassroom(classroom) {
//         return fetch(this.baseURL + "/classrooms", {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({
//                 classroom: classroom
//             })
//         })
//         .then(response => response.json())
//     }       
// }

// api = new ApiService

// api.getAllChildren()
// .then(response => callAnotherFunction(response))
// api.createNewClassroom({room_name: "toddler 2", age: 2})