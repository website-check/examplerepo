/* eslint-disable @typescript-eslint/no-var-requires */
// optional: allow environment to specify port
const port = process.env.PORT || 8080

// wire up the module
const express = require('express')
// require helmet-csp
// create server instance
const app = express()

// bind the request to an absolute path or relative to the CWD
// app.use(express.static('dist'));
app.use('/', express.static('dist'))
app.use('/*', express.static('dist'))

// start the server
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`))
