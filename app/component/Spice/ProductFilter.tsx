import { IoMdCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import ServiceCard from "@/app/component/LandingPage/our-service/ServiceCard";
import SpiceTitle from "@/app/component/Spice/SpiceTitle";

interface ProductFilterProps {
  onFilter: (category: 'All' | 'Mixed spices' | 'Single Spices') => void;
  onSortChange: (sortOption: 'Recently Added' | 'Best Selling' | 'Alphabetically A-Z' | 'Alphabetically Z-A' | 'Price Low to High' | 'Price High to Low') => void;
}


const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter, onSortChange }) => {

  const handleCategoryChange = (category: 'All' | 'Mixed spices' | 'Single Spices') => {
    onFilter(category);
  };

  const handleSortOptionChange = (sortOption: 'Recently Added' | 'Best Selling' | 'Alphabetically A-Z' | 'Alphabetically Z-A' | 'Price Low to High' | 'Price High to Low') => {
    onSortChange(sortOption);
  };

    return (
        <div className="pt-[4rem]">
            <SpiceTitle title={`Filter By`} />
            <ServiceCard className="w-[25rem] h-[20rem] p-1">
              <SpiceTitle className="px-3" title={`Category`} />
              <div className="flex flex-row items-center p-2 gap-2">
                <IoMdCheckboxOutline className="w-8 h-8 text-orange" onClick={() => handleCategoryChange('All')} />
                <p>
                  All <span>(12)</span>
                </p>
              </div>

              <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8" onClick={() => handleCategoryChange('Single Spices')}/>
                <p>
                  Single Spices<span>(8)</span>
                </p>
              </div>
              <div className="flex flex-row items-center p-2 gap-2">
                <MdCheckBoxOutlineBlank className="w-8 h-8"onClick={() => handleCategoryChange('Mixed spices')} />
                <p>
                  Mixed Spices<span>(4)</span>
                </p>
              </div>
            </ServiceCard>
            <div className="py-5">
              <ServiceCard className="w-[25rem] h-[25rem] p-1 roundex-xl">
                <SpiceTitle className="px-3" title={`Sort`} />
                <div className="flex flex-row items-center p-2 gap-2">
                  <IoMdCheckboxOutline className="w-8 h-8 text-orange" onClick={() => handleSortOptionChange('Recently Added')}/>
                  <p>
                    Recently Added <span>(12)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" onClick={() => handleSortOptionChange('Best Selling')}/>
                  <p>
                    Best Selling <span>(8)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" onClick={() => handleSortOptionChange('Alphabetically A-Z')}/>
                  <p>
                    Alphabetically, A - Z <span>(12)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" onClick={() => handleSortOptionChange('Alphabetically Z-A')}/>
                  <p>
                    Alphabetically, Z - A <span>(12)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Recently Added <span>(12)</span>
                  </p>
                </div>

                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Single Spices<span>(8)</span>
                  </p>
                </div>
              </ServiceCard>
            </div>

            <div className="py-5">
              <ServiceCard className="w-[25rem] h-[20rem] py-3 px-1 rounded-xl">
                <SpiceTitle className="px-3" title={`Price`} />
                <div className="flex flex-row items-center p-2 gap-2">
                  <IoMdCheckboxOutline className="w-8 h-8 text-orange" />
                  <p>
                    All <span>(12)</span>
                  </p>
                </div>

                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    Low to High<span>(8)</span>
                  </p>
                </div>
                <div className="flex flex-row items-center p-2 gap-2">
                  <MdCheckBoxOutlineBlank className="w-8 h-8" />
                  <p>
                    High to Low<span>(12)</span>
                  </p>
                </div>
              </ServiceCard>
            </div>
          </div>
    )
}

export default ProductFilter;