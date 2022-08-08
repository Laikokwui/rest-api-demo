import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/customers";
import * as mongoose from "mongoose";
require('dotenv').config()

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUri: string = process.env.MONGO_URI;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private mongoSetup(): void{
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUri);
    }

}

export default new App().app;