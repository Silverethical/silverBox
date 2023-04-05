function replaceQuotedTextWithSpan(explanation) {
    let insideQuote = false;
    let result = '';
    for (let i = 0; i < explanation.length; i++) {
        if (explanation[i] === '"') {
            if (insideQuote) {
                result += '"</span>';
            } else {
                result += '<span class="document-string">"';
            }
            insideQuote = !insideQuote;
        } else {
            result += explanation[i];
        }
    }
    if (insideQuote) { // handle unclosed quotes
        result += '</span>';
    }
    return result;
}
export default replaceQuotedTextWithSpan