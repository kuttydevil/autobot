const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    // Define employee schema fields
});

module.exports = mongoose.model('Employee', employeeSchema);
