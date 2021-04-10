class CommandHistory {
    _history = []
    push(command) {
        console.log('Push', this._history)
        return this._history.push(command)
    }
    pop() {
        console.log('Push', this._history)
        return this._history.pop()
    }
}
export default CommandHistory