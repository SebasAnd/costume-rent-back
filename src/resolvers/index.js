const { Query } = require('./Query');
const { auth } = require('./Mutation/auth');
// const { post } = require('./Mutation/post');
const { Subscription } = require('./Subscription');
const { User } = require('./User');
const { Post } = require('./Post');

module.exports = {
  User,
  Query,
  Mutation: {
    ...auth
  }
  /* Subscription,
  User,
  Post, */
};
