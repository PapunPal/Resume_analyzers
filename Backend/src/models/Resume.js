import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    fileName: String,

    resumeText: String,

    analysis: {
      atsScore: {
        type: Number,
        default: 0,
      },

      summary: {
        type: String,
        default: "",
      },

      strengths: {
        type: [String],
        default: [],
      },

      weaknesses: {
        type: [String],
        default: [],
      },

      suggestions: {
        type: [String],
        default: [],
      },

      missingKeywords: {
        type: [String],
        default: [],
      },
    },
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Resume", resumeSchema);