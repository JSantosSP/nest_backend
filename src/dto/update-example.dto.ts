import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateExampleDto {
    @IsString()
    @IsOptional()
    name?: string;
    
    @IsNumber()
    @IsOptional()
    age?: number;

    @IsBoolean()
    @IsOptional()
    active?: boolean;
}