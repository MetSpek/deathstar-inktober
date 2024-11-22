import styled from "styled-components";
import Header from "./components/headers/Header";
import 'react-multi-carousel/lib/styles.css';
import { Day } from "./components/day/Day";
import Overlay from "./components/overlay/Overlay";
import { PageContext } from './PageProvider';
import React, { useState, useContext, useEffect } from 'react';


const Body = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Year = styled.div`
  width: 100%;
`;

const Nothing = styled.h2`  
  padding-top: 5rem;
`;

function Content() {
  const { year } = useContext(PageContext);
  
  let folders;
  let data
  if (year === "2024") {
    folders = require.context(`../public/assets/2024`, true, /^\.\//);
  } 
  if (folders !== undefined) {
    const folderImages = folders.keys().reduce((acc, path) => {
      const parts = path.split('/');
      if (parts.length > 2) {
        const folderName = parts[1];
        const fileName = parts[2];
        if (!acc[folderName]) {
          acc[folderName] = {
            title: folderName,
            images: []
          };
        }
   
        const imagePath = `./${parts[1]}/${fileName}`;
        const image = {
          title: fileName,
          source: folders(imagePath)
        };
        acc[folderName].images.push(image);
      }
      return acc;
    }, {});
  
    data = Object.values(folderImages);
  }
  

  return (
      <>
        <Header />
        <Body>
          <Overlay />
          <Year>
            {data && data.map((folder, index) => 
              <Day key={folder.title} index={index + 1} title={folder.title} images={folder.images}/>
            )}
            { !data && <Nothing>Nothing found...</Nothing> }
          </Year>
        </Body>
      </>
  );
}
  
export default Content;