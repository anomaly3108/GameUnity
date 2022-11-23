function sendEmail() {
    console.log("I am Clicked")
    Email.send({
        Host : "smtp.mailtrap.io",
        To : 'recipient@example.com',
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }