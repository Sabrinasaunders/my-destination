const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#TravelPost-name').value.trim();
  const needed_funding = document.querySelector('#TravelPost-funding').value.trim();
  const description = document.querySelector('#TravelPost-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/TravelPosts`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create TravelPost');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/TravelPosts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete TravelPost');
    }
  }
};

document
  .querySelector('.new-TravelPost-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.TravelPost-list')
  .addEventListener('click', delButtonHandler);
