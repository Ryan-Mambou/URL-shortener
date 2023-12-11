import dotenv from 'dotenv'
import express, {Express, Request, Response} from 'express'

dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT || 3000;





app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})



module.exports = app