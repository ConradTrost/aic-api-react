import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

const MasonryImage = (props) => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    console.log(props.page);
    const url = `https://api.artic.edu/api/v1/images?fields=id,artwork_titles&limit=10&page=${props.page}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setArt(result);
        console.log(url);
      });
  }, [props.page]);

  return (
    <Box className="masonry-img-layout">
      <ImageList variant="masonry" cols={4} gap={0}>
        {art.data?.map((data) => {
          return (
            data?.id && (
              <ImageListItem key={data.id}>
                <a
                  href={`https://www.artic.edu/iiif/2/${data.id}/full/1686,/0/default.jpg`}
                  target="_blank"
                  rel="nofollower noreferrer">
                  <img
                    src={`https://www.artic.edu/iiif/2/${data.id}/full/400,/0/default.jpg?w=248&fit=crop&auto=format`}
                    srcSet={`https://www.artic.edu/iiif/2/${data.id}/full/400,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={data.id}
                    loading="lazy"
                  />
                </a>
                <ImageListItemBar title={data.artwork_titles[0] ? data.artwork_titles[0] : "Untitled"} />
              </ImageListItem>
            )
          );
        })}
      </ImageList>
    </Box>
  );
};

export default MasonryImage;
