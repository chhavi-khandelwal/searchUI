import React from 'react';
import './dashboard.scss';
import TileContainer from '../TourCardContainer';
import SearchBar from '../SearchBar';
import { connect } from "react-redux";
import { resetSuggestionList } from "../../redux/actions";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard" onClick={ this.props.resetSuggestionList }>
        <SearchBar></SearchBar>
        {
          !this.props.tours.length && <div className="no-show">Sorry! No results found.</div>
        }
        <TileContainer tours={ this.props.tours }></TileContainer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tours: state.Search.tours };
};

export default connect(
  mapStateToProps,
  { resetSuggestionList }
)(Dashboard);
