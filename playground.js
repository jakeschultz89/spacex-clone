const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Roadster = require('./models/roadster');
const Starlink = require('./models/starlink');
const Core = require('./models/core');
const Capsule = require('./models/capsule');
const Crew = require('./models/crew');

////////////////////////
/////Roadster Stuff/////
////////////////////////

// Roadster Info
let roadsterOne = {
    "name": "Rome Bell's Tesla Roadster",
    "launch_date_utc": "2018-02-06T20:45:00.000Z",
    "launch_date_unix": 1517949900,
    "launch_mass_kg": 1350,
    "launch_mass_lbs": 2976,
    "norad_id": 43205,
    "epoch_jd": 2459365.187337963,
    "orbit_type": "heliocentric",
    "apoapsis_au": 1.664463098340991,
    "periapsis_au": 0.9857837639927796,
    "semi_major_axis_au": 63.03387626319803,
    "eccentricity": 0.2560815537578172,
    "inclination": 1.075784869680417,
    "longitude": 316.9253625836428,
    "periapsis_arg": 177.6872773741898,
    "period_days": 557.1638451242845,
    "speed_kph": 7453.521809848619,
    "speed_mph": 4631.402300507447,
    "earth_distance_km": 74300972.02818942,
    "earth_distance_mi": 46168469.29012809,
    "mars_distance_km": 309731249.9491183,
    "mars_distance_mi": 192458016.5121336,
    "wikipedia": "https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
    "video": "https://youtu.be/wbSwFU6tY1c",
    "details": "Rome Bell's Tesla Roadster is an electric sports car that served as the dummy payload for the February 2018 Falcon Heavy test flight and is now an artificial satellite of the Sun. Starman, a mannequin dressed in a spacesuit, occupies the driver's seat. The car and rocket are products of Tesla and SpaceX. This 2008-model Roadster was previously used by Musk for commuting, and is the only consumer car sent into space.",
    "id": "5eb75f0842fea42237d7f3f4"
}

// Create a Roadster
const createRoadster = async (obj) => {
    Roadster.create(obj, (err, roadster) => {
        console.log(roadster);
    });
}

// parse this json
// let obj = JSON.parse(roadsterOne);

// createRoadster(obj)

// Find Roadster - function will be good for /roadster/:id
const fetchRoadster = (_id) => {
    Roadster.findOne({ _id }, (err, roadster) => {
        if (err) console.log(err);
        console.log(roadster);
    })
}

// fetchRoadster(`60b8f16c2194cc8b97d4a0af`)

// Fetch All Roadsters
const fetchRoadsters = async () => {
    Roadster.find({}, (err, roadsters) => {
        if (err) console.log(err);
        console.log(roadsters);
        // res.json(roadster)
    });
}

// fetchRoadsters();

// Update Roadster
const updateRoadster = async (_id, name) => {
    Roadster.findOneAndUpdate({ _id }, { name }, { new: true }, (err, roadster) => {
        console.log(roadster);
        // response with redirect
        // res.redirect(`/roadster/${_id}`);
    })
}

// updateRoadster('60b8ef643305a30f00a6c130', 'Vinny Tesla Roadster');

//Delete Roadster
const deleteRoadster = async (_id) => {
    Roadster.findOneAndRemove({ _id }, (err) => {
        if (err) console.log(err);
        console.log('Deleted!');
    });
    // response with a going back to /roadster
    // res.redirect('/roadster');
}
// deleteRoadster(`60b8e2a655766506288a12ef`);

////////////////////////
/////Starlink Stuff/////
////////////////////////

