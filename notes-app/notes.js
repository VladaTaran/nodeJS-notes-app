const fs = require('fs');

const getNotes = function () { 
    return 'Your notes...'
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const dublicateNotes = notes.filter(note => note.title === title);
    dublicateNotes.length === 0 && notes.push({
        title,
        body
    })
    saveNotes(notes);
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}
module.exports = {
    getNotes,
    addNote
};