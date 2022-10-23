const fs = require('fs')

class Engineer {
    constructor(name, id, email, username){
        this.name = name;
        this.id = id;
        this.email = email;
        this.username = username;
    }

    getRole(){
        return `Engineer`
        
    }

    getInfo(){
        fs.appendFileSync('./dist/index.html', this.addProfile())

    }

    addProfile(){
        return `    <div id="engineer">
                <div class="head">
                    <h2>${this.name}</h2>
                    <h3>${this.getRole()}</h3>
                </div>
                
                <div class="info">
                    <h4 class="employeeID">ID: ${this.id}</h4>
                    <h4 class="email">Email: <a href="mailto:${this.email}">${this.email}</a></h4>
                    <h4 class="otherInfo">GitHub: <a href="https://github.com/${this.username}" target="_blank">${this.username}</a></h4>
                </div>
            </div> 
        `
    }


}

module.exports = Engineer