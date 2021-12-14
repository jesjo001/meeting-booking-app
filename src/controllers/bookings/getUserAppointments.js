import Bookings from "../../models/bookings"

export const getUsersAppointments = async (req, res, next) => {

    try {

        const user = req.user;

        const appointment = await Bookings.find({ _id: user.user_id });

        if (!appointment) return res.status(500).send("Something went wrong. Try again latter")

        return res.status(200).json({
            appointment
        })


    } catch (err) {
        console.log(err);
        return res.status(500).json({
            statusCode: 500,
            message: "Internal server error"
        })
    }
}