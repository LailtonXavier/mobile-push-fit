import 'dotenv/config';

export default {
  name: "Mobile Push Fit",
  slug: "mobile-push-fit",
  version: "1.0.0",
  expo: {
    extra: {
      eas: {
        "projectId": "04337f45-9680-46c2-a5dc-21d47158d20b"
      },
      API_URL: process.env.API_URL,
    },
  },  
};
