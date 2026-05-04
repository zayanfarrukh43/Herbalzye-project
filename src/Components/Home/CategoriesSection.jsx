import CategoryCard from './CategoryCard';
import categoriesData from '../../data/categoriesData';

const CategoriesSection = () => {
  return (
    <section className="px-4 py-8 mb-1 flex flex-col gap-6 bg-[#f8f5ee] ">
      <h2 className="text-3xl font-serif text-center mb-8 text-[#1f2f1f]">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {categoriesData.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;