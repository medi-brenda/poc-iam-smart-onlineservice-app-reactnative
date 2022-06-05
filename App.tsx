import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Linking } from 'react-native';
import * as ExpoLinking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>In poc-iam-smart-onlineservice-app-reactnative</Text>

        <Button
          title="Open iAM Smart Mobile App with Expo ReactNative.Linking Expo"
          onPress={this._handleOpenWithLinkingExpo}
          style={styles.button}
        />
        <Button
          title="Open iAM Smart Mobile App with Expo ReactNative.Linking EAS"
          onPress={this._handleOpenWithLinkingEAS}
          style={styles.button}
        />
        <Button
          title="Open iAM Smart Mobile App with Expo.WebBrowser Expo"
          onPress={this._handleOpenWithWebBrowserExpo}
          style={styles.button}
        />

        <Button
          title="Open iAM Smart Mobile App with Expo.WebBrowser EAS"
          onPress={this._handleOpenWithWebBrowserEAS}
          style={styles.button}
        />
      </View>
    );
  }

  _expoAppURL = "exp://exp.host/@medibrenda/poc-iam-smart-mobile-app-reactnative?release-channel=default";
  _easAppURL = "exp+poc-iam-smart-mobile-app-reactnative://expo-development-client/?url=https%3A%2F%2Fu.expo.dev%2Fb2ba2f78-fe71-4ff2-a396-19670984818b%3Fchannel-name%3Dmain";
  _expoRedirectURL = "https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-mobile-app-reactnative_expo.html";
  _easRedirectURL = "https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-mobile-app-reactnative_eas.html";

  _handleOpenWithLinkingExpo = () => {
    ExpoLinking.openURL(this._expoAppURL);
  };

  _handleOpenWithLinkingEAS = () => {
    ExpoLinking.openURL(this._easAppURL);
  };

  _handleOpenWithWebBrowserExpo = () => {
    WebBrowser.openBrowserAsync(this._expoRedirectURL);
  };

  _handleOpenWithWebBrowserEAS = () => {
    WebBrowser.openBrowserAsync(this._easRedirectURL);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'orange',
  },
  button: {
    marginVertical: 10,
  },
});