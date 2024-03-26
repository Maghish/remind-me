function Navbar() {
  return (
    <div className="min-w-screen w-screen h-[80px] bg-palette2 inline-flex items-center py-4 px-6">
      <a
        href="/"
        className="text-3xl font-mono font-semibold text-stone-200  cursor-pointer"
      >
        Remind Me
      </a>
      <div className="ml-[120px] w-auto flex flex-row gap-6 items-center">
        <a className="font-mono text-stone-300 cursor-pointer transition duration-300 ease-linear hover:text-palette6">
          All tasks
        </a>
        <a className="font-mono text-stone-300 cursor-pointer transition duration-300 ease-linear hover:text-palette6">
          Create task
        </a>
      </div>
    </div>
  );
}

export default Navbar;
