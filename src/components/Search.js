import React from 'react';

class Search extends React.Component{
  constructor(){
    super();
    this.state={
      previewDisplay:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

    }


  handleChange(event){
    this.props.receiveSearchInput(event.target.value);
    if(event.target.value.length>2){
      this.setState({
        previewDisplay:true
      })
      this.props.fetchPreview(event.target.value)
    } else{
      this.props.cleanPreview()
      this.setState({
        previewDisplay:false
      })
    }

  }

  handleSubmit(event){
    event.preventDefault();
    this.props.fetchMovies();
    this.setState({
      previewDisplay:false
    })

  }

  render(){

    return(
        <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input placeholder="Try your luck" className="search__input" type="text"  onChange={this.handleChange} value={this.props.keyWord}/>
          <button>Search</button>
        </form>
        {this.props.preview==undefined || !this.state.previewDisplay ? []:
          <ul className='search__preview' onChange={this.handleChange}>
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
