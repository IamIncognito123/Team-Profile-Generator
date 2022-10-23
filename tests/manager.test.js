const Manager = require('../lib/manager')



describe('Manager', () => {
    test('checks to see if getRole returns manager', () => {
        const obj = new Manager
        const c = obj.getRole()
        const q = 'Manager'
        expect(c).toEqual(q)
    })



    // test('checks if getInfo adds data to the html file', () => {
    //     const obj = new Manager;
    //     const create
    // })

    test('checks if generateProfile creates an HTML document', () => {
        const obj = new Manager('Helen', 5, 'helen@gmail.com', 7);
        const profileFunction = obj.generateProfile();
        const profile = `<!DOCTYPE html>
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
                    <h2>Helen</h2>
                    <h3>Manager</h3>
                </div>
        
                <div class="info">
                    <h4 class="employeeID">ID: 5</h4>
                    <h4 class="email">Email: <a href="mailto:helen@gmail.com">helen@gmail.com</a></h4>
                    <h4 class="otherInfo"> Office Number: 7</h4>
                </div>

            </div>`
            expect(profileFunction).toEqual(profile);


    })
      
})