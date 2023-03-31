import { Module } from '@nestjs/common';
import { ArrayController } from './array/array.controller';
import * as bodyParser from 'body-parser';
import * as express from 'express';

@Module({
  imports: [],
  controllers: [ArrayController],
  providers: [],
})
export class AppModule {
  constructor() {
    const app = express();
    app.use(bodyParser.json());
    app.listen(6969);
  }
}
