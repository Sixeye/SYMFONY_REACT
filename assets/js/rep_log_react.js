import React from 'react';
import { render } from 'react-dom';
import RepLogApp from './RepLog/RepLogApp';

const shouldShowMuscle = true;

render(<div>
    <RepLogApp withMuscle={shouldShowMuscle}/>
    </div>
    ,
    document.getElementById('lift-stuff-app')
);