const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
//const members = require("./Members");

const app = express();

//01.Create a route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//init middleware
//app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//02.Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

//Port setup and listening to request
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
