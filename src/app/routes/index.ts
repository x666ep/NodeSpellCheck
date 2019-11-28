import {SpellRoutes} from "./spellRoutes"

export class Routes {
    
    public spellRoutes: SpellRoutes = new SpellRoutes();

    mountRoutes(app): void {
        this.spellRoutes.routes(app);
    }
}