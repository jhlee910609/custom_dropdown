import React, { PureComponent } from 'react'
import styles from './App.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export default class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            title: 'init',
        }
    }

    handleLiClicked = (e) => {
        this.setState({ title: e.target.value, isShow: !this.state.isShow })

    }

    render() {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const { isShow } = this.state;
        return (
            <div className="box" >
                <h1>{this.state.title}</h1>
                <input onClick={() => this.setState({ isShow: !this.state.isShow })} placeholder='년도 선택' readOnly />
                <div className={cx('list-box', { isSelected: isShow })}>
                    {
                        isShow && list.map((item, i) => <li key={i} className={cx('li')} value={item} onClick={this.handleLiClicked}>{item}</li>)
                    }
                </div>
                <h1>hello!</h1>
            </div>
        )
    }
};
