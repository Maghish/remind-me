const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    rank: {type: String, required: true, enum: ['Most Important thing in the world', 'Very Important', 'Important', 'Just need to do it', 'Optional', 'Not required']},
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Task", taskSchema);