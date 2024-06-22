const mongoose = require("mongoose");
const Lead = require("./model/lead.js");
const Track = require("./model/track.js");
const Order = require("./model/order.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/leading');
}

// const lead1 = new Lead({
//     email: "xyz@gmail.com",
//     phoneNo: 7778885554,
// });

// lead1.save();

// Lead.insertMany([
//     {
//         email: "prashant77399@gmail.com",
//         phoneNo: 1225467893,
//     },
//     {
//         email: "abc.com",
//         phoneNo: 7755502211,
//     },
//     {
//         email: "ghi.com",
//         phoneNo: 7788888811,
//     },
//     {
//         email: "varshiththegreat857@gmail.com",
//         phoneNo: 1234567890,
//     },
// ])

// Track.insertMany([
//     {
//         trackId: 1,
//         location: ['Hyderabad', 'Warangal'],
//     },
//     {
//         trackId: 2,
//         location: ['Hyderabad', 'Vijayawada'],
//     },
//     {
//         trackId: 3,
//         location: ['Hyderabad', 'Vishakhapatnam'],
//     },
// ])

Order.insertMany([
    {
        orderNo: 1,
        index: 0,
        trackId: 1,
    },
    {
        orderNo: 2,
        index: 0,
        trackId: 2,
    },
    {
        orderNo: 3,
        index: 0,
        trackId: 3,
    },
]);