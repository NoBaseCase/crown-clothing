import "./categories.styles.scss";

const App = () => {
  const categories = [
    { id: 1, title: "Keyboards" },
    { id: 2, title: "Keycaps" },
    { id: 3, title: "Switches" },
    { id: 4, title: "Deskmats" },
    { id: 5, title: "Cables" },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container">
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
