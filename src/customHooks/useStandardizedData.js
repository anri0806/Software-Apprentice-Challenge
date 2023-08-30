import { useEffect, useState } from "react";

export function useStandardizedData() {
  const [standardizedData, setStandardizedData] = useState([]);

  // Standardize names and merge data from fb, twitter, snapchat
  // **Add results later

  useEffect(() => {
    fetch("http://localhost:3000/fakeDataSet")
      .then((res) => res.json())
      .then((fetchedData) => {
        const mergedData = [
          ...fetchedData.facebook_ads,
          ...fetchedData.twitter_ads,
          ...fetchedData.snapchat_ads,
        ];

        const standardized = mergedData.map((ad) => {
          return {
            campaign: ad.campaign_name || ad.campaign || ad.utm_campaign,
            adset: ad.media_buy_name || ad.ad_group || ad.ad_squad_name || ad.utm_medium,
            creative: ad.ad_name || ad.image_name || ad.creative_name || ad.utm_content,
            spend: ad.spend || ad.cost,
            impressions: ad.impressions,
            clicks: ad.clicks || ad.post_clicks,
          };
        });

        setStandardizedData(standardized)

        
      });
  }, []);

  return standardizedData;
}
