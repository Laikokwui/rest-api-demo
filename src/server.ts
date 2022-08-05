import app from "./app";
require('dotenv').config()
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})