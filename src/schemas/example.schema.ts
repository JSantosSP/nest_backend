import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})

export class Example {
    @Prop({unique: true, required: true, trim: true})
    name: string;

    @Prop({required: true})
    age: number;

    @Prop({default: true})
    active: boolean;
}


export const ExampleSchema = SchemaFactory.createForClass(Example);