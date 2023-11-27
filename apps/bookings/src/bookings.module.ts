import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { DatabaseModule } from '@app/common';
import { BookingRepository } from './bookings.repository';
import { BookingDocument, BookingSchema } from './models/booking.schema';
import { LoggerModule } from '@app/common';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      {
        name: BookingDocument.name,
        schema: BookingSchema,
      },
    ]),
    LoggerModule,
  ],
  controllers: [BookingsController],
  providers: [BookingsService, BookingRepository],
})
export class BookingsModule {}
