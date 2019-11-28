import {Spellcheck} from "../helpers/spellcheck"
import { Request, Response } from 'express';

export class SpellcheckController {
    
    public spellCheck:Spellcheck = new Spellcheck();
    
    public Check(req: Request, res: Response){
        res.json({errors: this.spellCheck.check(req.query.str)});
    }
}