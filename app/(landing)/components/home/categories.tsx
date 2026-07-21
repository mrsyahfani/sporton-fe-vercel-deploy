import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import { FiArrowRight } from "react-icons/fi";

type TCategoriesProps = {
  categories: Category[];
};

export default function CategoriesSection ({ categories }: TCategoriesProps) {
    return (
        <section id="category-section" className="container mx-auto pb-20">
            <div className="flex justify-between">
                <h2 className="font-bold md:text-2xl">Browse By Categories</h2>
                <Link href="#" className="flex gap-2 text-primary font-medium">
                    <span className="self-center">See All Categories</span> 
                    <FiArrowRight className="self-center"/>
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mt-8 max-w-full  mx-auto">
                 {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-40 h-40 md:w-50 md:h-50 aspect-square flex justify-center"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={86}
                height={86}
                alt={category.name}
                className="mb-[10px]"
              />
              <div className="text-primary font-medium md:text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
            </div>
        </section>
    )
}