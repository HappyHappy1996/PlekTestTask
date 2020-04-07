# Plek Backend test.  

## Part A

### Context 

Our data model has 3 main entities: User, and Post and Group. Each user could create only one group, and invite any amount of users that like. Also, each user could publish any amount of post in a group or as public. 
The post that published as public will be readable by all other users. But the posts that published in the groups are only readable by the users that joined that group.

### Goals
Design and implement a NodeJs project that represents our data model and store data in a MongoDB Instance. Also, your module should provide 4 main methods as explained here: 
1. Develop an API to generate dummy data.  
2. Develop an API to Generate a report of posts created per month and per user.
3. Develop a function to generate a report of the latest edited posts, lists per user in the previous month(a month before the current month).
4. Develop an API to report a post history.

## Implementation
You should write your code as if it's going straight to Production, so it needs to be production ready, and maintainable for other developers. To that end, heres what we care about when we write code, and we want you to care about these things too, so we expect the following to be demonstrated in your code base:

* **Domain Modeling** - Your solution should model the domain it's working within for clarity.
* **Design Patterns** - Don't reinvent the wheel. If you know a pattern which suits, use it.
* **Logging** - Your code should include logs, logging to `STDOUT`. Logging is essential in debugging a system running in production. Logs at the `INFO` level should include decisions your program is making, while the `DEBUG` level can be anything that adds more context to the decision.
* **Metrics** - We care about how the system is operating, and our metrics are used to report on important business-level events. We'd like you to think about what metrics you should track in your solution, and at minimum create comments in your code around what metric you'd increment/decrement at that point.
* **Performant** - You don't need to optimise to the millisecond level, but don't do things which will obviously cause performance issues in production.
* **Failure Handling** - You should expect things to go wrong, and assumptions to be wrong. Your code should handle these situations.
* **Git Commits** - This repo is a git repo. You should have small, frequent, focussed and atomic commits to the codebase which illustrates your progression through the problem.
