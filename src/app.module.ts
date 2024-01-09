import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';
 

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://madara_uchiha:madara_uchiha@cluster0.mabn2pc.mongodb.net/?retryWrites=true&w=majority')
,UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
