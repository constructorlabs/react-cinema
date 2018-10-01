# Now Playing 

This project, titled Now Playing, has been created as a means for movie fans to search for information on films, be it their favourites or ones they simply wish to see. Now playing also allows for the compilation and curation of the users favourite films, where they are able to store and sort titles for reference.

**Design Objectives**

This project was created with the purpose of implimenting React and React Components to create a modular user interface, with parts that we are able to re-use or re-constitute as the needs of the user change, or as the trends of user interfaces progress.

**Searching for films**

Now Playing allows users to search for films by using their search terms to make queries with the [Open Movie Database](http://www.omdbapi.com), a large external API that stores details about possibly every film. From there, should a user wish to know more about a particular film, Now Playing makes a seperate API call to the Open Movie Database, searching for the film by its IMDB id. This then returns more details information about the film, which is then displayed to the user. For this project it was important to establish components that made as few API calls as possible to accomodate for as many connection speeds as possible.

**Pagination** 

Now Playing automatically generates functionality that allows the user to search through all returned results, 10 results to a page. As this initial API call is made, Now Playing takes the number of results, divides it by the number of results returned per page, and shows the user what page they are viewing out of how many they can view. Previous projects that have implimented pagination generated as many buttons as pages, which can clutter the page view. Now Playing instead displays arrows that allow the user to move forwards or backwards one page at a time, clearing up the page visually.

**Favourites Feature**

Now Playing allows the user to store and curate a list of their favourite films. Each returned search item has a button on it that, when pressed, passes the film information into the Favourites component, and stores that information in Local Storage within the browser so that the user's favourites persist between page refreshes. 

As of now, functionality is in place that allows the user to remove individual films from their favourites, or to clear their entire favourties list. These features are subject to a CSS bug at present that closes the favourites menu when a button is pressed. Equally, the buttons that move films up and down in the favourites list is working to an extent, but has a bug with its conditional logic that needs revising as it causes replication in list items in some cases.

**Future goals and improvements**

- Improve favourites functionality so that it is implimented fully with no bugs.

- Create a search preview feature that lets the user see what some of the possible returned search items will be ahead of them submitting a search.

- Import film trailers where available

- Create provisions for more user errors i.e. submitting a blank search, submitting an incorrect search.

- Improve pagination so that the user can both go between pages one at a time and go to a page of thier choosing.