import React from 'react';
import styles from './reviews.module.css';

const Modal = (props) => {
  return (
    !props.show
      ? null
      : <div className={`${styles.row} ${styles.modal}`}>
          <div className={`${styles.modalContent} ${styles.fadeIn}`}>
            {/* <div className={styles.modalActions}>
              <h3 className={`${styles.row} ${styles.center} ${styles.newReviewTitle}`}>WRITE YOUR REVIEW</h3> */}
              <button className={styles.modalCloseButton} onClick={props.handleClose}><i className="fas fa-times"></i></button>
              {props.children}
        </div>
        </div>
  );
};

export default Modal;