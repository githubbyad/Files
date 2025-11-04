function checkTagsClosed(formId, fieldName, textareaId) {
    const smForm = document.getElementById(formId);
    const textarea = document.getElementById(textareaId);
    if (smForm && textarea) {
        const html = textarea.value;
        const result = areTagsClosed(html);
        if (!result.ok) {
            const safeMessage = result.message
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');

            // highlight before alert
            highlightTagLine(textarea, result.line);

            // store scroll and selection positions
            const prevScroll = textarea.scrollTop;
            const prevStart = textarea.selectionStart;
            const prevEnd = textarea.selectionEnd;

            // short delay for highlight visibility
            setTimeout(() => {
                alert(`${fieldName} has unclosed/mismatched tags:\n\n${safeMessage}`, textarea);

                // restore focus, selection & scroll position
                textarea.focus();
                textarea.scrollTop = prevScroll;
                textarea.setSelectionRange(prevStart, prevEnd);
            }, 100);

            return false;
        }
    }
    return true;
}

function areTagsClosed(html) {
    html = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<(\w+)([^>]*)\/>/gi, '');

    const lines = html.split('\n');
    const stack = [];
    const voidTags = ['br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const tags = line.match(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g);
        if (!tags) continue;

        for (let tag of tags) {
            tag = tag.toLowerCase();
            if (tag.startsWith('</')) {
                const tagName = tag.match(/^<\/(\w+)/)[1];
                const last = stack.pop();
                if (last && last.name !== tagName) {
                    return { ok: false, message: `Tag <${last.name}> (line ${last.line}) is not properly closed before </${tagName}> (line ${i + 1}).`, line: last.line };
                }
            } else {
                const tagName = tag.match(/^<(\w+)/)[1];
                if (!voidTags.includes(tagName)) {
                    stack.push({ name: tagName, line: i + 1 });
                }
            }
        }
    }

    if (stack.length > 0) {
        const missing = stack.map(t => `<${t.name}> (line ${t.line})`).join(', ');
        return { ok: false, message: `Missing closing tags for: ${missing}`, line: stack[0].line };
    }

    return { ok: true };
}

function highlightTagLine(textarea, lineNumber) {
    const lines = textarea.value.split('\n');
    let start = 0;

    for (let i = 0; i < lineNumber - 1; i++) {
        start += lines[i].length + 1;
    }

    const end = start + lines[lineNumber - 1].length;

    textarea.focus();
    textarea.setSelectionRange(start, end);
    textarea.scrollTop = textarea.scrollHeight * (lineNumber / lines.length);

    // flash background color
    const originalBg = textarea.style.backgroundColor;
    textarea.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    setTimeout(() => textarea.style.backgroundColor = originalBg, 1500);
}
