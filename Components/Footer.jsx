import Link from "next/link";

function Footer() {
  const LinksArray = [
    {
      h3: "COMPANY",
      link: [ "ABOUT", "PROJECT", "CONTACT"],
      hrefs: [ "/about", "/project", "/contact"],
    },
    {
      h3: "SOCIALS",
      link: ["INSTAGRAM", "FACEBOOK"],
      hrefs: ["https://www.instagram.com/ashokinteriors/", "https://www.facebook.com/AshokInteriors?sfnsn=wiwspwa&mibextid=RUbZ1f",],
    },
  ];
  return (
    <section className="FooterSection">
      {LinksArray.map((elems, i) => (
        <div key={i}>
          <h3>{elems.h3}</h3>
          {elems.link.map((elem, j) => (
            <Link href={elems.hrefs[j]} key={j} className="hover:text-Secondary" target="_blank">
              {elem}
            </Link>
          ))}
        </div>
      ))}
      <p>Shop No - 03, C-23, Poonam Sagar Complex, Mira Road(E), Thane,<br /> Maharastra,<br /> 401107</p>
      <span>ASHOK INTERIORS. ALL RIGHTS RESERVED © 2024</span>
    </section>
  );
}

export default Footer;