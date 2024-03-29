const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'No body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.addNote(argv.title, argv.body)
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.removeNote(argv.title)
});
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: () => notes.listNotes()
});
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => notes.readNote(argv.title)
});


yargs.parse();