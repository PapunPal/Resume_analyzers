import fs from "fs/promises";
import Resume from "../models/Resume.js";

import extractTextFromPDF from "../services/pdf.service.js";
import analyzeResume from "../services/ai.service.js";

export const uploadResume = async (req, res) => {
  try {
    const text = await extractTextFromPDF(
      req.file.path
    );

    const analysis =
      await analyzeResume(text);

    const resume =
      await Resume.create({
        userId: req.user._id,

        fileName:
          req.file.originalname,

        resumeText: text,

        analysis,
      });

    res.status(201).json({
      success: true,
      resume,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  } finally {
    if (req.file?.path) {
      await fs.unlink(req.file.path).catch(() => {});
    }
  }
};

export const getMyResumes = async (
  req,
  res
) => {
  const resumes = await Resume.find({
    userId: req.user._id,
  })
    .select(
      "fileName analysis.atsScore createdAt"
    )
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    resumes,
  });
};


export const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    res.json({
      success: true,
      resume,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const resume =
      await Resume.findOne({
        _id: req.params.id,
        userId: req.user._id,
      });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    await Resume.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};