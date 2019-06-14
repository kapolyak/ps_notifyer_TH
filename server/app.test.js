const app = require("./app.js");
const request = require('supertest');

// describe("today", () => {
//     it("returns today's formatted date", () => {
//         expect(app.today()).toBe(new Date().toLocaleDateString());
//     });
// });

describe("api", () => {
    
    test('responds 200 to GET /changelogs', (done) => {
        return request(app)
          .get('/changelogs')
          .expect(200)
          .then(() => {
              done()
          })
    })

});

// describe("server storage", () => {

//     const testBookingObj = {
//         advisorID: 123,
//         bookingData: [1, 2, 3],
//         timeUTC: 123
//     }

//     const testAvailabilities = {
//         "2019-04-04": {                          
//             "2019-04-04T13:00:00-04:00": 372955, 
//             "2019-04-04T11:30:00-04:00": 399956, 
//             "2019-04-04T11:00:00-04:00": 372955
//         },
//         "2019-04-05": {
//             "2019-04-05T11:30:00-04:00": 417239, 
//             "2019-04-05T16:00:00-04:00": 417239, 
//             "2019-04-05T18:00:00-04:00": 417239
//         }
//     }

//     test('adds a booking object to storage', () => {
//         expect(storage.saveBooking(testBookingObj)).toBe(testBookingObj);
//     })

//     test('returns current bookings storage', () => {
//         let bookingStorage = storage.getBookings()
//         expect(bookingStorage['123']).toBe(testBookingObj);
//     })

//     test('adds availabilities to storage', () => {
//         expect(storage.saveAvailabilties(testAvailabilities)).toBe(testAvailabilities);
//     })

//     test('returns current availabilities storage', () => {
//         let availabilitiesStorage = storage.getAvailabilities()
//         expect(availabilitiesStorage).toBe(testAvailabilities);
//     })

// });
