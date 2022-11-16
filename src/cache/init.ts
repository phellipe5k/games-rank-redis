import IORedis from 'ioredis';

const redis = new IORedis({
    host: 'localhost',
    port: 6379
});

export default redis;
