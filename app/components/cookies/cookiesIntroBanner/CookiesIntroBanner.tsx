'use client';

import React, { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';

import styles from './CookiesIntroBanner.module.css';

const CookiesIntroBanner = () => {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(false);
  const [hasConsentChecked, setHasConsentChecked] = useState<boolean>(false);

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
    <div
      className={`${styles.container} ${cookieConsent == null ? '' : styles.hide}`}
    >
      <div className={styles.boxContainer}>
        <p className={styles.cookiesParagraph}>This site using cookies.</p>
        <button
          className={styles.settingsButton}
          onClick={() => setCookieConsent(false)}
          type="button"
        >
          Cookie Settings
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
  );
};

export default CookiesIntroBanner;
