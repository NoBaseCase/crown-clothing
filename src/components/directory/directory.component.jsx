import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
import { categories } from "../../data";

const Directory = () => {
  return (
    <div className="category-list-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
