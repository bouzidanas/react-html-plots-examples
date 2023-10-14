"use client";

import { ColorModeScript } from "@chakra-ui/react"
// import App from "./App"
import App from "./Fruits"
// import App from "./FullBarTest"

export default function Home() {
  return (
    <div id="root">
      <ColorModeScript />
      <App />
    </div>
  )
}
