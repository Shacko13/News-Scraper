var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	_headlineId: {
		type: Schema.Types.ObjectId,
		ref: "Headline"
	},
	date: String,
	noteText: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;