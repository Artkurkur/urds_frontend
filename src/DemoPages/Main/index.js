import React, { Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { useResizeDetector } from "react-resize-detector";
import { useLocation } from "react-router-dom";

import AppMain from "../../Layout/AppMain";
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";
import AppFooter from "../../Layout/AppFooter";
import ThemeOptions from "../../Layout/ThemeOptions";

const Main = (props) => {
  const {
    colorScheme,
    enableFixedHeader,
    enableFixedSidebar,
    enableFixedFooter,
    enableClosedSidebar,
    enableMobileMenu,
    enablePageTabsAlt,
  } = props;

  const { width, ref } = useResizeDetector();
  const location = useLocation();

  // ✅ Detect if AppMain is currently rendered
  // (you can adjust this later if you have multiple layouts)
  const isAppMainRoute = location.pathname === "/";

  return (
    <Fragment>
      <ThemeOptions />
      <div ref={ref}>
        <div
          className={cx(
            "app-container app-theme-" + colorScheme,
            { "fixed-header": enableFixedHeader },
            { "fixed-sidebar": enableFixedSidebar || width < 992 },
            { "fixed-footer": enableFixedFooter },
            { "closed-sidebar": enableClosedSidebar || width < 992 },
            { "closed-sidebar-mobile": width < 992 },
            { "sidebar-mobile-open": enableMobileMenu },
            { "body-tabs-shadow-btn": enablePageTabsAlt }
          )}
        >
          {/* ✅ Only show header/sidebar/footer if not on AppMain */}
          {!isAppMainRoute && <AppHeader />}

          <div className="app-main">
            {!isAppMainRoute && <AppSidebar />}

            <div className="app-main__outer">
              <div className="app-main__inner">
                <AppMain />
              </div>

              {!isAppMainRoute && <AppFooter />}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProp = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default connect(mapStateToProp)(Main);
