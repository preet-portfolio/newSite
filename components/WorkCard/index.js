import Image from "next/image";
import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 md:p-4 first:ml-0 link">
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 ">
        <Image
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium md:mt-8">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50 md:text-lg">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
