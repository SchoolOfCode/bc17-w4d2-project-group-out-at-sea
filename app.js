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
app.get('/', (req, res) => {
    res.send('Hello World! ');
});

app.listen(port, () => {
    console.log(`server started on ${port}`);
});

// Not required, but recommended for Express users:
// app.disable("x-powered-by");
