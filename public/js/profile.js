document.addEventListener("DOMContentLoaded", () => {
  const newPostForm = document.querySelector(".new-post-form");
  if (newPostForm) {
    newPostForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = document.querySelector("#Post-name").value.trim();
      const location_map = document.querySelector("#Post-map").value.trim();
      const description = document.querySelector("#Post-desc").value.trim();

      if (name && location_map && description) {
        const response = await fetch(`/api/Posts`, {
          method: "POST",
          body: JSON.stringify({ name, location_map, description }),
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
});
