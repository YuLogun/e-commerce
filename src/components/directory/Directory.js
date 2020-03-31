import React from 'react'
import './Directory.scss'
import MenuItem from '../menu-item/Menu-item'

class Directory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [
        {
          title: 'hoodies',
          imageUrl: 'https://i.ibb.co/cYFtSC6/hoodie.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'scarves',
          imageUrl: 'https://i.ibb.co/HK8t0zt/scarf.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'socks',
          imageUrl: 'https://i.ibb.co/QfXbPdk/socks.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/M620QKd/women.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/whj1zhH/mens.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return(
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory