const fs = require('fs')
class Manager {
    constructor(managerName, employeeId, email, number){
        this.managerName = managerName;
        this.employeeId = employeeId;
        this.email = email;
        this.number = number
        
    }
    
    getInfo(){
        // console.log(`My number is ${this.number}`)
        fs.writeFileSync('./dist/index.html', this.generateProfile())
    }

    getRole(){
        return 'Manager';
        
        
    }

    generateProfile(){
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css"/>
        <title>Team Profile</title>
    </head>
    <body>
        <h1 id="title">
            My Team
        </h1>

        <div class="profile">
            <div class="manager">
                <div class="head">
                    <h2>${this.managerName}</h2>
                    <h3>${this.getRole()}</h3>
                </div>
        
                <div class="info">
                    <h4 class="employeeID">ID: ${this.employeeId}</h4>
                    <h4 class="email">Email: <a href="mailto:${this.email}">${this.email}</a></h4>
                    <h4 class="otherInfo"> Office Number: ${this.number}</h4>
                </div>

            </div>`
    }
   
}


module.exports = Manager

// handle the prompts outside of the classes, use the classes to handle data 
// 

