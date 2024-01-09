import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { CreateUserDtoData } from "./dto/User.dto";
import { UpdateUserDto } from "./dto/Update.User.Dto";

@Injectable()
 
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User> ){
         
    }

    createUser(createUserDtoData :CreateUserDtoData){
        const newUser = new this.userModel(createUserDtoData)
        return newUser.save()

    }
    // get all users
    getsUsers(){
        return this.userModel.find()
    }

    // get all user by Id

    getUserById(id:string){
        return this.userModel.findById(id)
    }

    updateUser(id:string, updateUserDto:UpdateUserDto){
        this.userModel.findByIdAndUpdate(id,updateUserDto)

    }


}