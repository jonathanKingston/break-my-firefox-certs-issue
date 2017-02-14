browser.webRequest.onBeforeRequest.addListener(evt => {
  const tabId = evt.tabId;
  browser.pageAction.show(tabId);
}, {
  urls: ["*://*/*"],
  types: ["main_frame"]
},
[]);

browser.pageAction.onClicked.addListener((tab) => {
  browser.tabs.update(tab.id, {
    url: "content/jail.html?tabId=https://tantek.com"
  });
});
