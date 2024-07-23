import express from 'express';
import helmet from 'helmet';
const app = express();
const port = 3000;

// Ask Helmet to ignore the X-Powered-By header.
app.use(
    helmet({
      xPoweredBy: false,
    })
  );
app.get('/activites', (req, res) => {
    res.send('Hello World! ');
    res = 
    res.status(200).json(activities, 'data');

});

app.listen(port, () => {
    console.log(`server started on ${port}`);
});

// Not required, but recommended for Express users:
// app.disable("x-powered-by");
