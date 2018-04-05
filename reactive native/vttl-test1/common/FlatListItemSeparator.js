import React, { Component } from 'react';
import { View } from 'react-native'

export default class FlatListItemSeparator extends Component {
    render() {
        return (
            <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#607D8B",
            }}
            />
        );
    }
}