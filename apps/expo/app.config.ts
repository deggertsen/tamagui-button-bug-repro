import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: "AIDungeon",
    slug: "ai-dungeon",
    scheme: "aidungeon",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.aidungeon.app",
      googleServicesFile: "./GoogleService-Info.plist"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#FFFFFF"
      },
      package: "com.aidungeon",
      googleServicesFile: "./google-services.json"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    plugins: [
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static"
          },
          android: {
            enableProguardInReleaseBuilds: true,
            kotlinVersion: "1.6.21"
          }
        }
      ],
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics"
    ],
    extra: {
      extra: {
        NODE_ENV: process.env.NODE_ENV,
        AI_DUNGEON_APP_URL: process.env.AI_DUNGEON_APP_URL,
        LATITUDE_API_URL: process.env.LATITUDE_API_URL,
        GRAPHQL_HTTP_URL: process.env.GRAPHQL_HTTP_URL,
        GRAPHQL_WS_URL: process.env.GRAPHQL_WS_URL,
      }
    }
})
