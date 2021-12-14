import Bookings from "../../models/bookings"

export const deleteAppointment = async (req, res, next) => {

    if (!req.params.id) return res.status(500).send("Invalid parameters")

    try {

        const {
            id
        } = req.params;

        const user = req.user

        if (user.role !== 'admin') return res.status(401).json({ statusCode: 401, message: 'You do not have the correct permission to delete this appointment' })

        const appointment = await Bookings.deleteOne({ _id: id });

        if (appointment.deletedCount === "0") return res.status(500).send("Something went wrong. Try again latter")

        return res.status(200).json({
            message: 'Appointment deleted successfully'
        })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            statusCode: 500,
            message: "Internal server error"
        })
    }
}