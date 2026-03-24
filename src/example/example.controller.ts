import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateExampleDto } from 'src/dto/create-example.dto';
import { UpdateExampleDto } from 'src/dto/update-example.dto';

@Controller('example')
export class ExampleController {
    constructor(private exampleService: ExampleService){}

    @Get()
    findAll(){
        return this.exampleService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const example = await this.exampleService.findOne(id);
        if(!example){
            throw new NotFoundException('Example not found');
        }
        return example;
    }

    @Post()
    @HttpCode(201)
    async create(@Body() body:CreateExampleDto){
        try{
            return await this.exampleService.create(body);
        }catch(error){
            if(error.code === 11000){
                throw new ConflictException('Example with this name already exists');
            }
            throw error;
        }
    }

    @Put(':id')
    async update(@Param('id')id:string, @Body() body:UpdateExampleDto){
        let example;
        try{
            example = await this.exampleService.update(id, body); 
        } catch(error){
            if(error.code === 11000){
                throw new ConflictException('Example with this name already exists');
            }
            throw error;
        }
        if(!example){
            throw new NotFoundException('Example not found');
        }
        return example;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        const example = await this.exampleService.delete(id);
        if(!example){
            throw new NotFoundException('Example not found');
        }
        return example;
    }


}
