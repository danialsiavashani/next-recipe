import { cuisines } from '@/utils/cuisines';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import Link from 'next/link';
import { ClearFilter } from '@/utils/types';
import { MdFilterAltOff } from 'react-icons/md';

function CuisinesList({
  cuisine,
  search,
}: {
  cuisine?: string;
  search?: string;
}) {
  const searchTerm = search ? `&search=${search}` : '';
  const all: ClearFilter = {
    label: 'all',
    icon: MdFilterAltOff,
  };
  return (
    <section>
      <ScrollArea className="py-6">
        <div className="flex gap-x-4">
          <Link href="/">
            <article className="p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary -mt-2 mr-4">
              <all.icon className="w-10 h-10 text-primary mb-2" />
              <p className="capitalize text-sm mt-1">{all.label}</p>
            </article>
          </Link>
          {cuisines.map((item) => {
            const isActive = item.label === cuisine;
            return (
              <Link
                key={item.label}
                href={`/?cuisine=${item.label}${searchTerm}`}
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  <item.icon className="w-10 h-10" />
                  <p className="capitalize text-sm mt-1">{item.label}</p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
export default CuisinesList;
