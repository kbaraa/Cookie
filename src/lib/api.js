const FIREBASE_DOMAIN = 'https://quot-2c83c-default-rtdb.firebaseio.com';

export async function getAllCookies() {
  const response = await fetch(`${FIREBASE_DOMAIN}/Cookies.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Cookies.');
  }

  const transformedCookies = [];

  for (const key in data) {
    const CookieObj = {
      id: key,
      ...data[key],
    };

    transformedCookies.push(CookieObj);
  }

  return transformedCookies;
}

export async function getSingleCookie(CookieId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Cookies/${CookieId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch Cookie.');
  }

  const loadedCookie = {
    id: CookieId,
    ...data,
  };

  return loadedCookie;
}

export async function addCookie(CookieData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/Cookies.json`, {
    method: 'POST',
    body: JSON.stringify(CookieData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create Cookie.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.CookieId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(CookieId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${CookieId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
