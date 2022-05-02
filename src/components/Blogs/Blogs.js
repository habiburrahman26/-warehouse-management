import React from 'react';
import Header from '../Layout/Header/Header';
import classes from './Blogs.module.css';

const Blogs = () => {
  return (
    <>
      <Header />
      <div className={classes.blogs}>
        <div className={classes.blog}>
          <h3 className={classes.question}>
            Difference between javascript and nodejs
          </h3>
          <p className={classes.ans}>
            JavaScript is a scripting or programming language that allows us to
            implement complex features on web pages. Its run only browsers.
            Javascript is capable enough to add HTML and play with the DOM.
            Javascript is used in frontend development. On the other hand NodeJS
            is a Javascript runtime environment. With help of Node js we can run
            JavaScript code outside the browser. Nodejs does not have capability
            to add HTML tags. It is used in server-side development.
          </p>
        </div>
        <div className={classes.blog}>
          <h3 className={classes.question}>
            When should you use nodejs and when should you use mongodb
          </h3>
          <p className={classes.ans}>
            Node.js is designed to build scalable network applications. If you
            want to write some kind of stand-alone program or server in
            Javascript, then you can use nodejs for it. If your application
            needs the ability to persistently store data in a way that you can
            efficiently query or update it later, then you would typically use
            mongoDB
          </p>
        </div>
        <div className={classes.blog}>
          <h3 className={classes.question}>
            Differences between sql and nosql databases.
          </h3>
          <p className={classes.ans}>
            SQL databases are relational, NoSQL databases are non-relational.
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column storesSQL databases are better for
            multi-row transactions, while NoSQL is better for unstructured data
            like documents or JSON.
          </p>
        </div>
        <div className={classes.blog}>
          <h3 className={classes.question}>
            What is the purpose of jwt and how does it work
          </h3>
          <p className={classes.ans}>
            We use JWT for Authorization and Information Exchange. SO that any
            unauthorize user never access our data. when the user successfully
            logs in using their credentials, JSON Web Token will be returned.
            That store localstorage or section cookie. When user request to any
            protected route he/she send the token on the request headers. Server
            verify the token if the token is verify then its give us permission
            where we want to go. But if the token isn't verify it reject the
            permission.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
