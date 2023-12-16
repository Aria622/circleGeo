import './style.scss'

import Three_App from './src/App/threeApp';

import Cube from './src/Model/cube';

const app = new Three_App()
const cube = new Cube()

app.addModel(cube);



