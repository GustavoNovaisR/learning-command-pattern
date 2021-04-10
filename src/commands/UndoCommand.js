import { Command } from './Abstract.command.js'
class UndoCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    execute() {
        this.app.undo()
    }
}
export default UndoCommand