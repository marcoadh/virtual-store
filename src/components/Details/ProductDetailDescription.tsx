interface Props {
  title: string
  description?: string
  colors: string[]
}

function ProductDetailDescription({ title, description, colors }: Props) {
  return (
    <div className="product-description-block">
      <h1 className="product-title">{title}</h1>
      <form className="product-selector">
        <fieldset className="product-fieldset">
          <label className="product-label" htmlFor="color">Color</label>
          <select
            className="product-select"
            itemType="text"
            aria-placeholder="Selecciona un color"
            id="color"
          >
            {colors.map((color, index) => <option key={index} value={color}>{color}</option>)}
          </select>
        </fieldset>
      </form>
      <div className="product-description">
        <span className="product-label">Descripción</span>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default ProductDetailDescription