import Menu from '../models/MenuModel.js';

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.json(menu);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveMenu = async (req, res) => {
  const menu = new Menu(req.body);
  try {
    const insertedmenu = await menu.save();
    res.status(201).json(insertedmenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const updatedmenu = await Menu.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    );
    res.status(200).json(updatedmenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const deletedmenu = await Menu.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedmenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
