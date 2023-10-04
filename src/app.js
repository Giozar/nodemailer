import express from 'express'
import morgan from 'morgan';
import path from 'path'
import mailRoutes from './routes/mail.routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(mailRoutes)
// Ruta principal
app.get("/", (req, res) => {
    res.json('Hola mundo');
});


// 404
app.use((req, res, next) => {
    return res.status(404).json({
        message: 'endpoint not found',
    })
})


// nodemailer
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join("public")));

export default app;