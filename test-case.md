Scenario 1 : User can login Linkedin with Google SignIn successful
Given user at Login page
Then user click Sign in with Google
And user got choose Google account container
And user choose registered Google account 
Then container closed
And show login successful notification
Then launch user home page

Scenario 2: User successfully creates a LinkedIn Account
GIVEN user is on LinkedIn Registration page
WHEN user enters all the required registration information
AND user hits ‘join now’
THEN user LinkedIn account is created
AND user is directed to the profile creation page
AND user confirmation email is sent

