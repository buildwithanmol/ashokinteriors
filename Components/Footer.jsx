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
      hrefs: ["https://www.instagram.com/ashofyyourspace/?hl=en", "https://www.facebook.com/people/Ashofyyours-Pace/61555893284192/",],
    },
  ];
  return (
    <section className="FooterSection">
      {LinksArray.map((elems, i) => (
        <div key={i}>
          <h3>{elems.h3}</h3>
          {elems.link.map((elem, j) => (
            <Link href={elems.hrefs[j]} key={j} className="hover:text-Secondary">
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