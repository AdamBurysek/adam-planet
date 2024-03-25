'use client';

import { useLenis } from '@studio-freight/react-lenis';
import React, { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';

import { CookieImage } from './CookieImage';
import styles from './CookiesIntroBanner.module.css';
import PrivacyPolicyBanner from './PrivacyPolicyBanner';

const CookiesIntroBanner = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);
  const [hasConsentChecked, setHasConsentChecked] = useState<boolean>(false);
  const [showPolicyBanner, setShowPolicyBanner] = useState<boolean>(false);
  const [showCookieButton, setShowCookieButton] = useState<boolean>(true);

  useLenis(({ scroll }) => {
    setShowCookieButton(scroll === 0);
  });

  useEffect(() => {
    const storedCookieConsent: boolean | null = getLocalStorage(
      'cookie_consent',
      null,
    );
    setCookieConsent(storedCookieConsent);
    setHasConsentChecked(true);
  }, [setCookieConsent, setHasConsentChecked]);

  useEffect(() => {
    if (!hasConsentChecked) return;
    const newValue = cookieConsent ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });
    setLocalStorage('cookie_consent', cookieConsent);
  }, [cookieConsent, hasConsentChecked]);

  return (
    <>
      {showPolicyBanner ? (
        <PrivacyPolicyBanner setShowPolicyBanner={setShowPolicyBanner} />
      ) : null}
      {cookieConsent === null ? (
        <div className={styles.container}>
          <div className={styles.boxContainer}>
            <p className={styles.cookiesParagraph}>
              {'This site using '}
              <button
                className={styles.showPolicyButton}
                onClick={() => setShowPolicyBanner(true)}
                type="button"
              >
                cookies.
              </button>
            </p>
            <button
              className={styles.settingsButton}
              onClick={() => setCookieConsent(false)}
              type="button"
            >
              Decline
            </button>
            <button
              className={styles.allowButton}
              onClick={() => setCookieConsent(true)}
              type="submit"
            >
              Allow Cookies
            </button>
          </div>
        </div>
      ) : (
        <button
          aria-label="Cookie Button"
          className={`${styles.cookieButton} ${showCookieButton ? '' : styles.hide}`}
          onClick={() => setCookieConsent(null)}
          type="button"
        >
          <CookieImage />
        </button>
      )}
    </>
  );
};

export default CookiesIntroBanner;
