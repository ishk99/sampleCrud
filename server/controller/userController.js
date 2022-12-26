// All callback functions inside our api/ route.js file need to be written inside this file
import User from "../model/user.js";
export const addUser = (req, res) => {
  const userInfo = req.body;
  //   to print this, install body parser
  console.log(userInfo);
  //   validate the userInfo with User -- create an object of schema and pass to User
  const newUser = new User(userInfo);
  //   save to db
  try {
    newUser.save().then((result) => {
      console.log("Saved");
      res.status(201).json(result);
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    // get data from DB
    const userData = await User.find({});
    res.status(200).json(userData);
  } catch (error) {
    userData
      .status(404)
      .json({ message: "User data not loading " + error.message });
  }
};

export const getUser = async (req, res) => {
  // console.log(req.params.id);
  try {
    // const userData = await User.find({ _id: req.params.id });
    const userData = await User.findById(req.params.id);
    res.status(200).json(userData);
    // console.log(userData);
  } catch (error) {
    console.log("Not defined from getUser callback " + error.message);
  }
};

export const editUser = async (req, res) => {
  let user = req.body;
  // validates if the data is valid or not
  const editedUser = new User(user);
  try {
    // i think we could also pass req.body.id
    await User.updateOne({ _id: req.params.id }, editedUser);
    res.status(201).json(editedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log("Hey");
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error in deleting", error);
  }
};
