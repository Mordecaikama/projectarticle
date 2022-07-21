import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './skeletonElement'

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || 'light'

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonArticle
