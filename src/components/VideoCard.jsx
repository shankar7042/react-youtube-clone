import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { demoVideoUrl } from "../utils/constants";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.channelTitle}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  );
}
