import 'dotenv/config';

export default {
  expo: {
    name: "Mobile Push Fit",
    slug: "mobile-push-fit",
    version: "1.1.0",
    runtimeVersion: "1.1.0",
    scheme: "pushfit",
    android: {
      package: "com.lailtonnx.mobilepushfit"
    },
    ios: {
      bundleIdentifier: "com.lailtonnx.mobilepushfit"
    },
    updates: {
      url: "https://u.expo.dev/04337f45-9680-46c2-a5dc-21d47158d20b"
    },
    extra: {
      eas: {
        projectId: "04337f45-9680-46c2-a5dc-21d47158d20b"
      },
      API_URL: process.env.API_URL,
      CHAT_KEY: process.env.CHAT_KEY
    }
  }
};
