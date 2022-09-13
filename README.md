# Assignment-Zealth

# Question 7
# [Build Twitter]
Design and develop a simplified version of Twitter where users can post tweets, follow /
unfollow another user, and are able to see the 10 most recent tweets in the user's news
feed.
Implement the following endpoints for your frontend team :
# Endpoint 1
/postTweet - This endpoint takes up a text tweet in the body, creates a tweet and returns the
tweetID of the newly created tweet in response.
# Endpoint 2
/follow - This endpoint takes input the user ID of follower and followee. Runs the business
logic of followerID following followeeID. Returns success or failure.
# Endpoint 3
/unfollow - This endpoint takes input the user ID of follower and followee. Runs the business
logic of followerID un-following followeeID. Returns success or failure.
# Endpoint 4
/getNewsFeed - which takes up one userID.
It retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed
must be posted by users who the user followed or by the user themself. Tweets must be
ordered from most recent to least recent.
# Expectations :
1. Design the schema of your database.
2. Write the logic of these endpoints in any language of your choice.
3. Think about edge cases & assumptions - our frontend developers are not friendly �