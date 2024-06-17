import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="category-list-container">
      {categories.map((category) => {
        return <DirectoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
