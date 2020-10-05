
var concat = "";
function generateHTML(input) {
    input.forEach(data => {
    const name = data.getName();
    const role = data.getRole();
    const id = data.getId();
    const email = data.getEmail();    
if (role === "Manager") {
    const offNum = data.getOfficeNumber();
    concat +=`
    <div class="col-6">
    <div class="card mx-auto mb-2" style="width: 300px">
    <h5 class="card-header">${name}
    
    Manager</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${offNum}</li>
    </ul>
    </div>`
}


if (role === "Engineer") {
    const git = data.getGit();    
    concat +=`
    <div class="col-6">
    <div class="card mx-auto mb-2" style="width: 300px">
    <h5 class="card-header">${name}
    
    Engineer</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item">GitHub: <a href="${git}">${git}</a></li>
    </ul>
    </div>`
}


if (role === "Intern") {
    const school = data.getSchool();
    concat +=`
    <div class="col-6">
    <div class="card mx-auto mb-2" style="width: 300px">
    <h5 class="card-header">${name}
    
    Intern</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email Address: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
    </ul>
    </div>`
}
})

return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
    <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
    </div>
    </header>
    <main class="container my-5">
        ${concat}
    </main>
    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
</body>
</html>
`;

}

module.exports = generateHTML;