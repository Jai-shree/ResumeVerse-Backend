import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://22pc15:hzA1bRYcdlk6odbs@cluster0.4ld2k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: 'ResumeVerse' }), UserModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
