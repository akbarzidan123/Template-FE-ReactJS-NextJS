import camelCase from "lodash/camelCase";

// Constants
import LINK, { CONFIG_URLS } from "src/constants/urls";
import { removeEmptyObj } from "src/utils/tools";

// Utils
import fetchApi from "src/utils/fetch-api";

// Data
import ConfigStorage from "src/utils/config-storage";

// Types
import { SINGLE_API } from "./types";

// export const actionGetApprovalRoleJob = async (
//   payload = {},
//   next = (f) => f
// ) => {
//   return {
//     type: SINGLE_API,
//     payload: {
//       url: LINK.GET_APPROVAL_ROLE_JOB,
//       payload: { payload },
//       options: { method: "POST" },
//       successType: "CHANGE_PASSWORD_SUCCESS",
//       next,
//     },
//   };
// };

export const actionGetConfig = async (auth) => {
  try {
    const configs = await Promise.allSettled([
      ...getConfigs(auth),
      ...postConfigs(auth),
    ]);

    let payload = ConfigStorage.data;
    configs.forEach((item) => {
      if (item.status === "fulfilled") {
        const { key, config } = item.value;
        payload[key] = config;
      }
    });
    ConfigStorage.value = payload;
  } catch (error) {
    if (process.env.NEXT_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
};

const getConfigs = (auth) => {
  return CONFIG_URLS.GETS.map((url) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const urlObj = new URL(url);
          const config = await fetchApi({
            url,
          });
          resolve({
            key: camelCase(urlObj.pathname.split("/")?.pop()),
            config,
          });
        } catch (e) {
          reject(e);
        }
      })();
    });
  });
};

// const postConfigs = (auth) => {
//   const { iamResult } = auth;
//   const {
//     resultUserProfileLocation,
//     resultProfileUserRole,
//     resultUserProfileJob,
//   } = iamResult || {};

//   const locations = {
//     location: removeEmptyObj(resultUserProfileLocation),
//   };

//   const rolejobs = {
//     role: removeEmptyObj(resultProfileUserRole),
//     job: removeEmptyObj(resultUserProfileJob),
//   };

//   return CONFIG_URLS.POSTS.map(({ url, payload }) => {
//     if (payload == "location") {
//       payload = locations;
//     }
//     if (payload == "rolejobs") {
//       payload = rolejobs;
//     }
//     return new Promise((resolve, reject) => {
//       (async () => {
//         try {
//           const urlObj = new URL(url);
//           const config = await fetchApi({
//             url,
//             payload,
//             options: {
//               method: "POST",
//             },
//           });
//           resolve({
//             key: camelCase(urlObj.pathname.split("/")?.pop()),
//             config,
//           });
//         } catch (e) {
//           reject(e);
//         }
//       })();
//     });
//   });
// };

// export const actionGetConfig = async (auth) => {
//   try {
//     const configs = await Promise.allSettled([
//       ...getConfigs(auth),
//       ...postConfigs(auth),
//     ]);

//     let payload = ConfigStorage.data;
//     configs.forEach((item) => {
//       if (item.status === "fulfilled") {
//         const { key, config } = item.value;
//         payload[key] = config;
//       }
//     });
//     ConfigStorage.value = payload;
//   } catch (error) {
//     if (process.env.NEXT_ENV === "development") {
//       // eslint-disable-next-line no-console
//       console.error(error);
//     }
//   }
// };