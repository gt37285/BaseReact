import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './app'

const root = document.getElementById('root')

render(<StrictMode><App/></StrictMode>, root)