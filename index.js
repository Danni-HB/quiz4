const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Quiz 4 Daniela Herrera');
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
