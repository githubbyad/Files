function areTagsClosed(html) {
  // Remove comments and self-closing tags
  html = html
    .replace(/<!--[\s\S]*?-->/g, '') // remove HTML comments
    .replace(/<(\w+)([^>]*)\/>/gi, ''); // remove self-closing tags like <br/>

  // Precompute line offsets for error reporting
  const lineOffsets = [];
  let offset = 0;
  const lines = html.split('\n');
  for (let i = 0; i < lines.length; i++) {
    lineOffsets.push(offset);
    offset += lines[i].length + 1;
  }

  // Match all tags, even if they span multiple lines
  const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g;
  const tags = [...html.matchAll(tagRegex)];
  if (!tags.length) return { ok: true };

  const voidTags = [
    'br', 'img', 'hr', 'input', 'meta', 'link', 'source',
    'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'
  ];
  const stack = [];

  // Helper to find line number from character index
  function getLine(pos) {
    for (let i = lineOffsets.length - 1; i >= 0; i--) {
      if (pos >= lineOffsets[i]) return i + 1;
    }
    return 1;
  }

  for (const match of tags) {
    const tag = match[0].toLowerCase();
    const tagName = match[1].toLowerCase();
    const line = getLine(match.index);

    if (tag.startsWith('</')) {
      // Closing tag
      if (stack.length === 0) {
        return {
          ok: false,
          message: `Closing tag </${tagName}> on line ${line} has no matching opening tag.`,
          line
        };
      }
      const last = stack.pop();
      if (last.name !== tagName) {
        return {
          ok: false,
          message: `Tag <${last.name}> (line ${last.line}) is not properly closed before </${tagName}> (line ${line}).`,
          line: last.line
        };
      }
    } else {
      // Opening tag
      if (!voidTags.includes(tagName)) {
        stack.push({ name: tagName, line });
      }
    }
  }

  if (stack.length > 0) {
    const missing = stack.map(t => `<${t.name}> (line ${t.line})`).join(', ');
    return {
      ok: false,
      message: `Missing closing tags for: ${missing}`,
      line: stack[0].line
    };
  }

  return { ok: true };
}
