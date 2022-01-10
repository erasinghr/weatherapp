const request = require("postman-request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZXJhc2luZ2hyIiwiYSI6ImNreG90NGtjNjBscDgydW9ldDFwOW90Z3YifQ.U7-_zyeyhtEmKTsVoBVA1g&limit=1`;
    request({ url, json: true }, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to location services', undefined);
        }
        else if(body.features.length === 0){
            callback('Not able to fetch latitude and longitude', undefined);
        }
        else {
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}
module.exports = geocode;