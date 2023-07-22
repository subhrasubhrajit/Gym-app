import React from 'react'
import './gallery.css'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_3.jpg'


const Gallery = () => {
  const galleryLength = 15;
  const images = []
  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quas. Placeat est dolorum consequatur dicta.
      </Header>
      <section className='gallery'>
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return <div key={index}>
                <img src={image} alt={`Gallery Pic ${index + 1}`} /></div>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery
