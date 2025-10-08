import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Power extends Component {
    render() {
        const { x, y } = this.props;
        const result = Math.pow(x, y);

        return (
            <div>
                <p>
                    Wynik potęgowania {x} ^ {y} = <strong>{result}</strong>
                </p>
            </div>
        );
    }
}

// props
Power.defaultProps = {
    x: 2,
    y: 3
};


Power.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
};

export default Power;
