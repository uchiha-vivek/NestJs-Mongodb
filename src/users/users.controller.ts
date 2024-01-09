import { Body, Controller, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDtoData } from "./dto/User.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/Update.User.Dto";

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){

    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDtoData:CreateUserDtoData ){
        console.log(createUserDtoData)
        return this.usersService.createUser(createUserDtoData)

    }
    // get all user details
    @Get()
    getUsers(){
        return this.usersService.getsUsers()
    }
    // get user by id
    @Get(':id')
    async getUserById(@Param('id') id:string ){
        const findUser = await this.usersService.getUserById(id)
        const isValid =  mongoose.Types.ObjectId.isValid(id)
        if(! isValid) throw new HttpException('user not found',404)
        // if user not found 
        if(!findUser) throw new HttpException('user not found',404)
        return findUser
        
    }
    // updating the data

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    updateUser(  @Param('id') id:string,@Body() updateUserDto: UpdateUserDto){
              const isValid = mongoose.Types.ObjectId.isValid(id)
              if(!isValid) throw new HttpException("Invalid Id",400)
              return this.usersService.updateUser(id,updateUserDto)


    }

     
}