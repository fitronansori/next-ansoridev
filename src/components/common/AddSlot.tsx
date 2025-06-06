"use client";

import Script from "next/script";

interface AddSlotProps {
  ad_client?: string;
  ad_slot?: string;
  ad_format?: string;
  ad_full_width_responsive?: string;
  style?: React.CSSProperties;
}

const AddSlot: React.FC<AddSlotProps> = ({
  ad_client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
  ad_slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT,
  ad_format = "auto",
  ad_full_width_responsive = "true",
  style = { display: "block" },
}) => {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={ad_client}
        data-ad-slot={ad_slot}
        data-ad-format={ad_format}
        data-full-width-responsive={ad_full_width_responsive}
      ></ins>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </>
  );
};

export default AddSlot;
