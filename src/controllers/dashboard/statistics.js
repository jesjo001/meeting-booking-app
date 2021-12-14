import User from "../../models/User";
import Bookings from "../../models/bookings";
import {

    getWeeklyAppointmentData,
    getWeeklyCreatedData,
    getMonthlyCreatedGraphData,
    getMonthlyAppointmentsGraphData,
    AllTime,
    usersThisMonth,

} from "./logic"

export const statistics = async (req, res, next) => {

    try {

        const { user } = req.user;

        if (user.role !== "admin") return res.status(401).json({
            statusCode: 401,
            message: "You are not permitted to access this resource!!!"
        })

        const data = {
            appointmentHoldingThisWeek: getWeeklyAppointmentData(),
            appointmentCreatedThisWeek: getWeeklyCreatedData(),
            monthlyAppointmentSummary: getMonthlyAppointmentsGraphData(),
            appointmentCreatedMonthlySummary: getMonthlyCreatedGraphData(),
            totalAppointmentsAllTime: AllTime(),
            totalUsers: allUsers(),
            userRegisteredThisMonth: usersThisMonth(),

        }

        return res.status(200).json({
            data
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            statusCode: 500,
            message: "Ops Something went wrong, Try again later!!!"
        })
    }


}

async function allUsers() {
    const totalData = await Users.count({});
    return totalData;
}