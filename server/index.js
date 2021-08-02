const express =  require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users.js')

const app = express();
const PORT = 5000;

//initialize bodyParser
app.use(express.json());

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  console.log('test');
  res.send('We are in Homepage')
})

app.listen(PORT,() => console.log(`Server running on port: http://localhost:${PORT}`))
