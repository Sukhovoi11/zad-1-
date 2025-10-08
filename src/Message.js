import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*************************************************
 Komponent Message
 **************************************************/

class Message extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

// Props
Message.defaultProps = {
    text: "Domyślny komunikat"
};


Message.propTypes = {
    text: PropTypes.string.isRequired
};

export default Message;
