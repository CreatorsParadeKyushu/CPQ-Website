const GenresArray = ["game", "illust", "music", "video"] as const;
type Genre = typeof GenresArray[number];

export {GenresArray}
export type {Genre}
