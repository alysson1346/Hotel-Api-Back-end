import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Hotel } from "./systemHotel.entities";
import { Clients } from "./clients.entities";
import { BookingService } from "./bookingServices.entities";
import { Rooms } from "./rooms.entities";

@Entity("Booking")
export class Booking {
  @PrimaryColumn("uuid")
  readonly id: string;

  @CreateDateColumn()
  checkinDate: Date;

  @CreateDateColumn()
  checkoutDate: Date;

  @Column()
  isPaid: boolean;

  @Column({ nullable: false })
  qtyClients: number;

  @OneToMany(() => BookingService, (bookingService) => bookingService.booking)
  bookingService: BookingService[];

  @ManyToOne(() => Hotel, (hotel) => hotel.booking)
  hotel: string;

  @ManyToOne(() => Clients, (client) => client.booking)
  client: string;

  @ManyToOne(() => Rooms, (room) => room.booking, { eager: true })
  room: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
