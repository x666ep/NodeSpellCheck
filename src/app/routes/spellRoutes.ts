// module.exports = function (app, db) {
// //    
// // };


import {Request, Response} from "express";
import {SpellcheckController} from "../controllers/spellcheckController";

export class SpellRoutes {
    public spellcheckController: SpellcheckController = new SpellcheckController();
    public routes(app): void {
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Welcome to spellcheck micro-service! For check you string call GET /check?str="" '
                })
            });
        app.route('/check').get((req: Request, res: Response) => {
           this.spellcheckController.Check(req, res); 
        });
    }
}