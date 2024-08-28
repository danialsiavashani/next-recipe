import { cuisines } from '@/utils/cuisines';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const name = 'cuisine';
function CuisinesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor="name" className="capitalize">
        Cuisines
        <Select
          defaultValue={defaultValue || cuisines[0].label}
          name={name}
          required
        >
          <SelectTrigger id={name}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {cuisines.map((item) => {
              return (
                <SelectItem key={item.label} value={item.label}>
                  <span className="flex items-center gap-2">
                    <item.icon />
                    {item.label}
                  </span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </Label>
    </div>
  );
}
export default CuisinesInput;
