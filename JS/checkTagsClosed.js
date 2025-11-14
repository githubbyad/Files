function checkTagsClosed(formId, fieldName, textareaId) {
    const smForm = document.getElementById(formId);
    const textarea = document.getElementById(textareaId);
    if (smForm && textarea) {
        const html = textarea.value;
        const result = areTagsClosed(html);
        if (!result.ok) {
            const safeMessage = result.message.replace(
                /<\/?([a-zA-Z0-9]+)>/g,
                (match, tag) => {
                    // Check if its a closing tag
                    if (match.startsWith("</")) {
                        return `<b style="color: red;"><code><</code>/${tag}<code>></code></b>`;
                    } else {
                        return `<b style="color: red;"><code><</code>${tag}<code>></code></b>`;
                    }
                }
            );

            // highlight before alert
            highlightTagLine(textarea, result.line);

            // store scroll and selection positions
            const prevScroll = textarea.scrollTop;
            const prevStart = textarea.selectionStart;
            const prevEnd = textarea.selectionEnd;

            // short delay for highlight visibility
            setTimeout(() => {
                alert(`<b>${fieldName}</b> contains unclosed or mismatched tags:\n\n${safeMessage}`, textarea);
                // Popup overlay adjustments
                const popup_overlay = document.getElementById('popup_overlay');
                const popup_title = document.getElementById('popup_title');
                const popup_container = document.getElementById('popup_container');
                const popup_panel = document.getElementById('popup_panel');
                const popup_message = document.getElementById('popup_message');
                if (popup_message) {
                    popup_message.style.fontFamily = 'Trebuchet MS, sans-serif';
                }
                if (popup_panel) {
                    popup_panel.querySelector('.button').value = `I WILL FIX`;
                    popup_panel.insertAdjacentHTML(`beforeend`, `<input class="button" type="button" value="&nbsp;Ignore&nbsp;" id="popup_cancel" style="padding: 10px 24px; border-radius: 5px;">`);
                    popup_panel.querySelector('.button').style.cssText = 'padding: 10px 24px; border-radius: 5px;font-family: Trebuchet MS, sans-serif;';
                    popup_panel.querySelector('#popup_ok').style.background = `#53a653`;
                    popup_panel.querySelector('#popup_cancel').style.background = `#aaaaaa`;
                    popup_panel.querySelector('#popup_cancel').style.marginLeft = `10px`;
                    popup_panel.style.marginTop = '30px';
                    popup_panel.querySelector('#popup_cancel').addEventListener('click', () => {
                        smForm.setAttribute('onclick', 'return true;');
                        popup_panel.querySelector('#popup_ok').click();                        
                        smForm.submit();
                    });
                    popup_panel.insertAdjacentHTML(`afterend`, `<div id="ignore_text" style="text-align: center;font-size: 13px;color: gray;"><i class="fa fa-exclamation-triangle" style="color: #565656;" aria-hidden="true"></i> IGNORE <b>may mess</b> up your homepage layout.</div>`);
                }
                if (popup_container) {
                    popup_container.style.background = 'white';
                    popup_container.style.borderRadius = '8px';
                    popup_container.style.padding = '10px';
                    popup_container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }
                if (popup_title) {
                    popup_title.style.background = 'transparent';
                    popup_title.innerHTML = `<i class="fa fa-exclamation-circle" style="color: orange;font-size: 60px;"></i>`;
                }
                if (popup_overlay) {
                    popup_overlay.style.background = 'black';
                    popup_overlay.style.opacity = '0.5';
                }
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
