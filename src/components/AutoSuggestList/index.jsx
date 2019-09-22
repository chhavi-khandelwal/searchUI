import React from 'react';
import './autoSuggestList.scss';
import { connect } from "react-redux";
import { filteredTours } from "../../redux/actions";

class AutoSuggestList extends React.Component {
  getFilteredTours(e, id) {
    e.preventDefault();
    this.props.filteredTours('', id);
  }

  render(){
    return (
      <ul className="search__list">
        { this.props.suggestList.map((item) =>
            <li
              className="search__list__item" key={ 'list_item_' + item.id }
              onClick={ (e) => this.getFilteredTours(e, item.id) }>
              <a href="/" onClick={(e) => e.preventDefault()}>{ item.title }</a>
            </li>
          )
        }
      </ul>
    )
  }
};

export default connect(
  null,
  { filteredTours }
)(AutoSuggestList);
