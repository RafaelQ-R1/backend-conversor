import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlwares();
    this.routes();
    this.urlEncoded();
  }

  middlwares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  urlEncoded() {
    this.server.use(express.urlencoded({ extended: true }));
  }
}
module.exports = new App().server;
