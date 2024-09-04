import { CategoryItem } from "..";
import { CategoriesProps } from "routes/home/Home";

type props = {
  categories: CategoriesProps[];
};

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
