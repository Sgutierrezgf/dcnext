/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0E6D2",
        "custom-gray-50": "#f7f8fc",
        "custom-gray-100": "#f0f1f6",
      },
      fontFamily: {
        beaufort: ["Beaufort for LOL", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://s3-alpha-sig.figma.com/img/34be/0125/cc226de185c657274202961488c82e7d?Expires=1686528000&Signature=L63VVSLQKY9QzdvET71z7AV~o-dIqWIY837Vyfv0TFuzYOm0PKIiFkRrpb4Wfb5ALZSRybMG-Hsx0DJboVsfOBNDeHCZdbGCCjEmacuE7yJpM8Y5AmeB82r-gMgbUb4eFhOZ2aPCxqocQTBkMy0mAtr0uXDdiLdbUyKsvloKNrtG7Rs8NXlqOiRaVDLsG6mar2r4ZqnEZacY4clzjOCoFKWlTM81P9z0kVOkaP3ekX2yqPYYFHxBY22MFy2o-BdHVRDv8SH2zYlvolrIBU6NmRf5ASpdpmK8IpZQxiCs1OEjU6E~bh3QBlpZmcMCOB4b-eBDwARg4TAxBDz~p8Q0JQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
      },
    },
  },
  plugins: [],
};
