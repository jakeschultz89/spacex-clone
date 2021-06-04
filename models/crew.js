const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
    name: String,
    agency: String,
    wikipedia: String,
    status: String,
    id: String
})

crewSchema.methods.intro = function() {
    console.log(`The crew name is ${this.name}`);
}

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;