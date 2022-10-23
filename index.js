const Manager = require('./lib/manager');
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

const fs = require('fs')
const inquirer = require('inquirer')

const closeFile = () => {
    return `</div>
    
</body>


</html>`
}


const question = ['What is your name?', 'Employee ID', 'Email Address', 'Office Number'];



const managerInfo = () =>{
    inquirer
    .prompt([

        {   
            type: 'input',
            message: question[0],
            name: 'managerName'
        },
        {
            type: 'input',
            message: question[1],
            name: 'managerId'
        },
        {
            type: 'input',
            message: question[2],
            name: 'managerEmail'
        },
        {
            type:'input',
            message: question[3],
            name: 'managerNumber'
        }

    ])
    .then ((data) => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerNumber)
        manager.getInfo()
    })
    .then(internOrEngineer)


}

const internOrEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add an engineer, intern or finish?',
            name: 'employeeAdd',
            choices: ['intern', 'engineer', 'finish']
        }
    ])
    .then((data) => {
        if(data.employeeAdd === 'intern'){
            internAdd();
        }else if (data.employeeAdd === 'engineer'){
            engineerAdd();
        }else{
            fs.appendFileSync('./dist/index.html', closeFile())
        }
    })
}

const internAdd = () => {

    inquirer
    .prompt([
        {   
            type: 'input',
            message: question[0],
            name: 'name'
        },
        {
            type: 'input',
            message: question[1],
            name: 'id'
        },
        {
            type: 'input',
            message: question[2],
            name: 'email'
        },
        {
            
            type: 'input',
            message: 'Current School',
            name: 'school'
        }
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        intern.getInfo();
    })
    .then (() => {
        internOrEngineer();
    })
}

const engineerAdd = () =>{
    inquirer
    .prompt([
        {   
            type: 'input',
            message: question[0],
            name: 'name'
        },
        {
            type: 'input',
            message: question[1],
            name: 'id'
        },
        {
            type: 'input',
            message: question[2],
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your GitHub usermname?',
            name: 'username'
        }
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.username)
        engineer.getInfo();
    })
    .then (() => {
        internOrEngineer();
    })
}

managerInfo();
