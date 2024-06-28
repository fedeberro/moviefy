import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  poster_path: String,
  vote_average: Number,
  genre_ids: [Number],
});

const listSchema = new mongoose.Schema(
  {
    watchlist: [movieSchema],
    favorites: [movieSchema],
    seen: [movieSchema],
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);

export default List;
