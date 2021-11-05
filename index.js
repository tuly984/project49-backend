const express = require("express");
const cors = require("cors");
const {  articles } =require('./data')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
    res.json(articles)
})

app.get('/api/articles/:id', (req, res) => {

    const id = req.params.id;
    const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
})



app.listen(port, console.log('server running on port', port))