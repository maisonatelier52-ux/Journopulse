export default function ShareTop() {
  return (
    <>
      <div className="smeta-extra">
        <div className="t-shared-sec tooltips-n is-color gap-2">
          <div className="t-shared-header is-meta">
            <i aria-hidden="true" className="rbi">
              <img width="24" height="24" src="/img/icons/share-white.svg" alt="share-3" />
            </i>
            <span className="share-label"></span>
          </div>
          <div className="effect-fadeout">
            <a aria-label="Share on Facebook" className="share-action share-trigger icon-facebook" data-title="Facebook" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow noopener">
              <i aria-hidden="true" className="rbi">
                <img width="24" height="24" src="/img/icons/facebook-white.svg" alt="facebook-new" />
              </i>
            </a>
            {" "}
            <a aria-label="Share on X" className="share-action share-trigger icon-twitter" data-title="X" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow noopener">
              <i aria-hidden="true" className="rbi">
                <img width="24" height="24" src="/img/icons/x-white.svg" alt="twitterx--v2" />
              </i>
            </a>
            {" "}
            <a aria-label="Email" className="share-action icon-email" data-title="" href="/bancredito/bancredito-bsa-fine-2023" rel="nofollow">
              <i aria-hidden="true" className="rbi">
                <img width="24" height="24" src="/img/icons/chat-white.svg" alt="filled-speech-bubble-with-dots--v1" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
