import express, { Express, Request, Response } from 'express';
import swaggerUi from "swagger-ui-express";
import dotenv from 'dotenv';
import Router from "./routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.use(Router)

app.get('/', (req: Request, res: Response) => {
    res.send('express server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})