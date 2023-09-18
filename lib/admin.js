import GhostAdminAPI from "@tryghost/admin-api";

const api = new GhostAdminAPI({
  url: "http://localhost:3000",
  key: process.env.NEXT_PUBLIC_ADMIN_API_KEY,
  version: "v5.0",
});

export const addMember = async (email, name, note) => {
  console.log(api);
  console.log(api.members);

  return await api.members.add({
    email,
    name,
    note,
    send_email: false,
    email_type: "subscribe",
  });
};
