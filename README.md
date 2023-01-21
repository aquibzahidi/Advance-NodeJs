# Advance-NodeJs
This repository contains Advance Javascript, NodeJs concepts and Interview questions

## Top 10 Interview Question

Q1: What is Node.js and why is it useful?

Answer: Node.js is an open-source, cross-platform JavaScript runtime environment. It allows developers to run JavaScript code on the server-side, creating backend applications. Node.js is built on top of the V8 JavaScript engine, which is the same engine that runs JavaScript in Google Chrome.
Node.js is based on events and it's non-blocking and asynchoronous nature makes it a wonderful choice for creating APIs.
Node.js is useful because it allows developers to use JavaScript, a language primarily used for client-side development, for both frontend and backend development. This makes it easier for developers to work on full-stack JavaScript applications, as they can use the same language across the entire stack. Additionally, Node.js has a large and active community that has developed a vast ecosystem of modules, or packages, that can be easily integrated into Node.js applications, making it easy to add functionality without having to build it from scratch.


Q2: How do you handle asynchronous code in Node.js?
Answer: In Node.js, all I/O operations (e.g. reading or writing to a file, making an HTTP request) are asynchronous, which means they do not block the execution of other code. To handle asynchronous code, Node.js uses callbacks and events.
Callbacks are functions that are passed as arguments to other functions and are executed after the function they were passed to completes its task. For example, when reading a file in Node.js, you would pass a callback function that will be executed once the file has been read.
Promises are an alternative to callback, they are objects that represent the eventual completion (or failure) of an asynchronous operation and it's return value.
Another way to handle asynchronous code in Node.js is by using the async/await syntax. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.
It's important to note that the async/await syntax is built on top of Promises, so it's still using the same underlying mechanism.


Q3: What is Event Loop?
Answer: The event loop is a mechanism in Node.js that handles the execution of asynchronous code. It is responsible for checking the message queue for new messages (also known as events) and executing the associated callback functions.
The event loop has a **single thread** that is responsible for handling all the asynchronous operations, but it also uses other **system threads for I/O operations** such as reading and writing files.
The event loop runs continuously, checking for new events in the message queue and executing their associated callbacks. When there are no more events in the queue, the event loop will wait for new events to arrive. Once a new event is added to the queue, the event loop will continue execution and execute the callback function associated with that event.
The event loop is essential for the non-blocking nature of Node.js and allows it to handle many simultaneous connections without blocking the execution of other operations.
It's important to note that while the event loop is running on a single thread, Node.js uses the **libuv** library to handle the asynchronous I/O operations which uses the multiple thread to handle those operations, this is what makes Node.js non-blocking.


Q4: How do you handle errors in Node.js?
Answer: In Node.js, errors are typically handled using the **try-catch** statement or by passing a callback function as an **error-first argument**.

The try-catch statement allows you to catch any errors that occur within the try block and handle them in the corresponding catch block. For example:

```
try {
  // code that might throw an error
} catch (error) {
  // code to handle the error
}
```
Another way to handle errors in Node.js is by passing a callback function as an **error-first argument**. This is a convention used in Node.js where the first argument of a callback function is an error object. If an error occurs, the error object will contain information about the error, and the second argument will be null. For example:

```
function callback(error, data) {
  if (error) {
    // handle the error
  } else {
    // use the data
  }
}
```
It's also a good practice to handle errors globally, for example by using an error-handling middleware, in order to catch any unhandled errors and prevent the application from crashing.

Additionally, with the recent versions of Node.js, developers are encouraged to use the `throw` statement to throw an error, as well as the `Promise.reject()` method to reject a promise.


Q5: What is the purpose of a package manager in Node.js and which one do you prefer?
Answer: A package manager is a tool that makes it easy to install, update, and manage the packages or libraries that are used in a Node.js application.

The most popular package manager for Node.js is `npm` (short for Node Package Manager). npm is the default package manager for Node.js and it comes bundled with the Node.js installation. npm provides a command-line interface that can be used to search for packages, install them, and manage their versions. npm also provides a public registry where developers can publish their packages, making them easily available to other developers.

