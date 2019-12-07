import React, { Component } from 'react'

export default class InputNumberClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      innerValue: ''
    }
  }

  get isControl() {
    return 'value' in this.props
  }

  get value() {
    if (this.isControl) {
      return this.props.value
    } else {
      return this.state.innerValue
    }
  }

  componentDidMount() {
    if (!this.isControl) {
      this.setState({
        innerValue: this.props.defaultValue
      })
    }
  }
  render() {
    return (
      <>
        <input
          value={this.value}
          onChange={e => {
            if (!this.isControl) {
              this.setState({
                innerValue: e.target.value
              })
            }
            this.props.onChange(e)
          }}
        />
      </>
    )
  }
}