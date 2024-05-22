import { useCallback } from "react";
import NewArrivals from "../components/new-arrivals";
import styles from "./index.module.css";
import PropTypes from 'prop-types';


const ShoppingApp = () => {
  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameButton1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onFrameButton2Click = useCallback(() => {
    // Please sync "sign up navigate" to the project
  }, []);

  return (
    <div className={styles.shoppingApp}>
      <div className={styles.background} />
      <div className={styles.community}>
        <div className={styles.joinShoppingCommunityToGetParent}>
          <div className={styles.joinShoppingCommunity}>
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </div>
          <div className={styles.typeYourEmail}>
            Type your email down below and be young wild generation
          </div>
          <div className={styles.frameChild} />
          <input
            className={styles.addYourEmail}
            placeholder="Add your email here"
            type="email"
          />
          <div className={styles.frameItem} />
          <div className={styles.send}>SEND</div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameInner} />
        <div className={styles.frameParent}>
          <div className={styles.groupParent}>
            <div className={styles.careersParent}>
              <div className={styles.careers}>Careers</div>
              <div className={styles.contactUs}>Contact us</div>
              <div className={styles.support}>Support</div>
              <div className={styles.company}>Company</div>
              <div className={styles.about}>About</div>
            </div>
            <div className={styles.quickLinkParent}>
              <div className={styles.quickLink}>Quick Link</div>
              <div className={styles.faqs}>FAQs</div>
              <div className={styles.sizeGuide}>Size Guide</div>
              <div className={styles.ordersTracking}>Orders Tracking</div>
              <div className={styles.shareLocation}>Share Location</div>
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & conditions`}</div>
              <div className={styles.legal}>Legal</div>
            </div>
          </div>
          <div className={styles.fashionParent}>
            <div className={styles.fashion}>FASHION</div>
            <div className={styles.completeYourStyle}>
              Complete your style with awesome clothes from us.
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </div>
              <blockquote className={styles.groupBlockquote}>
                <div className={styles.groupChild} />
                <b className={styles.in}>in</b>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerChild} />
        <div className={styles.groupParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild1} />
            <div className={styles.paydaySaleNowContainer}>
              <p className={styles.payday}>PAYDAY</p>
              <p className={styles.payday}>SALE NOW</p>
            </div>
          </div>
          <div className={styles.spendMinimal100Container}>
            <p className={styles.payday}>Spend minimal $100 get 30% off</p>
            <p className={styles.payday}>voucher code for your next purchase</p>
          </div>
          <div className={styles.june10June2021Parent}>
            <b className={styles.june10}>1 June - 10 June 2021</b>
            <div
              className={styles.termsConditions1}
            >{`*Terms & Conditions apply`}</div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild2} />
            <div className={styles.shopNow}>SHOP NOW</div>
          </div>
        </div>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        <img className={styles.bannerItem} alt="" src="/star-5.svg" />
        <img className={styles.bannerInner} alt="" src="/star-6.svg" />
        <img className={styles.starIcon} alt="" src="/star-7.svg" />
        <img className={styles.bannerChild1} alt="" src="/star-8.svg" />
      </div>
      <div className={styles.brands}>
        <div className={styles.frameDiv}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-36@2x.png"
          />
          <img
            className={styles.frameChild1}
            alt=""
            src="/rectangle-44@2x.png"
          />
          <img
            className={styles.frameChild2}
            alt=""
            src="/rectangle-38@2x.png"
          />
          <img
            className={styles.frameChild3}
            alt=""
            src="/rectangle-45@2x.png"
          />
          <img
            className={styles.frameChild4}
            alt=""
            src="/rectangle-43@2x.png"
          />
          <img
            className={styles.frameChild5}
            alt=""
            src="/rectangle-41@2x.png"
          />
        </div>
      </div>
      <div className={styles.heroSection}>
        <div className={styles.navbar} />
        <div className={styles.heroBanner} />
        <div className={styles.rectangleParent3}>
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.letsExploreUniqueContainer}>
            <p className={styles.payday}>LET’S</p>
            <p className={styles.payday}>EXPLORE</p>
            <p className={styles.payday}>UNIQUE</p>
            <p className={styles.payday}>CLOTHES.</p>
          </div>
          <div className={styles.liveForInfluential}>
            Live for Influential and Innovative fashion!
          </div>
          <img
            className={styles.incendiaryFantasticallyBeautIcon}
            alt=""
            src="/incendiaryfantasticallybeautifulgirlcoatecofurmovesfunpicturelovelyladypinkclothesremovebgpreview-1@2x.png"
          />
          <button
            className={styles.shopNowWrapper}
            data-scroll-to="frameButton1"
            onClick={onFrameButton1Click}
          >
            <div className={styles.shopNow1}>
              <div className={styles.shopNow2}>Shop Now</div>
            </div>
          </button>
          <img className={styles.groupChild6} alt="" src="/star-9.svg" />
          <img className={styles.groupChild7} alt="" src="/star-9.svg" />
          <img className={styles.groupChild8} alt="" src="/star-9.svg" />
          <img className={styles.groupChild9} alt="" src="/star-9.svg" />
        </div>
        <div className={styles.frameGroup}>
          <button
            className={styles.vectorParent}
            data-scroll-to="frameButton"
            onClick={onFrameButtonClick}
          >
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
            <div className={styles.fashion1}>FASHION</div>
          </button>
          <div className={styles.frameContainer}>
            <nav className={styles.linksParent}>
              <div className={styles.links}>
                <button className={styles.catalogue}>CATALOGUE</button>
                <button className={styles.fashion2}>FASHION</button>
                <button className={styles.favourite}>FAVOURITE</button>
                <button className={styles.lifestyle}>LIFESTYLE</button>
              </div>
              <button className={styles.hamburgerMenu} />
            </nav>
            <button
              className={styles.signUpWrapper}
              onClick={onFrameButton2Click}
            >
              <div className={styles.signUp}>
                <div className={styles.signUp1}>SIGN UP</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.newArrivalsWrapper}>
        <NewArrivals />
      </div>
      <div className={styles.payday1} />
      <div className={styles.youngsFavouriteWrapper}>
        <div className={styles.youngsFavourite}>
          <div className={styles.groupParent2}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.trendingOnInstagramParent}>
                  <div className={styles.trendingOnInstagram}>
                    Trending on instagram
                  </div>
                  <div className={styles.exploreNow}>Explore Now!</div>
                </div>
                <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
              </div>
              <img
                className={styles.groupChild10}
                alt=""
                src="/rectangle-50@2x.png"
              />
            </div>
            <div className={styles.rectangleParent4}>
              <img
                className={styles.groupChild11}
                alt=""
                src="/rectangle-49@2x.png"
              />
              <div className={styles.frameParent3}>
                <div className={styles.trendingOnInstagramParent}>
                  <div className={styles.allUnder40}>All Under $40</div>
                  <div className={styles.exploreNow1}>Explore Now!</div>
                </div>
                <img className={styles.arrowIcon} alt="" src="/arrow-2.svg" />
              </div>
            </div>
          </div>
          <div className={styles.vectorGroup}>
            <img className={styles.groupChild12} alt="" src="/vector-9.svg" />
            <div className={styles.youngsFavourite1}>Young’s Favourite</div>
          </div>
        </div>
      </div>
      <div className={styles.vouchersWrapper}>
        <div className={styles.vouchers}>
          <div className={styles.frameParent4}>
            <div className={styles.downloadAppGetTheVoucherParent}>
              <div className={styles.downloadAppContainer}>
                <p className={styles.payday}>{`DOWNLOAD APP &`}</p>
                <p className={styles.payday}>GET THE VOUCHER!</p>
              </div>
              <div className={styles.get30OffContainer}>
                <p className={styles.payday}>
                  Get 30% off for first transaction using
                </p>
                <p className={styles.payday}>Rondovision mobile app for now.</p>
              </div>
            </div>
            <div className={styles.rectangleParent5}>
              <button className={styles.rectangleButton} />
              <button className={styles.frameChild7} />
            </div>
          </div>
          <div className={styles.vouchersChild} />
          <div className={styles.vouchersItem} />
          <div className={styles.vouchersInner} />
          <div className={styles.ellipseDiv} />
          <div className={styles.vouchersChild1} />
          <div className={styles.vouchersChild2} />
          <div className={styles.vouchersChild3} />
          <div className={styles.vouchersChild4} />
          <div className={styles.mobileApp}>
            <div className={styles.mobileAppChild} />
            <img
              className={styles.mobileAppItem}
              alt=""
              src="/ellipse-2@2x.png"
            />
            <img className={styles.appsIcon} alt="" src="/apps.svg" />
            <div className={styles.rectangleParent6}>
              <div className={styles.groupChild13} />
              <div className={styles.searchParent}>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.search}>Search</div>
              </div>
            </div>
            <div className={styles.mobileAppInner} />
            <div className={styles.trendingNow}>Trending Now</div>
            <div className={styles.mobileAppChild1} />
            <div className={styles.all}>All</div>
            <div className={styles.mobileAppChild2} />
            <div className={styles.new}>
              <span className={styles.newTxt}>
                <p className={styles.payday}>New</p>
              </span>
            </div>
            <img
              className={styles.charmingSlimBrunetteWomanPIcon}
              alt=""
              src="/charmingslimbrunettewomanpinupdresscoquettishlyraisedherlegisolatedwall@2x.png"
            />
            <img
              className={styles.slenderGirlGreatMoodIsHavIcon}
              alt=""
              src="/slendergirlgreatmoodishavingfundancingwithbagherhandsshotitalianmodelwrapdress-1@2x.png"
            />
            <img
              className={styles.fullLengthViewGladWomanDaIcon}
              alt=""
              src="/fulllengthviewgladwomandancingbluebackgroundpinupgirlpolkadotdresshavingfun-1@2x.png"
            />
            <img
              className={styles.curlyWomanJumpingPurpleBacIcon}
              alt=""
              src="/curlywomanjumpingpurplebackgroundyoungcheerfulgirlgreenskirtpinksweaterlooksawayisolated-1@2x.png"
            />
            <div className={styles.polkadotRedDressParent}>
              <div className={styles.polkadotRedDress}>Polkadot Red Dress</div>
              <div className={styles.rs149900}>Rs. 1,499.00</div>
            </div>
            <div className={styles.stripedPinkDressParent}>
              <div className={styles.stripedPinkDress}>Striped Pink Dress</div>
              <div className={styles.rs149900}>Rs. 1,299.00</div>
            </div>
            <div className={styles.mobileAppChild3} />
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
              <img className={styles.searchIcon} alt="" src="/vector5.svg" />
              <div className={styles.vectorParent1}>
                <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild14} />
                  <div className={styles.div}>1</div>
                </div>
              </div>
              <img className={styles.vectorIcon4} alt="" src="/vector7.svg" />
            </div>
            <img
              className={styles.mobileAppChild4}
              alt=""
              src="/vector-10.svg"
            />
            <b className={styles.matchYourStyle}>Match your style</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingApp;
