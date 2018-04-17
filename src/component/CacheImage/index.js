import React, {Component} from 'react';
import {Image} from 'react-native';
import {CachedImage} from 'react-native-img-cache';

export default class extends CachedImage {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps)
    }

    render() {
        const props = this.getProps();
        if (React.Children.count(this.props.children) > 0) {
            console.warn("Using <CachedImage> with children is deprecated, use <CachedImageBackground> instead.");
        }
        return React.createElement(Image, Object.assign({}, props, {ref: e => (this._root = e)}), this.props.children);
    }
}