Another package manager that is gaining popularity is `yarn`. Yarn is an alternative package manager that was developed by Facebook. It is built on top of the npm registry and uses the same package.json file format, but it has some performance improvements and additional features like offline mode, deterministic lock file and more.

Personally, I prefer npm, but it's up to developers to choose the one that they feel more comfortable with or the one that fits better with their project requirements.


Question 6: How do you debug a Node.js application?
Answer: There are several ways to debug a Node.js application:

1. Using the built-in debugger statement: you can insert the debugger statement in your code where you want to start debugging. When you run your application in debug mode, the code execution will pause at the debugger statement, and you will be able to inspect variables and call stack using the command line interface.

2. Using a Node.js debugger: There are several Node.js debugging tools available, such as the Node.js Debugger, which is built into the Node.js runtime, or tools like the Chrome DevTools, which can be used to debug Node.js applications via the Chrome browser.

3. Using a logging library: You can use a logging library such as Winston or Bunyan to add logging statements to your code. This will allow you to see what's happening in your application and help you identify errors.

4. Using a Profiler: You can use a profiler tool like the Node.js Performance Hooks or the V8 profiler to measure the performance of your application and identify performance bottlenecks.

It's also important to note that you can also use a combination of these methods to debug your application.

It's also important to mention that using the process manager such as pm2, supervisor and etc they also have the ability to debug the process and find the problem.


Q7: What is the difference between Node.js and JavaScript?
Answer: Node.js and JavaScript are related but distinct technologies. JavaScript is a programming language that is primarily used for creating interactive front-end web applications. It is used to add dynamic behavior to web pages, such as responding to user input, making network requests, and updating the page without requiring a page refresh.

Node.js, on the other hand, is a JavaScript runtime environment. It allows developers to run JavaScript code on the server-side, creating backend applications. Node.js is built on top of the V8 JavaScript engine, which is the same engine that runs JavaScript in Google Chrome. It provides an API for interacting with the file system, making network requests, and creating web servers.

So, in summary, JavaScript is a programming language, and Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side.


Q8: How do you handle security in a Node.js application?
Answer: Here are a few best practices for securing a Node.js application:

1. Keep your dependencies up to date: It is essential to keep all the packages and dependencies used in your application up to date to ensure that any security vulnerabilities are fixed.

2. Use a web application firewall (WAF): A WAF can help protect your application from common web attacks such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

3. Use encryption: Secure any sensitive data that is stored or transmitted by your application by using encryption.

5. Use a Content Security Policy (CSP): CSP is a security feature that helps to prevent cross-site scripting (XSS) and other code injection attacks.

6. Input validation: Ensure that all inputs are validated before processing them, this will help to prevent from injection attacks. Joi library can be used for validation.

7. Use a security middleware: There are several Node.js middleware libraries available for security like helmet, cors and etc.

8. Using rate limitter / incremental delay: DOS (Denial of service), DDOS and Brute-Force Attack can be handled by time limitter

9. Regularly test and monitor your application for vulnerabilities: Regularly test your application for potential vulnerabilities, and use monitoring tools to detect any suspicious activity.

It's important to keep in mind that security is an ongoing process, and it is essential to stay up-to-date with the latest security best practices and trends.


Q9: How do you implement performance optimization in a Node.js application?

Answer: Performance optimization is an ongoing process that involves identifying and addressing bottlenecks in an application. Here are a few best practices for optimizing the performance of a Node.js application:

1. Use a profiler: Profiling tools like the Node.js Performance Hooks or the V8 profiler can help identify performance bottlenecks in your application.

2. Minimize the number of dependencies: The more dependencies you have, the more resources your application will require to run. Minimizing the number of dependencies can help improve performance.

