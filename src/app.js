import express from 'express';

import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.cors();
    this.middlwares();
    this.routes();
  }

  middlwares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  cors() {
    this.server.use(cors());
  }
}
module.exports = new App().server;
