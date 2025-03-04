"use client";
import React from 'react'
import { useTranslations } from 'next-intl';

const CategoryTags: React.FC = () => {
  const t = useTranslations('categoryTags');
  const categories = [
    t("random"),
    t("selfGrowth"),
    t("overcomingFailure"),
    t("motivation"),
    t("selfBelief"),
    t("perseverance"),
    t("love"),
    t("nature"),
    t("userGenerated"),
  ];
  return (
    <div className="mt-4">
      <div className="overflow-x-auto lg:overflow-x-visible scrollbar-hide">
        <div className="flex space-x-2 py-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className={`${
                index === 0
                  ? "bg-sky-dark dark:bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
              } rounded-full px-4 py-1.5 text-sm shadow-md cursor-pointer whitespace-nowrap`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryTags