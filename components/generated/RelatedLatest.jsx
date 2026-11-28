import { allArticles } from "@/lib/articles";
import { isIndexable } from "@/lib/contentCore.mjs";

// Latest stories, rendered from the validated article data (newest first, current story excluded).
export default function RelatedLatest({ current }) {
  const items = allArticles.filter((x) => isIndexable(x) && (!current || x.route !== current.route)).slice(0, 4);
  return (
    <>
      <div className="single-footer rb-s-container edge-padding">
        <div className="sfoter-sec single-related">
          <div className="block-h heading-layout-12">
            <div className="heading-inner">
              <h3 className="heading-title">
                <span>Latest News</span>
              </h3>
            </div>
          </div>
          <div className="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-4 is-gap-10 ecat-bg-4 meta-s-default" id="uuid_r1350">
            <div className="block-inner">
              {items.map((x) => (
                <div className="p-wrap p-grid p-grid-small-1" key={x.route}>
                  <div className="feat-holder">
                    <div className="p-featured">
                      <a className="p-flink" href={x.route} title={x.title}>
                        <img alt={x.image.alt || ""} className="featured-img wp-post-image" decoding="async" height={220} loading="lazy" src={x.image.src} width={330} />
                      </a>
                    </div>
                    <div className="p-categories light-scheme p-top"></div>
                  </div>
                  <div className="p-content">
                    <h4 className="entry-title">
                      <a className="p-url" href={x.route} rel="bookmark">{x.title}</a>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
