import express from 'express';
import { SERVER_PORT } from '../global/environment';

export default class Server{
    // Propiedades
    public app:express.Application; 
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }
    //Metodos
    start( callback : Function){
        this.app.listen(this.port)
    }
    
}