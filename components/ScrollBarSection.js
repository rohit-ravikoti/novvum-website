import React, { createClass } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default createClass({

    displayName: 'ScrollbarSection',

    getInitialState() {
        return {
            top: 0
        };
    },

    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    },

    renderView({ style, ...props }) {
        const { top } = this.state;
        const viewStyle = {
            padding: 15,
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props}/>
        );
    },

    renderThumb({ style, ...props }) {
        const { top } = this.state;
        const thumbStyle = {
            zIndex: 3000,
            backgroundColor: "#34495e",
            width: "8px",
            right: '0px',
            top: 0,
            bottom: 0
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    },

    render() {
        return (
            <div className="section" id={this.props.id}>
                <Scrollbars
                    renderView={this.renderView}
                    renderThumbHorizontal={this.renderThumb}
                    renderThumbVertical={this.renderThumb}
                    onUpdate={this.handleUpdate}
                    {...this.props}/>
            </div>
        );
    }
});