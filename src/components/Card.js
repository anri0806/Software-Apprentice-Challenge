function Card({ data }) {
  return (
    <div className="rounded-xl shadow-lg">
      <div className=" flex flex-col">
        <div className="p-7 rounded-xl overflow-hidden">
          <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded font-semibold tracking-wide text-xs">
            Campaign
          </span>
          <div className="text-slate-500 text-lg t-3">
            <p className="font-medium">{data.campaign}</p>
            <p className="text-base">Adset: {data.adset}</p>
            <p className="text-base">Creative: {data.creative}</p>
            <div className="card-icons">
              <p>
                <span class="align-middle material-icons">paid</span>{" "}
                {data.spend}
              </p>
              <p>
                <span class="align-middle material-icons">
                  volunteer_activism
                </span>{" "}
                {data.impressions}
              </p>
              <p>
                <span class="align-middle material-icons">ads_click</span>{" "}
                {data.clicks}
              </p>
              <p>
                <span className="align-middle material-icons">fact_check</span>{" "}
                {data.results}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
