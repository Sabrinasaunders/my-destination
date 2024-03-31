module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: () => {
    const randomNum = Math.random();
    // Return a random emoji related to travel, blog post, and map
    if (randomNum > 0.7) {
      return `<span role="img" aria-label="airplane">✈️</span>`; // Represents travel
    } else if (randomNum > 0.4) {
      return `<span role="img" aria-label="memo">📝</span>`; // Represents a blog post
    } else {
      return `<span role="img" aria-label="world map">🗺️</span>`; // Represents a map
    }
  },
  get_map_info: (latitude, longitude) => {
    return `Latitude: ${latitude}, Longitude: ${longitude}`;
  },
};
