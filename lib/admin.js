import GhostAdminAPI from "@tryghost/admin-api";

const api = new GhostAdminAPI({
  url: process.env.NEXT_PUBLIC_API_URL,
  key: process.env.NEXT_PUBLIC_ADMIN_API_KEY,
  version: "v5.0",
});

export const addMember = async (email, name, labels) => {
  console.log(api);
  console.log(api.members);
  //   console.log(api.members.add({ email }, {}));

  return await api.members.add(
    // {
    //   email,
    //   name,
    //   labels,
    //   send_email: false,
    //   email_type: "subscribe",
    // }
    { email, name, labels },
    { send_email: false, email_type: "subscribe" }
  );
};
