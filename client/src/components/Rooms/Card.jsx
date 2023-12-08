import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ room }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/room/${room._id}`)
    }
  return (
    <div onClick={handleClick} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full gap-2">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
            <img className="object-cover duration-500 transition-all h-full w-full max-w-[450px] group-hover:scale-110  transition-none" src={room?.image}alt="room" />

        </div>
        <div className=" font-semibold text-lg ">{room?.location}</div>
        <div className=" font-light text-neutral-500"> 5 night, 11/22/2023</div>
        <div className="flex flex-row items-start gap-2">
            <div className="font-semibold flex items-center">${room?.price}</div>
            <div className="font-light">night</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
