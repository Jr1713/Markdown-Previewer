# Markdown Previewer 📝

A live Markdown editor and previewer built with React and the Marked library.  
As you type Markdown in the editor panel, the preview panel shows the rendered HTML in real time.

Live demo: [Markdown Previewer by jr-delfin](https://codepen.io/jr-delfin/pen/raxjZwX) :contentReference[oaicite:0]{index=0}

---

## Table of Contents

1. What It Does  
2. Tools / Technologies Used  
3. How It Works (Overview)  
4. Project Structure (Standalone)  
5. Usage / Instructions  
6. Possible Enhancements  
7. License

---

## 1. What It Does

- Provides a **textarea editor** where the user can input Markdown syntax  
- Renders the Markdown live in a **preview panel** side-by-side  
- Supports GitHub-flavored Markdown features (headers, lists, links, code blocks, blockquotes, images, etc.)  
- Has a **Reset** button to restore default sample Markdown  
- Has a **Copy HTML** button to copy the rendered HTML output to the clipboard  
- Responsive layout: the panels stack or resize based on screen width :contentReference[oaicite:1]{index=1}

---

## 2. Tools / Technologies Used

- **React (v17)** — for building the UI and managing state :contentReference[oaicite:2]{index=2}  
- **ReactDOM** — to render the React app into the page :contentReference[oaicite:3]{index=3}  
- **Marked (v4.x)** — a Markdown parser that converts Markdown string into HTML :contentReference[oaicite:4]{index=4}  
- **Babel (Standalone)** — allows use of JSX and modern JS syntax in the CodePen environment :contentReference[oaicite:5]{index=5}  
- **HTML & CSS** — layout, styling, responsive design, theming :contentReference[oaicite:6]{index=6}  

---

## 3. How It Works (Overview)

1. **Default Markdown**  
   The app starts with a predefined Markdown string (`DEFAULT_MD`) containing examples of various elements (headers, link, code, list, blockquote, image). :contentReference[oaicite:7]{index=7}  
2. **State Management**  
   React’s `useState` is used to keep track of the current Markdown text in the editor. :contentReference[oaicite:8]{index=8}  
3. **Live Rendering**  
   As the user types/change the Markdown, an `onChange` handler updates the state. React re-renders, and `marked.parse(markdown)` is called to convert Markdown → HTML. That HTML is inserted into the preview pane using React’s `dangerouslySetInnerHTML`. :contentReference[oaicite:9]{index=9}  
4. **Reset & Copy Controls**  
   - **Reset** button sets the editor back to the default Markdown. :contentReference[oaicite:10]{index=10}  
   - **Copy HTML** button attempts to copy the rendered HTML to the clipboard using `navigator.clipboard.writeText(...)`. It shows an alert on success/failure. :contentReference[oaicite:11]{index=11}  
5. **Styling / Layout**  
   CSS is used for splitting panels, theming, typography, responsive adjustments. The preview panel styles headings, lists, code, blockquotes, images, links, etc. :contentReference[oaicite:12]{index=12}  
