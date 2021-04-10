import { Command } from './Abstract.command.js'
class CopyCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    async execute() {
        this.app.clipboard = await this.editor.getSelection()
        return false
    }
}

export default CopyCommand