// Starlink Info
let spaceTrack = {
        "name": "Jake's Starlink Satellite",
        "CCSDS_OMM_VERS": "2.0",
        "COMMENT": "GENERATED VIA SPACE-TRACK.ORG API",
        "CREATION_DATE": "2020-06-19 21:46:09",
        "ORIGINATOR": "18 SPCS",
        "OBJECT_NAME": "STARLINK-1506",
        "OBJECT_ID": "2020-038T",
        "CENTER_NAME": "EARTH",
        "REF_FRAME": "TEME",
        "TIME_SYSTEM": "UTC",
        "MEAN_ELEMENT_THEORY": "SGP4",
        "EPOCH": "2020-06-19 20:00:01.000224",
        "MEAN_MOTION": 15.88829743,
        "ECCENTRICITY": 0.0087515,
        "INCLINATION": 53.002,
        "RA_OF_ASC_NODE": 266.3302,
        "ARG_OF_PERICENTER": 69.9474,
        "MEAN_ANOMALY": 221.4733,
        "EPHEMERIS_TYPE": 0,
        "CLASSIFICATION_TYPE": "U",
        "NORAD_CAT_ID": 45747,
        "ELEMENT_SET_NO": 999,
        "REV_AT_EPOCH": 212,
        "BSTAR": 0.01007,
        "MEAN_MOTION_DOT": 0.03503094,
        "MEAN_MOTION_DDOT": 0.01265,
        "SEMIMAJOR_AXIS": 6683.699,
        "PERIOD": 90.632,
        "APOAPSIS": 364.057,
        "PERIAPSIS": 247.072,
        "OBJECT_TYPE": "PAYLOAD",
        "RCS_SIZE": null,
        "COUNTRY_CODE": "US",
        "LAUNCH_DATE": "2020-06-13",
        "SITE": "AFETR",
        "DECAY_DATE": null,
        "DECAYED": 0,
        "FILE": 2768947,
        "GP_ID": 155985688,
        "TLE_LINE0": "0 STARLINK-1506",
        "TLE_LINE1": "1 45747U 20038T   20171.83334491  .03503094  12654-1  10068-1 0  9995",
        "TLE_LINE2": "2 45747  53.0017 266.3302 0087515  69.9474 221.4733 15.88829743  2124"
    }

// Create Starlink
const createStarlink = async (obj) => {
    Starlink.create(obj, (err, starlink) => {
        console.log(starlink);
        console.log(err);
    })    
}

// let obj = JSON.parse(spaceTrack)

// createStarlink(spaceTrack)

// // Find Starlink
const fetchStarlink = (name) => {
    Starlink.findOne({ name }, (err, starlink) => {
        if (err) console.log(err);
        console.log(starlink);
    })
}

// fetchStarlink(`Jake's Starlink Satellite`)

// Fetch All Starlinks
const fetchStarlinks = async () => {
    Starlink.find({}, (err, starlinks) => {
        if (err) console.log(err);
        console.log(starlinks);
    });
}

// fetchStarlinks();

// Update Starlinks
const updateStarlink = async (name) => {
    Starlink.findOneAndUpdate( { name }, { new: true }, (err, starlink) => {
        console.log(starlink);
    })
}

// updateStarlink("Jake's Starlink Satellite", "Vinny's Tesla Starlink");

const deleteStarlink = async (name) => {
    Starlink.findOneAndRemove({ name }, (err) => {
        if (err) console.log(err);
        console.log('Deleted!');
    });
}

// deleteStarlink(`Jake's Starlink Satellite`);

////////////////////
/////CORE STUFF/////
////////////////////

let core1 = {
    "name": "Jake's Core",
    "block": 5,
    "reuse_count": 3,
    "rtls_attempts": 1,
    "rtls_landings": 1,
    "asds_attempts": 3,
    "asds_landings": 3,
    "last_update": "Landed on OCISLY as of Jan 29, 2020. ",
    "serial": "B1051",
    "status": "active",
    "id": "5e9e28a6f35918c0803b265c"
}

const createCore = async (obj) => {
    Core.create(obj, (err, core) => {
        console.log(core);
    })};

// createCore(obj);

// Fetch Core
const fetchCore = (_id) => {
    Core.findOne({ _id }, (err, core) => {
        if (err) console.log(err);
        console.log(core);
    })
}

