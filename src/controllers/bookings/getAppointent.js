import Bookings from "../../models/bookings"

export const getUsersAppointments = async (req, res, next) => {

    try {
        if (!req.params.id) return res.status(500).send("Invalid parameters")

        const user = req.user;
        const { id } = req.params

        const appointment = await Bookings.find({ _id: id, users: user.user_id });


        //check if user has the right to view the appointment
        if (appointment) return res.status(200).json({
            appointment
        })

        if (!appointment) return res.status(400).json({
            statusCode: 400,
            message: "OPs something wrong wrong. It seems you do not have the required permission to view"
        })

        //if user does not have the right to view the appointment, check if user is admin
        if (user.role !== 'admin') return res.status(400).json({
            statusCode: 400,
            message: "OPs something wrong wrong. It seems you do not have the required permission to view"
        })
        else return res.status(200).json({
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