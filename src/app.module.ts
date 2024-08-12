import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './event.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
    EventModule,
  ],
})
export class AppModule {}
