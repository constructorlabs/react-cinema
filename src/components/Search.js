import React from 'react';
import cx from 'classnames';

class Search extends React.Component {
  constructor(){
    super();
    this.state = {submitted: false};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.receiveSubmit();
    this.setState({
      submitted: !this.state.submitted
     });
    }
  handleChange(event) {
    this.props.receiveQuery(event.target.value);
    }
 
  render(){
    // when search not filled in - subtle hint
    const searchInput = cx('search__input', {
      'no--results': this.state.submitted && (this.props.noresults === "empty" || this.props.query  === ""),
      'results':  this.state.submitted && this.props.query !== ""
    });

    return (    
    <section className="search">
        <form onSubmit={this.handleSubmit} className="search__form"  id="search">
            <div className="search__input-wrapper">
              <input onChange={this.handleChange} className={searchInput}  type='text' name="search" placeholder="Enter film title" autoComplete="search" value={this.props.query} />
            </div>
            <button className="btn search__btn">Search</button>
        </form>
      </section>
    )
  }
}

export default Search;