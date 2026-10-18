import type { ApiResponse, User } from "../../type";

/**
 * Handles user login by submitting the email and password
 * to the authentication API.
 *
 * @param event - The form submission event.
 * @returns The API response, or undefined if an error occurs.
 */
export default async function login(
  event: React.SubmitEvent<HTMLFormElement>,
): Promise<ApiResponse<User> | undefined> {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const url = "http://localhost:8000/api/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
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

export async function getUserData() {
  const url = "http://localhost:8000/api/user";

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
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

export async function logout() {
  const url = "http://localhost:8000/api/logout";
  try {

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
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
