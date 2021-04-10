class Command {
    constructor(app, editor) {
        this.backup = null
        this.app = app
        this.editor = editor
    }
    saveBackup() {
        this.backup = this.editor.getText()
        console.log('save>',this.backup)
    }
    undo() {
        this.editor.setText(this.backup)
        console.log('undo>',this.editor.getText())
    }
    execute() {
        console.log('Tem que implementar execute')
    }
}
export { Command }