import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Roomdetails/Header";
import RoomInfo from "../../components/Roomdetails/RoomInfo";
import RoomReservation from "../../components/Roomdetails/RoomReservation";

const Roomdetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch("../../../public/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        console.log(singleRoom);
        setRoom(singleRoom);
      });
    setLoading(false);
  }, [id]);

  if (loading) return <Loader />;
  return (
    <Container>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <div>
        <div className="flex flex-col gap-6 ">
          <Header room={room}></Header>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-10 gap-2">
          <div className="col-span-6">
            <RoomInfo roomData={room} />
          </div>
          {/* room reservation */}
          <div className="col-span-4 order-first md:order-last">
            <RoomReservation roomData={room}></RoomReservation>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Roomdetails;
