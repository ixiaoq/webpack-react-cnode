import React from 'react';
import { render } from 'react-dom';

import style from './index.scss';
console.log(style);
render(
    <div className={style.border}>123456789
        <div className={style.a}>213</div>
    </div>,
    document.getElementById("react-root")
)

