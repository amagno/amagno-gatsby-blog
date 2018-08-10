// import Presentation from '../../components/presentation/presentation'
import React from 'react';

let component = () => (
    <div></div>
)

if (typeof window !== 'undefined') {
    component = require('../../components/git-github-presentation/git-github-presentation')
}


export default component;

