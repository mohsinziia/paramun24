function PageList({ className, children }) {
  return (
    <ul
      id=""
      className={`md:opacity-100 md:relative md:top-0 md:flex-row md:justify-evenly md:items-center self-stretch md:pb-0 page-list flex flex-col items-center text-light w-full absolute opacity-0 z-10 top-32 bg-dark pb-5 ${className}`}
    >
      {children}
    </ul>
  );
}

export default PageList;
