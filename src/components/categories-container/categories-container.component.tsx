// import "./categories-container.style.scss";
import { CategoryItem } from "..";
import { CategoriesProps } from "../../App";

interface props extends Object {
  categories: CategoriesProps[];
}

const CategoriesContainer = (props: props) => {
  return (
    <div className="categories-container">
      {props.categories.map(({ id, title, imageUrl }: CategoriesProps) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoriesContainer;
