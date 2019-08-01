
import * as googleMaps from '@google/maps'
import * as dotenv from 'dotenv'

dotenv.config();

let googleMapsClient = googleMaps.createClient({
    key: process.env.GOOGLE_API_KEY,
    Promise: Promise
});

googleMapsClient.directions({
    origin: '1600 Pennsylvania Ave NW, Washington, DC 20500',
    destination: '1600 Amphitheatre Parkway, Mountain View, CA 94043'
}).asPromise().then(response => {
    console.log(JSON.stringify(response.json));
}).catch(e => {
    console.log(e);
});