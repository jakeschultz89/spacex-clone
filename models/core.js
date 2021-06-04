const mongoose = require('mongoose');

const coreSchema = new mongoose.Schema({
    name: String,
    block: Number,
    reuse_count: Number,
    rtls_attempts: Number,
    rtls_landings: Number,
    last_update: String,
    id: String
})

coreSchema.methods.intro = function() {
    console.log(`The core ID is ${this.id}`);
}

const Core = mongoose.model('Core', coreSchema);

module.exports = Core;