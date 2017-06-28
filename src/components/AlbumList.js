import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component {
  state = {
    albums: [],
  }

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        this.setState({
          albums: data,
        });
      });
  }

  renderAlbums() {
    console.log(this.state.albums);
    // return this.state.albums.length ? this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />) : <View />;
    return this.state.albums.map(album => <AlbumDetail album={album} key={album.title} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
