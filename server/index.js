//Required packages

const express = require('express');

const vehicleRoute = require('./routes/vehicleRoute');
const customerFunctionalityRoutes = require('./routes/customerFunctionalityRoutes');
const executiveRoute = require('./routes/executiveRoute');
const registrationRoutes = require('./routes/registrationRoutes');
const testdriveRoute = require('./routes/testdriveRoute');
const client = require('prom-client');
const app = express();

//Initialization
const promBundle = require('express-prom-bundle');

const metricsMiddleware = promBundle({ includeMethod: true });

app.use(metricsMiddleware);

app.use(express.json());
app.use("/vehicle", vehicleRoute);
app.use("/customer", customerFunctionalityRoutes);
app.use("/executive", executiveRoute);
app.use("/registration", registrationRoutes);
app.use("/testdrive", testdriveRoute);


//Create a Gauge metric for a hypothetical metric named 'example_metric'
const exampleMetric = new client.Gauge({
    name: 'example_metric',
    help: 'An example metric for demonstration purposes',
});

// Dummy data for the metric
const exampleMetricValue = Math.random() * 100;

// Set the metric value
exampleMetric.set(exampleMetricValue);



app.get('/metrics', (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
});
//Start the server at 3005 port

app.listen(3005, () => {
    console.log("Server running on port 3005");
});

