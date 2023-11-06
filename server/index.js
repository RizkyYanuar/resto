import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import MenuRoute from './routes/MenuRoute.js';

const app = express();
mongoose.connect(
  'mongodb+srv://rizkyyanuar:eagle1140@resto.4jhq5lz.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database connected...'));

app.use(cors());
app.use(express.json());
app.use(MenuRoute);

app.listen(5000, () => console.log('Server up and running...'));
