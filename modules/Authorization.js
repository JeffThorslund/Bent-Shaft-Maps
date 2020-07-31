const User = require("../models/User");

module.exports = async (authorizedData) => {
  //Token successfully verified. Find user.
  await User.findOne({ userID: authorizedData.userID }).then((user) => {
    //User Does Not Exist
    console.log(user);
    if (user === null) {
      const newUser = new User({
        name: authorizedData.name,
        email: authorizedData.email,
        userID: authorizedData.userID,
      });
      newUser.save();
    }
  });
};
