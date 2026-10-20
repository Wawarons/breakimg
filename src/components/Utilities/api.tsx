import type { ApiResponse, User } from "../../type";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Initializes CSRF protection by requesting Laravel Sanctum's CSRF cookie endpoint.
 *
 * Includes credentials so the browser can receive and store the session and CSRF cookies.
 *
 * @returns A promise that resolves when the CSRF cookie has been initialized.
 * @throws {Error} If the CSRF cookie request fails.
 */
export async function initCSRF() {
  const url = `${API_URL}/sanctum/csrf-cookie`;

  const response = await fetch(url, {
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: 'application/json',
    }
  });

  if (!response.ok) {
    throw new Error("Cannot get CSRF Token");
  }
}

/**
 * Retrieves the value of a cookie by its name.
 *
 * Reads the browser's document.cookie string and URL-decodes the retrieved value.
 *
 * @param name - The name of the cookie to retrieve.
 * @returns The decoded cookie value, or an empty string if the cookie is not found.
 */
function getCookie(name: string) {
  const cookie: string = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')
    .slice(1)
    .join('=') ?? '';

  console.log("Cookie value: ", cookie);
  return decodeURIComponent(cookie);
}

export async function register(event: React.SubmitEvent<HTMLFormElement>) {
  event.preventDefault();

  const url = `${API_URL}/api/create-user`;
  const formData = new FormData(event.target);

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
    },
    body: JSON.stringify({
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    })
  })

  if (!response.ok) {
       throw new Error(`Erreur HTTP : ${response.status}`);
     }

     const data: ApiResponse<User> = await response.json();

     return data;


}

/**
 * Handles user login by submitting the email and password
 * to the authentication API.
 *
 * Prevents the default form submission, extracts the credentials,
 * and sends them to the Laravel API along with the session cookies
 * and CSRF token.
 *
 * @param event - The form submission event.
 * @returns The API response containing the authenticated user,
 *          or undefined if an error occurs.
 */
export async function login(
  event: React.SubmitEvent<HTMLFormElement>,
): Promise<ApiResponse<User> | undefined> {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const url = `${API_URL}/api/login`;

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
        'X-XSRF-TOKEN': decodeURIComponent(
          getCookie('XSRF-TOKEN')
        )
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data: ApiResponse<User> = await response.json();

    return data;
  } catch (error: unknown) {
    console.error("Erreur de connexion :", error);
  }
}

/**
 * Logs out the currently authenticated user.
 *
 * Sends a request to the logout endpoint with the browser's session cookies
 * and CSRF token.
 *
 * @returns The fetch Response if the logout request succeeds,
 *          or undefined if the request fails or returns a non-success status.
 */
export async function logout() {
  const url = `${API_URL}/api/logout`;

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: 'include',
      headers: {
        Accept: "application/json",
        'X-XSRF-TOKEN': decodeURIComponent(
          getCookie('XSRF-TOKEN')
        )
      }
    });

    if (response.ok) {
      return response;
    }

    return undefined;
  } catch (error: unknown) {
    console.error(error);
  }
};

/**
 * Retrieves the currently authenticated user's data from the API.
 *
 * Sends a request with the browser's session cookies and CSRF token.
 *
 * @returns The fetch Response if the request succeeds,
 *          or undefined if the request fails or returns a non-success status.
 */
export async function getUserData() {
  const url = `${API_URL}/api/user`;

  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        'X-XSRF-TOKEN': decodeURIComponent(
          getCookie('XSRF-TOKEN')
        )
      },
    });

    if (response.ok) {
      return response;
    }

    return undefined;
  } catch (e) {
    console.error(e);
  }
};
