import { useState } from "react";

interface Props {
  title: string
  images: string[]
}

function ProductDetailImages({ images, title }: Props) {
  const [bigImage, setBigImage] = useState(images[0] || '/mock1.jpg')

  return (
    <section className="product-images-block">
      <div className="product-images">
        {images.map((image, index) => (
          <img
            key={index}
            className="mini-img cursor-pointer"
            src={image}
            alt={title}
            onClick={() => setBigImage(image)}
          />
        ))}
      </div>
      <img
        className="big-img"
        id="big-img"
        src={bigImage}
        alt={title}
      />
    </section>
  )
}

export default ProductDetailImages