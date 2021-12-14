import Bookings from "../../models/bookings"

export const createAppointment = async (req, res, next) => {

    if (!req.body) return res.status(500).send("Invalid parameters")

    if (!req.body.userId || !req.body.briefInfo || !req.body.appointmentDate)
        return res.status(500).send("All field are required (userId, briefInfo, appointmentDate )")

    try {
        const appointmentUsers = []
        const {
            userId,
            briefInfo,
            appointmentDate,
            users
        } = req.body;

        const user = req.user

        if (users && users.length > 0) {
            appointmentUsers.push(...users);
        }

        if (!users || users === null || users === undefined) {
            appointmentUsers.push(user.user_id)
            appointmentUsers.push(user.user_id)
        }

        // const users = [user.user_id, userId];

        const appointment = await Bookings.create({
            userId,
            briefInfo,
            appointmentDate,
            users: appointmentUsers
        });

        if (!appointment) return res.status(500).send("something went wrong. Try again latter")

        if (appointment) {
            return res.status(200).json({
                appointment,
                message: 'Appointment created successfully'
            })
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            statusCode: 500,
            message: "Internal server error"
        })
    }
}