<!-- Answers to the Short Answer Essay Questions go here -->

1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

    + Middleware: functions that have access to request and response ojects as well as the next middleware function in the app's request-response cycle. Middleware can execute code, make changes to res or req obj, end the res/res cycle, or call next middleware in a stack. If middleware does not have the next() function then it will not be able to pass control to the next middleware function.

    + Sessions: at a high-level, sessions allow for a place to store data that would an app would need to persist over multiple requests. A user would have a unique session that visits a website. Sessions can be enabled in an app from 'express-session' if using express. Data stored in a sessions can take many different forms including storage in a database, cookie, memory cache, or app memory. Depending on how a developer chooses to implement storage, they must make sure that certain criteria are met. For instance, with a cookie, the secret key must be protected.

    + bcrypt: a function that hashes passwords. bcrypt is a great tool for two reasons. First, it incorporates salt, which generates random data and helps protect against dictionary or rainbow attacks. Secondly, bcrypt is an adaptive function in that the iteration count can be altered in order to slow it down. This allows for protection from brute-force attacks even with high computational power at the helm.

    + JWT (JSON web token): it is a JSON object that is a safe way for information to be recognized between two entities. Basically, it's like having a security badge that one would present to a security guard. A token has three parts: header.payload.signature. As we have worked on this week, this relationship has been defined by having an auth server present the user with a unique token that could then be used to safely communicate with the application. JWT tests authenticity in that it verifies that you are who you say you are.

2. What does bcrypt do in order to prevent attacks?

    + Implements salt which is random data that is attached upon the secret and prevents from rainbow attacks etc.

    + Adapts - bcrypt can be manipulated to where it can be slowed down by more iterations thus preventing brute-force attacks, even with high computing power at the helm.

3. What are the three parts of the JSON Web Token?

    + header - information about how signature should be computed.

    Example:

    {
        "typ": "specify that object is JWT here",
        "alg": "whatever hashing algo using"
    }

    + payload - this is where user information is stored inside the JWT

    Example:

    {
        "ID": "bjl;ajglah;ah;lahgoadngvua98qh98gq3h9uiagi8gh8hg83qf"
    }

    + signature - basically joins together the header and payload to encode them into a single string secret.


++ Thank you for reviewing this! :) ++