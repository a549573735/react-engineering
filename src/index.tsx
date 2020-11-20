import * as React from 'react';
import * as ReactDOM from 'react-dom';
let root:HTMLElement | null = document.getElementById('root');

let props = { className: 'title' };
let element= React.createElement('div', props, 'hello123');


ReactDOM.render(element, root);