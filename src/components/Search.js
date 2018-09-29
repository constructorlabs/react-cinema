import React from 'react';

class Search extends React.Component{
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

    }


  handleChange(event){
    this.props.receiveSearchInput(event.target.value);
    if(event.target.value.length>2){

      this.props.fetchPreview(event.target.value)
    } ;

  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchMovies();

  }



  render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"  onChange={this.handleChange} value={this.props.keyWord}/>
          <button>Search</button>
        </form>
        {this.props.preview==undefined ? []:
          <ul className='previews' onChange={this.handleChange}>
          {this.props.preview.map(item=>{
            return <li key={item}>{item}</li>
            })
          }
          </ul>}
        </div>

    )
  }
}



export default Search;
