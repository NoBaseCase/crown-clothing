import {
  FormInputLabel,
  Input,
  Group,
} from "./form-input.component.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {label && (
        <FormInputLabel shrink={otherProps.value.lenth}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
