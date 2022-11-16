import express, { Request, Response, Router } from 'express';

import redis from './cache/init';

let json = { message: '666 Hello Wolrd!' };

const app = express();

const route = Router();

app.use(express.json());

route.get('/:id', async (req: Request, res: Response) => {
    let key = `${req.params?.id}-key`;
    let cached_response = await redis.get(key);
    if (cached_response) {
        console.log(`CACHE ON REDIS with the key ${key}: `, cached_response);
        return res.json(JSON.parse(cached_response))
    }
    const req_delay = await setInterval(async () => {
        console.log('CACHE BEING CREATED with the key: ', key)
        await redis.set(key, JSON.stringify(json));
        return res.json(json)
    }, 10000)
})

app.use(route);

app.listen(3005, () => '666')
