// http://www.omdbapi.com/?s=batman&apikey=2cda7206

// http://www.competa.com/blog/storing-javascript-object-localstorage/

// localStorage.setItem('storeObj', JSON.stringify(myObj));.

// load all favourites from localStorage on `componentDidMount` in App. 
// Also, writing favourites to localStorage on each render is quite inefficient. 
// It would be better to only do so when favourites change
// store favourites as an object in `localStorage`
// store all your favourites in a single object 
// and save that to localStorage using a known key, 
// which you can also later use to retrieve all favourites

import React from 'react'; 

class LocalStorage extends React.Component {

    componentDidMount() {

    }

    // is invoked immediately after a component is mounted 
    // (inserted into the tree). Initialization that requires DOM nodes
    // should go here. If you need to load data from a remote endpoint, 
    // this is a good place to instantiate the network request.

    render () {
        return (
            <div>

            </div>
        )
    }
}