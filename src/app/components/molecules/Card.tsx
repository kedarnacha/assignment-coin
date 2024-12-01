interface CardProps {
  name: string;
  role: string;
  img: string;
  experience: string;
  countryFlag: string;
  tasks: string[];
}

const Card: React.FC<CardProps> = ({
  name,
  role,
  img,
  experience,
  countryFlag,
  tasks,
}) => (
  <div className="w-[250px] lg:w-[300px] swiper-mine flex justify-center items-center flex-col">
    <div className="w-full px-6 py-6 bg-white border rounded-lg flex justify-center items-center text-center aspect-[4/3]">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            className="w-16 h-16 lg:w-24 lg:h-24 mb-3 rounded-full shadow-lg"
            src={img}
            alt={`${name}'s image`}
          />
          <img
            src={countryFlag}
            alt="Country Flag"
            className="w-6 h-6 absolute bottom-0 right-0 mb-1 mr-0 lg:mr-2"
          />
        </div>
        <h5 className="mb-1 text-sm lg:text-xl text-black font-bold">{name}</h5>
        <div>
          <span className="text-xs lg:text-sm text-[#4A77FF]">{role}</span>
          <span className="text-xs lg:text-sm text-[#4A77FF] ml-2">{experience}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-1 lg:gap-3 justify-center items-center">
          {tasks &&
            tasks.map((task, index) => (
              <div
                key={index}
                className="flex-none w-auto max-w-xs rounded-md p-2 text-xs lg:text-sm text-black border-gray-400 border-[1px] mb-2"
              >
                {task}
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
