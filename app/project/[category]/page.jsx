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
        "/home_theatre/cad583f9-edba-4750-84e0-33bed92a06e1-transformed.jpg",
        "/home_theatre/IMG-20200313-WA0054 (2)-Photoroom.jpg",
        "/home_theatre/IMG-20200313-WA0055 (2) (1).jpg",
        "/home_theatre/IMG-20200313-WA0058_(1)_(1)-transformed.jpg",
        "/home_theatre/IMG-20200313-WA0079 (1)-Photoroom.jpg",
        "/home_theatre/IMG-20200313-WA0081 (1)-Photoroom.jpg",
        "/home_theatre/IMG-20200313-WA0148 (1) (1).jpg",
        "/home_theatre/IMG-20200313-WA0148 (2)-Photoroom.jpg",
        "/home_theatre/IMG-20200313-WA0149 (1)-Photoroom.jpg",
      ]
    },
    {
      CtgName: "Residence",
      Link:"residence",
      ImgTxt: [
      "/CategoryImages/ResidentialImg/Aalok Padhye_Final-44 (2).jpg",
      "/CategoryImages/ResidentialImg/DSC01197.jpg",
      "/CategoryImages/ResidentialImg/DSC01202.jpg",
      "/CategoryImages/ResidentialImg/DSC01205.jpg",
      "/CategoryImages/ResidentialImg/DSC01207.jpg",
      "/CategoryImages/ResidentialImg/DSC02239.jpg",
      "/CategoryImages/ResidentialImg/DSC02342 (1) (1).jpg",
      "/CategoryImages/ResidentialImg/DSC02358.jpg",
      "/CategoryImages/ResidentialImg/DSC02442.jpg",
      "/CategoryImages/ResidentialImg/DSC02358.jpg",
      "/CategoryImages/ResidentialImg/DSC02442.jpg",
      "/CategoryImages/ResidentialImg/DSC02450.jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702749578 (1).jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702751912 (1).jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702755524 (1).jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702757877 (1).jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702760735 (1).jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702763542 (1).jpg",
      "/CategoryImages/ResidentialImg/FB_IMG_1688702765935 (1).jpg",
      ],
    },
    {
      CtgName: "Showroom",
      Link:'showroom',
      ImgTxt: [
       "/CategoryImages/Showroom/_D0A5093.jpg",
       "/CategoryImages/Showroom/_D0A5159.jpg",
       "/CategoryImages/Showroom/_D0A5187 (1).jpg",
       "/CategoryImages/Showroom/_D0A5234.jpg",
       "/CategoryImages/Showroom/_D0A5241.jpg",
       "/CategoryImages/Showroom/_D0A5257.jpg",
       "/CategoryImages/Showroom/_D0A5319.jpg",
       "/CategoryImages/Showroom/_D0A5384.jpg",
       "/CategoryImages/Showroom/_D0A5506.jpg",
       "/CategoryImages/Showroom/_D0A5530 (1).jpg",
       "/CategoryImages/Showroom/_D0A5605.jpg",
       "/CategoryImages/Showroom/_D0A5625.jpg",
       "/CategoryImages/Showroom/_D0A5631.jpg",
       "/CategoryImages/Showroom/_D0A5759.jpg",
       "/CategoryImages/Showroom/_D0A5822.jpg",
       "/CategoryImages/Showroom/_D0A5921.jpg",
       "/CategoryImages/Showroom/_D0A5928.jpg",
       "/CategoryImages/Showroom/_D0A5930.jpg",
       "/CategoryImages/Showroom/_D0A5957.jpg",
       "/CategoryImages/Showroom/_D0A5969.jpg",
       "/CategoryImages/Showroom/_D0A6001.jpg",
       "/CategoryImages/Showroom/_D0A6007.jpg",
       "/CategoryImages/Showroom/_D0A6015 (1).jpg",
       "/CategoryImages/Showroom/1P2A4372.jpg",
       "/CategoryImages/Showroom/1P2A4541.jpg",
       "/CategoryImages/Showroom/1P2A4548.jpg",
       "/CategoryImages/Showroom/1P2A4654.jpg",
       "/CategoryImages/Showroom/1P2A4846.jpg",
       "/CategoryImages/Showroom/1P2A4858.jpg",
       "/CategoryImages/Showroom/1P2A4860.jpg",
       "/CategoryImages/Showroom/1P2A4873.jpg",
       "/CategoryImages/Showroom/1P2A4881.jpg",
       "/CategoryImages/Showroom/1P2A4887.jpg",
       "/CategoryImages/Showroom/1P2A4921.jpg",
       "/CategoryImages/Showroom/1P2A4930.jpg",
       "/CategoryImages/Showroom/1P2A4982.jpg",
       "/CategoryImages/Showroom/1P2A5000.jpg",
      ],
    },
    {
      CtgName: "Studios",
      Link:"studios",
      ImgTxt: [
        {
          studioName: "Lambodara Studios – Siddharth & Shankar Mahadevan",
          stdImg: [
           "/LambodaraStd/20200224_175619.jpg",
           "/LambodaraStd/20200313_123551.jpg",
           "/LambodaraStd/20200313_123702.jpg",
           "/LambodaraStd/20200313_123713.jpg",
           "/LambodaraStd/20200313_123808.jpg",
           "/LambodaraStd/20200313_123834.jpg",
           "/LambodaraStd/20200313_123937.jpg",
           "/LambodaraStd/20200313_123953 (1).jpg",
           "/LambodaraStd/20200313_124001 (1).jpg",
           "/LambodaraStd/20200313_124030.jpg",
           "/LambodaraStd/20200313_125326.jpg",
           "/LambodaraStd/b13ee9_4329df269f304e05991908c6fc21c5cd~mv2 (1).jpg",
           "/LambodaraStd/b13ee9_531985e805d148c8a230709050141428~mv2 (2).jpg",
           "/LambodaraStd/b13ee9_de28cd5e0c114c1daef5a1283e424976~mv2 (1).jpg",
          ],
        },
        {
          studioName: " Sound and Vision Studios Pvt. Ltd.",
          stdImg: [
           "/sound and studios/Screenshot_20230709_231132_Instagram (1).jpg",
           "/sound and studios/Screenshot_20230709_231225_Instagram (1).jpg",
           "/sound and studios/Screenshot_20230709_231235_Instagram (1).jpg",
           "/sound and studios/Screenshot_20230709_231245_Instagram (1).jpg",
           "/sound and studios/Screenshot_20230709_231255_Instagram (1).jpg",
           "/sound and studios/Screenshot_20230709_231329_Instagram (2).jpg",
           "/sound and studios/Screenshot_20230709_231406_Instagram (1).jpg",
          ],
        },
        {
          studioName: "Subhash Studios Pvt. Ltd.",
          stdImg: [
            "/subhashStd/IMG_1754 (1).jpg",
            "/subhashStd/IMG_1758 (1).jpg",
            "/subhashStd/IMG_1760 (1).jpg",
            "/subhashStd/IMG_1776 (1).jpg",
            "/subhashStd/IMG_1791 (1).jpg",
            "/subhashStd/IMG_1809 (1).jpg",
            "/subhashStd/IMG_1822 (1).jpg",
            "/subhashStd/IMG_1828 (1).jpg",
            "/subhashStd/IMG_1836 (1).jpg",
            "/subhashStd/IMG_1844 (1).jpg",
            "/subhashStd/IMG_1849 (1).jpg",
            "/subhashStd/IMG_1860 (1).jpg",
            "/subhashStd/studio  (1) (1).jpg",
            "/subhashStd/studio  (3).jpg",
          ],
        },
        {
          studioName: "Canopy Media",
          stdImg: [
            "/canopyStd/1.jpg",
            "/canopyStd/1a2e7e06-fcb2-4f57-b976-cea1556d5667 (1).jpg",
            "/canopyStd/2.jpg",
            "/canopyStd/3e22baad-ae96-402d-9e32-d57dda04e314 (1).jpg",
            "/canopyStd/4.jpg",
            "/canopyStd/22e61168-4973-4070-b103-e8df24cb2bb4 (1).jpg",
            "/canopyStd/519f9b86-9dd3-4256-bac5-663f7364dafe (1).jpg",
            "/canopyStd/6272b28e-76d0-4719-8e01-27c6eb4c10be (1).jpg",
            "/canopyStd/7873cecf-dad2-4403-9f31-de6e948f52dd (1).jpg",
            "/canopyStd/8948d3ac-a220-4cfd-886a-5dddfbda8349 (1).jpg",
            "/canopyStd/714404c1-8e38-4b1b-ad85-e46c50ef7f23 (1).jpg",
            "/canopyStd/c753aab2-306f-481a-a49a-af36a590456e (1).jpg",
            "/canopyStd/cc944934-61c7-448f-af56-4fb451df8720 (1).jpg",
          ],
        },
        {
          studioName: "Island City Studios",
          stdImg: [
            "/IslandCity/b13ee9_0c36118e4a5b41fe85389c1c989920dd~mv2 (1).jpg",
            "/IslandCity/b13ee9_7b7c3274a59d4237a1bfeef977a36a13~mv2 (1).jpg",
            "/IslandCity/b13ee9_9e8d640d3d1949d8a11f534d4a1b4b4a~mv2 (1).jpg",
            "/IslandCity/b13ee9_761f963d5f494b8cbad52b4c3d2b7f0e~mv2 (1).jpg",
            "/IslandCity/b13ee9_44400733bd1d43078812e258077d48ce~mv2 (1).jpg",
            "/IslandCity/b13ee9_add065ee50c746c4834a3d926dc92aee~mv2 (1).jpg",
            "/IslandCity/DSC_5474 (1).jpg",
            "/IslandCity/DSC_5495 (1).jpg",
            "/IslandCity/DSC_5508.jpg",
            "/IslandCity/DSC_5729.jpg",
            "/IslandCity/DSC_5803.jpg",
            "/IslandCity/DSC_5833 (1).jpg",
            "/IslandCity/DSC_5857 (1).jpg",
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
                  onClick={(event) => event.target.requestFullscreen()}
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
                  onClick={(event) => event.target.requestFullscreen()}
                        
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
