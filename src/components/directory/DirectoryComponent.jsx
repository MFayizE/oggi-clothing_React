import Categoryitem from "../category-item/category-item"
import './directory.scss'
function DirectoryComponent({categories}) {
  return (
    <div className="directory-container">
    {categories.map((category) => (
      <Categoryitem key={category.id} category={category} />
    ))}

  </div>  )
}

export default DirectoryComponent