function generateHTML(input) {
    input.forEach(data => {
    const name = data.getName();
    const role = data.getRole();
    const id = data.getId();
    const email = data.getEmail();

if (role === "Engineer") {
    const git = data.getGit();
    console.log(name);
    console.log(role);
    console.log(git);
    console.log(id);
    console.log(email);
}

if (role === "Manager") {
    const offNum = data.getOfficeNumber();
    console.log(name);
    console.log(role);
    console.log(offNum);
    console.log(id);
    console.log(email);
}

if (role === "Intern") {
    const school = data.getSchool();
    console.log(name);
    console.log(role);
    console.log(school);
    console.log(id);
    console.log(email);
}
})

// return `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>
//     <header>
//     <div class="container flex-row justify-space-between align-center py-3">
//         <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
//     </div>
//     </header>
//     <main class="container my-5">
//         ${generateTeam(data)}
//     </main>
//     <footer class="container text-center py-3">
//     <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
//     </footer>
// </body>
// </html>
// `;

}

module.exports = generateHTML;