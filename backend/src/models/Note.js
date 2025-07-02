
import mongoose from 'mongoose';

// Schema for a Note document
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Note model
const Note = mongoose.model('Note', noteSchema);

export default Note;