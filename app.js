// Import everything.
import express from 'express';
import helmet from 'helmet';
import { v4 as uuidv4 } from "uuid";
import {showActivities, 
addActivities} from './functionality.js';


// Store the port number and create application instance with express and assign to variables.
const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());

// Not required, but recommended for Express users:
// app.disable("x-powered-by");

// Ask Helmet to ignore the X-Powered-By header.
app.use(
    helmet({
      xPoweredBy: false,
    })
  );


// When there is a get request made by the client in the route 'activities',
// event listener listens for a 'get' request and then 
// run an asynchronous function that returns a json file containing all of the activities.
app.get('/activities', async (req, res) => {
// assuming the promise is resolved
  try {
    const array = await showActivities();
    res.status(200).json({
      'data': array,
      'success': true
    }); 
  }
// If there are any errors with the asynchronous function,
// catch them.
  catch (error) {
    console.log(error);
// Different status code (500) to show error.
    res.status(500).json({
      'data': null,
      'success': false
    });
  }  
})


app.post('/activities', async (req, res) => {
    try {
    const inputWithId = {
      ...req.body,
      id: uuidv4(),
      activity_submitted: `${Date.now()}`,
    }


    const array = await addActivities(inputWithId)
    ;

    res.status(201).json({
        'data': array,
        'success': true
    })}
    
    catch (error) {
        console.log(error);
    // Different status code (500) to show error.
        res.status(500).json({
          'data': null,
          'success': false
        })
}})


app.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  const index = activities.findIndex(activity => activity.id === id);
  console.log(index);

  if (index !== -1) {
      activities.splice(index, 1);
      res.status(200).send(`Activity with ID ${id} deleted successfully.`);
  } else {
      res.status(404).send(`Activity with ID ${id} not found.`);
  }
});




// Event listener that listens out for any requests made by client.
// Has to be at bottom.
app.listen(port, () => {
    console.log(`server started on ${port}`);
});


