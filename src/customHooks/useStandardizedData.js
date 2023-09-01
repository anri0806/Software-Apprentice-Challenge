import { useEffect, useState } from "react";

export function useStandardizedData() {
  const [standardizedData, setStandardizedData] = useState([]);


  //// Standardize names and merge data from fb, twitter, snapchat
  useEffect(() => {
    fetch("http://localhost:3000/fakeDataSet")
      .then((res) => res.json())
      .then((fetchedData) => {
        const facebookAds = fetchedData.facebook_ads.map((ad) => ({
          ...ad,
          platform: "facebook",
        }));

        const twitterAds = fetchedData.twitter_ads.map((ad) => ({
          ...ad,
          platform: "twitter",
        }));

        const snapchatAds = fetchedData.snapchat_ads.map((ad) => ({
          ...ad,
          platform: "snapchat",
        }));

        const mergedData = [...facebookAds, ...twitterAds, ...snapchatAds];

        const standardized = mergedData.map((ad) => {
          return {
            campaign: ad.campaign_name || ad.campaign || ad.utm_campaign,
            adset:
              ad.media_buy_name ||
              ad.ad_group ||
              ad.ad_squad_name ||
              ad.utm_medium,
            creative:
              ad.ad_name || ad.image_name || ad.creative_name || ad.utm_content,
            spend: ad.spend || ad.cost,
            impressions: ad.impressions,
            clicks: ad.clicks || ad.post_clicks,
            platform: ad.platform,
          };
        });


        //// Merge and add up existing GA results
        let mergeDupeGoogleAnalyticResult = [];

        fetchedData.google_analytics.forEach((data) => {
          let mergedAdInfo = `${data.utm_campaign}, ${data.utm_medium}, ${data.utm_content}`;

          if (
            Object.keys(mergeDupeGoogleAnalyticResult).includes(mergedAdInfo)
          ) {
            mergeDupeGoogleAnalyticResult[mergedAdInfo] += data.results;
          } else {
            mergeDupeGoogleAnalyticResult[mergedAdInfo] = data.results;
          }
        });


        // Standardized ads info value to allocate GA results thoroughly
        standardized.forEach((data) => {
          let adsInfo = `${data.campaign}, ${
            data.adset.includes("Ads Squad")
              ? data.adset.replace(" Squad", "")
              : data.adset || data.adset.includes("Squad")
              ? data.adset.replace("Squad", "Ads")
              : data.adset
          }, ${
            data.creative.includes("Vacation")
              ? data.creative.replace(" Vacation", "")
              : data.creative && data.creative.includes("Deals")
              ? data.creative
              : data.creative.replace(" Deal", "")
          }`;

          if (Object.keys(mergeDupeGoogleAnalyticResult).includes(adsInfo)) {
            data["results"] = mergeDupeGoogleAnalyticResult[adsInfo];
          } else {
            data["results"] = "N/A";
          }
        });

        setStandardizedData(standardized);
      });
  }, []);

  return standardizedData;
}
