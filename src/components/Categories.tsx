import React from 'react'

type CategoriesTypes = {
  items: Array<string>
  onClickCategory: (index: number | null) => void
  activeCategory: number | string
}
const Categories = React.memo(function Categories(
  {items,onClickCategory, activeCategory}: CategoriesTypes) {
  
  return (
      <div className="categories">
        <ul>
        <li  className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>Все</li>
            {
               items && items.map((name,i) => {
                    return <li 
                      className={activeCategory === i ? 'active' : ''}
                      onClick={() => onClickCategory(i)}
                      key={`${name}_${i}`} >{name}</li> 
                })
            }
        </ul>
      </div>
  )
})


export default Categories
