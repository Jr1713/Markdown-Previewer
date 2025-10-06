/** script.js (type="text/babel")
 * React 17 + Marked markdown previewer
 * - Ensures #editor and #preview exist
 * - Shows default markdown on load (contains required elements)
 * - Live renders GitHub flavored markdown as user types
 */

const { useState, useEffect } = React;

/* Default markdown containing:
   - H1, H2, link, inline code, code block, list, blockquote, image, bold
*/
const DEFAULT_MD = `# Markdown Previewer

## Subheading (H2)

This is a [link to FreeCodeCamp](https://www.freecodecamp.org).

Inline code example: \`const x = 42;\`

\`\`\`javascript
// Code block example
function hello(name) {
  return "Hello, " + name + "!";
}
\`\`\`

- Item 1
- Item 2
- Item 3

> This is a blockquote. It is useful for quoting text.

**This text is bolded.**

![Example image](https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg)
`;

/* Configure Marked (GFM + breaks for optional bonus) */
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true
});

function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_MD);

  // Update preview automatically as markdown changes
  const handleChange = (e) => setMarkdown(e.target.value);

  // Rendered HTML (safe because Marked outputs sanitized HTML by default as of v4, but still avoid raw user-inserted <script>)
  const getMarkup = () => {
    try {
      return { __html: marked.parse(markdown) };
    } catch (err) {
      return { __html: "<p>Error rendering markdown</p>" };
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Markdown Previewer</h1>
        <div className="controls" role="region" aria-label="controls">
          <button className="btn" onClick={() => {
            setMarkdown(DEFAULT_MD);
          }} title="Reset to default markdown">
            Reset
          </button>
          <button className="btn" onClick={() => {
            // Copy HTML preview to clipboard (optional convenience)
            try {
              const html = marked.parse(markdown);
              navigator.clipboard?.writeText(html);
              alert("Preview HTML copied to clipboard.");
            } catch {
              alert("Unable to copy.");
            }
          }}>Copy HTML</button>
        </div>
      </header>

      <main className="panel-row" role="main">
        <section className="panel editor" aria-label="editor panel">
          <h2 style={{marginTop:0}}>Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
            aria-label="Markdown editor"
          />
        </section>

        <section className="panel preview" aria-label="preview panel">
          <h2 style={{marginTop:0}}>Preview</h2>
          <div id="preview" dangerouslySetInnerHTML={getMarkup()} />
        </section>
      </main>
    </div>
  );
}

/* Render app to DOM */
ReactDOM.render(<App />, document.getElementById('root'));
