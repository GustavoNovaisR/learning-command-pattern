import { Command } from './Abstract.command.js'
class CutCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    async execute() {
        this.saveBackup()
        this.app.clipboard = this.editor.getSelection()
        this.editor.deleteSelection()
        return true
    }
}

export default CutCommand