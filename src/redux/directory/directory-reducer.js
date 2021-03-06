const INITIAL_STATE = {
  sections: [
    {
      title: 'hoodies',
      imageUrl: 'https://i.ibb.co/cYFtSC6/hoodie.jpg',
      id: 1,
      linkUrl: 'shop/hoodies'
    },
    {
      title: 'scarves',
      imageUrl: 'https://i.ibb.co/HK8t0zt/scarf.jpg',
      id: 2,
      linkUrl: 'shop/scarves'
    },
    {
      title: 'socks',
      imageUrl: 'https://i.ibb.co/QfXbPdk/socks.jpg',
      id: 3,
      linkUrl: 'shop/socks'
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
