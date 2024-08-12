import { IsNotEmpty, IsDateString } from 'class-validator';

export class UpdateEventDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsDateString()
  start: Date;

  @IsDateString()
  end: Date;
}
