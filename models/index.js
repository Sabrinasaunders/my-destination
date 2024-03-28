const User = require('./User');
const TravelPost= require('./TravelPost');

User.hasMany(TravelPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TravelPost.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, TravelPost };
