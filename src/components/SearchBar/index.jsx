import React from 'react';
import './searchBar.scss';
import AutoSuggestList from '../AutoSuggestList';
import { connect } from "react-redux";
import { suggestBy, filteredTours } from '../../redux/actions';
import { debounce } from '../../shared/utils/helpers';
import { getTopTourList } from '../../shared/utils/tour';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.searchString = ''
  }

  updateInput = value => {
    this.setState({ value });
    //opens suggest list
    this.props.suggestBy(value);
  };

  getFilteredTours = (e) => {
    e.preventDefault();
    //stop multiple re rendering
    if (this.searchString === this.state.value) { return; }
    this.props.filteredTours(this.state.value);
    this.searchString = this.state.value;
  }

  render() {
    return (
      <div className="search__bar">
        <form className="search__bar__input-wrapper">
          <input
            type="text"
            onChange={ e => debounce(this.updateInput(e.target.value), 100) }
            value={ this.state.value  }/>
          <button
            type="submit"
            className="icon--search"
            onClick={ (e) => this.getFilteredTours(e) }>
          </button>
          {!!this.props.suggestList.length &&
            <AutoSuggestList suggestList={ this.props.suggestList }></AutoSuggestList>
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { suggestList: getTopTourList(state.Search.suggestList) };
};

export default connect(
  mapStateToProps,
  { suggestBy, filteredTours }
)(SearchBar);
