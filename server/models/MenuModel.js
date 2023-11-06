import mongoose from 'mongoose';

const Menu = mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Menus', Menu);
