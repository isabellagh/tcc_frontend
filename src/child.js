class Child {
    constructor(child) {        
      this.id = child.id
      this.name = child.attributes.name
      this.age = child.attributes.age
      this.avatar = child.attributes.avatar
      this.classroom = child.attributes.classroom
    //   Child.all.push(this)
    }

    renderChildInfo() {
      return `
        <div data-id=${this.id}>
          <h3>${this.name}</h3>
          <h3>${this.age}</h3>
          <img src=${this.avatar} height="200" width="250">
          <p>${this.classroom.room_name}</p>
          <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;      
    }


    // addNewChildRow() {
    //     return `<tr>
    //     <td>${this.name}</td>
    //     <td>${this.age}</td>
    //     <td>${this.avatar}</td>
    //     <td>${this.classroom.room_name}</td>
    //     </tr>`
    // }

}

Child.all = [];