import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsDateString()
  // start: Date;
  start: string;

  @IsDateString()
  // end: Date;
  end: string;
}
