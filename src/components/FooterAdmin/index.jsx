 
 import React from "react";
 import { Helmet } from "react-helmet";
 
 import {
    Img,
    Text,
  } from "../../components";
 
 
 export default function TestPage() {
     return (
       <>
        <div className="flex h-[50px] items-center justify-center gap-5 md:w-full md:flex-col">
                <div className="mb-[9px] flex flex-wrap gap-2 self-end">
                  <Text size="md" as="p">
                    © 2024 EzShop. All Rights Reserved
                  </Text>
                  <Text size="md" as="p">
                    Privacy · Terms · Sitemap
                  </Text>
                </div>
              </div>
       </>
     )
   
   };
