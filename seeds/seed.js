const sequelize = require('../config/connection');
const { User, TravelPost } = require('../models');

const userData = require('./userData.json');
const TravelPostData = require('./TravelPostData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const TravelPost of TravelPostData) {
    await TravelPost.create({
      ...TravelPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
