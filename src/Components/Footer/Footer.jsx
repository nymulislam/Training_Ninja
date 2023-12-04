import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#363636] text-white">
        <nav>
          <header className="footer-title">About</header>
          <p className="">Academist is dedicated <br/> to constant learning & knowledge sharing.</p>
          <Link className="ln ft">457 Mott Street, NY 10013</Link>
          <Link className="ln ft">+44 300 303 0266</Link>
          <Link className="ln ft">Sun - Thu 8.00 - 18.00</Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#1d1d1d] text-[#b6b6b6] border-[#FF444A]">
        <aside className="items-center grid-flow-col">
          <p className="text-base font-semibold">
            © 2023{" "}
            <Link to="/" className="ln ft">
              Training Ninja
            </Link>
            , All Rights Reserved Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end mb-10 ">
          <div className="grid grid-flow-col text-base font-semibold items-center gap-4">
            <div className="mr-4"><Link className="ln ft"><p>Call +44 300 303 026</p></Link></div>
            <div><p>Follow Us</p></div>
            <Link to="/">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-twitter-x ln ft"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current ln ft"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current ln ft"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
