import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from '../entities/event.entity';
import { CreateEventDto } from 'src/dto/create-event.dto';
import { UpdateEventDto } from 'src/dto/update-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findEventById(id: string): Promise<Event | null> {
    return this.eventModel.findById(id).exec(); // Find one event by ID
  }

  async updateEventById(
    id: string,
    updateEventDto: UpdateEventDto,
  ): Promise<Event | null> {
    return this.eventModel
      .findByIdAndUpdate(id, updateEventDto, { new: true })
      .exec(); // Update one event by ID and return the updated document
  }

  async deleteEventById(id: string): Promise<Event | null> {
    return this.eventModel.findByIdAndDelete(id).exec(); // Delete one event by ID and return the deleted document
  }
}
