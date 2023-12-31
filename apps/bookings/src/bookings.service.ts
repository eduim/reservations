import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingRepository } from './bookings.repository';

@Injectable()
export class BookingsService {
  constructor(private readonly bookingsRepository: BookingRepository) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingsRepository.create({
      ...createBookingDto,
      timestamp: new Date(),
      userId: '123',
    });
  }

  findAll() {
    return this.bookingsRepository.find({});
  }

  findOne(_id: string) {
    return this.bookingsRepository.findOne({ _id });
  }

  update(_id: string, updateBookingDto: UpdateBookingDto) {
    return this.bookingsRepository.findOneAndUpdate(
      { _id },
      { $set: updateBookingDto },
    );
  }

  remove(_id: string) {
    return this.bookingsRepository.findOneAndDelete({ _id });
  }
}
