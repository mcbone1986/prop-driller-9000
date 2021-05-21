import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

displayTransformer = () => {
  return this.props.transformers.map(transformer => {
    return <Transformer transformer={transformer}/>
  })
}

  render() {
    return (
      <section className = "transformers-section">
        {this.props.isVisible ? this.displayTransformer() : ""}
      </section>
    );
  }
}

export default TransformersSection;
