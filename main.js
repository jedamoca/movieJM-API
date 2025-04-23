import { app } from "./app.js";

window.addEventListener('hashchange', app);
document.addEventListener('DOMContentLoaded', app);