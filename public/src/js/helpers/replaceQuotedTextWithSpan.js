/**
 * Replaces quoted text with a span element with class "document-string".
 * @param {string} explanation - The string to replace quoted text in.
 * @returns {string} The modified string with span elements.
 */
function replaceQuotedTextWithSpan(explanation) {
    let insideQuote = false;
    let result = '';
    for (let i = 0; i < explanation.length; i++) {
      // checks if the current character is a double quote
        if (explanation[i] === '"') {
      // if "insideQuote" is true then it means we have reached the end of a quoted text, so we add a closing span tag to "result".
            if (insideQuote) {
                result += '"</span>';
            } 
       // If "insideQuote" is false, then we are starting a new quoted text, so we add an opening span tag with class "document-string" to "result".
            else {
                result += '<span class="document-string">"';
            }
       // We toggle the value of "insideQuote" to indicate whether we are currently inside or outside of a quoted text.
            insideQuote = !insideQuote;
        } 
       // If the current character is not a double quote, then we simply add it to "result". 
         else {
            result += explanation[i];
        }
    }
    // if there are any unclosed quotes by checking if "insideQuote" is still true. If it is, then we add a closing span tag to "result". 
    if (insideQuote) {
        result += '</span>';
    }
    return result;
}
export default replaceQuotedTextWithSpan
