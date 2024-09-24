import express from 'express';
import { agurkasRouter } from './agurkasRouter.js';
import { pomidorasRouter } from './pomidorasRouter.js';

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Ne pilnas API routas',
    });
});

apiRouter.use('/agurkas', agurkasRouter);
apiRouter.use('/pomidoras', pomidorasRouter);

apiRouter.get('/*', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Ieskai to ko neturiu arba nezinau',
    });
});