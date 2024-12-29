const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Course', courseSchema)