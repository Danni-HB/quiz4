const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Quiz 4 Daniela Herrera');
});

app.listen(PORT,'0.0.0.0', () => {
    console.log(`App is running on http://0.0.0.0:${PORT}`);
});
