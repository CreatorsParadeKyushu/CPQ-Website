const GenresArray = ["game", "illust", "music", "video"] as const;
type Genre = typeof GenresArray[number];

function GenreToJp(genre: Genre): string {
  switch (genre) {
    case "game":
      return "ゲーム";
    case "illust":
      return "イラスト";
    case "music":
      return "音楽";
    case "video":
      return "映像";
  }
}

export {GenresArray}
export type {Genre}
export {GenreToJp}
