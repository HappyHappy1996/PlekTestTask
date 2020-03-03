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



## Part B

### Inputs

We've provided you two three different inputs into your solution. These are located within the `/data` path. You will need to use all of them:

* `accounts.json` - A list of our user accounts. You should ignore any data which doesn't map to an existing user account.
* `partnerA.json` - List of Offers in JSON format.
* `partnerB.json` - List of Offers in the same JSON format.

The format and rules surrounding the Partner files are described below under **Offers**.

### Output

Your program will need to load these inputs, process them according to the rules under **Offers** below, and output a single file as `./result/resultB.json`, which contains the output from the analysis results.

The output should be focussed around each account. For each account, we want to know the number of whole days (rounded down) the user has had free access from each Partner.

The format of the JSON output file should match this structure:

```
{
  "subscriptions": {
    "Sally": {
      "PartnerA": 34,
      "PartnerB": 62
    },
    "Farhan": {
      "PartnerA": 34
    }
  }
}
```

### Offer Rules

There are two inputs into the Offer algorithm:

* `GRANT` Offers, which give a user an Offer.
* `REVOKE` Offers, which removes the Offer.

Our Partners aren't aware of user accounts in our system, so instead they send MSISDNs for each user.

**GRANT Offers**

Format:

Each `GRANT` contains:

* The users phone number
* The date (ISO8601 format) at which the GRANT starts
* The period of free subscription for that user, in months.

Rules:

* The first partner to give a GRANT "owns" that user. Other partners cannot add to that users Offer.
* Expiring GRANTs from the same partner stack on top of each other if still active.
* Offer months are by calendar months, not in 30 day blocks.
* GRANT offers without a period defined should be ignored entirely.

**REVOKE Offers**

Each `REVOKE` contains:

* The users phone number
* The date (ISO8601 format) at which the REVOKE is effective from

Rules:

* A partner can only revoke an Offer if they "own" the user.
* REVOKE of an expired Offer is possible, the user should be "released" from the partner.
* REVOKEs should be processed before GRANTs.

**Examples**

```
Partner A issues a GRANT to John for 3 months.
Partner B issues a GRANT to John 4 months later.

John is still owned by Partner A, so Partner B's Offer is ignored
```

```
Partner A issues a GRANT to John for 3 months.
Partner A issues a REVOKE to John 2 months later.
Partner B issues a GRANT to John for 2 months at the exact same time as the REVOKE was issued.

John gets 2 months from Partner A and 2 months from Partner B.
```

```
Partner A issues a GRANT to John for 3 months.
Partner A issues a REVOKE to John 2 months later.
Partner B issues a GRANT to John for 2 months, but 1 day before the REVOKE was issued.

John gets 2 months from Partner A, and Partner B is ignored.
```

```
Partner A issues a GRANT to John for 4 months.
Partner A issues a GRANT to John for 6 months, 3 months later.

John has 10 months free subscription from Partner A.
```

## Part C

You have a sample code in `./code/C/buggy.js` that has some nesty bugs! please help us by addressing them!


## Implementation
You should write your code as if it's going straight to Production, so it needs to be production ready, and maintainable for other developers. To that end, heres what we care about when we write code, and we want you to care about these things too, so we expect the following to be demonstrated in your code base:

* **Domain Modeling** - Your solution should model the domain it's working within for clarity.
* **Design Patterns** - Don't reinvent the wheel. If you know a pattern which suits, use it.
* **Logging** - Your code should include logs, logging to `STDOUT`. Logging is essential in debugging a system running in production. Logs at the `INFO` level should include decisions your program is making, while the `DEBUG` level can be anything that adds more context to the decision.
* **Metrics** - We care about how the system is operating, and our metrics are used to report on important business-level events. We'd like you to think about what metrics you should track in your solution, and at minimum create comments in your code around what metric you'd increment/decrement at that point.
* **Performant** - You don't need to optimise to the millisecond level, but don't do things which will obviously cause performance issues in production.
* **Failure Handling** - You should expect things to go wrong, and assumptions to be wrong. Your code should handle these situations.
* **Git Commits** - This repo is a git repo. You should have small, frequent, focussed and atomic commits to the codebase which illustrates your progression through the problem.



## Submission

1. Your submission must run on either Linux or OSX, so make sure you handle things like file paths correctly if you're developing on Windows. Most platforms are able to provide a file path handling module to abstract this problem away, so use that.

2. The code you write for the solution should be in the `codes` folder, and in related Part folder.

3. If you have any question before start coding please send an email to Plek team. 

4.  To start the test, create an empty private repository in gitlab.com add plek email couch email address to the repository and submit the init commit, your time will be started.

5. Best time to finish this task is 4 hours, but if you need  more time it's okay you can continue. 

s
** Best of luck **

The Plek Engineering team. 
