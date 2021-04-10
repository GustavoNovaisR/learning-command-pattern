class Editor {
    _tagLimit = ['DIV', 'BODY', 'HTML']
    // document.getElementById('editor').innerHTML
    setText(setInnerHTML) {
        if (setInnerHTML) {
            document.getElementById('editor').innerHTML = setInnerHTML
            return
        }
    }
    getText() {
        return document.getElementById('editor').innerHTML
     }

    text = (setInnerHTML) => {
        if (setInnerHTML) {
            document.getElementById('editor').innerHTML = setInnerHTML
            return
        }
        return document.getElementById('editor').innerHTML
    }
    async getSelection() {
        let selection = window.getSelection()
        if (await this._isContentOfEditor(selection.anchorNode)) {
            let range = selection.getRangeAt(0)
            return range.toString()
        } else {
            return ''
        }
    }
    async deleteSelection() {
        let selection = window.getSelection()
        if (await this._isContentOfEditor(selection.anchorNode)) {
            let range = selection.getRangeAt(0)
            range.extractContents()
            return
        }
    }
    async replaceSelection(text) {
        let selection = window.getSelection()
        if (await this._isContentOfEditor(selection.anchorNode)) {
            let range = selection.getRangeAt(0)
            const ele = document.createTextNode(text)
            range.insertNode(ele)
            return
        }
    }

    _isContentOfEditor(anchorNode) {
        return new Promise((resolve) => {
            let anchor = anchorNode
            while (1) {
                if (this._tagLimit.includes(anchor.nodeName)) {
                    if (anchor.getAttribute('id') === 'editor') {
                        resolve(true)
                        break
                    } else {
                        resolve(false)
                        break
                    }
                }
                anchor = anchor.parentElement
                continue
            }
        })
    }
}

export default Editor