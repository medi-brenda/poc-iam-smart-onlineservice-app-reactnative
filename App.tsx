import React, { Component, useCallback } from 'react';
import { Alert, Text, Button, View, StyleSheet, Linking } from 'react-native';
import * as ExpoLinking from 'expo-linking';
import * as ExpoWebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>In poc-iam-smart-onlineservice-app-reactnative</Text>

        <Button
          title="Open iAM Smart Mobile App with Bare ReactNative.Linking Expo URL"
          onPress={this._handleOpenWithBareLinkingExpoURL}
          style={styles.button}
        />
        <Button
          title="Open iAM Smart Mobile App with Bare ReactNative.Linking EAS URL"
          onPress={this._handleOpenWithBareLinkingEasURL}
          style={styles.button}
        />

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

  _handleOpenWithBareLinkingExpoURL = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(this._expoAppURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(this._expoAppURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${this._expoAppURL}`);
    }
  }, [this._expoAppURL]);

  _handleOpenWithBareLinkingEasURL  = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(this._easAppURL);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(this._easAppURL);
    } else {
      Alert.alert(`Don't know how to open this URL: ${this._easAppURL}`);
    }
  }, [this._easAppURL]);

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