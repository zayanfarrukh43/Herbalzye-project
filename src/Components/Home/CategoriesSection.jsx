import CategoryCard from './CategoryCard';
import categoriesData from '../../data/categoriesData';

const CategoriesSection = () => {
  return (
    <section className="px-4 py-8 mb-1 bg-[#f8f5ee]">

      <h2 className="text-3xl font-serif text-center mb-8 text-[#1f2f1f]">
        Shop by Category
      </h2>

      {/* CENTER CONTAINER */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
          {categoriesData.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default CategoriesSection;