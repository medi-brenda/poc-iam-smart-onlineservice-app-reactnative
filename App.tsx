import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Linking } from 'react-native';
import * as ExpoLinking from 'expo-linking';
import * as ExpoWebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>In poc-iam-smart-onlineservice-app-reactnative</Text>

        <Button
          title="Open iAM Smart Mobile App with Expo ReactNative.Linking Expo URL"
          onPress={this._handleOpenWithExpoLinkingExpoURL}
          style={styles.button}
        />
        <Button
          title="Open iAM Smart Mobile App with Expo ReactNative.Linking EAS URL"
          onPress={this._handleOpenWithExpoLinkingEasURL}
          style={styles.button}
        />
        <Button
          title="Open iAM Smart Mobile App with Expo.WebBrowser Expo URL"
          onPress={this._handleOpenWithExpoWebBrowserExpoURL}
          style={styles.button}
        />

        <Button
          title="Open iAM Smart Mobile App with Expo.WebBrowser EAS URL"
          onPress={this._handleOpenWithExpoWebBrowserEasURL}
          style={styles.button}
        />
      </View>
    );
  }

  _expoAppURL = "exp://exp.host/@medibrenda/poc-iam-smart-mobile-app-reactnative?release-channel=default";
  _easAppURL = "exp+poc-iam-smart-mobile-app-reactnative://expo-development-client/?url=https%3A%2F%2Fu.expo.dev%2Fb2ba2f78-fe71-4ff2-a396-19670984818b%3Fchannel-name%3Dmain";
  _expoRedirectURL = "https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-mobile-app-reactnative_expo.html";
  _easRedirectURL = "https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-mobile-app-reactnative_eas.html";

  _handleOpenWithExpoLinkingExpoURL = () => {
    ExpoLinking.openURL(this._expoAppURL);
  };

  _handleOpenWithExpoLinkingEasURL = () => {
    ExpoLinking.openURL(this._easAppURL);
  };

  _handleOpenWithExpoWebBrowserExpoURL = () => {
    ExpoWebBrowser.openBrowserAsync(this._expoRedirectURL);
  };

  _handleOpenWithExpoWebBrowserEasURL = () => {
    ExpoWebBrowser.openBrowserAsync(this._easRedirectURL);
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