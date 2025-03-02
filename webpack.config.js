import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // Dodaj ten import
import * as sass from "sass";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rozpoznawanie trybu bezpośrednio z argumentów webpacka
const mode =
  process.env.NODE_ENV ||
  (process.argv.includes("--mode=production")
    ? "production"
    : process.argv.includes("--mode")
    ? "production"
    : "development");
const isDev = mode !== "production";

// Określenie prawidłowej publicPath na podstawie środowiska
const BASE_URL = isDev ? "/" : "/my-react-app/";

console.log(`Tryb: ${mode}, isDev: ${isDev}`);

export default {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: BASE_URL, // Zapewnić, że ta ścieżka jest zawsze poprawna
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Zastąp "style-loader" na MiniCssExtractPlugin.loader
          { loader: "css-loader", options: { sourceMap: isDev } },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sourceMap: isDev,
              sassOptions: {
                api: "modern",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[path][name].[ext]", outputPath: "images/" },
          },
          {
            loader: "image-webpack-loader",
            options: { mozjpeg: { quality: 65 } },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 50000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        common: { minChunks: 2, name: "common", reuseExistingChunk: true },
      },
    },
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true, unused: true, dead_code: true },
          mangle: true,
          output: { comments: false },
        },
        extractComments: false,
        parallel: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true,
      // Upewnij się, że HtmlWebpackPlugin używa prawidłowych ścieżek
      publicPath: BASE_URL,
    }),
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
    new CompressionPlugin({ test: /\.(js|css)$/ }),
    new MiniCssExtractPlugin({
      // Dodaj tę wtyczkę
      filename: "[name].[contenthash].css", // Nazwa pliku CSS z hashem
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval-cheap-module-source-map" : false,
};
