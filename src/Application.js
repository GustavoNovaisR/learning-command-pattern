import CopyCommand from './commands/CopyCommand.js'
import CutCommand from './commands/CutCommand.js'
import PasteCommand from './commands/PasteCommand.js'
import UndoCommand from './commands/UndoCommand.js'
import Editor from './Editor.js'
import CommandHistory from './CommandHistory.js'

class Application {
    clipboard = ''
    activeEditor = new Editor()
    history = new CommandHistory()

    init() {
        const CopyButton = document.getElementById('copy')
        CopyButton.addEventListener('click', () => {
            this.executeCommand(new CopyCommand(this, this.activeEditor))
        })
        const CutButton = document.getElementById('cut')
        CutButton.addEventListener('click', () => {
            this.executeCommand(new CutCommand(this, this.activeEditor))
        })
        const PasteButton = document.getElementById('paste')
        PasteButton.addEventListener('click', () => {
            this.executeCommand(new PasteCommand(this, this.activeEditor))
        })
        const UndoButton = document.getElementById('undo')
        UndoButton.addEventListener('click', () => {
            this.executeCommand(new UndoCommand(this, this.activeEditor))
        })
    }
    executeCommand(command) {
        if (command.execute) {
            if (!(command instanceof UndoCommand)) {
                this.history.push(command)
            }
            command.execute()
        }
    }
    undo() {
        let command = this.history.pop()

        if (command != null)
            command.undo()
    }
}

export { Application };