
import Bookings from "../../models/bookings"

export const updateAppointment = async (req, res, next) => {

    if (!req.body || !req.params.id) return res.status(500).send("Invalid parameters")

    try {

        const user = req.user;
        const { id } = req.params

        const appointment = await Bookings.find({ _id: id, users: { $in: user.user_id } });

        if (!appointment) return res.status(500).send("Ops seems theres no such appointment.")

        const myObject = Object.assign({}, req.body);
        const newAppointment = Bookings.findOneAndUpdate({ _id: id, users: { $in: user.user_id } }, { $set: { ...myObject, updatedAt: new Date() } })

        if (!newAppointment) return res.status(500).send("Ops Something went wrong. Appointment not found")

        if (newAppointment) return res.status(200).json({
            appointment,
            message: "Appointment Updated successfully"
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            statusCode: 500,
            message: "Internal server error"
        })
    }
}