3. [Use caching](#caching-using-redis): Caching can help reduce the number of database queries and network requests your application makes, which can help improve performance. [**Radis**](#caching-using-redis) and **Memcached** can be used for caching.

4. Use a reverse proxy: Reverse proxies like Nginx or HAProxy can help offload some of the workload from your Node.js application, which can help improve performance.

6. Use a CDN: Content Delivery Networks (CDNs) can help reduce the load on your application by caching and delivering static assets to users from a location that is closer to them.

7. Use Asynchronous programming: Node.js is built on an event-driven, non-blocking I/O model, and it's important to take advantage of this by using asynchronous programming techniques.

8. Use a memory leak detector: Memory leaks can cause an application to consume more and more memory over time, which can lead to performance issues. Use a memory leak detector like the heapdump module to identify and address memory leaks in your application.

10. Use a process manager: Process managers like PM2 can help to monitor, reload and improve the performance of your application.

11. Use cluster module and child process: For running long task child process can be run so that main thread will be available. Additionally, cluster module can be implemented so that all the child process will handle the I/O task.


Q10: Can you explain the differences between the CommonJS and ES modules?
Answer: CommonJS and ES modules are two different module systems used in JavaScript.

CommonJS is a module system that was originally designed for server-side JavaScript and is used in Node.js. It uses a synchronous, blocking loading model and exports objects or functions using the module.exports and require() statements.

ES modules, on the other hand, is a module system that is built into the JavaScript language and is supported by modern browsers. It uses an asynchronous, non-blocking loading model and exports objects or functions using the export and import statements.

Here are a few key differences between the two:

1. Loading model: CommonJS uses a synchronous, blocking loading model, while ES modules use an asynchronous, non-blocking loading model.

2. Syntax: CommonJS uses the module.exports and require() statements, while ES modules use the export and import statements.

3. Browser support: CommonJS is primarily used in Node.js, while ES modules are natively supported by modern browsers.

4. Hoisting: Variables and functions declared in a CommonJS module are hoisted, while variables declared in an ES module are not.

5. Lazy loading: ES modules support lazy loading, where a module is only loaded when it is imported, while CommonJS modules are loaded when the application starts.

It's important to note that Node.js also supports ES modules since version 13.2.0, which means it's possible to use both systems in a node application, but it's important to keep in mind the compatibility and the feature provided by each one.


Q11: What is XSS?
Answer: Cross-Site Scripting (XSS) is a type of security vulnerability that allows an attacker to inject malicious code into a web page viewed by other users. Here are a few best practices for preventing XSS attacks:

1. Input validation: Ensure that all user inputs are properly validated, and that any special characters or scripts are properly escaped or removed.

2. Use a Content Security Policy (CSP): A Content Security Policy (CSP) is a security feature that helps to prevent cross-site scripting by specifying which sources of content are allowed to be loaded by the browser.

Code Example:
```
const Joi = require('@hapi/joi');

// Define a schema for the user input
const inputSchema = Joi.string().max(100).regex(/^[a-zA-Z0-9 ]+$/);

// Define a function to handle user input
function handleInput(req, res) {
    // Validate the user input using the defined schema
    const { error, value } = inputSchema.validate(req.body.userInput);

    if (error) {
        // Return an error if validation fails
        res.status(400).send(error.message);
    } else {
        // Use the validated input in the response
        res.send(`<h1>Hello, ${value}!</h1>`);
    }
}
```
It's important to note that this example uses the Joi library to validate the user input, but also it's important to use other methods such as encoding, security headers and etc to prevent from XSS attacks.

Q12: What is CSP and how it prevents from attack?
Answer: Content Security Policy (CSP) is a security feature that helps to prevent cross-site scripting (XSS) and other code injection attacks. It allows web developers to control where resources such as scripts, images and styles can be loaded from, and can help to prevent malicious code from being executed in the browser.

A CSP is set using an HTTP response header, and it is a set of policies that the browser should follow when loading resources for a particular page. The policies specify which sources of content are allowed to be loaded by the browser and which should be blocked.

For example, a CSP can be used to only allow scripts to be loaded from a specific domain, or to block all inline scripts. This helps to prevent malicious scripts from being executed, even if an attacker is able to inject code into a web page.

CSP can also be used to report any violations of the policy to a specified URL, this is known as a report-only policy and it can be used to monitor the page and detect any potential vulnerabilities.

CSP is considered a best practice for web security, and it's supported by all major web browsers. It is also supported by the latest version of the OWASP top 10 security risks.

```
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Set the Content-Security-Policy header
    res.set('Content-Security-Policy', "default-src 'self'; script-src 'self' https://example.com; img-src 'self' https://example.com; style-src 'self' https://example.com;");
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my website</h1><script src="https://example.com/script.js"></script>');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

```
This code sets the Content-Security-Policy header using the res.set function provided by the Express framework. The policy specified in the header states that resources should only be loaded from the same origin ('self') and from https://example.com, it also separates the different types of resources such as scripts, images and styles.

## Caching using redis

1. Install redis server

- Windows:

  - Download the Redis Windows installer from the official website (https://github.com/microsoftarchive/redis/releases)
  - Run the installer to install Redis on your system.
  - Open the Command Prompt and navigate to the Redis installation directory (default: `C:\Program Files\Redis`)
  - Run the command redis-cli to start the Redis server.

- macOS:

  - Install Redis using Homebrew by running the command brew install redis.
  - Start the Redis server by running the command redis-server

- Linux:

  - Install Redis on Ubuntu by running the command sudo apt-get install redis-server
  - Start the Redis server by running the command sudo systemctl start redis-server
  - To start Redis automatically on system boot, run the command sudo systemctl enable redis-server

2. Install redis client for Node.js

```
npm i redis
```

3. Create a Redis client instance

```
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});
```

4. Create middleware to handle caching

```
function cache(req, res, next) {
  const key = "__express__" + req.originalUrl || req.url;

  client.get(key).then(reply => {
    
    if (reply) {
      res.send(JSON.parse(reply));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        //expire in 1 min
        client.set(key, JSON.stringify(body), {'EX':60});
        res.sendResponse(body);
      };
      next();
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).send(err)
  });
}
```

5. Use the caching middleware in your application
```
app.use(cache);
```

6. Use the cache
```
app.get("/data", (req, res) => {
  let data = 0;
  for (let i = 1; i < 100000000; i++) {
    data += 1;
  }
  res.json(data);
});
```
This code uses the cache to handle the request, if the response is already in the cache, it will return the cached response, if not it will fetch the data from the database or API and store the result in the cache.

This is a basic example of using Redis for caching in an Express.js application, it will improve the performance of your application by reducing the number of requests to the server and speeding up the response time.

- Note: For checking the whole code and running, follow these steps:
1. run npm install
2. run script `npm run redis` for running redis example.
3. go to [./performance/redis.js](./performance/redis.js) for whole code, you will get the code.


## Express Js Framework

1. What is Express.js and why is it used?
2. How do you create a basic Express.js application?
3. How do you define routes in an Express.js application?
4. How do you handle query parameters and form data in an Express.js application?
5. How do you handle middleware in an Express.js application?
6. What is the difference between app.route() and Router() in Express.js?
7. How do you handle errors in an Express.js application?
8. How do you serve static files in an Express.js application?
9. How do you use a template engine with Express.js?
10. How do you use a database with Express.js and which databases are commonly used with it?
11. How do you authenticate and authorize users in an Express.js application?
12. How do you test an Express.js application?
13. How do you handle CORS in an Express.js application?
14. How do you configure and use a proxy server with Express.js?
15. How do you handle file uploads in an Express.js application?
16. How do you use WebSockets with Express.js?
17. How do you use session and cookies in an Express.js application?
18. How do you use Express.js with other popular JavaScript frameworks such as React or Angular?
19. How do you optimize the performance of an Express.js application?
20. How do you implement security best practices such as input validation and sanitization in an Express.js application?
21. How do you use a Content Security Policy (CSP) to secure an Express.js application?
22. How do you deploy an Express.js application to a production environment?


