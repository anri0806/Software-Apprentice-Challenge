import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import snapchat from "../images/snapchat.png";

function Card({ data }) {
  return (
    <div className="m-2 rounded-xl shadow-lg">
      <div className=" flex flex-col">
        <div className="p-7 rounded-xl overflow-hidden">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded font-semibold tracking-wide text-xs">
            Campaign
          </span>
          <div className="card-social-media-logo">
            {data.platform === "facebook" ? (
              <img
                className="rounded-lg w-7"
                src={facebook}
                alt="facebook logo"
              />
            ) : null || data.platform === "twitter" ? (
              <img className="w-9" src={twitter} alt="twitter logo" />
            ) : null || data.platform === "snapchat" ? (
              <img className="w-8" src={snapchat} alt="facebook logo" />
            ) : null}
          </div>

          <div className="text-slate-500 text-lg t-3">
            <p className="font-medium mb-2 mt-1">{data.campaign}</p>
            <p className="text-base">Adset: {data.adset}</p>
            <p className="text-base">Creative: {data.creative}</p>
            <div className="card-icons">
              <p>
                <span className="align-middle material-icons">paid</span>{" "}
                {data.spend}
              </p>
              <p>
                <span className="align-middle material-icons">
                  volunteer_activism
                </span>{" "}
                {data.impressions}
              </p>
              <p>
                <span className="align-middle material-icons">ads_click</span>{" "}
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
