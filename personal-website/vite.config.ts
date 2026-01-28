import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteStaticCopy({
			targets: [
				{
					src: "./src/craps-game/crapsgame.js",
					dest: "./src/craps-game/",
				},
				{
					src: "./src/randomQouteGenerator/randomQouteGenerator.js",
					dest: "./src/randomQouteGenerator/",
				},
				{
					src: "./src/randomQouteGenerator/randomQouteGenerator.css",
					dest: "./src/randomQouteGenerator/",
				},
				{
					src: ".src/aboutmesection/FAVOUR_OJOCHENEMI_EMMANUEL_CV (1).pdf",
					dest: "./src/aboutmesection/",
				},
			],
		}),
	],
	server: {
		watch: {
			usePolling: true,
		},
	},
});