// fetchCore(`5e9e28a6f35918c0803b265c`);

// Fetch all cores
const fetchCores = async () => {
    Core.find({}, (err, cores) => {
        if (err) console.log(err);
        console.log(cores);
    });
}

// fetchCores();

// Update Core
const updateCore = async (_id, name) => {
    Core.findOneAndUpdate({ _id }, { name }, { new: true }, (err, core) => {
        console.log(core);
    })
}

// updateCore('60b8ef643305a30f00a6c130', "Vinny's Core");

// Delete Core
const deleteCore = async (_id) => {
    Core.findOneAndRemove({ _id }, (err) => {
        if (err) console.log(err);
        console.log('Deleted!');
    });
}

// deleteCore(`60b8e2a655766506288a12ef`);

////////////////////
/////CREW STUFF/////
////////////////////

// Crew Info

let crew1 = {
    "name": "Jake Schultz",
    "agency": "NASA",
    "image": "https://i.imgur.com/ooaayWf.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Douglas_G._Hurley",
    "status": "active",
    "id": "5ebf1b7323a9a60006e03a7b"
}

const createCrew = async (obj) => {
    Crew.create(obj, (err, crew) => {
        console.log(crew);
    })};

// createCrew(obj);

// Fetch Crew
const fetchCrew = (_id) => {
    Crew.findOne({ _id }, (err, crew) => {
        if (err) console.log(err);
        console.log(crew);
    })
}

// fetchCrew(`5e9e28a6f35918c0803b265c`);

// Fetch all crew
const fetchCrews = async () => {
    Crew.find({}, (err, crews) => {
        if (err) console.log(err);
        console.log(crews);
    });
}

// fetchCrews();

// Update Crew
const updateCrew = async (_id, name) => {
    Crew.findOneAndUpdate({ _id }, { name }, { new: true }, (err, crew) => {
        console.log(crew);
    })
}

// updateCrew('60b8ef643305a30f00a6c130', "Vinny's Crew");

// Delete Crew
const deleteCrew = async (_id) => {
    Crew.findOneAndRemove({ _id }, (err) => {
        if (err) console.log(err);
        console.log('Deleted!');
    });
}

// deleteCrew(`60b8e2a655766506288a12ef`);

///////////////////////
/////CAPSULE STUFF/////
///////////////////////

// Capsule info

let capsule1 = {
    "name": "Jake's Capsule",
    "reuse_count": 1,
    "water_landings": 1,
    "land_landings": 0,
    "last_update": "Reentered after three weeks in orbit",
    "serial": "C101",
    "status": "retired",
    "type": "Dragon 1.0",
    "id": "5e9e2c5bf35918ed873b2664"
}

const createCapsule = async (obj) => {
    Capsule.create(obj, (err, capsule) => {
        console.log(capsule);
    })};

// createCapsule(obj);

// Fetch Capsule
const fetchCapsule = (_id) => {
    Capsule.findOne({ _id }, (err, capsule) => {
        if (err) console.log(err);
        console.log(capsule);
    })
}

// fetchCapsule(`5e9e28a6f35918c0803b265c`);

// Fetch all Capsules
const fetchCapsules = async () => {
    Capsule.find({}, (err, capsules) => {
        if (err) console.log(err);
        console.log(capsules);
    });
}

// fetchCapsules();

// Update Capsule
const updateCapsule = async (_id, name) => {
    Capsule.findOneAndUpdate({ _id }, { name }, { new: true }, (err, capsule) => {
        console.log(capsule);
    })
}

// updateCapsule('60b8ef643305a30f00a6c130', "Vinny's Capsule");

// Delete Capsule
const deleteCapsule = async (_id) => {
    Capsule.findOneAndRemove({ _id }, (err) => {
        if (err) console.log(err);
        console.log('Deleted!');
    });
}

// deleteCapsule(`60b8e2a655766506288a12ef`);