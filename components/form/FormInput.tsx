import { Label } from '../ui/label';
import { Input } from '../ui/input';

type InputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};
function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: InputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name || label}
      </Label>
      <Input
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}
export default FormInput;
