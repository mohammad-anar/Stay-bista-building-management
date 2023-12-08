import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("../rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtedData = data.filter((item) => item.category === category);
          setRooms(filtedData);
        } else {
          setRooms(data);
        }
        setLoading(false);
      });
  }, [category]);

  if(loading) return <Loader></Loader>

  return (
    <Container>
      {rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-280px)]">
          <Heading
            center={true}
            title={"No rooms available in this category!"}
            subtitle={"Please select other categories."}
          ></Heading>
        </div>
      )}
    </Container>
  );
};
export default Rooms;
