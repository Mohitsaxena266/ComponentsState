import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
class ClassComponents extends Component {
  constructor(props) {
    // console.log('class name', props.classname);
    super();
    console.log('constructor');
    this.state = {
      productCount: 0,
    };
  }
  addproduct = () => {
    // this.setState({productCount: this.state.productCount + 1}, () => {
    //   this.setState({productCount: this.state.productCount + 1});
    // });

    this.setState((prevState) => ({productCount: prevState.productCount + 1}));
  };
  componentDidMount() {
    console.log('componentDidMount', this.state.productCount);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState(
      (prevState) => ({
        productCount: this.state.productCount + 5,
      }),
      () => {
        console.log('change product');
      },
    );
  }

  render() {
    console.log('render method call');
    return (
      <View>
        <Button title="Change State" onPress={this.addproduct} />
        <Text>{this.state.productCount}</Text>
      </View>
    );
  }
}
export default ClassComponents;
