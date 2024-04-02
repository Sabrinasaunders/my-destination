module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: (category) => {
    const emojiMap = {
      travel: `<span role="img" aria-label="airplane">✈️</span>`,
      blogpost: `<span role="img" aria-label="memo">📝</span>`,
      pictures: `<span role="img" aria-label="camera">📷</span>`,
    };
    return emojiMap[category] || ""; // Return the emoji or an empty string if the category is not found
  },
  get_map_info: (latitude, longitude) => {
    // Construct an OpenStreetMap URL for a static map image
    const mapImageUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=15&size=600x300&maptype=mapnik&markers=${latitude},${longitude},lightblue1`;
    return `<img src="${mapImageUrl}" alt="Map of Location" />`;
  },
};
