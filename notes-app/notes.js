const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const dublicateNote = notes.find(note =>note.title === title);

    !dublicateNote && notes.push({
        title,
        body
    });
    saveNotes(notes);
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const removeNote = title => {
    const notes = loadNotes();
    const newNotesList = notes.filter(note => note.title !== title);
   
    if (notes.length > newNotesList.length) {
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
    saveNotes(newNotesList);
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magenta('Your notes:'));
    notes.forEach(note=> console.log(note.title));
};

const readNote = (title) => {
    const notes = loadNotes();
    const searchedNote = notes.find(note => note.title===title);
    if(searchedNote) {
        console.log(`Title: ${chalk.yellow(searchedNote.title)}. Body: ${chalk.yellow(searchedNote.body)}`)
    } else {
        console.log(chalk.red.inverse('No match find!'))
    }
};

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};