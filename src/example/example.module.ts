import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Example, ExampleSchema } from 'src/schemas/example.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Example.name, schema: ExampleSchema}])],
  controllers: [ExampleController],
  providers: [ExampleService]
})
export class ExampleModule {}
