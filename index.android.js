import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AwesomeButton from 'react-native-awesome-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonBackground: {
    flex: 1,
    height: 40,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5
  },
  buttonLabel: {
    color: 'white'
  }
});

class RnTlsTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tls10State: 'untested',
      tls12State: 'untested',
    }
  }

  testUrl(stateProp, url) {
    this.setState({
      [stateProp]: 'testing',
    });
    fetch(url)
    .then((response) => {
      this.setState({
        [stateProp]: 'success',
      });
    })
    .catch((error) => {
      console.error(error);
      this.setState({
        [stateProp]: 'failed',
      });
    });
  }

  render() {
    const { tls10Result, tls12Result } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native TLS Test
        </Text>
        <View style={styles.buttonContainer}>
          <AwesomeButton
            backgroundStyle={styles.buttonBackground}
            labelStyle={styles.buttonLabel}
            transitionDuration={200}
            states={{
              untested: {
                text: 'Test TLS 1.0 (https://www.google.com)',
                onPress: this.testUrl.bind(this, 'tls10State', 'https://www.google.com'),
                backgroundColor: '#1155DD',
              },
              testing: {
                text: 'Testing TLS 1.0 ...',
                backgroundColor: '#002299',
                spinner: true,
              },
              success: {
                text: 'TLS 1.0 Success!',
                backgroundColor: '#339944'
              },
              failed: {
                text: 'TLS 1.0 Failed :-(',
                backgroundColor: '#de5b26'
              }
            }}
            buttonState={this.state.tls10State}
          />
          <AwesomeButton
            backgroundStyle={styles.buttonBackground}
            labelStyle={styles.buttonLabel}
            transitionDuration={200}
            states={{
              untested: {
                text: 'Test TLS 1.2 (https://fancyssl.hboeck.de/)',
                onPress: this.testUrl.bind(this, 'tls12State', 'https://fancyssl.hboeck.de/'),
                backgroundColor: '#1155DD',
              },
              testing: {
                text: 'Testing TLS 1.2 ...',
                backgroundColor: '#002299',
                spinner: true,
              },
              success: {
                text: 'TLS 1.2 Success!',
                backgroundColor: '#339944'
              },
              failed: {
                text: 'TLS 1.2 Failed :-(',
                backgroundColor: '#de5b26'
              }
            }}
            buttonState={this.state.tls12State}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('rn_tls_test', () => RnTlsTest);
