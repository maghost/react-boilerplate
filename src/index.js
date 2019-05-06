/*
USED TO RENDER MAIN APP COMPONENT
INTO HTML INDEX FILE.
*/
import React from 'react'
import { render } from 'react-dom'

// COMPONENTS
import App from './App'

render(<App/>, document.getElementById('app'))