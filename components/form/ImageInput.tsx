import { Input } from '../ui/input';
import { Label } from '../ui/label';

function ImageInput() {
  const name = 'image';
  return (
    <div>
      <Label htmlFor="name" className="capitalize">
        Image
      </Label>
      <Input
        type="file"
        id={name}
        name={name}
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}
export default ImageInput;
