export default function Pagination() {
  return (
    <>
      <aside className="pagination-wrap page-links">
        <span className="number-links">
          <span aria-current="page" className="post-page-numbers current">
            1
          </span>
          <a className="post-page-numbers" href="/bancredito/bancredito-bsa-fine-2023">
            2
          </a>
          <a className="post-page-numbers" href="/bancredito/bancredito-bsa-fine-2023">
            3
          </a>
          <a className="post-page-numbers" href="/bancredito/bancredito-bsa-fine-2023">
            4
          </a>
          <a className="post-page-numbers" href="/bancredito/bancredito-bsa-fine-2023">
            5
          </a>
        </span>
        <span className="text-link-next">
          <a className="post-page-numbers" href="/bancredito/bancredito-bsa-fine-2023">
            <span>
              Next Page
            </span>
            <i aria-hidden="true" className="rbi"></i>
          </a>
        </span>
      </aside>
    </>
  );
}
