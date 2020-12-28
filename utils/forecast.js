const request = require('request')
const forecast = (lattitude , longitude , callback) =>
{
    const url = 'http://api.weatherstack.com/current?access_key=1e57ac60cb7961a6ba0858da8c1d62cc&query=' + lattitude + ',' + longitude + '&units=f'


    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
        }
    })
}
module.exports= forecast