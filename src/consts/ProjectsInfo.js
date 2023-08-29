export const projects = [
  {
    name: "Spotify Player Live",
    description:
      "Live streaming Spotify popular playlist`s app. It uses the Spotify API to get playlists of popular Spotify playlists and stream them live in different rooms. It also has a chat feature to chat with other users in the app. I am currently working on this project.",
    underMaintenance: true,
    link: "https://spotifyplayer.live",
    github: "https://github.com/SergioAcostaTer/spotify-front",
    technologies: [
      "React",
      "Tailwind CSS",
      "Next.js",
      "Spotify API",
      "Socket.io",
    ],
    time: "2023 - Present",
    subInfo: ["Personal Project"],
  },
  {
    name: "YT Downloader",
    description: "Youtube video downloader. It uses the Node.js ytdl-core library to download the video and the ffmpeg library to mix the audio and video. The app is deployed on Vercel and the API on Render, that`s way the app is quite slow.",
    underMaintenance: false,
    link: "https://downloader-yt.vercel.app/",
    github: "",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "TypeScript"],
    time: "2023",
    subInfo: ["Personal Project"],
  },
  {
    name: "La Costa Studio",
    description:
      "Website for a local music studio. You can listening to their music, see their services and contact them.",
    underMaintenance: false,
    link: "https://lacostaestudio.com/",
    github: "",
    technologies: ["React", "SCSS", "Node.js", "Express.js", "MongoDB"],
    time: "2022",
    subInfo: ["Client Project"],
  },
];
