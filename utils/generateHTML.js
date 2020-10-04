function generateHTML(data) {
return `${data[0].getRole()}
${data[1].getRole()}
${data[2].getRole()}`
}

module.exports = generateHTML;