import express from 'express';
import helmet from 'helmet';

import {showActivities, 
addActivities} from './functionality.js';



const app = express();
const port = 3000;

// Ask Helmet to ignore the X-Powered-By header.
app.use(
    helmet({
      xPoweredBy: false,
    })
  );

app.get('/activities', async (req, res) => {
    const array = await showActivities();
    res.status(200).json({array, 'data': 'success'});
});

app.get('/activities', async (req, res) => {
  //const astronauts = await getAstronauts();
  res.status(200).json({
    "success": true,
    "payload": await getAstronauts()
  })
});


app.listen(port, () => {
    console.log(`server started on ${port}`);
});

// Not required, but recommended for Express users:
// app.disable("x-powered-by");
