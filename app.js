
const geocode = require('./geocode');
const forecast = require('./forecast');

const location = process.argv[2];
if(location){
    geocode(location, (error, {latitude, longitude, location} = {}) =>{
        if(error){
            return console.log(error);
        }
        else{
            forecast(latitude, longitude, (error, {temp, feelsLike} = {}) =>{
                if(error) {
                    return console.log(error);
                }
                console.log(`Current temperature at ${location} is ${temp} degree celsius and it feels like ${feelsLike} degree celsius`);
            });
        }
    });
}
else{
    console.log(`Please provide location`);
}


