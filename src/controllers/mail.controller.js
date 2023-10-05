import nodemailer from 'nodemailer'

import { Email, Gmail } from '../config/config.js';

async function mainMail(name, email, subject, message) {

    // CPANEL
    // const transporter = await nodemailer.createTransport({
    //     host: Email.emailHost,
    //     // port: Email.emailPort,
    //     secure: false,
    //     auth: {
    //         user: Email.emailUser,
    //         pass: Email.emailPassword,
    //     },
    //     tls: {
    //         rejectUnauthorized: false,
    //     },
    // });

    // const mailOption = {
    //     from: Email.emailUser,
    //     to: Email.emailUser,
    //     subject: subject,
    //     html:
    //         `
    //         <b>You got a message from</b>
    //         <br/><br/>
    //         <h3> Email : ${email} </h3> <br/>
    //         <h2> Name: ${name} </h2> <br/>
    //         <p> Message: ${message} </p> <br/>
    //         `,
    // };

    // Google GMAIL
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: Gmail.gmailUser,
            pass: Gmail.gmailPassword,
            clientId: Gmail.gmailClientId,
            clientSecret: Gmail.gmailClientSecret,
            accessToken: Gmail.gmailAccessToken,
            refreshToken: Gmail.gmailRefreshToken,
        },
    });

    const mailOption = {
        from: Gmail.gmailUser,
        to: Gmail.gmailUser,
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

        // console.log(req.body);

        res.send("Message Successfully Sent!");
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}
