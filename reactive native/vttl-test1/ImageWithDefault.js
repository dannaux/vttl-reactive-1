import React, {Component} from 'react';
import { Image } from 'react-native';

export default class ImageWithDefault extends Component {

  constructor(props) {
    super(props);

    this.state = {
      failed: false
    };

    this.defaultUri = 'https://competitie.vttl.be/images/vttl/No_Photo_M.jpg';

  }

  _onError = () => {
    this.setState({ failed: true });
  }

  render() {
    const defaultImage = <Image source={{uri: this.defaultUri}} style={this.props.style} />;

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
