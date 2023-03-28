import { config } from './index.js';

let origins;
if (config.modeEnv === 'production') {
  origins = [''];
}
else{
  origins = ['http://localhost:5500'];
}
const corsOptions = {
  origin: origins,
  credentials: true ,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

export default corsOptions;
