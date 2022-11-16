import express, { Request, Response, Router } from 'express';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({ message: '666 Hello Wolrd!' })
})

app.use(route);

app.listen(3005, () => '666')
