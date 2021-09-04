const express = require('express');
const Gun = require('gun');
const app = express();
const port = 3030;
app.use(Gun.serve);

const server = app.listen(port, () => {
    console.info(`Example app listening at http://localhost:${port}`)
});

const db = Gun({ web: server });
