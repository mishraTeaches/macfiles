export default function Lists({ people }: any) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person: any, index: number) => (
        <li key={index} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                {person.user}
              </p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">
                {person.email}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
