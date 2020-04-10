const nodemailer = require("nodemailer");

module.exports = async (txt) => {
    //let testEmailAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        //  port: 587,
        secure: false,
        auth: {
            user: "turchenko333@gmail.com",
            pass: "338Voenkaa"
        }
    });

    let result = await transporter.sendMail({
        from: 'AirDesign aplication <turchenko333@gmail.com>',
        to: "stepanstepan4@gmail.com",
        subject: "Message from Node js server",
        text: "text:",
        html: txt
    }, (err) => {
        if (err) {
            console.error(err);
        }
    });
}
