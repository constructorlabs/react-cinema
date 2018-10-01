# React Cinema



## About

This project involved building a movie search engine using the OMDB api with React, as opposed to vanilla DOM manipulation.


I believe I achieved the principal goals of the project. You can search for films, have results displayed and select one of these results for further information.

As an additional feature I used previous experience of working with newsAPI to also display recent news items about the film. This is still buggy and will show unrelated results.

I have included a means of adding favourites via local storage.

I have a very simple form of pagination in place.

I missed the stretch goals of:
* being able to reorder favourites
* having a search preview




## Known issues

#### Search issues

I've just not made allowances for fetch not receiving results. This should be easily fixed.

#### Content not loading in

sometimes when clicking through to a new film details, the filmDisplay page will display before the actual details have loaded in. I'm sure this could be rectified with lifecycle methods.

#### Favourites

Currently, favourites are working. However the order changes on refresh. I found this much more confusing to implement in React, due to async issues with setting state, though I think I have tidied this up somewhat.

#### Responsive design

Again, I tend to leave this til last, and run out of time.


#### Unrelated news results

This is likely always to be an issue for some films, currently it searches for the film title in all sources. This causes issues with films with fairly ordinary names (i.e Taxi Driver). I believe it could be fixed with some tweaking, to search for other parameters (director/writer) in these cases. Also limiting the sources that newsAPI searches to Entertainment publications.

## Further Plans

#### Further news functionality

Similar to last week, I had hoped to add a means of tracking new news stories.

Below: last week's ReadMe re: this functionality
> Due to the favourite functionality, I was hoping to keep track of news stories. This would mean that the main page favourites display would have icons representing the amount of new news stories related to a film since that film's page was last visited.

> I feel this could be achieved with the newsAPI and saving dates of visits saved to local storage. Along with set intervals for news refreshes, I think this would be quite an interesting feature. Unfortunately I was constrained by time and would want to refactor the code before attempting this.

Whilst I could visualise how I would implement this last week, I've struggled to plan for this with react - I believe it would require better knowledge of lifecycle functions, and for me to have a more streamlined implementations of favourites.

There are some artifacts of abandoned attempts at this in my code. this.state.favourites in App.js currently holds both the IMDB id, and a lastVisited date (though currently this just holds the date when it was added to favourites, I again had difficulty with updating this property when a favourite was clicked upon)

#### Missed stretch goals

I believe these are all achievable, though ordering favourites may throw some difficulty, as currently they do not display in a fixed order every time the favourites display is rendered. I'm sure this is easily fixed.


#### Summary

Quite disappointed that I couldn't implement any further features on this project compared to last week. Think this is due to a combination of both not yet feeling as comfortable with React as I did with vanilla JS DOM manipulation and poor motivation this weekend.

I have however recreated (aside from odd quirks of CSS) last weeks project in React, and feel more comfortable with linking components together.
