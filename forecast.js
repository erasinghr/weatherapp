const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=be0ce81497f808ab2c1bf8043412d620&query=${latitude},${longitude}`;
    request({ url, json: true }, (error, {body} = {}) => {
        if(error){
            callback ("Unable to connect to weather service", undefined);
        }
        else if(body.error){
            callback('Coordinate error: Not able to fetch weather forecast',undefined);
        }
        else{
            callback(undefined, {
                temp: body.current.temperature,
                feelsLike: body.current.feelslike
            });
        }
    });
}
module.exports = forecast;