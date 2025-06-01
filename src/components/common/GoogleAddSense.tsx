import Script from "next/script";

interface GoogleAddSenseProps {
  p_id?: string;
}

const GoogleAddSense: React.FC<GoogleAddSenseProps> = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default GoogleAddSense;
