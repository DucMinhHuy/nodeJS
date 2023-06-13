import exports from 'express';
import uploadFile from './route/uploadFile';
import configViewEngine from './config/viewEngine';
// import initWebRouter from './route/web';
// import initApiRouter from './route/api';
const path = require('path');
require('dotenv').config();

const app = exports();
app.use(exports.urlencoded({ extended: true }));
app.use(exports.json());
const port = process.env.PORT || 3000;

configViewEngine(app);
// initWebRouter(app);
// initApiRouter(app);
uploadFile(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})