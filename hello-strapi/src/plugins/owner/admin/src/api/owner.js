import { request } from "@strapi/helper-plugin";

const ownerRequests = {
  getAllOwners: async () => {
    return await request("/owner/find?populate=dogs", {
      method: "GET",
    });
  },
};

export default ownerRequests;