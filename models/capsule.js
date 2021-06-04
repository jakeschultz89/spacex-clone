const mongoose = require('mongoose');

const capsuleSchema = new mongoose.Schema({
    name: String,
    reuse_count: Number,
    water_landings: Number,
    last_update: String,
    id: String
})

capsuleSchema.methods.intro = function() {
    console.log(`The capsule name is ${this.name}`);
}

const Capsule = mongoose.model('Capsule', capsuleSchema);

module.exports = Capsule;