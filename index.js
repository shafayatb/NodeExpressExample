const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

//01.Create a route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//init middleware
//app.use(logger);

//02.Set static folder
app.use(express.static(path.join(__dirname, "public")));

//03.Creating a simple rest api
app.get("/api/members", (req, res) => res.json(members));

//05. GET request
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

//Port setup and listening to request
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
