import axios from "axios";

export const getAuthorization = async () => {
  const { data: user } = await axios.post(
    "http://localhost:8096/Users/AuthenticateByName",
    {
      username: "redes2",
      pw: "redes2",
    },
    {
      headers: {
        "X-Emby-Authorization":
          'MediaBrowser Client="Jellyfin CLI", Device="Jellyfin-CLI", DeviceId="None", Version="10.8.0"',
      },
    }
  );

  return user.AccessToken;
};
