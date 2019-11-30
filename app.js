const geoCode = require('./utils/geocode')
const weather = require('./utils/weather')

const query = process.argv[2]
if (query) {
   geoCode(query, (error, response) => {
      if (error) {
         return console.log(error)
      } else {
         const {latitude, longitude, location} = response
         weather(latitude,longitude, (weatherError, weatherResponse) => {
            if (weatherError) {
              return console.log(weatherError)
            } 
            console.log(location)
            console.log(weatherResponse)
         })
      }
   })
} else {
   console.log('Please provide location')
}

