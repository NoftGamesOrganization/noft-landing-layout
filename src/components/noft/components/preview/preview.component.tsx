import s from "./preview.module.scss";

import clsx from "clsx";
import { Link } from "react-router-dom";

import PreviewImg from "@/public/images/preview.jpg?url";
import RankImg from "@/public/images/legendary.svg?url";

export function PreviewComponent() {
  const Preview = (
    <section className={s.preview}>
      <h2 className={clsx(s.sectionHeading, s.hidden)}>preview</h2>

      <div className={clsx(s.previewWrapper, s.previewWrapperNoft)}>
        <div className={s.previewNoft}>
          <div className={s.previewImg}>
            <img className={s.previewImgContent} src={PreviewImg} alt="#" />
          </div>
          <h3 className={s.previewCaption}>Generation</h3>
          <p className={s.previewNoftValue}>halloween</p>
        </div>
        <div className={s.previewfNoftShadow}></div>
        <div className={clsx(s.tooltip, s.previewRateTooltip, s.previewRateTooltipGeneration)}>
          <p className={s.tooltipText}>
            Special 100 tokens dedicated to Halloween night. The mystery of the autumn 2021 holiday.
          </p>
        </div>
      </div>

      <div className={clsx(s.previewRate)}>
        <div className={clsx(s.previewWrapper, s.previewWrapperExp)}>
          <div className={clsx(s.previewShadow, s.previewShadowExp)}></div>
          <div className={s.previewExp}>
            <span className={s.previewValue}>4.9</span>
            <span className={s.previewText}>
              Exp <br /> rate
            </span>
          </div>
          <div className={clsx(s.tooltip, s.previewRateTooltip)}>
            <p className={s.tooltipText}>Multiply the initial abilities by Grow Rate to see the Noft limit</p>
            <div className={s.tooltipWrapper}>
              <div className={s.tooltipWrapper}>
                <div className={s.abilitiesBar}>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentColored)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                </div>
                <span className={s.tooltipSuptext}>x</span>
              </div>
              <div className={s.tooltipWrapper}>
                <span className={s.tooltipSuptext}>4.9</span>
                <p>=</p>
                <div className={s.abilitiesBar}>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment, s.abilitiesBarSegmentSubcolored)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                  <span className={clsx(s.abilitiesBarSegment)}></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx(s.previewWrapper, s.previewWrapperRank)}>
          <div className={s.previewShadow}></div>
          <div className={s.previewGrow}>
            <span className={s.previewValue}>4.9</span>
            <span className={s.previewText}>
              Grow <br /> rate
            </span>
          </div>
          <div className={clsx(s.tooltip, s.previewRateTooltip, s.previewRateTooltipGrow)}>
            <p className={s.tooltipText}>
              Multiply points gained in the battle by exp rate to see how much experience Noft gets
            </p>
            <div className={s.tooltipWrapper}>
              <div className={s.tooltipWrapper}>
                <span className={s.tooltipSuptext}>+1.300</span>
                <span>points</span>
              </div>
              <div className={clsx(s.tooltipWrapper, s.tooltipWrapperGrow)}>
                <span className={clsx(s.tooltipSuptext, s.tooltipSuptextGrow)}>x 1.2 = +1.560</span>
                <span>points</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(s.previewWrapper, s.previewWrapperRank)}>
        <div className={s.previewRank}>
          <div className={s.previewImg}>
            <img src={RankImg} alt="#" width="79" height="66" />
          </div>
          <h3 className={s.previewCaption}>Rank</h3>
          <p className={s.previewRankValue}>MYSTICAL HERO</p>
        </div>
        <div className={s.previewfNoftShadow}></div>
        <div className={clsx(s.tooltip, s.previewRateTooltip, s.previewRateTooltipRank)}>
          <ul className={clsx(s.previewRanklist)}>
            <li className={clsx(s.previewRankitem)}>
              <div className={clsx(s.previewRankicon, s.previewRankiconCivilian)}></div>
              <span className={clsx(s.previewRankname)}>Civilian</span>
            </li>

            <li className={clsx(s.previewRankitem)}>
              <div className={clsx(s.previewRankicon, s.previewRankiconRecruit)}></div>
              <span className={clsx(s.previewRankname)}>Recruit</span>
            </li>

            <li className={clsx(s.previewRankitem)}>
              <div className={clsx(s.previewRankicon, s.previewRankiconWarrior)}></div>
              <span className={clsx(s.previewRankname)}>Warrior</span>
            </li>

            <li className={clsx(s.previewRankitem)}>
              <div className={clsx(s.previewRankicon, s.previewRankiconHero)}></div>
              <span className={clsx(s.previewRankname)}>Hero</span>
            </li>

            <li className={clsx(s.previewRankitem)}>
              <div className={clsx(s.previewRankicon, s.previewRankiconLegendary)}></div>
              <span className={clsx(s.previewRankname)}>Legendary</span>
            </li>

            <li className={clsx(s.previewRankitem)}>
              <div className={clsx(s.previewRankicon, s.previewRankiconMystical)}></div>
              <span className={clsx(s.previewRankname)}>Mystical hero</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  return Preview;
}
