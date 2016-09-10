# React Native TLS Test

Android has official support for TLS 1.1 and 1.2 since version 5.0 ("Marshmallow"). Android 4.1-4.4 has also support for it, but it needs to be enabled. React Native does correctly not do this (see [corresponding issue](https://github.com/facebook/react-native/issues/7192)).

This is a little demo app for demonstrating the issue and to test the patch for enabling the support.
