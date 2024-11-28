function Footer() {
  return (
    <footer className="bg-[#07292F] px-2 py-6 md:py-10">
      <div className="container flex justify-center md:justify-between items-center gap-3 flex-wrap">
        <img src="./public/img/Footerlogo.png" alt="Logo" />
        <p className="text-white/50 text-center md:text-start font-workSans">
          Copyright © 2023 Wizia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
