import CategoryItem from "../category-item/category-item.component";
import "./category-list.component.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default CategoryList;
