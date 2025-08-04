const button =
  "btn hover:text-base-content/80 text-base-content btn-lg p-0 btn-link size-fit no-underline";

export function Header() {
  return (
    <header className="bg-base-100/90 sticky top-0 z-30 -mt-16 flex h-16 w-full [transform:translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 print:hidden">
      <nav className="navbar flex justify-end gap-5 px-5 py-0 lg:px-10">
        <button className={button}>work</button>
        <button className={button}>contact</button>
      </nav>
    </header>
  );
}
