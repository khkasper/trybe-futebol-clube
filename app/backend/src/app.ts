import * as express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
  }

  private routes(): void {
    this.app.use('/login', loginRoute);
  }
}

export { App };

export const { app } = new App();

// Projeto desenvolvido com auxílio do github.com/tryber/mentoria-api-pf2poo/blob/02-api-poo
