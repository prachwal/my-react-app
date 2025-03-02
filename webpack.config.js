import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV !== "production";

export default {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/my-react-app/", // Ustaw odpowiednią ścieżkę publiczną
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: isDev } },
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
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
    new CompressionPlugin({ test: /\.(js|css)$/ }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  mode: isDev ? "development" : "production",
  devtool: isDev ? "eval-cheap-module-source-map" : false,
};
