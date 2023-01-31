function Skeleton({ item }) {
  return [...Array(item).keys()].map(() => {
    return (
      <div key={Math.random()} className="animate-pulse">
        <div className="bg-gray-300 rounded-lg h-72"></div>
      </div>
    );
  });
}

export default Skeleton;
