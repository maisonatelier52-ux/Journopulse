export default function ShareLeft() {
  return (
    <>
      <div className="l-shared-sec-outer show-mobile">
        <div className="l-shared-sec">
          <div className="l-shared-header meta-text">
            <i aria-hidden="true" className="rbi">
              <img width="15" height="15" src="/img/icons/share.svg" alt="share-3" />
            </i>
            <span className="share-label">
              SHARE
            </span>
          </div>
          <div className="l-shared-items effect-fadeout is-color">
            <a aria-label="Share on Facebook" className="share-action share-trigger icon-facebook" data-gravity="w" data-title="Facebook" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow noopener">
              <i aria-hidden="true" className="rbi">
                <img width="25" height="25" src="/img/icons/facebook-color.svg" alt="facebook-new" />
              </i>
            </a>
            {" "}
            <a aria-label="Share on X" className="share-action share-trigger icon-twitter" data-gravity="w" data-title="X" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow noopener">
              <i aria-hidden="true" className="rbi">
                <img width="25" height="25" src="/img/icons/chat.svg" alt="speech-bubble-with-dots" />
              </i>
            </a>
            {" "}
            <a aria-label="Email" className="share-action icon-email" data-gravity="w" data-title="Email" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow">
              <i aria-hidden="true" className="rbi">
                <img width="25" height="25" src="/img/icons/x.svg" alt="twitterx--v2" />
              </i>
            </a>
            {" "}
            <a aria-label="Print" className="share-action icon-print" data-gravity="w" data-title="Print" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow" role="button">
              <i aria-hidden="true" className="rbi">
                <img width="20" height="20" src="/img/icons/ellipsis.svg" alt="ellipsis" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
