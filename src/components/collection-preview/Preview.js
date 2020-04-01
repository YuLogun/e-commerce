import React from 'react'
import './Preview.scss'
import CollectionItem from '../collection-item/Collection-item'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">{title.toUpperCase()}</div>
    <div className={`${title === 'Scarves' ? 'preview-scarves' : 'preview'}`}>
      {
        items
          .filter((item, index) => index < 4)
          .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview