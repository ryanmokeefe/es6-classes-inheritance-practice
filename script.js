// Class User

class User {
    constructor (username, password) {
        this.username = username
        this.password = password

        
    }
    changePassword(newPass) {
        this.password = newPass
    }
}


var bob = new User ('bill', 'yellowpencil')

// ADMIN Extends USER

class Admin extends User {
    constructor (username, password, accessLevel) {
       super(username, password)
       this.accessLevel = accessLevel

    }

    overridePassword (user, password) {
        user.changePassword(password)
    }
}

var ali = new Admin ('admin', '1234', 5)

////
