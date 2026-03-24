import { Module } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import {MongooseModule} from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
  ExampleModule],
})
export class AppModule {}
