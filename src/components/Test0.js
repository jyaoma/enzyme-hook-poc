import React from 'react';

// const Test0 = () => <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
// Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
// Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
// Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</div>

class Test0 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      toggleState: false
    };
  }

  render() {
    return <div>
      <input type="checkbox" onChange={() => this.setState({toggleState: !this.state.toggleState})} checked={this.state.toggleState} />
      <div>{this.state.toggleState ? 'True' : 'False'}</div>
    </div>
  }
}

export default Test0;