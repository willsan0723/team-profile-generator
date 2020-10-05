
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
    <div class="col-4 p-0">
    <div class="card mx-auto mb-2" style="max-width: 250px">
    <h5 class="card-header bg-primary text-light">${name}</br><i class="fas fa-mug-hot"></i> Manager</h5>
    <ul class="list-group">
        <li class="list-group-item style="font-size: 15px;"">ID: ${id}</li>
        <li class="list-group-item style="font-size: 15px;"">Email Address: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item style="font-size: 15px;"">Office Number: ${offNum}</li>
    </ul>
    </div>
    </div>`
}


if (role === "Engineer") {
    const git = data.getGit();    
    concat +=`
    <div class="col-4 p-0">
    <div class="card mx-auto mb-2" style="max-width: 250px">
    <h5 class="card-header bg-primary text-light">${name}</br><i class="fas fa-glasses"></i> Engineer</h5>
    <ul class="list-group">
        <li class="list-group-item style="font-size: 15px;"">ID: ${id}</li>
        <li class="list-group-item style="font-size: 15px;"">Email Address: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item style="font-size: 15px;"">GitHub: <a href="https://${git}" target="_blank">${git}</a></li>
    </ul>
    </div>
    </div>`
}


if (role === "Intern") {
    const school = data.getSchool();
    concat +=`
    <div class="col-4 p-0">
    <div class="card mx-auto mb-2" style="max-width: 250px">
    <h5 class="card-header bg-primary text-light">${name}</br><i class="fas fa-graduation-cap"></i> Intern</h5>
    <ul class="list-group">
        <li class="list-group-item style="font-size: 15px;"">ID: ${id}</li>
        <li class="list-group-item style="font-size: 15px;"">Email Address: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item style="font-size: 15px;"">School: ${school}</li>
    </ul>
    </div>
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
</head>

<body>
    <header>
    <div class="container align-center py-3">
        <h1 class="page-title text-light bg-danger py-2 px-3 text-center">My Team</h1>
    </div>
    </header>
    <main class="container">
        <div class="flex-row">
        <div class="p-2 d-flex flex-wrap" style="width: 100%">
        ${concat}
        </div>
        </div>
    </main>
    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
</body>
</html>
`;

}

module.exports = generateHTML;