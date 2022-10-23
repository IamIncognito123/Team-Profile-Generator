const fs = require('fs')


class Intern{
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getInfo(){
        fs.appendFileSync('./dist/index.html', this.addProfile())
    }

    getRole(){
        return `Intern`
    }

    addProfile(){
        return `    <div class="intern">
                <div class="head">
                    <h2>${this.name}</h2>
                    <h3>${this.getRole()}</h3>
                </div>

                <div class="info">
                    <h4 class="employeeID">ID: ${this.id}</h4>
                    <h4 class="email">Email: <a href="mailto:${this.email}">${this.email}</a></h4>
                    <h4 class="otherInfo">School: ${this.school}</h4>
                </div>
            </div>

        `
    }
}

module.exports = Intern