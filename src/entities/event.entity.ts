import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: Date })
  // start: Date;
  start: string;

  @Prop({ type: Date })
  end: string;
  // end: Date;

  @Prop() // Optional
  business_id: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Business' })
  businessId: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
