// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// // In your main CSS or TSX file, e.g., src/index.css or src/main.tsx
// import 'react-phone-input-2/lib/style.css'


// createRoot(document.getElementById("root")!).render(<App />);
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import 'react-phone-input-2/lib/style.css'
import FontFaceObserver from 'fontfaceobserver'; // 👈 NEW IMPORT

// ----------------------------------------------------
// FONT LOADING LOGIC FOR CROSS-BROWSER SUPPORT
// ----------------------------------------------------
const font = new FontFaceObserver('Cobe');

font.load(null, 5000) // 5 second timeout
  .then(function () {
    // Font loaded successfully: add class to body
    document.body.classList.add('cobe-loaded');
  })
  .catch(function () {
    // Font failed: Fallback will be used, still adds class to prevent FOUT
    document.body.classList.add('cobe-loaded-fallback'); 
  });
// ----------------------------------------------------

createRoot(document.getElementById("root")!).render(<App />);