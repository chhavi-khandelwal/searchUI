import React from 'react';
import './searchBar.scss';
import AutoSuggestList from '../AutoSuggestList';
import { connect } from "react-redux";
import { suggestBy, filteredTours } from '../../redux/actions';
import { TopTourSearchListNumber } from '../../shared/constants/tour';
import { debounce } from '../../shared/utils/helpers';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  updateInput = value => {
    this.setState({ value });
    this.props.suggestBy(value);
  };

  getFilteredTours = () => {
    this.props.filteredTours(this.state.value);
  }

  render() {
    return (
      <div className="search__bar">
        <div className="search__bar__input-wrapper">
          <input
            type="text"
            onChange={ e => debounce(this.updateInput(e.target.value), 100) }
            value={ this.state.value  }/>
          <span
            className="icon--search"
            onClick={ () => this.getFilteredTours() }>
          </span>
          {!!this.props.suggestList.length &&
            <AutoSuggestList suggestList={ this.props.suggestList }></AutoSuggestList>
          }
        </div>
      </div>
    )
  }
}

const getTopTourList = (tours) => tours.slice(0, TopTourSearchListNumber);

const mapStateToProps = state => {
  return { suggestList: getTopTourList(state.Search.suggestList) };
};

export default connect(
  mapStateToProps,
  { suggestBy, filteredTours }
)(SearchBar);
