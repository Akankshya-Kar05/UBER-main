const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  try {
    if (!firstname || !email || !password) {
      throw new Error('All fields are required');
    }

    const user = await userModel.create({
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    });

    console.log('✅ New user created successfully:', user.email);

    return user;
  } catch (error) {
    console.error('❌ Error creating user:', error.message);
    throw error;
  }
};
