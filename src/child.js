class Child {

    // constructor(child, childAttributes) { 
    //     // debugger       
    //     this.id = child.id             // top level
    //     // debugger                    
    //     this.name = childAttributes.name
    //     this.age = childAttributes.age
    //     this.avatar = childAttributes.avatar
    //     this.classroom = childAttributes.classroom
    //       Child.all.push(this)
    //       debugger
    // }

    constructor(child) {        
        this.id = child.id
        this.name = child.attributes.name
        this.age = child.attributes.age
        this.avatar = child.attributes.avatar
        this.classroom = child.attributes.classroom
          Child.all.push(this)
        //   debugger
    }
}

Child.all = [];
