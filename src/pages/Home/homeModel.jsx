import React, { useState } from "react";

import { useForm, Controller } from "react-hook-form";

import Calendar from "../../components/Calendar";

const defaultValues = {
  Native: "",
  TextField: "",
  Select: "",
  ReactSelect: { value: "vanilla", label: "Vanilla" },
  Checkbox: false,
  switch: false,
  RadioGroup: "",
  numberFormat: 123456789,
  AntdInput: "Test",
  AntdCheckbox: true,
  AntdSwitch: true,
  AntdSlider: 20,
  AntdRadio: 1,
  downShift: "apple",
  ReactDatepicker: new Date(),
  AntdSelect: "",
  // DraftJS: EditorState.createEmpty(),
  // MUIPicker: new Date("2020-08-01T00:00:00"),
  country: { code: "AF", label: "Afghanistan", phone: "93" },
  ChakraSwitch: true,
  reactMaskInput: "",
};

export default function Home() {
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
      <Calendar control={control} />
    </form>
  );
}
