import Filter from "./filterForm";

export default function collector({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="h-16 flex items-center justify-center my-8">
        <span className="h-1">
          <h1 className="font-mono text-4xl">
            <b>Find Nearby Collector Here</b>
          </h1>
        </span>
      </div>
      <Filter />
    </div>
  );
}
