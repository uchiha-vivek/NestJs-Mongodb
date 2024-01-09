import { IsNotEmpty, IsOptional, IsString } from "class-validator";

 export class CreateUserDtoData {

         @IsNotEmpty()
         @IsString()
         username:String;
         
         @IsString()
         @IsOptional()
         displayName?: string;
         
         @IsString()
         @IsOptional()
         avatarUrl?:string
 }