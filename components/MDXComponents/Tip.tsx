export default function Tip({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}) {
  return (
    <div className='relative my-5 flex w-full items-center gap-2 rounded-md bg-yellow-100 px-5 pt-4 dark:bg-neutral-800'>
      <div className='absolute top-0 left-0 rounded-tl-md rounded-br-md bg-yellow-400 px-4 py-0 font-barlow font-bold uppercase text-black dark:bg-yellow-500'>
        Tip {id && `#${id}`}
      </div>
      {children}
    </div>
  );
}
