import React, {Component} from 'react';
import { Image } from 'react-native';

export default class ImageWithDefault extends Component {

  constructor(props) {
    super(props);

    this.state = {
      failed: false
    };
  }

  _onError = () => {
    this.setState({ failed: true });
  }

  render() {
    const defaultImage = <Image source={ require('../assets/unknown.jpg')} style={this.props.style} />;

    if (this.state.failed) return defaultImage;

    return (
      <Image
        {...this.props}
        onError={this._onError}
        renderIndicator={_ => defaultImage}
      />
    );
  }
}
