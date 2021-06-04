const mongoose = require('mongoose');

const starlinkSchema = new mongoose.Schema({
    name: String,
    CCSDS_OMM_VERS: String,
    CREATION_DATE: String,
    OBJECT_NAME: String,
    OBJECT_ID: String,
    LAUNCH_DATE: String
})

starlinkSchema.methods.intro = function() {
    console.log(`The starlink name is ${this.name}`);
}

const Starlink = mongoose.model('Starlink', starlinkSchema);

module.exports = Starlink;