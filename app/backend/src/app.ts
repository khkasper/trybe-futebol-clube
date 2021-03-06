import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'express-async-errors';
import Login from './routes/loginRoute';
import Clubs from './routes/clubsRoute';
import Matchs from './routes/matchsRoute';
import Leaderboard from './routes/leaderboardRoute';
import errorMiddleware from './middlewares/errorMiddleware';

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
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(bodyParser.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));
  }

  private routes(): void {
    this.app.use('/login', new Login().router);
    this.app.use('/clubs', new Clubs().router);
    this.app.use('/matchs', new Matchs().router);
    this.app.use('/leaderboard', new Leaderboard().router);
    this.app.use(errorMiddleware);
  }
}

export { App };

export const { app } = new App();

// Projeto desenvolvido com auxílio do github.com/tryber/mentoria-api-pf2poo/blob/02-api-poo
