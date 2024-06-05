import CategoryList from "./components/category-list/category-list.component.jsx";
import { categories } from "./data.js";
import "./categories.styles.scss";

const App = () => {
  return <CategoryList categories={categories} />;
};

export default App;
