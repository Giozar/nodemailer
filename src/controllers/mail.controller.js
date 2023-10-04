import nodemailer from 'nodemailer'

//env
import dotenv from 'dotenv';// para cargar las variables de entorno desde el archivo .env
dotenv.config(); // para cargar las variables de entorno desde el archivo .env


async function mainMail(name, email, subject, message) {

    // CPANEL
    // const transporter = await nodemailer.createTransport({
    //     host: process.env.HOST,
    //     port: process.env.PORT,
    //     secure: false,
    //     auth: {
    //         user: process.env.EMAIL_USER,
    //         PASS: process.env.PASS
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }
    // });

    // Google GMAIL
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            accessToken: process.env.OAUTH_ACCESS_TOKEN,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    const mailOption = {
        from: process.env.MAIL_USERNAME,
        to: process.env.MAIL_USERNAME,
        subject: subject,
        html:
            `
            <b>You got a message from</b>
            <br/><br/>
            <h3> Email : ${email} </h3> <br/>
            <h2> Name: ${name} </h2> <br/>
            <p> Message: ${message} </p> <br/>
            `,
    };


    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
};

export async function contact(req, res, next) {
    const { yourname, youremail, yoursubject, yourmessage } = req.body;
    try {

        await mainMail(yourname, youremail, yoursubject, yourmessage);

        console.log(req.body);

        res.send("Message Successfully Sent!");
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}
