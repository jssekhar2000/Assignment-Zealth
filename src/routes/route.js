const router = require('express').Router();
const userController = require('../Controllers/userController');
const postController = require("../Controllers/tweetsController")
const auth = require('../middlewares/auth')


router.post('/register',userController.createUser) // Register  User

router.post('/authenticate',userController.login)    //should perform user authentication and return a JWT token.

router.post('/follow/:id',auth.authentication,userController.follow)  //authenticated user would follow user with {id}

router.post('/unfollow/:id',auth.authentication,userController.unfollow) // authenticated user would unfollow a user with {id}

router.post('/postTweet',auth.authentication,postController.createPost)    // would add a new post created by the authenticated user.


router.get('/getNewsFeed/:id',auth.authentication,postController.getPosts)    // would return  latest posts created by a user sorted by post time.









module.exports = router