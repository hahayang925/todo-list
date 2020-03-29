import React from 'react';

class Toggle extends React.Component {
  static defaultProps = {
    onToggle: () => {},
    onReset: () => {},
    initialOn: false
  };
  // 元件內部多一個 toggleTimes 來控制目前的 toggle 次數
  initialState = { on: this.props.initialOn, currentToggleTimes: 0 };
  state = this.initialState;
  reset = () =>
    this.setState(this.initialState, () =>
      this.props.onReset(this.initialState)
    );
  toggle = () => {
    // 每次 toggle 時判斷有沒有超過使用者定義的 toggle 次數上限
    if (this.state.currentToggleTimes >= this.props.toggleTimes) {
      console.log('toggle too much')
      return;
    }
    this.setState(
      ({ on }) => ({
        on: !on,
        currentToggleTimes:this.state.currentToggleTimes + 1 }),
      () => this.props.onToggle(this.state.on),
    );
  }
};

export default Toggle;
