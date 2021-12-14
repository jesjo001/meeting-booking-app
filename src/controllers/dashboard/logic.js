import Bookings from "../../models/bookings";
import moment from "moment";


const monthStart = moment().startOf('month');
const monthEnd = moment().endOf('month');
const yearStart = moment().startOf('year');
const yearEnd = moment().endOf('year');
const lastMonthBegins = moment().subtract(1, 'months').startOf('month')
const lastMonthEnds = moment().subtract(1, 'months').endOf('month')
const previousMonthBegins = moment().subtract(2, 'months').startOf('month')
const previousMonthEnds = moment().subtract(2, 'months').endOf('month')
const threeMonthBackBegins = moment().subtract(3, 'months').startOf('month')
const threeMonthBackEnds = moment().subtract(3, 'months').endOf('month')
const fourMonthBackBegins = moment().subtract(4, 'months').startOf('month')
const fourMonthBackEnds = moment().subtract(4, 'months').endOf('month')
const fiveMonthBackBegins = moment().subtract(5, 'months').startOf('month')
const fiveMonthBackEnds = moment().subtract(5, 'months').endOf('month')
const sixMonthBackBegins = moment().subtract(6, 'months').startOf('month')
const sixMonthBackEnds = moment().subtract(6, 'months').endOf('month')
const sevenMonthBackBegins = moment().subtract(7, 'months').startOf('month')
const sevenMonthBackEnds = moment().subtract(7, 'months').endOf('month')
const eightMonthBackBegins = moment().subtract(8, 'months').startOf('month')
const eightMonthBackEnds = moment().subtract(8, 'months').endOf('month')
const nineMonthBackBegins = moment().subtract(9, 'months').startOf('month')
const nineMonthBackEnds = moment().subtract(9, 'months').endOf('month')
const tenthMonthBackBegins = moment().subtract(10, 'months').startOf('month')
const tenthMonthBackEnds = moment().subtract(10, 'months').endOf('month')
const eleventhMonthBackBegins = moment().subtract(11, 'months').startOf('month')
const eleventhMonthBackEnds = moment().subtract(11, 'months').endOf('month')
const twelfthMonthBackBegins = moment().subtract(12, 'months').startOf('month')
const twelfthMonthBackEnds = moment().subtract(12, 'months').endOf('month')

//daily dates
const curr = new Date; // get current date
const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
const firstDay = new Date(curr.setDate(first)).toUTCString();
const secondDay = new Date(curr.setDate(first + 1)).toUTCString();
const thirdDay = new Date(curr.setDate(first + 2)).toUTCString();
const forthDay = new Date(curr.setDate(first + 3)).toUTCString();
const fifthDay = new Date(curr.setDate(first + 4)).toUTCString();
const sixthDay = new Date(curr.setDate(first + 5)).toUTCString();
const lastDay = new Date(curr.setDate(first + 6)).toUTCString();

export const monthlySummary = async (dateInfo) => {

}

export const YearlySummary = async () => {

}

export const Quaterly = async () => {

}

export const usersThisMonth = async () => {
    const totalData = await Users.count({
        createdAt: {
            $gte: new Date(moment(monthStart)),
            $lte: new Date(moment(monthEnd))
        }
    });
    return totalData;
}

export const AllTime = async () => {
    const totalData = await Bookings.count({});
    return totalData;
}

export const getMonthlyAppointmentsGraphData = async (user) => {
    // const thisYearMeetings = await Meeting.count({ appointmentDate: { $gte: new Date(yearStart), $lte: new Date(yearEnd) } })
    const monthlyMeeting = await getAppointmentDAta(monthStart, monthEnd);
    const lastMonthCount = await getAppointmentDAta(lastMonthBegins, lastMonthEnds);
    const previousMonthCount = await getAppointmentDAta(previousMonthBegins, previousMonthEnds);
    const threeMonthCount = await getAppointmentDAta(threeMonthBackBegins, threeMonthBackEnds);
    const fourMonthCount = await getAppointmentDAta(fourMonthBackBegins, fourMonthBackEnds);
    const fiveMonthCount = await getAppointmentDAta(fiveMonthBackBegins, fiveMonthBackEnds);
    const sixMonthCount = await getAppointmentDAta(sixMonthBackBegins, sixMonthBackEnds);
    const seventhMonthCount = await getAppointmentDAta(sixMonthBackBegins, sixMonthBackEnds);
    const eightMonthCount = await getAppointmentDAta(eightMonthBackBegins, eightMonthBackEnds)
    const ninthMonthCount = await getAppointmentDAta(nineMonthBackBegins, nineMonthEnds)
    const tenthMonthCount = await getAppointmentDAta(tenthMonthBackBegins, tenthMonthBackEnds)
    const eleventhMonthCount = await getAppointmentDAta(eleventhMonthBackBegins, eleventhMonthEnds)
    const twelfthMonthCount = await getAppointmentDAta(twelfthMonthBackBegins, twelfthMonthBackEnds)

    const dataArray = [
        monthlyMeeting,
        lastMonthCount,
        previousMonthCount,
        threeMonthCount,
        fourMonthCount,
        fiveMonthCount,
        sixMonthCount,
        seventhMonthCount,
        eightMonthCount,
        ninthMonthCount,
        tenthMonthCount,
        eleventhMonthCount,
        twelfthMonthCount
    ]

    const oneYearCount = sumData(dataArray)

    return {
        ...dataArray,
        graphData: dataArray,
        oneYearCount
    }
}


