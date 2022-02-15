import s from "./preview.module.scss";

import clsx from "clsx";
import { Link } from "react-router-dom";

export function PreviewComponent() {
  const Preview = (
    <section className={s.preview}>
      <h2 className={clsx(s.sectionHeading, s.hidden)}>preview</h2>

      <div className={s.previewWrapper}>
        <div className={s.previewNoft}>
          <div className={s.previewImg}>
            <img className={s.previewImgContent} src="/images/preview.jpg" alt="#" />
          </div>
          <h3 className={s.previewCaption}>Generation</h3>
          <p className={s.previewNoftValue}>halloween</p>
        </div>
        <div className={s.previewfNoftShadow}></div>
      </div>

      <div className={s.previewRate}>
        <div className={s.previewWrapper}>
          <div className={s.previewShadow}></div>
          <div className={s.previewExp}>
            <span className={s.previewValue}>4.9</span>
            <span className={s.previewText}>
              Exp <br /> rate
            </span>
          </div>
        </div>

        <div className={s.previewWrapper}>
          <div className={s.previewShadow}></div>
          <div className={s.previewGrow}>
            <span className={s.previewValue}>4.9</span>
            <span className={s.previewText}>
              Grow <br /> rate
            </span>
          </div>
        </div>
      </div>

      <div className={s.previewWrapper}>
        <div className={s.previewRank}>
          <div className={s.previewImg}>
            <img src="/images/legendary.svg" alt="#" width="79" height="66" />
          </div>
          <h3 className={s.previewCaption}>Rank</h3>
          <p className={s.previewRankValue}>MYSTICAL HERO</p>
        </div>
        <div className={s.previewfNoftShadow}></div>
      </div>
    </section>
  );

  return Preview;
}
