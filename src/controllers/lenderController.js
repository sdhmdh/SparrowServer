import Lenders from "../models/lenderModel.js";

export const getLenders = async (req, res) => {
  try {
    const lenders = await Lenders.find(
      {},
      "lender logo apr term bookmarked"
    ).lean();

    // Rename _id to id in each lender object
    const lendersWithId = lenders.map(({ _id, ...rest }) => ({
      id: _id,
      ...rest,
    }));

    res.status(200).json(lendersWithId);
  } catch (error) {
    console.error("Error fetching lenders:", error);
    res.status(500).json({ message: "Error fetching lenders" });
  }
};

export const updateLenderBookmark = async (req, res) => {
  try {
    const { lenderId, bookmarked } = req.body;

    if (!lenderId || typeof bookmarked !== "boolean") {
      return res.status(400).json({ message: "Invalid request data" });
    }

    // Update lender with the specified bookmarked status
    const updatedLender = await Lenders.findByIdAndUpdate(
      lenderId,
      { bookmarked },
      {
        new: true,
        fields: { lender: 1, logo: 1, apr: 1, term: 1, bookmarked: 1 },
      }
    ).lean();

    if (!updatedLender) {
      return res.status(404).json({ message: "Lender not found" });
    }

    const { _id, ...rest } = updatedLender;
    const lenderWithId = { id: _id, ...rest };

    res.status(200).json(lenderWithId);
  } catch (error) {
    console.error("Error updating lender bookmark:", error);
    res.status(500).json({ message: "Error updating lender bookmark" });
  }
};
