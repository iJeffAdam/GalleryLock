import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Images from 'react-native-chat-images';

const _url = 'https://images.unsplash.com/photo-';
const _format_1 = '?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=10';
const _format_2 = '?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=90';

const overlay = (
  <View
    style={{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,.5)',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text style={{ fontSize: 18, color: '#fff' }}>Custom Overlay</Text>
  </View>
);

export default class App extends Component {
  state = {
    images: [
      {
        overlay,
        thumbnail: _url + '1463171515643-952cee54d42a' + _format_1,
        url: _url + '1463171515643-952cee54d42a' + _format_2,
      },
      {
        overlay,
        thumbnail: _url + '1529426301869-82f4d98d3d81' + _format_1,
        url: _url + '1529426301869-82f4d98d3d81' + _format_2,
      },
      {
        overlay,
        thumbnail: _url + '1534953356485-3b0fa4742c8f' + _format_1,
        url: _url + '1534953356485-3b0fa4742c8f' + _format_2,
      },
      {
        overlay,
        thumbnail: _url + '1519414442781-fbd745c5b497' + _format_1,
        url: _url + '1519414442781-fbd745c5b497' + _format_2,
      },
      {
        thumbnail: _url + '1503122703469-3dbbe39d0d1c' + _format_1,
        url: _url + '1503122703469-3dbbe39d0d1c' + _format_2,
      },
      {
        thumbnail: _url + '1535025075092-5a1cf795130b' + _format_1,
        url: _url + '1535025075092-5a1cf795130b' + _format_2,
      },
    ],
  };

  render() {
    const { images } = this.state;

    return (
      <View style={{ flex: 1, marginTop: 25 }}>
        <Text
          style={{
            backgroundColor: '#eee',
            fontSize: 20,
            padding: 10,
            textAlign: 'center',
            width: '100%',
          }}
        >
          react-native-chat-images (demo)
        </Text>
        <ScrollView contentContainerStyle={{ alignItems: 'flex-end' }} style={{ flex: 1, padding: 5 }}>
          <Images
            // width="70%"
            backgroundColor="lightpink"
            title="Some nature pics!"
            extra="12:00 AM"
            images={images}
          />
        </ScrollView>
      </View>
    );
  }
}
