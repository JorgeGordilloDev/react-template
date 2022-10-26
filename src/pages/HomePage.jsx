import { useDispatch } from "react-redux";
import { setTitle, setBreadcrumb } from "../app/states/meta";
import { useEffect, useState } from "react";
import SelectMultiple from "../components/SelectMultiple";

const HomePage = () => {
  const dispatch = useDispatch();

  const [element, setElement] = useState({
    prueba: [1, 2],
  });

  // Funcion para cambiar el estado general
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setElement((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(setTitle(""));
    dispatch(setBreadcrumb(() => null));
  }, []);

  return (
    <div>
      HomePage
      <div className="col-7">
        <SelectMultiple
          id={"prueba"}
          name={"prueba"}
          placeholder="Prueba"
          handleChange={handleChange}
          value={element.prueba}
        />
      </div>
    </div>
  );
};
export default HomePage;
