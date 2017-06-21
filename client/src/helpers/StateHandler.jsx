class StateHandler {
  constructor(parent) {
    this.set = this.set.bind(parent);
    this.get = this.get.bind(parent);
  }

  get() {
    return this.state;
  }

  set(name,value) {
    this.setState({[name]: value});
  }

}

export default StateHandler;
