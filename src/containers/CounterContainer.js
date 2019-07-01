import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { yellow } from 'ansi-colors';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const getRandomColor = () => {
    const colors = ['black', 'blue', 'red', 'orange', 'yellow'];
    const random = Math.floor(Math.random() * 5);
    return colors[random];
};

const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number,
});

const mapDispatchProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => dispatch(actions.setColor(getRandomColor())),
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchProps,
)(Counter);

export default CounterContainer;
