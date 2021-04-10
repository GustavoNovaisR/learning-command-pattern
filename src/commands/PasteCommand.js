import { Command } from './Abstract.command.js'
class PasteCommand extends Command {
    constructor(app, editor) {
        super(app, editor)
    }
    async execute() {
        this.saveBackup()
        this.editor.deleteSelection()
        this.editor.replaceSelection(await this.app.clipboard)
        return true
    }
}
export default PasteCommand