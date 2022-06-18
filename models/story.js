const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const StorySchema = new Schema({
  action: {
    type: String,
    required: [true, 'The story text field is required'],
  },
});

// Create model for todo
const Story = mongoose.model('story', StorySchema);

module.exports = Story;