export const getMonthlyCreatedGraphData = async (user) => {
    const monthlyMeeting = await getDAta(monthStart, monthEnd);
    const lastMonthCount = await getDAta(lastMonthBegins, lastMonthEnds);
    const previousMonthCount = await getDAta(previousMonthBegins, previousMonthEnds);
    const threeMonthCount = await getDAta(threeMonthBackBegins, threeMonthBackEnds);
    const fourMonthCount = await getDAta(fourMonthBackBegins, fourMonthBackEnds);
    const fiveMonthCount = await getDAta(fiveMonthBackBegins, fiveMonthBackEnds);
    const sixMonthCount = await getDAta(sixMonthBackBegins, sixMonthEnds)
    const seventhMonthCount = await getDAta(sevenMonthBackBegins, sevenMonthBackEnds)
    const eightMonthCount = await getDAta(eightMonthBackBegins, eightMonthBackEnds)
    const ninthMonthCount = await getDAta(nineMonthBackBegins, nineMonthEnds)
    const tenthMonthCount = await getDAta(tenthMonthBackBegins, tenthMonthBackEnds)
    const eleventhMonthCount = await getDAta(eleventhMonthBackBegins, eleventhMonthEnds)
    const twelfthMonthCount = await getDAta(twelfthMonthBackBegins, twelfthMonthBackEnds)

    const dataArray = [
        monthlyMeeting,
        lastMonthCount,
        previousMonthCount,
        threeMonthCount,
        fourMonthCount,
        fiveMonthCount,
        sixMonthCount,
        seventhMonthCount,
        eightMonthCount,
        ninthMonthCount,
        tenthMonthCount,
        eleventhMonthCount,
        twelfthMonthCount
    ];

    const oneYearCount = sumData(dataArray);

    return {
        monthlyMeeting,
        lastMonthCount,
        previousMonthCount,
        threeMonthCount,
        fourMonthCount,
        fiveMonthCount,
        sixMonthCount,
        seventhMonthCount,
        eightMonthCount,
        ninthMonthCount,
        tenthMonthCount,
        eleventhMonthCount,
        twelfthMonthCount,
        oneYearCount,
        dataGraphArray: dataArray
    }
}

export const getWeeklyCreatedData = async () => {

    const sundayMeeting = await getDailyCreatedData(firstDay, firstDay);
    const mondayMeeting = await getDailyCreatedData(secondDay, secondDay);
    const tuesdayMeeting = await getDailyCreatedData(thirdDay, thirdDay);
    const wednesdayMeeting = await getDailyCreatedData(forthDay, forthDay);
    const thursdayMeeting = await getDailyCreatedData(fifthDay, fifthDay);
    const fridayMeeting = await getDailyCreatedData(sixthDay, sixthDay);
    const saturdayMeeting = await getDailyCreatedData(lastDay, lastDay);

    return {
        sundayMeeting,
        mondayMeeting,
        tuesdayMeeting,
        wednesdayMeeting,
        thursdayMeeting,
        fridayMeeting,
        saturdayMeeting,
        dataArray: [
            sundayMeeting,
            mondayMeeting,
            tuesdayMeeting,
            wednesdayMeeting,
            thursdayMeeting,
            fridayMeeting,
            saturdayMeeting
        ],
    }


}

export const getWeeklyAppointmentData = async () => {

    const sundayMeeting = await getDailyAppointmentData(firstDay, firstDay);
    const mondayMeeting = await getDailyAppointmentData(secondDay, secondDay);
    const tuesdayMeeting = await getDailyAppointmentData(thirdDay, thirdDay);
    const wednesdayMeeting = await getDailyAppointmentData(forthDay, forthDay);
    const thursdayMeeting = await getDailyAppointmentData(fifthDay, fifthDay);
    const fridayMeeting = await getDailyAppointmentData(sixthDay, sixthDay);
    const saturdayMeeting = await getDailyAppointmentData(lastDay, lastDay);

    return {
        sundayMeeting,
        mondayMeeting,
        tuesdayMeeting,
        wednesdayMeeting,
        thursdayMeeting,
        fridayMeeting,
        saturdayMeeting,
        dataArray: [
            sundayMeeting,
            mondayMeeting,
            tuesdayMeeting,
            wednesdayMeeting,
            thursdayMeeting,
            fridayMeeting,
            saturdayMeeting
        ],
    }


}

async function getDailyCreatedData(startDate, endDate) {
    return await Bookings.count({
        createdAt: {
            $gte: new Date(moment(startDate).startOf('day')),
            $lte: new Date(moment(endDate).endOf('day'))
        }
    })
}

async function getDailyAppointmentData(startDate, endDate) {
    return await Bookings.count({
        appointmentDate: {
            $gte: new Date(moment(startDate).startOf('day')),
            $lte: new Date(moment(endDate).endOf('day'))
        }
    })
}

async function getDAta(startDate, endDate) {
    return await Bookings.count({
        createdAt: {
            $gte: new Date(startDate), $lte: new Date(endDate)
        }
    }
    )
}

async function getAppointmentDAta(startDate, endDate) {
    return await Bookings.count({
        appointmentDate: {
            $gte: new Date(startDate), $lte: new Date(endDate)
        }
    }
    )
}

const sumData = (dataArray) => {
    let sum;

    for (let i = 0; i < dataArray.length; i++) {
        sum = sum + dataArray[i];
    }

    return sum
}