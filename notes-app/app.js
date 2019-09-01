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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remove a note!')
    }
});
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('List the notes')
    }
});
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function () {
        console.log('Reading notes')
    }
});



console.log(yargs.argv);