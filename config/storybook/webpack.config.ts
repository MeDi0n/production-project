import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  // Обязательно инициализируем resolve
  config.resolve = config.resolve || {};
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    paths.src,
    "node_modules",
  ];
  config.resolve.extensions = [
    ...(config.resolve.extensions || []),
    ".ts",
    ".tsx",
    ".js",
  ];

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    "@entities": path.resolve(paths.src, "entities"),
    "@shared": path.resolve(paths.src, "shared"),
    "@features": path.resolve(paths.src, "features"),
    "@widgets": path.resolve(paths.src, "widgets"),
    "@pages": path.resolve(paths.src, "pages"),
    "@app": path.resolve(paths.src, "app"),
  };

  config.module.rules =
    config.module?.rules?.map((rule: RuleSetRule) => {
      if (rule.test instanceof RegExp && rule.test.test(".svg")) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    }) || [];

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module.rules.push(buildCssLoader(true));

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
