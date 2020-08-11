import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1/', router);

app.get('/', (req, res) =>{
    res.status(200).json({
        status: 200,
        message: 'Hello Backend'
    })
})

app.get('*', (req, res) =>{
    res.status(404).json({
        status: 404,
        message: 'Invalid Route'
    })
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`App listening on port ${port}`))
