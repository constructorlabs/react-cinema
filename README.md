# React Cinema

Let's revisit our first project where we built a movie search engine using the Open Movie Database. This time we want to implement it using React. It should be a Single Page App, that is all the functionality should be on a single page, rather switch between multiple pages.

Before starting draw a plan of your application. What are some of the components you are going to need? Which components will fetch data and how will that data be displayed? Which components should be re-used? Rather than re-implementing your previous solution again have a think about what you have learned in the past month and how you can apply it here.

## The brief

We want to create a movie search engine. To power it we will use the [Open Movie Database](http://www.omdbapi.com). It provides access to a huge database of films via an **API**, which stands for **Application Programming Interface**. In short, it is a set of rules and procedures you need to follow to use a remote system.

> Check out this video for some background info on APIs  
> [https://www.youtube.com/watch?v=s7wmiS2mSXY](https://www.youtube.com/watch?v=s7wmiS2mSXY)

To start using the OMDB API you will first need to sign up with them to receive and API key. The key issued to you will allow you 1000 requests per day and you will need to include this key as part of every request.

To get started, fork and clone this repo. Please submit a pull request after your first commit and push commits regularly.

You should complete as many of the following tasks as you can. You can use Bootstrap to help you

- [ ] Create an HTML page which should have a `form` at the top which contains a `text input` and a `submit button`. Below it should have a placeholder for the returned results.
- [ ] Make sure your design is responsive and looks great at different screen widths
- [ ] Use JavaScript to capture the submit event on in your search form, extract the query string from your input and use that to make an API call to the Open Movie Database API to search for films which match the query string. Console.log the results
- [ ] Display the data returned by the API including title, year and poster picture
- [ ] Adjust your layout to create room for a detailed view of movie information
- [ ] Capture clicks on your movie results items and use that information to make another request to the API for detailed movie information. Console.log the returned result
- [ ] Display the detailed movie result in the in the details view you created earlier

**Your own feature**

- [ ] Implement any feature you would find useful or interesting. Include some info in the `README.md` about what it is.

**Stretch goals**

- [ ] Let's create a search preview. It should listen for keydown events and submit a search request with current query string. Display the search preview results in an absolute positioned container just below the search box.  
  Hint: You may want to kick of the searching after you have at least 3 characters typed. Also, you may want to implement a `debounce` function to put a small delay on the search. This will reduce the number of requests you send and may the functionality more efficient. You could write your own function if you want a challenge or use one from a library such as `lodash`

- [ ] Create a favourites list. It's up to you how you would add items to favourites. You could add a button or otherwise. Display a list of favourites somewhere on your page.

- [ ] Make the favourites list sortable. Add up and down buttons to your favourites which on click will move the result in relevant in your list

- [ ] Save favourites locally using either `cookies` or `localStorage` so that favourites persist in browser after refresh

## Support

* Ask lots of questions on Slack
* Don't spend more than 20 mins stuck on any part
* Help your classmates if you know the answers to their questions
* Katia and myself will be available if you a more detailed explanation of any material

## Objectives

* I want to see great looking webpages which work well at all screen widths
* Your code should have consistent indentation and sensible naming
* Use lots of concise functions with a clear purpose
* Add code comments where it is not immediately obvious what your code does
* Your code should not throw errors and handle edge cases gracefully

## README.md

When finished, include a README.md in your repo. This should explain what the project is, how to run it and how to use it. Someone who is not familiar with the project should be able to look at it and understand what it is and what to do with it.
