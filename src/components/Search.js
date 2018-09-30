import React from 'react';
import Preview from './Preview';
import cx from 'classnames';

class Search extends React.Component {

  constructor() {
    super();
    this.state = { text: '',
                   previewDisplayed: false,
                   debounceActive: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hidePreview = this.hidePreview.bind(this);
  }

  handleChange(event) {
    const textValue = event.target.value;
    this.setState({text: textValue});

    if (textValue.length >= 3) {
      const debounceActive = this.state.debounceActive;
      if (!debounceActive) {
        this.setState({ debounceActive: true });
        console.log('debounce active!');
        setTimeout(() => {
          this.setState({ debounceActive: false });
          console.log('debounce inactive'); }, 2000);
      }
      this.setState({previewDisplayed: true});
      this.props.receiveSearch(textValue,'preview');
    }
    else {
      this.setState({previewDisplayed: false});
    }
  }

  hidePreview() {
    this.setState({ previewDisplayed: false,
                    text: '' });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveSearch(this.state.text, 'results');
    this.setState({ text: '',
                    previewDisplayed: false });
  }

  render() {

    const previewClasses = cx('search__preview', {'search__preview--hidden': !this.state.previewDisplayed});

    return (
      <div className='search'>
        <form className='search__form' onSubmit={this.handleSubmit}>
          <div className='search__container'>
            <input className='search__input' onChange={this.handleChange} value={this.state.text} name="search" placeholder="Search..."  type="text" autoComplete="off"></input>
            <div className={previewClasses}>
              {this.props.preview.map(item => <Preview key={item.imdbID} movieData={item} receiveMovie={this.props.receiveMovie} hidePreview={this.hidePreview}/>)}
            </div>
          </div>
          <button className='search__button' type="submit"><i className="search__icon fa fa-search"></i></button>
        </form>
      </div>
    );
  }
}

export default Search;