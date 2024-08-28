import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { HiBars3 } from 'react-icons/hi2';
import { DropdownMenuItem } from '../ui/dropdown-menu';
import Link from 'next/link';
import { auth } from '@/auth';
import SignOut from '../form/SignOut';
async function LinksDropDown() {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 mx-w-[100px]">
          {session?.user?.name} <HiBars3 className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 bg-white"
        align="start"
        sideOffset={10}
      >
        {!session && (
          <>
            <DropdownMenuItem>
              <Link href="/login">
                <button className="w-full text-left">Login</button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/register">
                <button className="w-full text-left">Register</button>
              </Link>
            </DropdownMenuItem>
          </>
        )}
        {session && (
          <>
            <DropdownMenuItem>
              <Link href="/recipes">
                <button className="w-full text-left">My Recipes</button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/about">
                <button className="w-full text-left">About</button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="bg-muted ml-2">
              <SignOut />
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropDown;
