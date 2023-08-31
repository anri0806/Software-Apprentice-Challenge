function Card({ data }) {

  return (
    <div style={{"backgroundColor": "#FFDDCC", "margin": "10px"}}>
      <p>Campaign: {data.campaign}</p>
      <p>Adset: {data.adset}</p>
      <p>Creative: {data.creative}</p>
      <p>Spend: {data.spend}</p>
      <p>Impressions: {data.impressions}</p>
      <p>Clicks: {data.clicks}</p>
      <p>Results: {data.results}</p>
    </div>
  );
}

export default Card;