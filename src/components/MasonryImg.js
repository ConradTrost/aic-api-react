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
    const url = `https://api.artic.edu/api/v1/artworks?fields=id,artist_titles,title,image_id,artist_display&limit=10&page=${props.page}`;
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
            data?.image_id && (
              <ImageListItem key={data.id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format`}
                  srcSet={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={data.id}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={data.title}
                  subtitle={data.artist_titles[0]}
                  actionIcon={
                    <Tooltip title={data.artist_display}>
                      <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about ${data.title}`}>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
              </ImageListItem>
            )
          );
        })}
      </ImageList>
    </Box>
  );
};

export default MasonryImage;
