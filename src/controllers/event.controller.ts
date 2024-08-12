import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { EventService } from '../services/event.service';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from 'src/dto/update-event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  async findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findEventById(@Param('id') id: string) {
    return this.eventService.findEventById(id);
  }

  @Put(':id')
  async updateEventById(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.updateEventById(id, updateEventDto);
  }

  @Delete(':id')
  async deleteEventById(@Param('id') id: string) {
    return this.eventService.deleteEventById(id);
  }
}
