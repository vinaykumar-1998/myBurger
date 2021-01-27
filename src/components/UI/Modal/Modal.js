import React, { Component } from 'react';

import classes from './Modal.css';

import Backdrop from '../Backdrop/Backdrop';
import Auxilary from '../../../hoc/Auxilary/Auxilary';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    
    render () {
        return (
            <Auxilary>
            
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxilary>
        )
    }
}

export default Modal;