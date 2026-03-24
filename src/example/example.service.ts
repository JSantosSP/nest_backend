import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExampleDto } from 'src/dto/create-example.dto';
import { UpdateExampleDto } from 'src/dto/update-example.dto';
import { Example } from 'src/schemas/example.schema';

@Injectable()
export class ExampleService {
    constructor(@InjectModel(Example.name) private exampleModel: Model<Example>) {}
    
    async findAll(){
        return this.exampleModel.find();
    }

    async  findOne(id:string){
        return this.exampleModel.findById(id);
    }

    async create(createExample:CreateExampleDto){
        const newExample = new this.exampleModel(createExample);
            return await newExample.save();
    }

    async update(id:string, updateExample:UpdateExampleDto){
        return this.exampleModel.findByIdAndUpdate(id, updateExample, {new:true});
    }

    async delete(id:string){
        return this.exampleModel.findByIdAndDelete(id);
    }

}
