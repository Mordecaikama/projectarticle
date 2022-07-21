import React from 'react'
import './skeleton.css'
// this is the base of all the skeletons

function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`

  return <div className={classes}></div>
}

export default SkeletonElement
