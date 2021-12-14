import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const bookingsSchema = new Schema({
    userId: { type: String, require: true },
    briefInfo: { type: String, require: true },
    appointmentDate: { type: Date, require: true },
    attending: { type: Array, require: false },
    rescheduleHistory: { type: Array, require: false },
    users: { type: Array, require: true },
},
    {
        timestamps: true,
    }
)

const Bookings = mongoose.model('Bookings', bookingsSchema);
export default Bookings;