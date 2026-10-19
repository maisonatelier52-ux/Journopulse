export default function SiteTail() {
  return (
    <>
      <script type="text/template" id="bookmark-toggle-template" dangerouslySetInnerHTML={{ __html: `
			<i class="rbi rbi-bookmark" aria-hidden="true" data-title=""></i>
			<i class="bookmarked-icon rbi rbi-bookmark-fill" aria-hidden="true" data-title=""></i>
		` }} />
      <script type="text/template" id="bookmark-ask-login-template" dangerouslySetInnerHTML={{ __html: `
			<a class="login-toggle"
			 role="button"			rel="nofollow" data-title="" href=""><i class="rbi rbi-bookmark" aria-hidden="true"></i></a>
		` }} />
      <script type="text/template" id="follow-ask-login-template" dangerouslySetInnerHTML={{ __html: `
			<a class="login-toggle"
			 role="button"			rel="nofollow" data-title="" href=""><i class="follow-icon rbi rbi-plus" data-title="" aria-hidden="true"></i></a>
		` }} />
      <script type="text/template" id="follow-toggle-template" dangerouslySetInnerHTML={{ __html: `
			<i class="follow-icon rbi rbi-plus" data-title=""></i>
			<i class="followed-icon rbi rbi-bookmark-fill" data-title=""></i>
		` }} />
      <script type="text/template" id="bookmark-notification-template" dangerouslySetInnerHTML={{ __html: `
				<div class="bookmark-notification-inner {{classes}}">
					<div class="bookmark-featured">{{image}}</div>
					<div class="bookmark-inner">
						<span class="bookmark-title h5">{{title}}</span><span class="bookmark-desc">{{description}}</span>
					</div>
				</div>
			` }} />
      <script type="text/template" id="follow-notification-template" dangerouslySetInnerHTML={{ __html: `
				<div class="follow-info bookmark-notification-inner {{classes}}">
					<span class="follow-desc"><span>{{description}}</span><strong>{{name}}</strong></span>
				</div>
			` }} />
      <aside className="bookmark-notification" id="bookmark-notification"></aside>
      <div className="rb-user-popup-form mfp-animation mfp-hide" id="rb-user-popup-form">
        <div className="logo-popup-outer">
          <div className="logo-popup">
            <div className="login-popup-header">
              <div className="logo-popup-logo">
                <img alt="" decoding="async" height="200" loading="lazy" src="/img/illustrations/love-my-woke-pope-leo-first-encyclical-viral-papal-approach.webp" width="200" />
              </div>
              <span className="logo-popup-heading h3">
                Welcome Back!
              </span>
              <p className="logo-popup-description is-meta">
                Sign in to your account
              </p>
            </div>
            <div className="user-login-form">
              <form action="https://www.journopulse.com/wp-login.php" id="popup-form" method="post" name="popup-form">
                <div className="login-username">
                  <div className="rb-login-label">
                    Username or Email Address
                  </div>
                  <input autoComplete="username" className="input" name="log" required type="text" defaultValue="" />
                </div>
                <div className="login-password">
                  <div className="rb-login-label">
                    Password
                  </div>
                  <div className="is-relative">
                    <input autoComplete="current-password" className="input" name="pwd" required spellCheck="false" type="password" defaultValue="" />
                    {" "}
                    <span className="rb-password-toggle">
                      <i className="rbi rbi-show"></i>
                    </span>
                  </div>
                </div>
                <div className="remember-wrap">
                  <p className="login-remember">
                    <label className="rb-login-label">
                      <input id="rememberme" name="rememberme" type="checkbox" defaultValue="forever" />
                      {" "}Remember me
                    </label>
                  </p>
                  <a className="lostpassw-link" href="#">
                    Lost your password?
                  </a>
                </div>
                <p className="login-submit">
                  <input className="button button-primary" name="wp-submit" type="submit" defaultValue="Log In" />
                  {" "}
                  <input name="redirect_to" type="hidden" defaultValue="https://www.journopulse.com/blog/how-to-take-the-perfect-instagram-selfie-dos-donts" />
                </p>
              </form>
              <div className="login-form-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
