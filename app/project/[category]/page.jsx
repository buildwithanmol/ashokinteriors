"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

const Page = ({params}) => {

  const ProductCtg = [
    {
      CtgName: "Home Theatre",
      Link:"hometheatre",
      ImgTxt: [
        "/shankar mahadevan/IMG-20200313-WA0022.jpg",
        "/shankar mahadevan/IMG-20200313-WA0149.jpg",
        "/shankar mahadevan/IMG-20200313-WA0148.jpg",
        "/shankar mahadevan/IMG-20200313-WA0081.jpg",
        "/shankar mahadevan/IMG-20200313-WA0079.jpg",
        "/shankar mahadevan/IMG-20200313-WA0078.jpg",
        "/shankar mahadevan/IMG-20200313-WA0058.jpg",
        "/shankar mahadevan/IMG-20200313-WA0055.jpg",
        "/shankar mahadevan/IMG-20200313-WA0054.jpg",
        "/shankar mahadevan/IMG-20200313-WA0035.jpg",
        "/shankar mahadevan/IMG-20200313-WA0030.jpg",
        "/shankar mahadevan/IMG-20200313-WA0022.jpg",
      ]
    },
    {
      CtgName: "Residence",
      Link:"residence",
      ImgTxt: [
        "/CategoryImages/ResidentialImg/Img12.webp",
        "/CategoryImages/ResidentialImg/Img11.webp",
        "/CategoryImages/ResidentialImg/Img10.webp",
        "/CategoryImages/ResidentialImg/Img9.webp",
        "/CategoryImages/ResidentialImg/Img8.webp",
        "/CategoryImages/ResidentialImg/Img7.webp",
        "/CategoryImages/ResidentialImg/Img15.webp",
        "/CategoryImages/ResidentialImg/Img13.webp",
        "/CategoryImages/ResidentialImg/Img6.webp",
        "/CategoryImages/ResidentialImg/Img5.webp",
        "/CategoryImages/ResidentialImg/Img4.webp",
        "/CategoryImages/ResidentialImg/Img3.webp"
      ],
    },
    {
      CtgName: "Showroom",
      Link:'showroom',
      ImgTxt: [
        "/CategoryImages/Showroom/_D0A5187.jpg",
        "/CategoryImages/Showroom/_D0A5454.jpg",
        "/CategoryImages/Showroom/_D0A5822.jpg",
        "/CategoryImages/Showroom/_D0A5921.jpg",
        "/CategoryImages/Showroom/_D0A6001.jpg",
        "/CategoryImages/Showroom/1P2A4508.jpg",
        "/CategoryImages/Showroom/1P2A4873.jpg",
        "/CategoryImages/Showroom/1P2A4921.jpg",
      ],
    },
    {
      CtgName: "Studios",
      Link:"studios",
      ImgTxt: [
        {
          studioName: "Lambodara Studios – Siddharth & Shankar Mahadevan",
          stdImg: [
            "/LambodaraStd/20200313_123953.webp",
            "/LambodaraStd/20200313_124001.webp",
            "/LambodaraStd/b13ee9_49bc19abf4ac4bd389163d3bb2c53a9e~mv2.webp",
            "/LambodaraStd/b13ee9_4329df269f304e05991908c6fc21c5cd~mv2.webp",
            "/LambodaraStd/b13ee9_531985e805d148c8a230709050141428~mv2.webp",
            "/LambodaraStd/b13ee9_de28cd5e0c114c1daef5a1283e424976~mv2.webp",
          ],
        },
        {
          studioName: " Sound and Vision Studios Pvt. Ltd.",
          stdImg: [
            "/sound and studios/Screenshot_20230709_231132_Instagram.webp",
            "/sound and studios/Screenshot_20230709_231225_Instagram.webp",
            "/sound and studios/Screenshot_20230709_231235_Instagram.webp",
            "/sound and studios/Screenshot_20230709_231245_Instagram.webp",
            "/sound and studios/Screenshot_20230709_231255_Instagram.webp",
            "/sound and studios/Screenshot_20230709_231329_Instagram.webp",
            "/sound and studios/Screenshot_20230709_231406_Instagram.webp",
            "/sound and studios/studio (2).webp"

          ],
        },
        {
          studioName: "Subhash Studios Pvt. Ltd.",
          stdImg: [
            "/subhashStd/IMG_1754.webp",
            "/subhashStd/IMG_1758.webp",
            "/subhashStd/IMG_1760.webp",
            "/subhashStd/IMG_1776.webp",
            "/subhashStd/IMG_1791.webp",
            "/subhashStd/IMG_1809.webp",
            "/subhashStd/IMG_1822.webp",
            "/subhashStd/IMG_1828.webp",
            "/subhashStd/IMG_1836.webp",
            "/subhashStd/IMG_1844.webp",
            "/subhashStd/IMG_1849.webp",
            "/subhashStd/IMG_1860.webp",
            "/subhashStd/studio  (1).webp",
            "/subhashStd/studio .webp",
          ],
        },
        {
          studioName: "Canopy Media",
          stdImg: [
            "/canopyStd/1a2e7e06-fcb2-4f57-b976-cea1556d5667.webp",
            "/canopyStd/3e22baad-ae96-402d-9e32-d57dda04e314.webp",
            "/canopyStd/22e61168-4973-4070-b103-e8df24cb2bb4.webp",
            "/canopyStd/519f9b86-9dd3-4256-bac5-663f7364dafe.webp",
            "/canopyStd/6272b28e-76d0-4719-8e01-27c6eb4c10be.webp",
            "/canopyStd/7873cecf-dad2-4403-9f31-de6e948f52dd.webp",
            "/canopyStd/8948d3ac-a220-4cfd-886a-5dddfbda8349.webp",
            "/canopyStd/714404c1-8e38-4b1b-ad85-e46c50ef7f23.webp",
            "/canopyStd/c753aab2-306f-481a-a49a-af36a590456e.webp",
            // "/canopyStd/cc944934-61c7-448f-af56-4fb451df8720.webp"
          ],
        },
        {
          studioName: "Island City Studios",
          stdImg: [
            "/IslandCity/b13ee9_0c36118e4a5b41fe85389c1c989920dd~mv2.webp",
            "/IslandCity/b13ee9_7b7c3274a59d4237a1bfeef977a36a13~mv2.webp",
            "/IslandCity/b13ee9_9e8d640d3d1949d8a11f534d4a1b4b4a~mv2.webp",
            "/IslandCity/b13ee9_761f963d5f494b8cbad52b4c3d2b7f0e~mv2.webp",
            "/IslandCity/b13ee9_20317d9e553e406aa0bc558bf23baae4~mv2.webp",
            "/IslandCity/b13ee9_44400733bd1d43078812e258077d48ce~mv2.webp",
            "/IslandCity/b13ee9_add065ee50c746c4834a3d926dc92aee~mv2.webp",
            "/IslandCity/b13ee9_f037d9471c9e4ef5b6729cd21bb82d04~mv2.webp",
            "/IslandCity/DSC_5474.webp",
            "/IslandCity/DSC_5495.webp",
            "/IslandCity/DSC_5833.webp",
            "/IslandCity/DSC_5857.webp",
          ],
        },
      ],
    },
  ];

  // const ClickedCtg = (value) => {
  //   setctg(value);
  // };

  return (
    <main className="flex flex-col items-center justify-center w-full">
     <div className="md:max-w-6xl ">
     <section className="ctgSection">
        <h1 className="uppercase md:text-3xl text-xl">One Face For Your Entire Project</h1>
        <div className="flex-wrap flex">
          {ProductCtg.map((elem, i) => (
          <Link href={`/project/${elem.Link}`}
              key={i}
              style={{
                borderBottom: `${elem.Link == params.category 
                  ? "3px solid var(--Accent)"
                  : "3px solid transparent"
                  }`,
              }}
              className="whitespace-nowrap "
            >
              {elem.CtgName}
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-8">
        {ProductCtg.map((elem) => {
          if (params.category === elem.Link) {
            if (params.category=== "studios") {
              return (
                <div key={uuidv4()}>
                  {elem.ImgTxt.map((elem, i) => {
                    return (
                      <div key={uuidv4()} className="md:px-3 flex flex-col items-center justify-center">
                        <h1 className=" text-xl md:text-2xl p-2 text-center m-3 w-fit">
                          {elem.studioName}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-9">
                          {elem.stdImg.map((elem, i) => {
                            return (
                              <div key={i} className="overflow-hidden">
                                <Image
                                  src={elem}
                                  
                                  alt="categories"
                                  width={600}
                                  height={300}
                                  className="hover:scale-105 object-cover duration-700 transition-all hover:rotate-1"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            } else {
              return (
                <div
                  key={uuidv4()}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-3 p-2"
                >
                  {elem.ImgTxt.map((elem, i) => (
                    <div className="overflow-hidden" key={i}>
                      <Image
                        src={elem}
                        
                        alt="categories"
                        width={600}
                        height={300}
                        className="hover:scale-105 duration-700 object-cover transition-all hover:rotate-1"
                      />
                    </div>
                  ))}
                </div>
              );
            }
          }
          return null;
        })}
      </section>
     </div>
    </main>
  );
};

export default Page;
