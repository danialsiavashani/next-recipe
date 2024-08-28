import { BiFoodMenu } from 'react-icons/bi';
import { Button } from '../ui/button';
import Link from 'next/link';

function Logo() {
  return (
    <Button asChild>
      <Link href="/">
        <BiFoodMenu className="w-6 h-6" />
      </Link>
    </Button>
  );
}
export default Logo;
