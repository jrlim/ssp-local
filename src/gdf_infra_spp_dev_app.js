'use strict';

// [START gae_node_request_example]
const express = require('express');
const app = express();
const child_process = require('child-process-promise');

// for DEBUG
for (let it in process.env) {
  if (it.startsWith('GDE_')) console.log(it + '="' + process.env[it] + '"');
}

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world! from dev')
    .end();
});

// for test AE
app.get('/exec', (req, res) => {
  console.log(req.headers);
  
  let cmd = req.query.cmd;
  if (req.query.arg0) { cmd += ' ' + req.query.arg0; }
  if (req.query.arg1) { cmd += ' ' + req.query.arg1; }
  if (req.query.arg2) { cmd += ' ' + req.query.arg2; }
  if (req.query.arg3) { cmd += ' ' + req.query.arg3; }
  if (req.query.arg4) { cmd += ' ' + req.query.arg4; }
  if (req.query.arg5) { cmd += ' ' + req.query.arg5; }

  child_process.exec(cmd)
    .then((result) => {
      console.log('stdout: ', result.stdout);
      console.log('stderr: ', result.stderr);
      const replaced = result.stdout.replace(/\n/g, '<br>\n');
      res.status(200).send(replaced);
    })
    .catch((err) => {
      console.error('ERROR: ', err);
      res.status(500).send('failed');
    });
});

app.get('/package/install/*', (req, res) => {
  res
    .status(200)
    .send('install ok')
    .end();
});

app.get('/package/uninstall/*', (req, res) => {
  res
    .status(200)
    .send('uninstall ok')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
