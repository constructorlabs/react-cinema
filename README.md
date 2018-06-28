# React Cinema (aka Mission Impossible 2)

## The brief

To create a movie search engine, completing as many of the following tasks, using our newly-aquired REACT skills

## Checklist
- [x] Create an HTML page which should have a `form` at the top which contains a `text input` and a `submit button`. Below it should have a placeholder for the returned results.
- [x] Make sure your design is responsive and looks great at different screen widths
- [x] Use JavaScript to capture the submit event on in your search form, extract the query string from your input and use that to make an API call to the Open Movie Database API to search for films which match the query string. Console.log the results
- [x] Display the data returned by the API including title, year and poster picture
- [x] Adjust your layout to create room for a detailed view of movie information
- [x] Capture clicks on your movie results items and use that information to make another request to the API for detailed movie information. Console.log the returned result
- [x] Display the detailed movie result in the in the details view you created earlier

**Your own feature**

- [x] Click on 'Rating' radio button to sort from highest rated to lowest rated movie
- [x] Click on 'Year' radio button to sort from newest to oldest movie
- [x] Next page and previous page pagination included

**Stretch goals**
-     Ran out of time to attempt 'favourites' stretch goals but would like to include at a later date

## Instructions

- Open index.html in a browser
- Enter the full or partial title of the movie you wish to search for (results will be loaded 10 at a time on a screen)
- Click  >> next to search button to go to next page of results (page number will be displayed as well as back << button)
- Click on Rating radio button to display movies sorted from highest to lowest rated according to IMDB score
- Click on Year radio button to display movies sorted from newest to oldest released
- Click on movie name to be taken to IMDB website for chosen film
- Click on movie poster to retrieve more information about the movie and again to remove the additional information

## Golden Globes ##

I am pleased with the layout of the website. I think there is a lot of content without being too cluttered or detracting from the posters. I am also happy that this version of the website is much more polished than the last attempt. My html and css skills have improved greatly since then, although it feels as though there was less javascript to write than the last. 


## Golden Raspberries ##

- The sort feature was the last thing to be implemented and was rushed which is why the radio buttons are poorly positioned on the page and do not 'check' as expected. This is a definite bug that should be fixed. Each sort only works once. I suspect this to be down to the 'checking issue'. 
- I have realised that if a film title is particularly short, it will wrap next to the film poster rather than beneath it.
- If less than 10 films are displayed, the next button still appears, although an error message will be displayed if the user clicks it and the page will remain unchanged.

## Conclusion ##

Although this website is more dynamic and has more features than previous projects, it has a similar layout to the News Reader one so I will be looking to challenge myself and create a different style for my next website. It definitely represents progression though. 
