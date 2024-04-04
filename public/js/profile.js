// document.addEventListener("DOMContentLoaded", () => {
  const newPostForm = document.querySelector("#blogpost-form");
  if (newPostForm) {
    newPostForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("Hello!");
      const name = document.querySelector(".post-name").value.trim();
      // const location_map = document.querySelector("#post-location-map").value.trim();
      const description = document.querySelector(".post-desc").value.trim();
console.log(name, description);
      if (name && description) {
        // location_map &&
        const response = await fetch(`/api/post`, {
          method: "POST",
          body: JSON.stringify({ name, description }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          document.location.replace("/profile");
        } else {
          alert("Failed to create travelPost");
        }
      }
    });
  }

  const postList = document.querySelector(".post-list");
  if (postList) {
    postList.addEventListener("click", async (event) => {
      if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");

        const response = await fetch(`/api/posts/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          document.location.replace("/profile");
        } else {
          alert("Failed to delete Post");
        }
      }
    });
  }
// });
