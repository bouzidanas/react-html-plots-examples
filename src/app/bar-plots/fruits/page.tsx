"use client";

import { ColorModeScript } from "@chakra-ui/react"
import App from "../../Fruits"

export default function Home() {
  return (
    <div id="root">
      <ColorModeScript />
      <App />
    </div>
  )
}
