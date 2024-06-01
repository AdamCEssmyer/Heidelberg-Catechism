import React from 'react';
import {createRoot} from 'react-dom/client';

document.head.innerHTML = <div id="index"></div>

const root = createRoot(document.getElementById('index'));
root.render(<h1>"Heidelberg Catechism(1563)"</h1>);

