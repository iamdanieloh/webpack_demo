import "./style.css"
import React from 'react'
import Page from './Page'

window.onload = function() {
  React.render(<Page {...props}/>, document.getElementById('container'))
}
