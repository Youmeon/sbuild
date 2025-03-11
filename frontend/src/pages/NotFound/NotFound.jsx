import React from 'react'
import styles from './NotFound.module.scss';
const heart = '<3'

const NotFound = () => {
  return (
    <>
    <div className={styles.main}>
        <h1>This Page Not Found 404</h1>
        <p>sorry, if you hit this page, please check URL or refresh browser</p>
        <span>{ heart }</span>
      </div>
    </>
  )
}

export default NotFound;
