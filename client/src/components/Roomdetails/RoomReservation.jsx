import { DateRange } from "react-date-range";
import PropTypes from "prop-types";
import Button from "../Button/Button";
// import { formatDistance } from "date-fns";
import { useState } from "react";
const RoomReservation = ({ roomData }) => {
    console.log(roomData.from);
  const [value, setValue] = useState({
    startDate: new Date(roomData?.from),
    endDate: new Date(roomData?.to),
    key: "selection",
  });
  console.log(value);
//   const totalday = formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(" ")[0];
  
//   const totalPrice = parseFloat(totalday* roomData?.price) || 0;

  const handleSelect = (ranges) => {
    console.log(ranges);
  };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden text-center shadow-md">
      <div className="min-h-[50px] border-b flex items-center justify-start p-2">
        <h2 className="text-3xl font-bold text-left flex items-center gap-2 ml-4 py-2">
          
          $ {roomData.price}
          <span className="font-normal text-xl text-neutral-500">night</span>
        </h2>
      </div>
      {/* data range calender  */}
      <DateRange
        rangeColors={"#F43F5E"}
        onChange={handleSelect}
      ></DateRange>
      {/* reservation button  */}
      <div className="border-y p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <div className="flex items-cneter justify-between  p-4">
        <h2 className="text-xl font-semibold">Total</h2>
        <h2 className="text-xl font-semibold">$ {} </h2>
      </div>
    </div>
  );
};
RoomReservation.propTypes = {
  roomData: PropTypes.object,
};

export default RoomReservation;
