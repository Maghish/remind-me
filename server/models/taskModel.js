const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    rank: {type: Number, required: true},
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Task", taskSchema);