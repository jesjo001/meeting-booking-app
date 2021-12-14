import Bookings from "../../models/bookings"

export const getAll = async (req, res, next) => {

    try {

        const user = req.user

        if (user.role !== 'admin') return res.status(401).json({ statusCode: 401, message: 'You do not have the correct permission !!' })

        const appointment = await Bookings.find({});

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