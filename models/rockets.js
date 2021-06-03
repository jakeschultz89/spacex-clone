const mongoose = require('mongoose');

const rocketsSchema = new mongoose.Schema({
    name: String,
    type : String,
    active: Boolean,
    stages: Number,
    boosters: Number,
    cost_per_launch: Number,
    success_rate_pct: Number,
    first_flight: String,
    country: String,
    company: String,
    height: Number,
    diameter: Number,
    mass: Number,
    thrust_to_weight: Number,
    landing_legs: Number,
    material: {Object},
    flickr_images: [String],
    wikipedia: String,
    description: String
  })

  rocketsSchema.methods.intro = function() {
    console.log(`The rockets are awesome`);
}

const Rockets = mongoose.model("Rockets", rocketsSchema);

module.exports = Rockets;