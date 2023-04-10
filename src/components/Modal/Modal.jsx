import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.Overlay} onClick={this.props.onClick}>
        <div className={styles.Modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>
    );
  }
}