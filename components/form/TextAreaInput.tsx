import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextAreaInputs = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputs) {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}
export default TextAreaInput;
