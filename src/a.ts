export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  handleCheck() {
    let checked = !this.state.checked;
    if (checked) {
      this.props.count(true);
    } else {
      this.props.count(false);
    }
    this.setState({ checked });
  }
  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={() => this.handleCheck()}
          />
        </label>
      </div>
    );
  }
}
