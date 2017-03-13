import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import MovieDetails from './movieDetails';

class MovieScreen extends Component {

  createMovieView() {
    return this.props.movies.map(movie =>
      <MovieDetails key={movie.Year} movie={movie} />);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.createMovieView()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(MovieScreen);
