import { Input } from "baseui/input";
import React, { ChangeEvent } from "react";
import { FormControl } from "baseui/form-control";

interface CustomInputProps {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label: string;
  value: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  onChange,
  label,
  value,
}) => {
  return (
    <FormControl label={label}>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              marginBottom: "10px",
              maxWidth: "300px",
            }),
          },
          Input: {
            style: ({ $theme }) => ({}),
          },
        }}
      />
    </FormControl>
  );
};
export default CustomInput;
