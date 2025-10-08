import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push(".ts", ".tsx");

  // 🧩 Додаємо alias-и (із безпечним обмеженням)
  config!.resolve!.alias = {
    ...(config!.resolve!.alias || {}),
    app: path.resolve(paths.src, "app"),
    shared: path.resolve(paths.src, "shared"),
    // entities: path.resolve(paths.src, "entities"),
    features: path.resolve(paths.src, "features"),
    widgets: path.resolve(paths.src, "widgets"),
    pages: path.resolve(paths.src, "pages"),
  };

  config!.resolve!.modules!.push(paths.src);

  // 🛑 Забороняємо alias-резолв в node_modules
  config!.resolve!.modules = [
    path.resolve(paths.src),
    "node_modules", // тільки після src
  ];

  // ⚙️ SVG Loader
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  // 💅 CSS Loader
  config!.module!.rules.push(buildCssLoader(true));

  // 🌍 Глобальні змінні
  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );

  return config;
};
