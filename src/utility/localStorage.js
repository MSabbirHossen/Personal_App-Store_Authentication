const INSTALLED_APPS_KEY = "hero-io-installed-apps";

export const getInstalledApps = () => {
  const stored = localStorage.getItem(INSTALLED_APPS_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const isAppInstalled = (appId) => {
  const installed = getInstalledApps();
  return installed.includes(appId);
};

export const installApp = (appId) => {
  const installed = getInstalledApps();
  if (!installed.includes(appId)) {
    installed.push(appId);
    localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(installed));
  }
  return true;
};

export const uninstallApp = (appId) => {
  const installed = getInstalledApps();
  const filtered = installed.filter((id) => id !== appId);
  localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(filtered));
  return true;
};
