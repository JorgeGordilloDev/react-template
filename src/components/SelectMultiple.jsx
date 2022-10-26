import { useEffect } from "react";

const SelectMultiple = ({ id, name, handleChange, value, placeholder }) => {
  useEffect(() => {
    $(`#${id}`).select2();
  }, []);

  $(`#${id}`).val(value).trigger("change");

  $(`#${id}`).on("select2:select", (e) => {
    const data = Number(e.params.data.id);
    handleChange({
      target: {
        name,
        value: [...value, data],
      },
    });
  });

  $(`#${id}`).on("select2:unselect", (e) => {
    const data = Number(e.params.data.id);
    handleChange({
      target: {
        name,
        value: value?.filter((i) => i != data),
      },
    });
  });

  return (
    <select
      multiple
      id={id}
      name={name}
      style={{ width: "100%" }}
      data-placeholder={placeholder}
      className="select2 select2-hidden-accessible"
    >
      <option key={1} value={1}>
        Opcion 1
      </option>
      <option key={2} value={2}>
        Opcion 2
      </option>
      <option key={3} value={3}>
        Opcion 3
      </option>
    </select>
  );
};
export default SelectMultiple;
