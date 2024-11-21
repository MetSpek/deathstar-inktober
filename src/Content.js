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

function Content() {
  const { year } = useContext(PageContext);
  
  const folders = require.context(`../public/assets/2024`, true, /^\.\//);
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

  const data = Object.values(folderImages);

  return (
      <>
        <Header />
        <Body>
          <Overlay />
          <Year>
            {data.map(folder => 
              <Day key={folder.title} title={folder.title} images={folder.images}/>)
            }
            
            {/* <Day title={"test"} images={images}/> */}
          </Year>
        </Body>
      </>
  );
}
  
export default Content;