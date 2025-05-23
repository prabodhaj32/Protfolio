import React from "react";

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/OIP.jpeg"
          alt="About me image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Background Shape */}
      <div className="h-[500px] w-[250px] bg-white absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;