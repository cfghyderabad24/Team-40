const {v4 : uuidv4 } = require("uuid");
const { faker } = require('@faker-js/faker');
let orders = [];
let getOrder = () => {
    return {
        orderId: uuidv4(),
        trackingNo: faker.string.uuid(),
        status: "Ordered",
        orderDate: faker.date.past(),
    };
}

for(let i = 0; i < 5; i += 1) {
    orders.push(getOrder());
}