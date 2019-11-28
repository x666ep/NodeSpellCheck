import spell from 'spell-checker-js'
import path from 'path'

export class Spellcheck {
    
    private dictionariesPath = "dictionaries";
    private ruDictionary  = "russian.txt";

    constructor() {
        const currentPath = path.join(__dirname, this.dictionariesPath, this.ruDictionary);
        spell.load({ input: currentPath, charset: 'utf-8' });
    }
    
    public check(str: string): Array<string> {
          return spell.check(str);
    }
}

